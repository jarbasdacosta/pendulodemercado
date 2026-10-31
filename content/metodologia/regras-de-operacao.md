---
title: "🎯 Regras de operação"
date: 2026-10-30
tags: [metodologia]
description: "Tendência MME9 e Entradas do método: regras e testes"
---

## Entradas do método

> [!warning] Em teste ao vivo desde 23/10/2026
> Estas regras foram escolhidas olhando o histórico — e quem testa muitas regras sempre acha algumas que deram certo por acaso (**overfitting de backtest** / viés de escolha). Por isso: (1) os números abaixo são os de um teste **fora da amostra**, não os do backtest escolhido; (2) a partir de 23/10/2026 as regras ficam congeladas e o site mostra um **placar ao vivo** separado — esse é o único resultado limpo.

Depois de um **setup**, o método espera uma confirmação antes de comprar. **Só compra:** nenhuma regra de venda passou.

| Regra | Setup | Entrada (no fechamento) | Stop | Saída |
|---|---|---|---|---|
| **Diário · Nadaraya** ✅ | sinal de fundo forte/moderado nos últimos 10 pregões | o kernel Nadaraya-Watson (Rational Quadratic, lookback 12) vira para cima | menor mínima dos últimos 5 pregões | a linha rápida (lookback 10) cruza para baixo |
| **Semanal · Semáforo N2** ✅ | sinal de fundo nas últimas 10 semanas | um fundo do semáforo nível 2 (13/8/5) fica fixo: 5 candles sem mínima menor | mínima do fundo; vai para o preço de entrada quando ganha o que arrisca | um topo do semáforo nível 3 (34/21/12) fica fixo |
| **H4 · Semáforo N2** 🧪 *(em teste, com aviso no Telegram desde 23/10/2026)* | sinal de fundo nos últimos 10 candles de 4h | igual ao semanal | igual | igual |
| **Diário · Semáforo N3 após ζ** 🧪 *(em observação, sem aviso)* | ζ Fundo ≥ 60% nos últimos 10 pregões | um fundo do semáforo nível 3 fica fixo (12 candles) | igual | igual |

Todas: no máximo 60 candles por operação; reentrada permitida dentro da janela do setup. O semáforo é calculado como no MT5, mas só conta o ponto **fixo** (o indicador original repinta). O Nadaraya é o kernel sem repintura (o envelope padrão usa candles futuros e, sem repintura, não funcionou).

### Como as regras foram testadas

1. **Mais de 150 regras** testadas no Ibovespa 2000–2026: rompimento de máxima/mínima, os três níveis do semáforo e o Nadaraya-Watson (envelope e kernel), com várias entradas e saídas.
2. **Walk-forward (fora da amostra):** a cada ano de 2008 em diante, a melhor regra foi escolhida **só com os anos anteriores** e operada no ano seguinte. Isso mede se "escolher a melhor pelo passado" funciona de verdade.
3. **PBO (probabilidade de overfitting do backtest):** o histórico foi dividido em 10 blocos e, em 252 combinações, a melhor regra de uma metade foi conferida na outra.

| Tempo e lado | Escolhendo pelo passado (fora da amostra) | Regra escolhida ao acaso | PBO | Leitura |
|---|---|---|---|---|
| Diário · compra | **+2,0% a +3,5%** por operação | +0,4% | **6%** | a escolha se sustenta ✅ |
| Semanal · compra | +6% a +10% | **+4,7%** | 33% | funciona, mas quase qualquer regra serve: o ganho vem do setup |
| Diário · venda | +0,5% (faixa inclui perda) | −0,2% | **73%** | overfitting ❌ |
| Semanal · venda | −2,5% | −0,3% | 31% | não funciona ❌ |

*O backtest das regras escolhidas mostrava +3,2% (diário) e +15,8% (semanal) por operação; fora da amostra a expectativa realista é de **+2% a +3%** no diário e **~+5%** no semanal, com poucas operações por ano. O H4 tem só ~3 anos de dados e não pôde ser testado fora da amostra; em 23/10/2026 foi conferido contra 2000 entradas ao acaso (nenhuma igualou o resultado) e passou a **avisar no Telegram**, ainda como 🧪 em teste. A lista de quais sinais são fortes ou moderados também saiu destes dados — mais uma razão para acompanhar o placar ao vivo. Custo de 0,05% por operação, índice à vista, sem impostos (no WIN o comprado paga o carrego dos juros). Estatística histórica, não recomendação.*

## Tendência MME9

> [!warning] Em teste ao vivo desde 23/10/2026
> Regra simples, testada no Ibovespa 2000–2026. Não é teste fora da amostra; por isso, a partir de 23/10/2026 o site mostra um **placar ao vivo** separado.

**Só compra**, no **Diário** e no **Semanal**:

| | Regra |
|---|---|
| **Sinal de compra** | um candle **fecha acima da MME9** (o anterior fechou abaixo ou em cima) |
| **Entrada** | o preço passa da **máxima desse candle** em até 3 candles (ordem stop de compra) |
| **Sinal de saída** | um candle **fecha abaixo da MME9** |
| **Saída** | o preço passa da **mínima desse candle** em até 3 candles |
| **Stop de segurança** | 10% abaixo do preço de entrada |
| **Semanal** | o sinal só conta com a semana fechada; a entrada e a saída podem acontecer em qualquer dia da semana |

### O que os estudos mostraram (Ibovespa 2000–2026, custo 0,05% por operação)

- **Diário:** cerca de **+14% ao ano** com maior queda de **35%**, contra +9,6% ao ano e 60% de queda de quem comprou e segurou (Sharpe 0,75 contra 0,34). Fica comprado só parte do tempo e fica de fora da maior parte das grandes quedas.
- **Semanal:** cerca de **+9% ao ano**, perto de comprar e segurar, mas com maior queda de **29%** contra 57%: no semanal o ganho é a queda menor, não o retorno.
- **Não é ajuste fino:** o resultado se manteve com médias simples de 5 a 50 no diário e de 8 a 21 no semanal.
- **Vender** (ficar sempre posicionado, comprado ou vendido) **não funcionou**: a venda perde dinheiro no Ibovespa. Por isso, só compra.
- **Stops apertados pioram** o resultado. O stop de 10% praticamente não muda o histórico e protege de um tombo grande sem sinal.
- **Menos da metade das operações dá lucro** (40% no diário, 48% no semanal) e a perda é limitada pelo stop; o resultado vem das poucas que pegam uma tendência longa (até +22% no diário e +60% no semanal). É preciso disciplina para seguir todas.

### Critério de validação ao vivo (definido em 23/10/2026)

Para não cair no mesmo viés de escolha, o critério foi fixado **antes** de qualquer resultado ao vivo e vale igual para todas as regras. O placar ao vivo de cada regra é comparado com 5.000 sequências do mesmo tamanho sorteadas do histórico dela (assim uma regra que acerta 40% não é condenada por 3 perdas seguidas):

| Status | Critério |
|---|---|
| 🧪 em teste / em observação | ponto de partida |
| ✅ **validada ao vivo** | 10 operações ao vivo, média positiva depois do custo e resultado fora dos 25% piores possíveis pelo histórico |
| ⚠️ **abaixo do esperado** | a partir de 5 operações, resultado entre os 5% piores |
| ❌ **suspensão sugerida** | com 10 operações, continua entre os 5% piores, ou a sequência de perdas é pior que a pior do histórico para o mesmo número de operações |

**Nada é desligado automaticamente:** a mudança de status gera um aviso no Telegram e a decisão de suspender ou promover é manual. Pelas frequências históricas, chegar a 10 operações leva uns 8 meses na Tendência diária, 15 meses no H4, ~3 anos no Nadaraya e na Tendência semanal e bem mais no Semáforo semanal e no ζ → N3.

<!-- v16 -->
### Tempos curtos: H4 e H2 (23/10/2026)

As três regras de compra foram aplicadas, **sem mudar nenhum parâmetro**, nos candles de 4 horas (10–14h e 14–18h) e de 2 horas (10–12, 12–14, 14–16 e 16–18h), com o 60 minutos do Yahoo de nov/2023 a out/2026 (~3 anos). Comparação com 2000 sorteios de entradas ao acaso (mesmo número de operações e mesmas durações):

| Regra | H2 | H4 | Diário (mesmo período) |
|---|---|---|---|
| Tendência MME9 | +0,39% · 121 op · acaso 11% | +0,37% · 68 op · acaso 45% | +0,92% · 39 op · acaso 27% |
| Nadaraya h12 | +0,90% · 23 op · acaso 16% | +1,67% · 13 op · acaso 14% | +1,48% · 9 op · acaso 47% |
| Semáforo N2 | +0,50% · 45 op · acaso 24% | **+2,84% · 23 op · acaso 0%** | +1,90% · 13 op · acaso 29% |

*Média por operação · nº de operações · % dos sorteios ao acaso com média igual ou melhor (baixo = a entrada acrescenta algo).* Tudo ficou positivo, nas duas metades e com custo de 0,10% — as regras não quebram em tempos curtos —, mas o Ibovespa subiu 62% no período e só o **Semáforo N2 no H4** se separou do acaso. Ele é a regra H4 que já estava em teste (os mesmos dados serviram para escolhê-la, então não é fora da amostra) e passou a avisar no Telegram. O **H2** não passou e o tempo curto não superou o diário: dá mais operações, com ganho menor por operação.

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.
