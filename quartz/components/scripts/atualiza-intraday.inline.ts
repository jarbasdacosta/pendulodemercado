import { getFullSlug } from "../../util/path"

// v1 (25/11/2026): recarrega a pagina do intraday QUANDO HA publicacao nova.
//
// Nao usa <meta refresh>: a pagina e estatica, o recarregamento iria para a
// mesma URL e o navegador devolveria a copia do cache (max-age=600). Aqui a
// pagina e buscada com cache: 'no-store', so o CARIMBO e comparado, e o
// recarregamento leva ?t=<agora>, que e uma URL nova para o cache.
//
// O carimbo e o que o gerador escreve no topo: "25/11/2026 13:15 BRT".

const INTERVALO_MS = 60_000
const RE_CARIMBO = /(\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}) BRT/
const ABRE_MIN = 10 * 60 - 5 // 09:55, folga antes do pregao
const FECHA_MIN = 18 * 60 + 40 // 18:40, folga depois

function agoraBRT() {
  const p: Record<string, string> = {}
  const partes = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date())
  for (const parte of partes) {
    p[parte.type] = parte.value
  }
  const dia = `${p.year}-${p.month}-${p.day}`
  const hora = parseInt(p.hour, 10) % 24 // alguns motores devolvem 24 a meia-noite
  const minuto = parseInt(p.minute, 10)
  return {
    dia,
    minutos: hora * 60 + minuto,
    // dia da semana EM BRT: meio-dia UTC nunca cai noutro dia por fuso
    semana: new Date(`${dia}T12:00:00Z`).getUTCDay(),
    hhmm: `${String(hora).padStart(2, "0")}:${String(minuto).padStart(2, "0")}`,
  }
}

document.addEventListener("nav", () => {
  const caixa = document.querySelector("[data-atualiza-intraday]") as HTMLElement | null
  if (!caixa) return

  const slug = String(getFullSlug(window))
  if (!slug.startsWith("intraday/")) return
  // os slugs antigos trazem a hora junto (intraday/2026-04-20-1351) e ainda
  // existe intraday/index. Os dez primeiros caracteres sao a data em todos os
  // casos que importam; o que nao casar com AAAA-MM-DD nao e pagina de pregao.
  const diaDaPagina = slug.slice("intraday/".length).slice(0, 10)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(diaDaPagina)) {
    caixa.textContent = "atualização automática só vale na página do pregão do dia"
    return
  }

  const carimboNaTela = (document.body.textContent ?? "").match(RE_CARIMBO)?.[1]
  if (!carimboNaTela) {
    caixa.textContent = "atualização automática desligada: não achei o carimbo nesta página"
    return
  }

  let timer: ReturnType<typeof setInterval> | undefined
  let ocupado = false

  const parar = () => {
    if (timer) {
      clearInterval(timer)
      timer = undefined
    }
  }

  const olhar = async () => {
    if (ocupado || document.hidden) return
    const t = agoraBRT()

    if (t.dia !== diaDaPagina) {
      caixa.textContent = `pregão encerrado — esta é a página de ${diaDaPagina}, não muda mais`
      parar()
      return
    }
    if (t.semana === 0 || t.semana === 6 || t.minutos < ABRE_MIN || t.minutos > FECHA_MIN) {
      caixa.textContent = `fora do pregão (10:00–18:30) · verificado ${t.hhmm}`
      return
    }

    ocupado = true
    try {
      const r = await fetch(`${location.pathname}?t=${Date.now()}`, { cache: "no-store" })
      if (r.ok) {
        const novo = (await r.text()).match(RE_CARIMBO)?.[1]
        if (novo && novo !== carimboNaTela) {
          caixa.textContent = `publicação nova (${novo}) — recarregando`
          location.replace(`${location.pathname}?t=${Date.now()}`)
          return
        }
      }
      caixa.textContent =
        `atualiza sozinha a cada minuto · na tela ${carimboNaTela} · verificado ${t.hhmm}`
    } catch {
      caixa.textContent = `sem resposta do servidor · verificado ${t.hhmm}`
    } finally {
      ocupado = false
    }
  }

  // o timer nasce ANTES da primeira olhada: olhar() pode decidir parar, e
  // parar() so tem efeito se o timer ja existir. Na v1 a ordem era inversa e a
  // primeira parada nao pegava — custava um minuto de trabalho inutil.
  timer = setInterval(() => void olhar(), INTERVALO_MS)

  // o site navega por SPA: sem isto cada navegacao deixaria um timer vivo
  window.addCleanup(parar)

  void olhar()
})
