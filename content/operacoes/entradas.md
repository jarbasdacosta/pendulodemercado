---
title: "🎯 Entradas do método"
date: 2026-11-27
pregao: 2026-11-26
tags: [operacoes]
description: "Compra depois de um sinal de fundo: Nadaraya no diário, semáforo no semanal e H4"
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

> [!tip] 🎯 Entradas do método — 🧪 em teste ao vivo desde 23/10/2026 (só compra)
>
> 🌊 **Contexto do IMA para compras:** 🎯 **amplitude saiu da região de fundo** em 11/11 — ζ Topo 0% · ζ Fundo 66% em 26/11 · *informa, não filtra*
>
> **Placar ao vivo** (só as regras que avisam no Telegram): 1 operação(ões), 0 com lucro, média -0,8%, soma -0,8%
>
> | Regra | Situação | Detalhes | Nota |
> |---|---|---|---|
> | [Diário · Nadaraya](tecnico/#diário) | — sem setup | espera um sinal de fundo | ✅ passou fora da amostra |
> | [Semanal · Semáforo N2](tecnico/#semanal) | — sem setup | espera um sinal de fundo | ✅ o ganho vem do setup |
> | [H4 · Semáforo N2](sinais-topo-fundo/todos-os-sinais#h4) | — sem setup | espera um sinal de fundo | 🧪 em teste |
>
> **Últimas operações** (as anteriores ao teste ao vivo são simuladas no histórico)
>
> | Regra | Entrada | Saída | Resultado | Motivo |
> |---|---|---|---|---|
> | H4 · Semáforo N2 🧪 | 28/10/26 14h a 170.947 | 29/10/26 10h a 169.516 | **-0,8%** | stop |
> | Diário · Nadaraya | 25/08/26 a 174.577 | 29/10/26 a 169.186 | **-3,1%** | saída do método (linha rápida cruzou para baixo) |
> | H4 · Semáforo N2 | 01/10/26 14h a 187.243 | 20/10/26 10h a 208.658 | **+11,4%** | saída do método (topo fixo do semáforo nível 3) |
> | H4 · Semáforo N2 | 21/09/26 14h a 186.753 | 25/09/26 10h a 183.242 | **-1,9%** | stop |
> | H4 · Semáforo N2 | 19/08/26 10h a 168.034 | 16/09/26 10h a 185.896 | **+10,6%** | saída do método (topo fixo do semáforo nível 3) |
> | H4 · Semáforo N2 | 12/06/26 14h a 171.134 | 15/06/26 14h a 171.134 | **+0,0%** | stop no preço de entrada |
> | H4 · Semáforo N2 | 05/05/26 10h a 186.583 | 07/05/26 10h a 186.583 | **+0,0%** | stop no preço de entrada |
> | Semanal · Semáforo N2 | semana de 17/02/25 a 127.128 | semana de 13/04/26 a 195.734 | **+54,0%** | limite de 60 candles |
>
> <small>Atualizado 26/11 19:04 · checado no pregão às 16:00. Nota: ✅ passou no teste fora da amostra (walk-forward 2008–2026) · 🧪 em teste (H4, com aviso no Telegram) ou em observação (ζ, sem aviso) · 🧪 na tabela = operação do teste ao vivo.</small>
>
> *Regras: depois de um sinal de fundo, o Diário entra quando o Nadaraya vira para cima; o Semanal e o H4 entram quando um fundo do semáforo fica fixo. Stop e saída de cada regra na [metodologia](metodologia/regras-de-operacao#entradas-do-método). Nenhuma regra de venda passou no teste. Os números do histórico têm viés de escolha (overfitting); o placar ao vivo é o que vale. Leitura educacional do método, não recomendação.*

### 📚 O que os testes dizem de cada regra

- **🎯 Diário · Nadaraya** · ✅ passou fora da amostra: fora da amostra (walk-forward 2008–2026): cerca de +2% a +3% por operação; poucas operações por ano
- **🎯 Semanal · Semáforo N2** · ✅ o ganho vem do setup: fora da amostra: cerca de +5% por operação; comprar após sinal semanal funcionou com quase qualquer regra
- **🎯 H4 · Semáforo N2** · 🧪 em teste: testado em 5 anos (MT5, out/2021–out/2026): positivo no treino (+1,3% por operação, 23 op) e no teste (+3,1%, 22 op), rendeu mais que o Ibovespa nos dois; acaso 11% e 0% — ainda curto para o ranking (menos de 10 anos)

[← Operações](operacoes/) · [Regras e testes](metodologia/regras-de-operacao#entradas-do-método)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.