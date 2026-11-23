---
title: "🏆 Ranking das operações"
date: 2026-11-23
pregao: 2026-11-19
tags: [operacoes]
description: "As regras de compra do site ordenadas pelo resultado, com treino, teste e placar ao vivo"
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

*Atualizado 23/11/2026 15:00 · histórico simulado com as regras congeladas em 23/10/2026 + placar ao vivo.*

As regras de compra do site, **da que mais rendeu para a que menos rendeu**. O resultado é por operação, no índice à vista, sem custos e sem juros compostos (a soma é só a soma das operações). **Treino** = entradas de 2001 a 2013 e **teste** = 2014 em diante: uma regra só é confiável se ganhou nos dois. O único resultado sem nenhum ajuste ao histórico é o **placar ao vivo**.

## 🏆 Ranking por ganho por ano

| # | Regra | Desde | Operações | Média por operação | Acerto | Soma | **Por ano** | Treino × teste | Melhor · pior | Ao vivo |
|---|---|---|---|---|---|---|---|---|---|---|
| 🥇 | [🎯 Semanal · Semáforo N2](operacoes/entradas) | 2000 | 29 (1,1/ano) | +15,8% | 48% | +459,5% | **+17,7%** | +18,4% × +13,4% ✅ | +122,6% · -16,5% | — |
| 🥈 | [📈 Tendência MME9 · Diário](operacoes/tendencia) | 2000 | 380 (14,3/ano) | +1,0% | 40% | +391,2% | **+14,7%** | +1,2% × +0,8% ✅ | +22,4% · -10,0% | — |
| 🥉 | [📈 Tendência MME9 · Semanal](operacoes/tendencia) | 2000 | 90 (3,4/ano) | +3,0% | 48% | +265,7% | **+10,0%** | +4,1% × +1,9% ✅ | +60,2% · -10,0% | — |
| 4 | [🎯 Diário · Nadaraya](operacoes/entradas) | 2000 | 81 (3,1/ano) | +3,2% | 46% | +259,9% | **+9,8%** | +3,9% × +2,6% ✅ | +36,6% · -11,2% | — |
| · | [🎯 H4 · Semáforo N2](operacoes/entradas) *(poucos anos)* | 2024 | 24 (8,5/ano) | +2,7% | 38% | +65,6% | **+23,2%** | — × +2,7% | +14,9% · -1,9% | 1 op · -0,8% |
| · | [🎯 Diário · Semáforo N3 após ζ Fundo](operacoes/entradas) *(poucos anos)* | 2024 | 4 (1,7/ano) | +0,3% | 50% | +1,0% | **+0,4%** | — × +0,3% | +2,4% · -1,5% | — |

*✅ = média positiva no treino e no teste, com pelo menos 5 operações em cada. **Por ano** = soma ÷ anos desde a primeira operação. Regras com menos de 10 anos de dados ficam no fim, sem posição: com poucos anos o resultado pode parecer melhor do que é.*

## Ranking por média por operação

| # | Regra | Média por operação | Mediana | Acerto | Operações | Situação |
|---|---|---|---|---|---|---|
| 1 | 🎯 Semanal · Semáforo N2 | **+15,8%** | +0,0% | 48% | 29 | ✅ o ganho vem do setup |
| 2 | 🎯 Diário · Nadaraya | **+3,2%** | -1,1% | 46% | 81 | ✅ passou fora da amostra |
| 3 | 📈 Tendência MME9 · Semanal | **+3,0%** | -0,4% | 48% | 90 | 🧪 em teste ao vivo (o histórico não é teste fora da amostra) |
| 4 | 🎯 H4 · Semáforo N2 | **+2,7%** | +0,0% | 38% | 24 | 🧪 em teste |
| 5 | 📈 Tendência MME9 · Diário | **+1,0%** | -0,8% | 40% | 380 | 🧪 em teste ao vivo (o histórico não é teste fora da amostra) |
| 6 | 🎯 Diário · Semáforo N3 após ζ Fundo | **+0,3%** | +0,1% | 50% | 4 | 🧪 em observação · sem aviso |

## Como carteira (Tendência)

- **📈 Tendência MME9 · Diário**: +13,1% ao ano, maior queda 35% (comprar e segurar +8,7% e 60%)
- **📈 Tendência MME9 · Semanal**: +8,4% ao ano, maior queda 29% (comprar e segurar +8,9% e 57%)

## Contexto do IMA

Como as compras de cada regra se saíram conforme o **ζ do pregão anterior** (estudo de 23/10/2026). **Informa, não filtra:** nenhum desses contextos passou no critério rigoroso; aparecem nos avisos de compra para você pesar na decisão.

**Agora:** 🎯 **amplitude saiu da região de fundo** em 09/11 — ζ Topo 0% · ζ Fundo 61% em 19/11

| Regra | Normal | 🔪 queda forte ativa | 🔴 ζ Topo no vermelho | 🚀 Força recente |
|---|---|---|---|---|
| 📈 Tendência MME9 · Diário | +1,0% (248) | +0,2% (57) | -0,9% (14) | +2,0% (55) |
| 📈 Tendência MME9 · Semanal | +3,3% (63) | -0,9% (9) | -0,1% (2) | +4,0% (15) |
| 🎯 Diário · Nadaraya | +2,8% (56) | -0,7% (11) | -1,8% (1) | +8,1% (11) |
| 🎯 Semanal · Semáforo N2 | +17,2% (17) | +26,3% (3) | +3,8% (1) | +11,1% (8) |
| 🎯 H4 · Semáforo N2 | +2,5% (13) | -0,4% (3) | +14,9% (1) | +2,7% (7) |
| 🎯 Diário · Semáforo N3 após ζ Fundo | +0,3% (3) | +0,0% (1) | — | — |

*Média por operação (nº de operações). Uma compra pode estar em mais de um contexto ao mesmo tempo.*

[← Operações](operacoes/) · [📅 Histórico por ano](operacoes/historico-por-ano) · [📚 Regras e testes](metodologia/regras-de-operacao)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.