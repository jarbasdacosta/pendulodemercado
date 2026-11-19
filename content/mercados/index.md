---
title: "🌍 Mercados"
date: 2026-11-19
tags: [mercados]
description: "O que mandou no dia: internacional, Brasil, a sincronia entre Ibovespa, dólar e juro, os índices da B3 e onde está — ou não está — a vantagem"
---

> [!warning] Divergência entre números desta página
>
> O fechamento do Ibovespa é de **2026-11-18**, mas as variações de dia, mês, ano e 360 dias são calculadas sobre a série que termina em **2026-11-17**. Os dois números são corretos, só não são do mesmo pregão — não os compare entre si.
>
> Isto é um defeito, não uma característica — está dito aqui porque esconder seria pior.

> [!note] A que pregão se refere cada bloco
>
> **Internacional**: 2026-11-19 · **Ibovespa (fechamento oficial)**: 2026-11-18 · **Ibovespa (série das variações)**: 2026-11-17 · **Dólar (PTAX)**: 2026-11-18 · **Curva de juros**: 2026-11-18 · **O lado (painel de vantagem)**: 2026-11-17
>
> Blocos com datas diferentes é o normal: as bolsas lá fora negociam enquanto a B3 ainda não publicou o boletim do dia, e a PTAX sai no meio da tarde. O que não vale é comparar número de um com número de outro.

## O lado de hoje

> [!example] ⚪ nenhum sinal passou da trava hoje — sem vantagem medível, ficar de fora é a posição
>
> Medido em 1022 pregões (2022-10-13 a 2026-11-17), 4 sinais testados.
>
> **Por que a régua é dura:** testando 4 sinais a 0.05, a chance de um passar por sorte seria ~19%. Por isso a exigência de cada sinal é p < 0.0125, e não os 5% de costume. Sem essa correção o site viraria uma máquina de achar padrão onde não tem.
>
> **Quando nada passa, não operar é a posição.** Isto mede o que aconteceu depois de dias parecidos; o risco é de quem opera.

| sinal | situação | lado | base medida | o que NÃO fazer |
|---|---|---|---|---|
| configuração do dia (bolsa, dólar, juro) | bolsa sobe com dolar em alta e juro em queda · Ibovespa +0.31%, dólar +0.92%, juro -14 p.b | FORA | 105 casos · subiu em 50,5% (± 4,9 p.p.) · p=0,922 | operar a configuração como se ela mandasse: o teste mede o dia seguinte, não a semana |
| tendência (preço contra as médias de 21 e 63 dias) | abaixo da média de 21 dias · média de 21 abaixo da de 63 | FORA | 210 casos · subiu em 50,5% (± 3,5 p.p.) · p=0,890 | usar isso para o intradia: a medida é de 5 pregões |
| o dólar ainda informa a bolsa? (últimos 126 pregões) | nos últimos 126 pregões, depois de o dólar subir o Ibovespa ficou em -0.064% no dia seguin | FORA | 126 casos · subiu em 43,7% (± 4,5 p.p.) · p=0,154 | tratar o dólar como termômetro da bolsa quando esta medida não passar — o elo clássico nem sempre está ligado |
| o juro informa a bolsa? (últimos 126 pregões) | juro de hoje -14 p.b. | FORA | 126 casos · subiu em 42,9% (± 4,5 p.p.) · p=0,109 | inverter a leitura num dia de Copom ou de leilão do Tesouro: ali o juro reage a evento, não a risco |
| tamanho do dia (volatilidade) | movimento de 0.31% contra 0.86% típicos de 21 dias — abaixo do normal | NÃO DÁ LADO · DIMENSIONA | razão 0.36 contra a mediana de 21 dias | dia parado costuma anteceder dia grande; não confundir calma com segurança |

## Brasil

**Ibovespa** · fechamento oficial da B3 em 2026-11-18: **167.537** pontos

| | dia | mês | ano | 360 dias |
|---|---|---|---|---|
| Ibovespa 🟢 | 0,31% | 1,13% | 5,39% | 9,72% |
| Dólar (PTAX) 🟢 | 0,43% | 7,18% | 5,59% | 7,79% |
| DI 2030 🔴 | -14 p.b. | -18 p.b. | 186 p.b. | 217 p.b. |

<small>Ibovespa e DI pela série do MT5 (fecha em 2026-11-17); dólar pela PTAX do Banco Central em 2026-11-18, que é a taxa oficial e não tem salto de rolagem como o futuro contínuo. Juro em pontos-base, não em porcentagem de si mesmo: de 14,00% para 15,00% são 100 p.b., não “+7%”.</small>

**Curva de juros** · 43 vencimentos negociados em 2026-11-18

| 1 ano | 2 anos | 3 anos | 5 anos | 10 anos | inclinação 10a−1a |
|---|---|---|---|---|---|
| 14,43% | 14,90% | 15,09% | 15,21% | 15,19% | **76 p.b.** |

> [!note] A inclinação era de -23 p.b. em 2026-10-15 e está em 76 p.b. — 99 p.b. de mudança.
> 
> **O que isso significa:** curva com inclinação negativa é o mercado pagando mais no curto que no longo, o que costuma acompanhar expectativa de corte de juro à frente. Inclinação positiva é o contrário: prêmio para carregar prazo. A virada de uma para outra não é ajuste fino, é mudança de como o mercado enxerga o risco de prazo.
> 
> *Medido: os dois números e a diferença. Interpretação: o parágrafo acima. O risco de agir é de quem opera.*

> A leitura da curva contra o que os economistas esperam está na página [📉 Juros](/juros).

## Sincronia: Ibovespa, dólar e juro andam juntos?

> [!example] 🟡 **bolsa sobe com dolar em alta e juro em queda** em 2026-11-17
>
> Ibovespa +0,31% · dólar +0,92% · juro -14 p.b.
>
> Nos últimos 21 pregões, **13 de 21** dias tiveram os três em configuração coerente.

| par | correlação (postos) | percentil histórico | Pearson | sem o dia mais influente |
|---|---|---|---|---|
| Ibovespa × dólar | **-0.421** | 59 | -0.864 | -0.198 ⚠️ |
| Ibovespa × juro | **-0.686** | 26 | -0.948 | -0.545 ⚠️ |

<small>⚠️ marca o par em que **um único dia carrega o número**: tirando aquele dia da janela, a correlação muda de patamar. Por isso o valor principal é o de postos (Spearman), que resiste a um ponto fora da curva, e o percentil é calculado contra ele. Vender “sincronia histórica” que na verdade é um pregão isolado seria estatística com cara de manchete.</small>

> [!note] Desde 2026-10-26 (15 pregões): Ibovespa × dólar **-0.122** · Ibovespa × juro **-0.535**.
> 
> reeleicao: Ibovespa -13,88%, dolar +8,8%, curva de DI +~260 p.b. em um dia, com circuit breaker.
> 
> **Para quem opera:** quando o elo com o dólar está fraco, usar o dólar como termômetro da bolsa é usar um termômetro desligado. O par com correlação mais forte é o que está mandando no período.

## Internacional

**Os que leem o mundo primeiro** — ouro, petróleo, cobre, dólar index e juro dos Estados Unidos.

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ouro 🔴 | 3.735,10 US$/oz | -0,18% | -4,20% | -13,96% | -8,77% |
| Cobre 🟢 | 5,66 US$/lb | 0,03% | -12,35% | 0,55% | 14,09% |
| Petróleo Brent 🔴 | 89,78 US$/bbl | -2,36% | -23,68% | 47,54% | 41,68% |
| Dollar Index 🔴 | 103,67 pontos | -0,19% | 1,75% | 5,48% | 3,52% |
| Juro EUA 10 anos 🔴 | 5,07 % a.a. | -4 p.b. | 14 p.b. | 90 p.b. | 100 p.b. |

<small>Taxas de juro variam em **pontos-base**, não em porcentagem de si mesmas: um juro que vai de 4,16% a 5,10% subiu 94 p.b.; dizer “+22%” seria tecnicamente verdade e praticamente inútil.</small>

## Commodities, por família

### Metais preciosos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Platina 🟢 | 1.372,80 US$/oz | 0,93% | -4,53% | -32,52% | -11,00% |
| Paládio 🟢 | 956,00 US$/oz | 0,62% | -2,90% | -41,32% | -31,87% |
| Ouro 🔴 | 3.735,10 US$/oz | -0,18% | -4,20% | -13,96% | -8,77% |
| Prata 🟢 | 45,01 US$/oz | 0,04% | -8,31% | -35,82% | -10,50% |

### Metais industriais

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Aço laminado 🟢 | 1.423,00 US$/t | 5,25% | 5,64% | 52,19% | 66,43% |
| Alumínio 🔴 | 2.858,75 US$/t | -2,06% | -13,65% | -1,63% | 4,31% |
| Minério de ferro 🟢 | 90,72 US$/t | 0,15% | 0,01% | -15,32% | -12,99% |
| Cobre 🟢 | 5,66 US$/lb | 0,03% | -12,35% | 0,55% | 14,09% |

### Energia

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Óleo de aquecimento 🔴 | 3,86 US$/gal | -2,86% | -19,46% | 81,95% | 60,36% |
| Petróleo Brent 🔴 | 89,78 US$/bbl | -2,36% | -23,68% | 47,54% | 41,68% |
| Gasolina 🔴 | 2,46 US$/gal | -1,02% | -25,83% | 44,04% | 29,52% |
| Gás natural 🔴 | 3,34 US$/MMBtu | -1,01% | 15,18% | -9,44% | -26,62% |
| Petróleo WTI 🔴 | 82,80 US$/bbl | -0,55% | -20,48% | 44,20% | 40,72% |

### Grãos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Aveia 🟢 | 361,00 ¢/bu | 3,00% | 5,02% | 19,34% | 19,93% |
| Trigo 🟢 | 585,50 ¢/bu | 2,72% | -2,98% | 15,48% | 12,11% |
| Milho 🟢 | 447,00 ¢/bu | 2,64% | -0,17% | 1,53% | 5,49% |
| Farelo de soja 🔴 | 332,60 US$/t | -0,98% | 2,46% | 12,94% | 5,86% |
| Óleo de soja 🟢 | 60,25 ¢/lb | 0,62% | -8,57% | 25,34% | 20,07% |
| Soja 🟢 | 1.219,25 ¢/bu | 0,21% | -0,25% | 18,32% | 8,55% |
| Arroz 🟢 | 18,40 US$/cwt | 0,16% | 5,51% | 91,71% | 76,11% |

### Softs

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Algodão 🟢 | 79,60 ¢/lb | 6,18% | 2,27% | 23,85% | 29,56% |
| Suco de laranja 🔴 | 129,55 ¢/lb | -4,04% | 12,31% | -36,87% | -9,02% |
| Cacau 🔴 | 4.847,00 US$/t | -3,64% | -11,11% | -20,08% | -4,66% |
| Café arábica 🔴 | 280,95 ¢/lb | -1,97% | -2,18% | -19,44% | -29,76% |
| Açúcar 🟢 | 18,06 ¢/lb | 0,11% | -6,71% | 20,32% | 21,86% |

### Proteína

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Suíno (EUA) 🔴 | 51,35 ¢/lb | -3,30% | -12,78% | -39,66% | -34,00% |
| Boi gordo (EUA) 🟢 | 219,77 ¢/lb | 0,46% | -1,89% | -5,27% | 2,48% |
| Bezerro (EUA) 🟢 | 337,00 ¢/lb | 0,42% | -0,23% | -3,78% | 7,25% |

> As agrícolas negociadas **na B3**, com a curva e o que ela diz, estão na página [🌾 Agro](/agro). Aqui é o preço lá fora, que é o que chega antes.

## Índices da B3

Os 33 índices publicados pela B3 no pregão de 2026-11-18, do que mais subiu ao que mais caiu no dia.

| índice | fechamento | no dia | mínimo | máximo |
|---|---|---|---|---|
| BDRX 🟢 | 29.429 | 1,44% | 28.979 | 29.622 |
| IMATBASICOS 🟢 | 6.243 | 0,66% | 6.196 | 6.297 |
| INDX 🟢 | 31.288 | 0,44% | 31.130 | 31.622 |
| ICONSUMO 🔴 | 2.660 | -0,15% | 2.653 | 2.695 |
| IVBX2 🔴 | 17.683 | -0,62% | 17.619 | 17.891 |
| IBHB 🔴 | 1.607 | -0,62% | 1.603 | 1.644 |
| IFIL 🔴 | 1.552 | -0,77% | 1.548 | 1.565 |
| SMALL CAP 🔴 | 2.004 | -0,79% | 2.000 | 2.034 |
| IFIX 🔴 | 3.513 | -0,82% | 3.506 | 3.543 |
| IBLV 🔴 | 1.315 | -0,83% | 1.309 | 1.331 |
| IBEW 🔴 | 1.411 | -0,84% | 1.406 | 1.430 |
| AGFS 🔴 | 1.391 | -0,86% | 1.386 | 1.412 |
| GPTW 🔴 | 1.249 | -0,95% | 1.247 | 1.268 |
| IBOV SD TR 🔴 | 1.915 | -0,98% | 1.915 | 1.942 |
| IDIVERSA B3 🔴 | 1.408 | -1,05% | 1.404 | 1.429 |
| ISE 🔴 | 4.017 | -1,11% | 4.011 | 4.078 |
| IEE 🔴 | 121.934 | -1,18% | 121.425 | 123.384 |
| ICO2 🔴 | 2.943 | -1,18% | 2.929 | 2.992 |
| IBEP 🔴 | 1.652 | -1,20% | 1.650 | 1.676 |
| I DIVIDENDOS 🔴 | 11.778 | -1,20% | 11.759 | 11.958 |
| UTILITIES 🔴 | 17.614 | -1,29% | 17.582 | 17.844 |
| IBOVESPA 🔴 | 167.537 | -1,32% | 167.099 | 170.259 |
| IBRASIL 🔴 | 6.559 | -1,35% | 6.542 | 6.665 |
| IBRX100 🔴 | 70.601 | -1,37% | 70.411 | 71.749 |
| IBRX50 🔴 | 28.321 | -1,38% | 28.232 | 28.785 |
| IGNM 🔴 | 4.361 | -1,38% | 4.350 | 4.428 |
| MIDLARGE CAP 🔴 | 3.486 | -1,41% | 3.475 | 3.543 |
| IGC TRADE 🔴 | 7.440 | -1,42% | 7.419 | 7.565 |
| IGC 🔴 | 25.826 | -1,43% | 25.750 | 26.253 |
| ITAG 🔴 | 36.069 | -1,44% | 35.970 | 36.679 |
| IBEE 🔴 | 4.701 | -1,57% | 4.680 | 4.788 |
| IMOBILIARIO 🔴 | 1.102 | -1,87% | 1.099 | 1.125 |
| IFINANCEIRO 🔴 | 16.334 | -2,43% | 16.303 | 16.763 |

<small>A variação do dia é calculada do próprio boletim (fechamento contra abertura do mesmo pregão), e não contra o fechamento anterior — é o que a B3 publica nesta tabela.</small>

## Anomalias do dia

| ativo | movimento | desvio | onde |
|---|---|---|---|
| **Aço laminado** | 5,25% | z 5.853462288559081 | internacional |
| **Algodão** | 6,18% | z 3.929721452824675 | internacional |
| **CPER (Cobre)** | volume 3,04× a mediana | True | fluxo de ETF |
| **DBB (Metais industriais)** | volume 2,30× a mediana | True | fluxo de ETF |
| **BNO (Petróleo Brent)** | volume 0,37× a mediana | True | fluxo de ETF |
| **CORN (Milho)** | volume 1,93× a mediana | True | fluxo de ETF |
| **SOYB (Soja)** | volume 1,90× a mediana | True | fluxo de ETF |
| **WEAT (Trigo)** | volume 1,83× a mediana | True | fluxo de ETF |
| **EWZS (Small caps Brasil)** | volume 0,30× a mediana | True | fluxo de ETF |

<small>O desvio é medido contra a mediana e o MAD dos últimos 252 pregões, não contra o desvio-padrão: um único dia extremo — como 26/10/2026 — infla o desvio-padrão a ponto de nenhum dia normal mais parecer anômalo, e o alerta ficaria cego justamente depois de um susto.</small>

---

## De onde vem cada número, e de quando

| bloco | fonte | coletado |
|---|---|---|
| Internacional e commodities | Yahoo Finance · atraso de ~15 min, cotação revisável | 19/11 às 06:30 |
| Ibovespa (fechamento) | B3 · Boletim Diário do Mercado | 19/11 às 06:31 |
| Dólar | Banco Central · PTAX de venda (série SGS 1) | 19/11 às 06:31 |
| Curva de juros | B3 · boletim, 43 vencimentos de DI1 | 19/11 às 06:31 |
| Índices da B3 | B3 · acervo diário de índices | 2026-11-18 |
| O lado | medido sobre o painel do próprio site | 19/11 às 06:32 |

Os horários em que cada página do site atualiza estão em [🕐 Quando este site atualiza](/horarios).

> [!warning] O que esta página não decide por você
>
> Os números acima são medição. O que fazer com eles é leitura de risco,
> e o risco é de quem opera. Quando nenhuma vantagem passa das travas,
> a página diz isso em vez de inventar convicção — e ficar de fora
> também é posição.

