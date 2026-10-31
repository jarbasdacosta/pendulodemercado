---
title: "📊 Amplitude (Market Breadth)"
date: 2026-10-30
description: "Porcentagem das ações do Ibovespa acima das médias de 20, 50 e 200 pregões"
tags: [amplitude]
---

*Atualizado 30/10/2026 19:03 · fechamento de 30/10/2026.*

A **amplitude** mostra quantas ações do Ibovespa estão acompanhando o movimento do índice: a porcentagem das ações da carteira que estão **acima das suas médias** de 20, 50 e 200 pregões. O **sentimento** é a média das três. **Abaixo de 20**: quase todas as ações caindo — exaustão vendedora, região de fundos. **Acima de 80**: quase todas subindo — força generalizada (no teste, **não** aumentou o risco de queda).

> [!success] Sentimento **12%** ▼ · 🟢 exaustão vendedora (abaixo de 20)
> Acima da MM 20: **7%** · MM 50: **13%** · MM 200: **17%** <small>(76 de 76 ações com dados)</small>

> [!success|forte] 🎯 REGIÃO DE FUNDO — só 17% das ações acima da MM 200
> No histórico, 60 pregões depois o Ibovespa subiu em ~83% das vezes, retorno mediano de ~+10% (dia qualquer: 60% e +3,4%). Confirmado em 2001–2013 e 2014–2026.

<iframe src="https://jarbasdacosta.github.io/sinal-b3/static/amplitude_grafico.html" title="Amplitude do Ibovespa — interativo" style="width:100%;height:640px;border:0;border-radius:8px" loading="lazy"></iframe>

*Gráfico interativo: clique na legenda para ligar/desligar cada linha, arraste ou use a rodinha para zoom, botões 3m · 6m · 1a · 3a · 5a · tudo. [Abrir em tela cheia ↗](https://jarbasdacosta.github.io/sinal-b3/static/amplitude_grafico.html)*

> [!note]- Imagem estática (últimos 3 anos)
> ![Amplitude do Ibovespa](graficos/amplitude_20261030.png)

📈 Veja também a **[linha de avanço e declínio](amplitude/avanco-declinio)** — quantas ações do Ibovespa subiram menos quantas caíram, dia a dia, e se ela acompanha os topos do índice.

## Últimos pregões

| Data | Sentimento | MM 20 | MM 50 | MM 200 |
|---|---|---|---|---|
| 30/10/2026 | **12%** 🟢 | 7% | 13% | 17% |
| 29/10/2026 | **14%** 🟢 | 9% | 14% | 17% |
| 28/10/2026 | **11%** 🟢 | 7% | 12% | 16% |
| 27/10/2026 | **17%** 🟢 | 9% | 16% | 26% |
| 26/10/2026 | **18%** 🟢 | 9% | 17% | 26% |
| 23/10/2026 | **80%** 🔴 | 79% | 86% | 76% |
| 22/10/2026 | **82%** 🔴 | 86% | 86% | 75% |
| 21/10/2026 | **84%** 🔴 | 87% | 86% | 79% |
| 20/10/2026 | **86%** 🔴 | 88% | 87% | 82% |
| 19/10/2026 | **83%** 🔴 | 84% | 87% | 78% |

## Quando entrou nas zonas

| Início | Zona | Sentimento |
|---|---|---|
| 26/10/2026 | 🟢 abaixo de 20 | 18% |
| 05/10/2026 | 🔴 acima de 80 | 85% |
| 10/09/2026 | 🔴 acima de 80 | 82% |
| 17/08/2026 | 🟢 abaixo de 20 | 20% |
| 11/08/2026 | 🟢 abaixo de 20 | 19% |
| 05/06/2026 | 🟢 abaixo de 20 | 20% |
| 09/04/2026 | 🔴 acima de 80 | 82% |
| 19/02/2026 | 🔴 acima de 80 | 81% |
| 22/01/2026 | 🔴 acima de 80 | 87% |
| 02/12/2025 | 🔴 acima de 80 | 84% |
| 26/11/2025 | 🔴 acima de 80 | 82% |
| 11/11/2025 | 🔴 acima de 80 | 85% |
| 05/11/2025 | 🔴 acima de 80 | 83% |
| 17/09/2025 | 🔴 acima de 80 | 84% |
| 08/01/2025 | 🟢 abaixo de 20 | 16% |

## O que o teste mostrou (23/10/2026)

Carteiras reconstruídas por liquidez, 2001–2026, treino 2001–2013 × teste 2014–hoje, contra 5.000 sorteios de dias quaisquer:

| Situação | O que aconteceu depois | Dia qualquer | Confiança |
|---|---|---|---|
| 🎯 **MM 200 cai abaixo de 20%** | retorno mediano em 60 pregões **+10,8%** e **+10,7%** | +3,4% | ✅ nos dois períodos (27 casos) |
| 🎯 **MM 200 volta acima de 20%** | subiu em 60 pregões em **85%** e **82%** das vezes; mediana **+10,8%** e **+9,2%** | 60% · +3,4% | ✅ nos dois períodos (30 casos) |
| Sentimento abaixo de 20 | subiu em 60 pregões em 71% e 79% | 60% | mesma direção, sem força estatística |
| Sentimento ou MM 200 **acima de 80** | caiu 5%+ em 20 pregões **menos** que um dia qualquer (29% e 13% × 37% e 25%) | — | **não** é sinal de topo |

Nas compras das regras do site, a amplitude não serviu de filtro (poucos casos nas zonas e resultados que se contradizem). Os dois eventos da MM 200 viraram **aviso no Telegram**, evento na Linha do tempo e contexto nos avisos de compra. Podem vir cedo: é região de fundo, não o dia exato.

**Últimas vezes:** 28/10/2026 ⬇ abaixo de 20% · 15/01/2025 ⬆ voltou acima · 27/12/2024 ⬇ abaixo de 20% · 18/06/2024 ⬆ voltou acima · 17/06/2024 ⬇ abaixo de 20% · 27/03/2023 ⬆ voltou acima · 23/03/2023 ⬇ abaixo de 20% · 20/12/2022 ⬆ voltou acima

> [!info]- Como é calculado e limites
> - Cotações ajustadas do Yahoo; médias simples de 20, 50 e 200 pregões de cada ação; só entram as ações com dados suficientes no dia.
> - **Carteira:** a atual vem da B3. As antigas foram **reconstruídas por liquidez** — em janeiro, maio e setembro de cada ano, as ações mais negociadas dos 12 meses anteriores, no tamanho que o índice tinha na época (78 carteiras desde 2001). É o critério principal da B3 (negociabilidade), mas não é a carteira oficial. Conferência: a reconstrução para 01/09/2026 acerta **73 de 76** ações da carteira oficial (96%). Ações que fecharam o capital ou quebraram não têm cotação no Yahoo e ficam de fora.
> - A carteira muda em janeiro, maio e setembro: o arquivo da B3 precisa ser atualizado nessas datas.

[📈 Avanço e declínio](amplitude/avanco-declinio) · [Sinais](sinais-topo-fundo/) · [Operações](operacoes/) · [🌎 Capital estrangeiro](estrangeiros/)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.