---
title: "📈 Tendência MME9"
date: 2026-11-24
pregao: 2026-11-23
tags: [operacoes]
description: "Só compra, diário e semanal: rompimento do candle que fecha acima da MME9"
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

> [!example] 📈 Tendência MME9 — só compra · 🧪 em teste ao vivo desde 23/10/2026
>
> 🌊 **Contexto do IMA para compras:** 🎯 **amplitude saiu da região de fundo** em 09/11 — ζ Topo 0% · ζ Fundo 63% em 23/11 · *informa, não filtra*
>
> **Placar ao vivo:** nenhuma operação encerrada desde 23/10/2026.
>
> | Tempo | Situação | Próximo passo | Histórico (ao ano · maior queda) |
> |---|---|---|---|
> | **Diário** | — fora<br><small>fechou abaixo da MME9 (164.796 × 168.763)</small> | espera fechar acima da MME9 | +13,1% · 35% <small>(comprar e segurar: +8,7% · 60%)</small> |
> | **Semanal** | — fora<br><small>fechou abaixo da MME9 (166.376 × 179.162)</small> | espera fechar acima da MME9 | +8,4% · 29% <small>(comprar e segurar: +8,7% · 57%)</small> |
>
> **Últimas operações** (antes do teste ao vivo = simuladas no histórico)
>
> | Tempo | Entrada | Saída | Resultado | Motivo |
> |---|---|---|---|---|
> | Semanal | 31/08/26 a 176.421 | 03/11/26 a 167.008 | **-5,3%** | rompeu a mínima do candle que fechou abaixo da MME9 |
> | Diário | 02/10/26 a 187.835 | 29/10/26 a 169.052 | **-10,0%** | stop de segurança (−10%) |
> | Diário | 24/08/26 a 171.980 | 24/09/26 a 185.676 | **+8,0%** | rompeu a mínima do candle que fechou abaixo da MME9 |
> | Semanal | 04/08/26 a 178.719 | 10/08/26 a 172.131 | **-3,7%** | rompeu a mínima do candle que fechou abaixo da MME9 |
> | Diário | 31/07/26 a 177.159 | 07/08/26 a 175.515 | **-0,9%** | rompeu a mínima do candle que fechou abaixo da MME9 |
> | Diário | 23/07/26 a 177.641 | 30/07/26 a 173.885 | **-2,1%** | rompeu a mínima do candle que fechou abaixo da MME9 |
>
> 🌡️ **Radar de grande queda:** 13% (liga em 30%) · fora da zona de grande queda. *Só contexto: no estudo ele achou a região dos grandes fundos, mas avisa cedo demais para servir de compra.*
>
> <small>Atualizado 23/11 19:00. Histórico desde 2000, índice à vista, custo 0,05% por operação, sem impostos (no WIN o comprado paga o carrego dos juros).</small>
>
> *Regra: um candle **fecha acima da MME9** → compra se o preço passar da máxima dele em até 3 candles. Um candle **fecha abaixo da MME9** → zera se o preço passar da mínima dele em até 3 candles. Stop de segurança 10% abaixo da entrada. No semanal o sinal só conta com a semana fechada, mas a ordem pode executar em qualquer dia. Funcionou com médias de 5 a 50 (não é ajuste fino), mas o histórico não é teste fora da amostra: o placar ao vivo é o que vale. [Metodologia](metodologia/regras-de-operacao#tendência-mme9). Leitura educacional do método, não recomendação.*

[← Operações](operacoes/) · [Regras e números](metodologia/regras-de-operacao#tendência-mme9)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.