---
title: "🧪 O que testamos e não passou"
date: 2026-10-30
tags: [metodologia]
description: "Venda, radar, harami, envelope do Nadaraya e outros"
---

Também faz parte do método registrar o que **não** funcionou — para não cair na tentação de usar depois. Em todos os casos o teste foi o mesmo das regras aprovadas.

| O que foi testado | Resultado |
|---|---|
| **Vender** (qualquer regra, diário e semanal) | Walk-forward negativo no diário (PBO 73%) e perda no semanal. O Ibovespa sobe ~9,6% ao ano desde 2000: a venda nada contra a correnteza |
| **Vender só em mercado de baixa** (abaixo da MMA200, MME9 semanal caindo, MMA200 caindo) | Algumas combinações pareciam boas, mas escolher pelo passado perdeu (−0,5% por operação) e ficou abaixo de 90% dos Ibovespas embaralhados. Detalhes abaixo |
| **Sinais de topo como venda** | Depois deles o índice subiu como num dia qualquer. Viraram aviso de **proteção** (🟠) |
| **Ficar sempre posicionado na MME9** (comprado ou vendido) | A ponta vendida perde e piora o resultado; ficou só a compra |
| **Rompimento da máxima/mínima + 20% depois dos sinais** | Resultado pior que as alternativas; desligado |
| **Envelope (bandas) do Nadaraya-Watson** | O indicador original repinta (usa candles futuros); sem repintura não funcionou. Ficou só o kernel |
| **Radar de grande queda como compra** | Acertou a região dos 7 grandes fundos de 2014–2026, mas avisa cedo: comprar no alerta rendeu menos que num dia qualquer. Fica só como contexto |
| **Radar + gatilho de virada** (zona + MME9, harami, MMA20) | Não superou o acaso |
| **Harami** (qualquer, confirmado, clássico) | Sem valor sozinho; o semanal com a mãe abaixo da Bollinger não passou no teste (30% perto de grande fundo) |
| **Stops fixos ou em % na Tendência MME9** | Stops apertados pioram; só o de 10% (proteção) não atrapalha |
| **Tendência MME9 no semanal** | Rende quase o mesmo que comprar e segurar; o ganho é a queda máxima menor |
| **Regras nos candles de 2 horas (H2)** | Positivas, mas nenhuma se separou de entradas ao acaso em ~3 anos de dados (23/10/2026). Só o Semáforo N2 no H4 passou |

## Venda em mercado de baixa — detalhes

**A venda continua sem regra aprovada.** Foi testada de novo só em mercado de baixa (preço abaixo da MMA200, MME9 semanal caindo, os dois juntos ou MMA200 caindo), com três setups (fechou abaixo da MME9, sinal de topo do site, ζ Topo) no diário e no semanal, e também somando o carrego que o vendido ganha no WIN. Algumas combinações ficaram positivas no histórico (por exemplo, no diário, vender o rompimento depois de fechar abaixo da MME9 com a MME9 semanal caindo: cerca de +1% por operação no WIN), mas **escolher a melhor pelo passado (walk-forward) perdeu dinheiro** (−0,5% por operação) e ficou **abaixo de 90% dos Ibovespas embaralhados**. Ou seja: o que parecia bom era sorte. Vender o Ibovespa, mesmo em baixa, não mostrou vantagem.

## Radar de grande queda (só contexto)

Nota de 0 a 100% de sobrevenda **ao mesmo tempo** no mensal, no semanal e no diário (Bollinger, CCI, RSI, MACD-V, distância das médias, bottom tail, haramis com a mãe abaixo da Bollinger e o ζ do IMA). As condições e o nível de alerta foram escolhidos só com 2001–2013 e testados em 2014–2026: o radar esteve ligado perto dos **7 grandes fundos** do período, com poucos alarmes falsos. **Mas avisa cedo:** em média o preço ainda caiu mais 13% nos 6 meses seguintes, e comprar no alerta rendeu menos do que comprar num dia qualquer. Esperar um gatilho de virada dentro da zona também não superou o acaso. Por isso ele aparece só como contexto ("estamos numa grande queda"), não como sinal de compra.

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.
