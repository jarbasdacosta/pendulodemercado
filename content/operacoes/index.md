---
title: "🎯 Operações"
date: 2026-11-22
pregao: 2026-11-19
tags: [operacoes]
description: "Regras de compra testadas no Ibovespa, com placar ao vivo desde 23/10/2026"
---

> [!info]- 📖 O que é cada regra (clique para abrir)
>
> Os nomes que aparecem nas colunas e nas tabelas desta página:
>
> | Nome | O que precisa acontecer para comprar | Onde fica o stop | O que faz sair |
> |---|---|---|---|
> | **📈 Tendência MME9 · Diário** | um candle **fecha acima da MME9** → compra se o preço passar da **máxima** dele em até 3 pregões | **10% abaixo da entrada**, e não se move | um candle fecha abaixo da MME9 → sai se o preço passar da **mínima** dele em até 3 pregões |
> | **📈 Tendência MME9 · Semanal** | a mesma regra em candles semanais: o sinal só conta com a **semana fechada**, mas a ordem pode executar em qualquer dia | **10% abaixo da entrada**, e não se move | uma semana fecha abaixo da MME9 → sai se o preço passar da mínima dela em até 3 semanas |
> | **🎯 Diário · Nadaraya** | um **sinal de fundo** nos últimos 10 pregões, e depois a linha do kernel **vira para cima** | **menor mínima dos 5 pregões** antes da entrada, e não se move | a **linha rápida cruza para baixo**, ou 60 pregões sem sair |
> | **🎯 Semanal · Semáforo N2** | um **sinal de fundo** nas últimas 10 semanas, e depois um **fundo do nível 2 fica fixo** — 5 semanas sem nenhuma mínima menor | **mínima desse fundo**; vai para o preço de entrada quando o lucro iguala o risco | um **topo do nível 3** fica fixo, ou 60 semanas sem sair |
> | **🎯 H4 · Semáforo N2** | um **sinal de fundo** nos últimos 10 candles de 4 horas, e depois um **fundo do nível 2 fica fixo** — 5 candles de 4h sem nenhuma mínima menor | **mínima desse fundo**; vai para o preço de entrada quando o lucro iguala o risco | um **topo do nível 3** fica fixo, ou 60 candles de 4h sem sair |
> | **🎯 Diário · Semáforo N3 após ζ** | **ζ Fundo ≥ 60%** nos últimos 10 pregões, e depois um **fundo do nível 3 fica fixo** — 12 pregões sem nenhuma mínima menor | **mínima desse fundo**; vai para o preço de entrada quando o lucro iguala o risco | um **topo do nível 3** fica fixo, ou 60 pregões sem sair |
>
> **O vocabulário, em uma linha cada:**
>
> - **MME9** — média móvel exponencial de 9 períodos. A linha que separa "o preço
>   está acima da média recente" de "abaixo dela".
> - **Semáforo** — marcador de topos e fundos em três níveis, como no MT5. O
>   **nível 2** (13/8/5) é mais sensível e marca viradas menores; o **nível 3**
>   (34/21/12) é mais lento e marca as maiores.
> - **"fica fixo"** — o ponto não muda mais (5 candles sem mínima menor, no nível
>   2). Importa porque o indicador original **repinta**: o fundo que ele desenha
>   hoje pode sumir amanhã. Só o ponto fixo é operável, e é por isso que a entrada
>   vem depois da virada, nunca nela.
> - **Nadaraya** — regressão por kernel (Nadaraya-Watson, Rational Quadratic): uma
>   linha suave que acompanha o preço. Aqui na versão **sem repintura** — o
>   envelope padrão usa candles futuros e, sem eles, não funcionou.
> - **ζ Fundo** — a medida do IMA: o preço está esticado **abaixo** da tendência.
>   Nas Entradas ele é pré-condição, não gatilho.
> - **sinal de fundo** — nenhuma destas regras compra a qualquer momento: todas
>   exigem que algo tenha marcado fundo antes. É o que as diferencia de "comprar
>   porque subiu".
> - **"vai para o preço de entrada"** — o stop móvel (breakeven): assim que o
>   lucro aberto iguala o que estava sendo arriscado, o stop sobe para o preço em
>   que você entrou. Dali em diante a operação não devolve prejuízo, só lucro.
>   Nas regras de semáforo ele existe; na Tendência e no Nadaraya **não** — ali o
>   stop fica parado e quem protege o ganho é a regra de saída, porque stops mais
>   apertados pioraram o resultado nos testes.
> - **60 candles** — toda operação tem prazo: se nada mandou sair até lá, sai
>   assim mesmo. São 60 pregões no diário, 60 semanas no semanal, 60 candles de
>   4 horas no H4.
>
> Detalhe completo de cada uma, com os testes: [metodologia/regras-de-operacao](metodologia/regras-de-operacao).

> [!warning] Simulado não é o mesmo que ao vivo
> 
> Operação **sem 🧪** foi simulada no histórico com as regras de hoje, aplicadas para trás. As regras foram escolhidas olhando esse mesmo histórico, então esses números carregam viés de escolha — eles mostram o que a regra teria feito, não o que ela vai fazer.
> 
> Operação **com 🧪** começou depois de **23/10/2026**, com as regras congeladas. É o único resultado sem nenhum ajuste ao passado, e é por ele que cada regra está sendo julgada.

Regras de **compra** testadas no Ibovespa 2000–2026 e **congeladas em 23/10/2026**. Daqui para frente cada operação entra no **placar ao vivo**, o único resultado sem nenhum ajuste ao histórico. Nenhuma regra de venda passou nos testes ([por quê](metodologia/o-que-nao-passou)).

> [!tip] 🎯 Operações — último candle
> - 🟢 Entradas Diário · Semáforo N3 após ζ Fundo: **entrada** a 166.376
>
> [Ver operações](operacoes/)

## 🟢 Posições em aberto

| Regra | Entrada | Stop | Agora | Candles | Sai quando | |
|---|---|---|---|---|---|---|
| [Diário · Semáforo N3 após ζ Fundo](operacoes/entradas) | 19/11/26 a 166.376 | ⚡ 164.447 | **+0,0%** | 0 | ⏱️ no fechamento: quando um topo do semáforo nível 3 ficar fixo | 🧪 ao vivo |

> [!warning] ⚡ = vale **durante o pregão** (ordem stop: deixe a ordem na plataforma; o sistema confere a cada 15 min, avisa 🚨 a 0,5% do nível e avisa quando executar) · ⏱️ = só no **fechamento** do candle

*Resultado até o último fechamento. Posições abertas antes de 23/10/2026 são simuladas no histórico e não entram no placar ao vivo.*

> [!info] 🌊 Contexto do IMA para compras
> 🎯 **amplitude saiu da região de fundo** em 09/11 — ζ Topo 0% · ζ Fundo 61% em 19/11
> Informa, não filtra: veja como as compras se saíram em cada contexto no [🏆 Ranking](operacoes/ranking#contexto-do-ima).

## Agora

| Regra | Situação | Nota | Validação ao vivo |
|---|---|---|---|
| [📈 Tendência MME9 · Diário](operacoes/tendencia) | Diário — fora | 🧪 em teste ao vivo | 0 de 10 operações ao vivo |
| [📈 Tendência MME9 · Semanal](operacoes/tendencia) | Semanal — fora | 🧪 em teste ao vivo | 0 de 10 operações ao vivo |
| [🎯 Diário · Nadaraya](operacoes/entradas) | — sem setup | ✅ passou fora da amostra | 0 de 10 operações ao vivo |
| [🎯 Semanal · Semáforo N2](operacoes/entradas) | — sem setup | ✅ o ganho vem do setup | 0 de 10 operações ao vivo |
| [🎯 H4 · Semáforo N2](operacoes/entradas) | — sem setup | 🧪 em teste | 🧪 1 de 10 operações ao vivo · média -0,8% · dentro do esperado |
| [🎯 Diário · Semáforo N3 após ζ Fundo](operacoes/entradas) | 🟢 comprado desde 19/11 (+0,0%) | 🧪 em observação | 0 de 10 operações ao vivo |

## 🧪 Placar ao vivo (desde 23/10/2026)

| Regra | Entrada | Saída | Resultado |
|---|---|---|---|
| H4 · Semáforo N2 | 28/10/26 a 170.947 | 29/10/26 a 169.516 | **-0,8%** |

**Total:** 1 operação(ões), 0 com lucro, soma -0,8%
> [!note]- 📘 Como ler esta página (posições, placar e stops)
> - **🟢 Posições em aberto:** cada compra que está aberta agora, com preço de entrada, stop, resultado até o último fechamento, há quantos candles está aberta e **quando sai**. *Simulada* = começou antes de 23/10/2026 (mesmas regras, mas não conta no placar); **🧪 ao vivo** = começou depois.
> - **Agora:** a situação de cada regra — comprada, aguardando o gatilho (já houve o setup) ou sem setup.
> - **🧪 Placar ao vivo:** só operações encerradas que começaram a partir de 23/10/2026, com as regras congeladas. É o único resultado sem nenhum ajuste ao histórico.
> - **📅 Histórico por ano:** todas as operações simuladas desde 2000 e as ao vivo, ano a ano, por regra.
> - **Validação ao vivo** (critério definido em 23/10/2026, antes de qualquer resultado): com **10 operações ao vivo**, média positiva e resultado fora dos 25% piores que o histórico da regra permitiria → ✅ validada. A partir de 5 operações, se cair entre os 5% piores → ⚠️ abaixo do esperado; com 10, se continuar lá (ou a sequência de perdas for pior que a pior do histórico) → ❌ suspensão sugerida. **Nada é desligado sozinho:** chega um aviso no Telegram e a decisão é sua.
>
> **Stops** — toda operação entra com stop definido; se o preço abre além dele (gap), conta o preço de abertura. **⚡ = vale durante o pregão** (ordem stop) · **⏱️ = só no fechamento do candle**:
>
> | Regra | Stop inicial | Move? | Saída normal |
> |---|---|---|---|
> | Tendência MME9 | ⚡ 10% abaixo da entrada | não | ⏱️ candle fecha abaixo da MME9 → ⚡ ordem stop na mínima dele |
> | Diário · Nadaraya | ⚡ menor mínima dos 5 pregões antes da entrada | não | ⏱️ linha rápida cruza para baixo, ou 60 pregões |
> | Semanal/H4 · Semáforo N2 e ζ → N3 | ⚡ mínima do fundo do semáforo | vai para a entrada quando o lucro iguala o risco | ⏱️ topo do semáforo N3 fixo, ou 60 candles |
>
> Na Tendência e no Nadaraya o stop não acompanha o preço: o lucro é protegido pela **regra de saída**. Stops mais apertados pioraram o resultado nos testes. Tudo que é ⚡ é conferido **a cada 15 min no pregão**, com aviso na hora no Telegram (e 🚨 quando o preço chega a 0,5% do nível); o que é ⏱️ sai na rodada das 19h (o H4 também por volta das 14h). Entradas da Tendência também são ⚡ (ordem stop de compra); as das Entradas do método são ⏱️.


## Páginas

- 🏆 [Ranking das operações](operacoes/ranking) — as regras da que mais rendeu para a que menos rendeu
- 📈 [Tendência MME9](operacoes/tendencia) — só compra, diário e semanal
- 🎯 [Entradas do método](operacoes/entradas) — Nadaraya, Semáforo, H4 e ζ
- 📋 [Últimas operações](operacoes/ultimas-operacoes) — as mais recentes de cada regra
- 📅 [Histórico por ano](operacoes/historico-por-ano) — todas as operações, ano a ano, desde 2000
- 🔔 [Linha do tempo](linha-do-tempo/) — cada ordem, stop e aviso com data e hora, do mais recente ao mais antigo
- 📚 [Regras e testes](metodologia/regras-de-operacao) · 🧪 [O que não passou](metodologia/o-que-nao-passou)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.