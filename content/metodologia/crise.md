---
title: "🌊 Sinal de Crise — metodologia"
date: 2026-10-30
tags: [metodologia]
description: "IMA Wavelet (Caetano) e LPPL (Sornette) no Ibovespa"
---

<!-- v7-creditos -->
> [!quote] Créditos
> O Sinal de Crise do **Ondaleta** é baseado no trabalho do **Prof. Marco Antonio Leonel Caetano** (IMA Wavelet, Caetano & Yoneyama) e do **Prof. Didier Sornette** (LPPL, ETH-Zurich), **adaptado, calibrado no Ibovespa e mantido por Jarbas Daniel da Costa**. Os autores citados não participam do produto. Conteúdo educacional, não recomendação.

> [!abstract] Em uma frase
> O Sinal de Crise do Ondaleta mede **o quanto o Ibovespa está esticado em relação à própria tendência**, olhando ao mesmo tempo para várias escalas de tempo. Esticado para cima é **ζ Topo**; esticado para baixo é **ζ Fundo**. Os momentos úteis para agir não são quando o ζ está alto, e sim **quando ele entra numa faixa ou começa a desinflar**.

> [!warning] Antes de tudo
> Nada aqui é recomendação de investimento. São **estatísticas de 26 anos de Ibovespa** (2000–2026) que mostram em que situações as chances ficaram historicamente a favor ou contra. Nenhuma situação tem 100% de acerto, e o passado não garante o futuro. Use como **filtro de contexto** para o seu método, com stop e gestão de risco.

---

## 1. Como o modelo funciona (sem matemática)

Imagine o gráfico do Ibovespa dos últimos 252 pregões (um ano).

**Passo 1 — tirar a tendência.** O modelo traça a curva que melhor descreve a direção do último ano (uma tendência exponencial) e um ciclo lento por cima dela. O que sobra é o **resíduo**: quanto o preço está acima ou abaixo do "caminho normal".

**Passo 2 — olhar o resíduo com 32 lupas.** A *transformada wavelet* (com a função **Chapéu Mexicano**, como no método do Prof. Caetano) funciona como um conjunto de lupas de tamanhos diferentes: algumas enxergam movimentos de poucos dias, outras de várias semanas. Cada lupa responde a uma pergunta: *"na minha escala, o preço de agora está anormalmente acima ou abaixo da tendência?"*

**Passo 3 — contar quantas lupas concordam.** O **ζ (zeta)** é simplesmente a **porcentagem das lupas** que, nos últimos 4 pregões, enxergam o preço esticado além de um limite (0,8 desvio):

- **ζ Topo** = % das lupas que veem o preço **esticado para cima**.
- **ζ Fundo** = % das lupas que veem o preço **esticado para baixo**.

ζ Topo = 90% quer dizer que **quase todas as escalas** concordam: o preço subiu demais, rápido demais, em relação à tendência. É a fórmula do artigo de Caetano & Yoneyama (2009): ζ = n/N.

> [!example] Exemplo real
> Em outubro de 2026 o Ibovespa foi de 187 mil para 209 mil pontos em poucos dias. O ζ Topo saiu de 2% para 77%: a maioria das escalas passou a enxergar o preço muito acima da tendência.

### O LPPL (Prof. Sornette)

É um segundo modelo, independente. Procura o **formato** de bolha: subida que acelera cada vez mais (super-exponencial), com oscilações que ficam mais rápidas. Ele testa 45 janelas de tempo diferentes (de 60 a 500 pregões) e mede **em quantas delas** o formato de bolha aparece:

- **LPPL bolha** — alta acelerando (risco de crash).
- **LPPL antibolha** — queda acelerando (risco de repique forte).

Abaixo de ~30% é ruído normal (mesmo séries aleatórias chegam a 20%). Acima de 50% é evidência forte. O LPPL ainda não tem estatística própria de longo prazo; por isso é exibido como **informação complementar** e não define a zona.

---

## 2. O que 26 anos de dados mostram

Estudo com **6.370 pregões** (2000–2026). O ζ foi calculado **como teria sido visto em tempo real**, ou seja, só com os dados disponíveis em cada dia. Para cada situação, medimos o que o Ibovespa fez **depois**.

**A referência (um dia qualquer):**

| Horizonte | Subiu | Retorno mediano | Caiu 5%+ em algum momento | Subiu 5%+ em algum momento |
|---|---|---|---|---|
| 20 pregões (~1 mês) | 56% | +1,1% | 31% | 41% |
| 60 pregões (~3 meses) | 60% | +3,3% | 52% | 66% |

**As situações que fizeram diferença nos dois períodos testados (2000–2014 e 2015–2026):**

| Situação | O que aconteceu depois | vs. referência | Confiança |
|---|---|---|---|
| 🚀 **ζ Topo sobe para 30–60%** (vindo de menos de 30%) | Subiu em **69%** das vezes no mês e **70%** em 3 meses; caiu 5%+ no mês só **24%** | 56% / 60% / 31% | ⭐⭐⭐ (78 casos) |
| 📉 **ζ Topo desinfla do 🔴** (cai abaixo de 75% depois de passar de 90%) | Caiu 5%+ em **45%** das vezes em 20 pregões; mesma direção nos dois períodos, mas pode ser acaso | 31% | ⭐ (31 casos) |
| 🔪 **ζ Fundo dispara** (passa de 90%) | Subiu só **42%** das vezes em 60 pregões; retorno mediano **−1,9%** | 60% / +3,3% | ⭐⭐⭐ (31 casos) |
| 📉 **ζ Topo desinfla** do 🟡 (cai abaixo de 45% depois de passar de 60%) | **Só contexto:** caiu 5%+ em 20 pregões em **32%** das vezes — igual a um dia qualquer | 31% | — (28 casos) |
| 🌱 **ζ Fundo desinfla** (cai abaixo de 75% depois de passar de 90%) | **Só contexto:** subiu em 71% das vezes em 60 pregões em 2001–2013, mas **60%** em 2014–2026 — igual a um dia qualquer | 60% | — (32 casos) |
| 🔴 **ζ Topo ≥ 90%** (estar na zona) | Chance de subir mais 5% em 20 pregões cai para **32%** | 41% | ⭐ |

<!-- v20-eventos -->
> [!warning] Revisão de 23/10/2026
> Os eventos foram testados de novo **exatamente como o sistema dispara os alertas** (20 pregões entre eventos do mesmo tipo; o 📉 do 🟡 ignorado logo depois do 📉 do 🔴), separando 2001–2013 e 2014–2026, contra 5.000 sorteios de dias quaisquer. **Confirmados nos dois períodos:** 🚀 Força (subiu em 20 pregões em 68% e 70% das vezes, contra 55% e 57%) e 🔪 Queda forte (subiu em 60 pregões em 47% e 36%, contra 59% e 62%). O 📉 do 🔴 manteve a direção, mas sem força estatística (⭐). O **📉 do 🟡** e o **🌱 Fundo se desfazendo** não se confirmaram e passaram a ser **só contexto** — os números anteriores vinham de uma contagem sem as regras do alerta. No mesmo dia, as versões do ζ do livro *Mudanças Abruptas no Mercado Financeiro* (janela de 60 dias, tendência linear, escalas até 140) também foram testadas e ficaram piores que a atual; **o cálculo do ζ não mudou**.

> [!info]- Como ler as estrelas (clique para expandir)
> Cada situação foi comparada com **5.000 sorteios de datas aleatórias**. ⭐⭐⭐ = no período completo, o resultado ficou entre os **5%** mais extremos dos sorteios, e a direção se repetiu nos dois períodos. ⭐⭐ = entre os **11%** mais extremos, mesma direção nos dois períodos. ⭐ = mesma direção nos dois períodos, mas dentro do que o acaso explica. Como testamos dezenas de combinações, algumas parecem boas por acaso; por isso só entram aqui as que se repetiram nas duas metades da história.

---

## 3. Como usar na prática

Pense no ζ como um **semáforo de contexto** para o seu método, não como um botão de compra e venda.

### Do lado da compra

> [!success] 🚀 Momento de força — ζ Topo subindo para 30–60%
> O preço começou a se afastar da tendência para cima, mas ainda não esticou demais. **Historicamente, a alta continuou**: 69% subiu no mês seguinte e 70% em 3 meses, com **menos** risco de queda que um dia qualquer (24% contra 31%). Favorece **manter ou montar posição comprada** e dar espaço ao movimento. Só vale quando o ζ Topo **sobe** de menos de 30% — quando ele cai de cima para essa faixa, o resultado foi igual ao acaso.

> [!note] 🌱 Fundo se desfazendo — ζ Fundo caindo de volta abaixo de 75% (só contexto)
> Depois de uma queda forte (ζ Fundo ≥ 90%), o esticamento para baixo começa a desaparecer: o pânico passou. Em 2001–2013, 71% subiu em 3 meses; em 2014–2026, **60% — igual a um dia qualquer**. Não há vantagem confirmada para comprar só por isso. O que continua valendo é o lado do 🔪: **não comprar no auge do pânico**.

> [!danger] 🔪 Não segure a faca — ζ Fundo disparando (≥ 90%)
> Parece barato, mas **historicamente a queda continuou**: só 42% subiu em 3 meses, e metade das vezes ainda caiu mais 5% no mês seguinte. **Espere o ζ Fundo começar a cair.**

### Do lado da proteção / venda

> [!warning] 🟡🔴 Esticado — ζ Topo ≥ 60%
> O preço está bem acima da tendência. **Isso, sozinho, não é sinal de queda**: o índice continuou subindo tanto quanto num dia qualquer. Mas o **potencial de alta encolhe** (no 🔴, chance de subir mais 5% cai de 41% para 32%). Bom momento para **não aumentar posição, subir o stop e realizar parte do lucro**.

> [!failure] 📉 Esticamento desinflando — ζ Topo caindo
> Quando o ζ Topo volta para baixo de **75% depois de ter passado de 90%** (o 🔴), a chance de uma queda de 5%+ no mês seguinte foi de **45%**, contra 31% num dia qualquer — mesma direção em 2001–2013 e 2014–2026, mas com 31 casos pode ser acaso. Favorece **proteger** (stop mais curto, hedge parcial). Já a volta abaixo de 45% depois de 60% (o 🟡) **não teve vantagem** (32% contra 31%): é só contexto — o esticamento acabou.

### Neutro

> [!note] 😐 Tudo baixo — ζ Topo e ζ Fundo abaixo de 30%
> Sem vantagem estatística para nenhum lado. **Siga o seu método normal.**

### Resumo de bolso

| Você vê | Estatística a favor de |
|---|---|
| ζ Topo **subindo** para 30–60% | 🟢 manter / comprar |
| ζ Topo ≥ 60% | 🟡 não aumentar, subir stop, realizar parcial |
| ζ Topo **caindo** de volta do 🔴 (abaixo de 75%) | 🟠 proteger (vantagem pequena) |
| ζ Topo **caindo** de volta do 🟡 (abaixo de 45%) | ⚪ só contexto |
| ζ Fundo **disparando** ≥ 90% | ⛔ não comprar ainda |
| ζ Fundo **caindo** de volta | ⚪ só contexto (o pânico passou) |
| Tudo abaixo de 30% | ⚪ neutro |

> [!important] Horizonte
> Estas estatísticas são do **diário (D1)** e valem para **semanas a meses** (20–60 pregões). Para day trade no WIN, use como **viés do dia** (a favor ou contra a direção principal), não como gatilho de entrada. O ζ do intraday (15 min) ainda **não foi validado estatisticamente**.

---

## 4. O que o modelo NÃO faz

- **Não prevê a data do crash.** O ζ alto não diz "vai cair amanhã". O teste de antecipação (Molchan) foi negativo.
- **Não acerta sempre.** Em 3 de cada 10 vezes, a situação "favorável" deu errado.
- **Não substitui stop.** As quedas que vêm depois de um ζ Topo desinflando podem ser rápidas.
- **Não enxerga notícia.** Eventos externos (política, juros, exterior) movem o mercado sem aviso espectral.

---

## 5. Os alertas (v5.3)

O **e-mail e o Telegram do diário (19h)** só disparam nos dias em que acontece um dos 5 eventos (dois deles, desde 23/10/2026, são só contexto):

| Alerta | Dispara quando | Estatística favorece |
|---|---|---|
| 🚀 **Força** | ζ Topo sobe de menos de 30% para 30–60% | manter / comprar |
| 📉 **Esticamento desinflando** | ζ Topo volta abaixo de 45% depois de passar de 60% | ⚪ só contexto |
| 📉 **Esticamento extremo desinflando** | ζ Topo volta abaixo de 75% depois de passar de 90% | proteger (vantagem pequena) |
| 🔪 **Queda forte** | ζ Fundo passa de 90% | não comprar ainda |
| 🌱 **Fundo se desfazendo** | ζ Fundo volta abaixo de 75% depois de passar de 90% | ⚪ só contexto |

Historicamente são uns **8 a 10 alertas por ano**. Cada tipo de evento só se repete depois de 20 pregões, e o "desinflando" do amarelo é suprimido quando vem logo depois do "desinflando" do vermelho (é o mesmo episódio).

Nos outros dias, o site mostra a **Situação** (o semáforo do resumo de bolso). O **fechamento do intraday (18h25)** continua chegando todo dia por e-mail, com o **viés do diário** — a última situação do D1 — para orientar o pregão seguinte. Os eventos **não** são calculados no intraday (15 min), porque lá a estatística ainda não foi validada.

## 6. As zonas do sinal

| Zona | Entra quando | Sai quando | Significado |
|---|---|---|---|
| 🟢 VERDE | — | — | Preço na faixa normal em torno da tendência |
| 🟡 AMARELO | ζ Topo ≥ 60% | ζ Topo < 45% | Preço esticado para cima |
| 🔴 VERMELHO | ζ Topo ≥ 90% | ζ Topo < 75% | Esticamento extremo (limiar de Caetano) |

As zonas têm **histerese** (entram num nível e saem em outro mais baixo) para não ficar trocando todo dia. **Atenção:** pela estatística acima, **a saída do 🟡/🔴 é mais importante que a entrada** — é quando o esticamento desinfla que o risco aparece.

---

## 7. Detalhes técnicos

> [!info]- IMA Wavelet — parâmetros (clique para expandir)
> - Janela de 252 pregões (D1) ou 252 barras de 15 min (intraday).
> - Pré-processamento: tendência exponencial + componente cosseno (Caetano & Yoneyama 2009, eqs. 7-8).
> - CWT Chapéu Mexicano, escalas 1 a 32; normalização **por escala** (MAD → desvios).
> - ζ = fração dos 128 coeficientes (32 escalas × 4 barras) além de ±0,8σ.
> - Validação: replica o Kruskal-Wallis do artigo em 2003–2008 (p = 0,007/0,002); AUC causal 0,58 em 2015–2025.
> - Na borda direita (tempo real), o coeficiente positivo indica preço **acima** da tendência — por isso ζ Topo mede esticamento para cima.
> - O espectrograma histórico é calculado com a série inteira (vê o futuro); o ζ em tempo real concorda só parcialmente com ele.

> [!info]- LPPL DS-Confidence — parâmetros (clique para expandir)
> - Reformulação de Filimonov & Sornette (2013): A, B, C₁, C₂ por mínimos quadrados; otimização só em (tc, m, ω).
> - 45 janelas (60 a 500 pregões, passo 10) terminando na mesma data.
> - Filtros: 0,05 < m < 0,95 · 6 < ω < 13 · tc até min(0,4·L, 120) pregões à frente · ≥ 2,5 oscilações · amortecimento ≥ 0,5 · erro < 60% do de uma reta.
> - Confiança = fração de janelas válidas, separada pelo sinal de B: **bolha** (B < 0) e **antibolha** (B > 0).

> [!info]- Histórico de versões (clique para expandir)
> - **v5.3** (20/10/2026) — Alertas por **evento** (Força, Desinflando, Queda forte, Fundo se desfazendo) no lugar dos alertas por zona; situação do dia no site; viés do diário no intraday; eventos marcados no gráfico.
> - **v5.2** (20/10/2026) — LPPL com 45 janelas e antibolha; estudo estatístico de 26 anos; esta página.
> - **v5.1** (20/10/2026) — Correções: ζ Topo/Fundo com o significado certo; risco = ζ (antes 60% ζ + 40% LPPL, o que tornava o 🔴 impossível); cache por ativo no multi-ativo; datas do diário (estavam um dia atrasadas).
> - **v5.0** (15/07/2026) — Motor fiel ao artigo de Caetano (ζ = n/N).
> - **v4** (07/2026) — LPPL DS-Confidence, histerese, correções de janela.

---

## Referências

- Caetano, M.A.L.; Yoneyama, T. *Characterizing abrupt changes in the stock prices using a wavelet decomposition method*. Physica A 383 (2007) 519–526.
- Caetano, M.A.L.; Yoneyama, T. *A new indicator of imminent occurrence of drawdown in the stock market*. Physica A 388 (2009) 3563–3571.
- Caetano, M.A.L. *Mudanças Abruptas no Mercado Financeiro*. Érica, 2013.
- Sornette, D. *Why Stock Markets Crash*. Princeton, 2003.
- Filimonov, V.; Sornette, D. *A stable and robust calibration scheme of the log-periodic power law model*. Physica A 392 (2013) 3698–3707.

> [!quote] Aviso
> Estudo acadêmico e estatístico. Não constitui recomendação de investimento. Resultados passados não garantem resultados futuros.
