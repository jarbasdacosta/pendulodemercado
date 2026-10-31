---
title: "🧭 Larry Williams"
date: 2026-10-30
description: "Os três prazos de Larry Williams lidos no Ibovespa: estrutura, Momentum Index, Trading Index e o rompimento de volatilidade — com o resultado honesto dos testes"
tags: [estudos, amplitude]
---

*Atualizado 30/10/2026 19:04 · fechamento de 30/10/2026.*

> [!warning] Só informação
> Leitura diária das ferramentas de **Larry Williams** (livros *The Secret of Selecting Stocks* e *Long-Term Secrets to Short-Term Trading*). **No teste no Ibovespa quase nada funcionou** (tabela abaixo) — nada aqui é regra do site nem manda alerta. O único gatilho que passou no índice, o **rompimento de 40%**, **não se confirmou no WIN**.

## Hoje, nos três prazos

| Prazo | Ferramenta do Larry | Leitura | Detalhe |
|---|---|---|---|
| **Longo** | Estrutura: topos/fundos de longo prazo | 🟢 **alta** | último topo 14/04/2026 · 199.355 · último fundo 14/08/2026 · 164.835 |
| **Médio** | Estrutura: topos/fundos intermediários | 🔴 **baixa** | fechamento abaixo de **181.562** (último fundo) = baixa · acima de **209.714** (último topo) = alta |
| **Médio** | Trading Index (10 dias) | 1,45 | faixa de fundo intermediário (≥ 1,30) |
| **Médio** | 20 mais negociadas (soma de 3 semanas) | -20 | ≤ −30 compra · ≤ −40 "hipoteque a casa" |
| **Curto** | Estrutura: topos/fundos de curto prazo | 🔴 **baixa** | fechamento abaixo de **203.110** = baixa · acima de **209.245** = alta |
| **Curto** | Momentum Index | -22,6% | sobrevendido (≤ −12,5) · ontem -17,5 · anteontem -18,6 |
| **Curto** | %R de Williams (10 dias) | 98 | sobrevendido (≥ 80) |
| **Curto** | "Espero duas coisas" | nenhuma das duas condições completa | esticado nos últimos 10 pregões + Momentum 2 dias na mesma direção |

> [!example] Rompimento de 40% para o próximo pregão — só leitura (não é regra)
> Compra se o Ibovespa subir **871 pontos acima da abertura** (0,4 × o intervalo de hoje, 2.177 pontos) · stop **6.534 pontos** abaixo da entrada (1 × o intervalo médio de 10 dias) · sai na **primeira abertura com lucro** ou no fechamento do 5º pregão.
> **No WIN não se confirmou:** executando no mini, no mesmo minuto do sinal (2021–hoje, 370 operações), deu +99 pontos por contrato por operação com custo real, mas **igual ao acaso** (24%; 1ª metade +22, 2ª +176). Metade da vantagem do índice some no WIN — a abertura do índice fica parada nos primeiros minutos e engorda o resultado no papel.

![Larry Williams no Ibovespa](graficos/larry_20261030.png)

> [!tip] Como ler o gráfico — as bolinhas só existem DEPOIS
> Cada bolinha está no dia do topo/fundo, mas **nesse dia ninguém sabia** que era um topo: o ponto intermediário só fica conhecido quando o próximo ponto de curto prazo do lado direito se forma (o **✕**, ligado à bolinha por uma linha pontilhada). Um ponto confirmado **não muda nem some** depois — só o mais recente ainda não aparece, porque não foi confirmado. O que dava para operar de verdade são os **▲▼**: a regra compra quando o Ibovespa fecha acima do último topo confirmado e sai quando fecha abaixo do último fundo confirmado (no teste: ~+12%/ano nos dois períodos, mas igual ao acaso).
>
> **Painéis de baixo:** o **Trading Index** e o **%R** estão com o **eixo invertido** — subir no gráfico = força compradora, igual ao preço (Trading Index baixo e %R perto de 0 = fechando nas máximas). No %R, a linha fina é o de 10 dias e a escada grossa é o **%R mensal de 14 meses** (a linha 80 do gráfico é o −80 do texto; o degrau do mês atual ainda muda até o mês fechar).

## 🟡 %R mensal — o indício que sobrou

Testei os três indicadores "modernos" do Larry (%R, Ultimate Oscillator e Williams Vix Fix) no mensal, semanal, diário e H4 contra os topos e fundos principais do Ibovespa. **Só um passou nos dois períodos:** o **%R de Williams de 14 meses saindo da sobrevenda** (volta acima de −80) como sinal de **compra**. Nos topos, nenhum indicador do Larry funcionou, em nenhum tempo gráfico.

> [!note] **%R mensal: -60** (mês fechado 10/2026) — sem sinal; o sinal precisa de um mês fechado abaixo de −80 e depois a volta acima.
> Indício, não regra: 13 sinais desde 2001. Último sinal: **07/2022**.

| | Sinais | Ibovespa 3 meses depois | Um mês qualquer | Acaso |
|---|---|---|---|---|
| Treino 2001–2013 | 8 | **+11,0%** | +3,5% | 6% |
| Teste 2014–hoje | 5 | **+12,3%** | +3,3% | 3% |

Pegou 7 dos 8 fundos principais mensais (virada de 20%), no mês do fundo ou no seguinte — só não pegou 2008. Com tão poucos casos, um ou dois a mais ou a menos mudam a conta.

<details><summary>Todos os sinais desde 2001</summary>

| Mês | Ibovespa | 3 meses depois |
|---|---|---|
| 07/2022 | 103.165 | +12,5% |
| 04/2020 | 80.506 | +27,8% |
| 02/2016 | 42.794 | +13,3% |
| 02/2015 | 51.583 | +2,3% |
| 03/2014 | 50.415 | +5,5% |
| 07/2013 | 48.234 | +12,5% |
| 10/2011 | 58.338 | +8,1% |
| 08/2011 | 56.495 | +0,7% |
| 03/2009 | 40.926 | +25,8% |
| 01/2009 | 39.301 | +20,3% |
| 10/2002 | 10.168 | +7,6% |
| 08/2002 | 10.382 | +1,2% |
| 10/2001 | 11.365 | +11,9% |

</details>

## Como o Larry usa cada prazo

- **Estrutura do mercado (os três swings):** topo de curto prazo = máxima com máximas menores dos dois lados (dias de dentro não contam); topo intermediário = topo de curto prazo com topos de curto prazo menores dos dois lados; topo de longo prazo = o mesmo um nível acima (fundos: o espelho). A tendência de cada prazo vira quando o preço fecha além do último topo ou fundo daquele prazo. *"Compre os recuos a favor da tendência maior."*
- **Curto prazo (1972):** "espero duas coisas" — mercado **esticado** (Momentum Index ou Trading Index) e o **Momentum virando**; e então espera um dia de queda para comprar (alta para vender).
- **Curto prazo (1999):** um **gatilho de preço** (rompimento de volatilidade, Oops!, Smash Day) só quando há um **motivo** (dia da semana, dia do mês, juros caindo, mercado esticado) e a mesma saída sempre: stop + **primeira abertura com lucro**.
- **Médio prazo:** Trading Index de 10 dias na faixa de 1,30 e as 20 mais negociadas da semana muito negativas = fundo intermediário.
- **Longo prazo:** clímax de venda (dois dias de pânico e virada) nos fundos; topo "pare e siga" e divergência da [linha de avanço e declínio](amplitude/avanco-declinio) nos topos; ciclo presidencial e ciclo mestre de 37 anos. *"Rápido para virar comprado, lento para virar vendido."*

## O que o teste mostrou (24/10/2026)

Ibovespa 2001–2026, treino 2001–2013 × teste 2014–hoje, custo incluso, comparado com sorteios (acaso). Passa = efeito na mesma direção e acaso ≤ 10% nos dois períodos.

| Ferramenta | Resultado | Veredito |
|---|---|---|
| **%R de Williams MENSAL saindo da sobrevenda (compra)** | Ibovespa 3 meses depois +11,0% e +12,3% × +3,5% e +3,3% de um mês qualquer (acaso 6% e 3%) | 🟡 **passou — indício** (13 sinais em 25 anos) |
| **Rompimento de 40% (compra)** | +0,14% por operação no treino (acaso 2%) e +0,09% no teste (acaso 0%), ~50–95 operações/ano; estável de 0,2 a 0,5; 15 de 22 anos positivos | 🟡 **passou no índice, NÃO confirmou no WIN** (2021–hoje: +99 pontos/op com custo real, acaso 24%) — fica só como leitura |
| Rompimento na venda, Oops!, Smash Day, GSV, armadilha, virada do mês, dia da semana | não se repetiram no teste | ❌ |
| Juros (DI e juro dos EUA) como motivo/gatilho | não melhoraram nada | ❌ |
| Momentum Index com "as duas condições" (régua do Larry, do treino ou %R) | igual a um dia qualquer; no treino, pior | ❌ |
| Trading Index ≥ 1,30 | treino +5,7% em 60 pregões (acaso 13%); teste só 8 casos, misto | ❌ |
| 20 mais negociadas ≤ −40 | teste +16% em 60 pregões (4 casos, acaso 1%); treino não confirmou | 🟡 só indício |
| Linha de acumulação/distribuição do Larry (divergências) | sem efeito | ❌ |
| Estrutura (comprado com a tendência intermediária em alta, senão CDI) | ~+12%/ano nos dois períodos, queda máx. −26%, mas não ganha do acaso (35–49%) | ❌ não melhor que o acaso |
| Ciclo fundo a fundo (22 pregões → taxa de variação de 11 dias) | 11 de 25 durações renderam mais | ❌ |
| Ciclo presidencial | no Brasil o **1º ano** do mandato foi o melhor (+27% em média) e o 2º o pior — o contrário dos EUA | só descritivo (6 mandatos) |
| Clímax de venda · topo "pare e siga" | sem vantagem | ❌ |

> [!info]- Como é calculado e limites
> - Momentum Index = média de 10 dias de (ações que subiram − que caíram), em % da carteira do Ibovespa. Os limites do Larry (−2.000 e +1.000 na Bolsa de Nova York, ~1.600 ações) viram −12,5% e +6,25%.
> - Trading Index = (subiram ÷ caíram) ÷ (volume em AÇÕES negociadas das que subiram ÷ das que caíram, como no índice de Arms original), pela soma de 10 dias (com ~66 ações o índice de um dia só explode).
> - %R = onde o fechamento está no intervalo de 10 dias (0 = na máxima, 100 = na mínima).
> - Base de ações: a mesma da [📊 Amplitude](amplitude/). Ibovespa do Yahoo (máxima, mínima e fechamento). No Yahoo, de 20% a 39% das ABERTURAS do Ibovespa por ano estão erradas; os testes usaram o BOVA11 e o IBOV do MT5 onde a abertura do Yahoo não presta.

[📊 Amplitude](amplitude/) · [📈 Avanço e declínio](amplitude/avanco-declinio) · [Sinais](sinais-topo-fundo/)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.