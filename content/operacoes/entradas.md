---
title: "🎯 Entradas do método"
date: 2026-10-30
tags: [operacoes]
description: "Compra depois de um sinal de fundo: Nadaraya no diário, semáforo no semanal e H4"
---

> [!tip] 🎯 Entradas do método — 🧪 em teste ao vivo desde 23/10/2026 (só compra)
>
> 🌊 **Contexto do IMA para compras:** 🎯 **amplitude na região de fundo** (17% acima da MM 200) — ζ Topo 0% · ζ Fundo 66% em 30/10 · *informa, não filtra*
>
> **Placar ao vivo** (só as regras que avisam no Telegram): 1 operação(ões), 0 com lucro, média -0,8%, soma -0,8%
>
> | Regra | Situação | Detalhes | Nota |
> |---|---|---|---|
> | [Diário · Nadaraya](tecnico/#diário) | ⏳ **aguardando** | setup FD+RSI (forte) (30/10) · entra quando o Nadaraya virar para cima no fechamento (hoje está caindo) · vale por mais 10 pregões | ✅ passou fora da amostra |
> | [Semanal · Semáforo N2](tecnico/#semanal) | — sem setup | espera um sinal de fundo | ✅ o ganho vem do setup |
> | [H4 · Semáforo N2](sinais-topo-fundo/todos-os-sinais#h4) | ⏳ **aguardando** | setup FD+RSI (moderado), FD+CCI (moderado) (27/10 14h) · entra quando fundo candidato em 30/10 10h (167.008): vira entrada se não houver mínima menor em 4 candles de 4h · vale por mais 4 candles de 4h | 🧪 em teste |
> | [Diário · Semáforo N3 após ζ Fundo](tecnico/#diário) | ⏳ **aguardando** | setup ζ Fundo 66% (30/10) · entra quando fundo candidato em 30/10 (167.008): vira entrada se não houver mínima menor em 12 pregões · vale por mais 10 pregões | 🧪 em observação |
>
> **Últimas operações** (as anteriores ao teste ao vivo são simuladas no histórico)
>
> | Regra | Entrada | Saída | Resultado | Motivo |
> |---|---|---|---|---|
> | H4 · Semáforo N2 🧪 | 28/10/26 14h a 170.947 | 29/10/26 10h a 169.516 | **-0,8%** | stop |
> | Diário · Nadaraya | 25/08/26 a 174.577 | 29/10/26 a 169.186 | **-3,1%** | saída do método (linha rápida cruzou para baixo) |
> | H4 · Semáforo N2 | 01/10/26 14h a 187.243 | 20/10/26 10h a 208.658 | **+11,4%** | saída do método (topo fixo do semáforo nível 3) |
> | H4 · Semáforo N2 | 21/09/26 14h a 186.753 | 25/09/26 10h a 183.242 | **-1,9%** | stop |
> | Diário · Semáforo N3 após ζ Fundo | 01/09/26 a 179.723 | 24/09/26 a 183.966 | **+2,4%** | saída do método (topo fixo do semáforo nível 3) |
> | H4 · Semáforo N2 | 19/08/26 10h a 168.034 | 16/09/26 10h a 185.896 | **+10,6%** | saída do método (topo fixo do semáforo nível 3) |
> | Diário · Semáforo N3 após ζ Fundo | 07/07/26 a 172.021 | 10/08/26 a 172.021 | **+0,0%** | stop no preço de entrada |
> | H4 · Semáforo N2 | 12/06/26 14h a 171.134 | 15/06/26 14h a 171.134 | **+0,0%** | stop no preço de entrada |
>
> <small>Atualizado 30/10 19:01. Nota: ✅ passou no teste fora da amostra (walk-forward 2008–2026) · 🧪 em teste (H4, com aviso no Telegram) ou em observação (ζ, sem aviso) · 🧪 na tabela = operação do teste ao vivo.</small>
>
> *Regras: depois de um sinal de fundo, o Diário entra quando o Nadaraya vira para cima; o Semanal e o H4 entram quando um fundo do semáforo fica fixo. Stop e saída de cada regra na [metodologia](metodologia/regras-de-operacao#entradas-do-método). Nenhuma regra de venda passou no teste. Os números do histórico têm viés de escolha (overfitting); o placar ao vivo é o que vale. Leitura educacional do método, não recomendação.*

### 📚 O que os testes dizem de cada regra

- **🎯 Diário · Nadaraya** · ✅ passou fora da amostra: fora da amostra (walk-forward 2008–2026): cerca de +2% a +3% por operação; poucas operações por ano
- **🎯 Semanal · Semáforo N2** · ✅ o ganho vem do setup: fora da amostra: cerca de +5% por operação; comprar após sinal semanal funcionou com quase qualquer regra
- **🎯 H4 · Semáforo N2** · 🧪 em teste: testado em 5 anos (MT5, out/2021–out/2026): positivo no treino (+1,3% por operação, 23 op) e no teste (+3,1%, 22 op), rendeu mais que o Ibovespa nos dois; acaso 11% e 0% — ainda curto para o ranking (menos de 10 anos)
- **🎯 Diário · Semáforo N3 após ζ Fundo** · 🧪 em observação · sem aviso: só o nível 3 do semáforo funcionou no histórico (frágil)

[← Operações](operacoes/) · [Regras e testes](metodologia/regras-de-operacao#entradas-do-método)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.