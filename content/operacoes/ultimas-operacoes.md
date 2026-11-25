---
title: "📋 Últimas operações"
date: 2026-11-25
pregao: 2026-11-23
tags: [operacoes]
description: "Operações recentes de todas as regras de compra"
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

Operações recentes de todas as regras. 🧪 = operação do teste ao vivo (desde 23/10/2026); as demais são simuladas no histórico com as mesmas regras.

| Regra | Entrada | Saída | Resultado | Motivo |
|---|---|---|---|---|
| Tendência MME9 · Semanal | 31/08/26 a 176.421 | 03/11/26 a 167.008 | **-5,3%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| H4 · Semáforo N2 🧪 | 28/10/26 14h a 170.947 | 29/10/26 10h a 169.516 | **-0,8%** | stop |
| Tendência MME9 · Diário | 02/10/26 a 187.835 | 29/10/26 a 169.052 | **-10,0%** | stop de segurança (−10%) |
| Diário · Nadaraya | 25/08/26 a 174.577 | 29/10/26 a 169.186 | **-3,1%** | saída do método (linha rápida cruzou para baixo) |
| H4 · Semáforo N2 | 01/10/26 14h a 187.243 | 20/10/26 10h a 208.658 | **+11,4%** | saída do método (topo fixo do semáforo nível 3) |
| H4 · Semáforo N2 | 21/09/26 14h a 186.753 | 25/09/26 10h a 183.242 | **-1,9%** | stop |
| Tendência MME9 · Diário | 24/08/26 a 171.980 | 24/09/26 a 185.676 | **+8,0%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| H4 · Semáforo N2 | 19/08/26 10h a 168.034 | 16/09/26 10h a 185.896 | **+10,6%** | saída do método (topo fixo do semáforo nível 3) |
| Tendência MME9 · Semanal | 04/08/26 a 178.719 | 10/08/26 a 172.131 | **-3,7%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Tendência MME9 · Diário | 31/07/26 a 177.159 | 07/08/26 a 175.515 | **-0,9%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Tendência MME9 · Diário | 23/07/26 a 177.641 | 30/07/26 a 173.885 | **-2,1%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Tendência MME9 · Semanal | 13/07/26 a 177.868 | 20/07/26 a 173.285 | **-2,6%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Tendência MME9 · Diário | 10/07/26 a 172.933 | 17/07/26 a 173.537 | **+0,3%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Tendência MME9 · Diário | 23/06/26 a 170.750 | 08/07/26 a 171.417 | **+0,4%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Tendência MME9 · Diário | 12/06/26 a 171.927 | 16/06/26 a 169.993 | **-1,1%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| H4 · Semáforo N2 | 12/06/26 14h a 171.134 | 15/06/26 14h a 171.134 | **+0,0%** | stop no preço de entrada |
| H4 · Semáforo N2 | 05/05/26 10h a 186.583 | 07/05/26 10h a 186.583 | **+0,0%** | stop no preço de entrada |
| Tendência MME9 · Semanal | 31/03/26 a 186.401 | 07/05/26 a 184.504 | **-1,0%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Tendência MME9 · Diário | 25/03/26 a 182.973 | 23/04/26 a 192.687 | **+5,3%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Semanal · Semáforo N2 | semana de 17/02/25 a 127.128 | semana de 13/04/26 a 195.734 | **+54,0%** | limite de 60 candles |
| Tendência MME9 · Semanal | 12/08/25 a 137.007 | 19/03/26 a 177.322 | **+29,4%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Diário · Nadaraya | 20/10/25 a 144.509 | 19/01/26 a 164.849 | **+14,1%** | limite de 60 candles |
| Diário · Nadaraya | 12/06/25 a 137.800 | 15/07/25 a 135.250 | **-1,9%** | saída do método (linha rápida cruzou para baixo) |
| Tendência MME9 · Semanal | 22/04/25 a 130.091 | 14/07/25 a 135.528 | **+4,2%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Diário · Nadaraya | 14/04/25 a 129.454 | 09/06/25 a 135.699 | **+4,8%** | saída do método (linha rápida cruzou para baixo) |
| Tendência MME9 · Semanal | 14/03/25 a 125.822 | 07/04/25 a 126.466 | **+0,5%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Tendência MME9 · Semanal | 14/02/25 a 127.532 | 07/03/25 a 122.659 | **-3,8%** | rompeu a mínima do candle que fechou abaixo da MME9 |
| Diário · Nadaraya | 11/12/24 a 129.593 | 12/12/24 a 125.833 | **-2,9%** | stop |
| Diário · Nadaraya | 26/11/24 a 129.922 | 28/11/24 a 126.594 | **-2,6%** | stop |
| Semanal · Semáforo N2 | semana de 22/07/24 a 127.492 | semana de 04/11/24 a 127.492 | **+0,0%** | stop no preço de entrada |
| Semanal · Semáforo N2 | semana de 20/05/24 a 124.306 | semana de 27/05/24 a 123.397 | **-0,7%** | stop |
| Semanal · Semáforo N2 | semana de 06/11/23 a 120.636 | semana de 18/03/24 a 127.027 | **+5,3%** | saída do método (topo fixo do semáforo nível 3) |
| Semanal · Semáforo N2 | semana de 15/08/22 a 111.496 | semana de 09/10/23 a 115.754 | **+3,8%** | limite de 60 candles |
| Semanal · Semáforo N2 | semana de 03/01/22 a 102.719 | semana de 09/05/22 a 102.719 | **+0,0%** | stop no preço de entrada |

[← Operações](operacoes/) · [📅 Histórico por ano](operacoes/historico-por-ano)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.