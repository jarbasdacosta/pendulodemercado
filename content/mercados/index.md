---
title: "🌍 Mercados"
date: 2026-11-20
tags: [mercados]
description: "O que mandou no dia: internacional, Brasil, a sincronia entre Ibovespa, dólar e juro, os índices da B3 e onde está — ou não está — a vantagem"
---

> [!note] A que pregão se refere cada bloco
>
> **Internacional**: 2026-11-20 · **Ibovespa (fechamento oficial)**: 2026-11-18 · **Dólar (PTAX)**: 2026-11-19 · **Curva de juros**: 2026-11-19 · **O lado (painel de vantagem)**: 2026-11-18
>
> Blocos com datas diferentes é o normal: as bolsas lá fora negociam enquanto a B3 ainda não publicou o boletim do dia, e a PTAX sai no meio da tarde. O que não vale é comparar número de um com número de outro.

## O lado de hoje

> [!example] ⚪ nenhum sinal passou da trava hoje — sem vantagem medível, ficar de fora é a posição
>
> Medido em 1022 pregões (2022-10-14 a 2026-11-18), 4 sinais testados.
>
> **Por que a régua é dura:** testando 4 sinais a 0.05, a chance de um passar por sorte seria ~19%. Por isso a exigência de cada sinal é p < 0.0125, e não os 5% de costume. Sem essa correção o site viraria uma máquina de achar padrão onde não tem.
>
> **Quando nada passa, não operar é a posição.** Isto mede o que aconteceu depois de dias parecidos; o risco é de quem opera.

| sinal | situação | lado | base medida | o que NÃO fazer |
|---|---|---|---|---|
| configuração do dia (bolsa, dólar, juro) | risco saindo · Ibovespa -1.34%, dólar +0.43%, juro +18 p.b. | FORA | 220 casos · subiu em 55,5% (± 3,4 p.p.) · p=0,106 | operar a configuração como se ela mandasse: o teste mede o dia seguinte, não a semana |
| tendência (preço contra as médias de 21 e 63 dias) | abaixo da média de 21 dias · média de 21 abaixo da de 63 | FORA | 210 casos · subiu em 50,5% (± 3,5 p.p.) · p=0,890 | usar isso para o intradia: a medida é de 5 pregões |
| o dólar ainda informa a bolsa? (últimos 126 pregões) | nos últimos 126 pregões, depois de o dólar subir o Ibovespa ficou em -0.077% no dia seguin | FORA | 126 casos · subiu em 44,4% (± 4,5 p.p.) · p=0,212 | tratar o dólar como termômetro da bolsa quando esta medida não passar — o elo clássico nem sempre está ligado |
| o juro informa a bolsa? (últimos 126 pregões) | juro de hoje +18 p.b. | FORA | 126 casos · subiu em 42,9% (± 4,5 p.p.) · p=0,109 | inverter a leitura num dia de Copom ou de leilão do Tesouro: ali o juro reage a evento, não a risco |
| tamanho do dia (volatilidade) | movimento de 1.34% contra 1.06% típicos de 21 dias — dentro do normal | NÃO DÁ LADO · DIMENSIONA | razão 1.26 contra a mediana de 21 dias | nada a ajustar por volatilidade |

## Brasil

**Ibovespa** · fechamento oficial da B3 em 2026-11-18: **167.537** pontos

| | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ibovespa 🔴 | 167.538 pts | -1,34% | -0,23% | 3,98% | 8,25% |
| Dólar (PTAX) 🟢 | R$ 5,8889 | 1,35% | 8,63% | 7,02% | 9,25% |
| DI 2030 🟢 | 15,210% | 18 p.b. | 0 p.b. | 203 p.b. | 234 p.b. |
| Dólar futuro (WDOZ26) | 5.933,50 | — | — | — | — |

<small>Ibovespa e DI pela série do MT5 (fecha em 2026-11-18); dólar pela PTAX do Banco Central em 2026-11-19, que é a taxa oficial e não tem salto de rolagem como o futuro contínuo. Juro em pontos-base, não em porcentagem de si mesmo: de 14,00% para 15,00% são 100 p.b., não “+7%”.</small>

**Curva de juros** · 43 vencimentos negociados em 2026-11-19

| 1 ano | 2 anos | 3 anos | 5 anos | 10 anos | inclinação 10a−1a |
|---|---|---|---|---|---|
| 14,74% | 15,26% | 15,44% | 15,51% | 15,44% | **70 p.b.** |

> [!note] A inclinação era de -23 p.b. em 2026-10-15 e está em 70 p.b. — 93 p.b. de mudança.
> 
> **O que isso significa:** curva com inclinação negativa é o mercado pagando mais no curto que no longo, o que costuma acompanhar expectativa de corte de juro à frente. Inclinação positiva é o contrário: prêmio para carregar prazo. A virada de uma para outra não é ajuste fino, é mudança de como o mercado enxerga o risco de prazo.
> 
> *Medido: os dois números e a diferença. Interpretação: o parágrafo acima. O risco de agir é de quem opera.*

> A leitura da curva contra o que os economistas esperam está na página [📉 Juros](/juros).

## Sincronia: Ibovespa, dólar e juro andam juntos?

> [!example] 🟢 **risco saindo** em 2026-11-18
>
> Ibovespa -1,34% · dólar +0,43% · juro +18 p.b.
>
> Nos últimos 21 pregões, **14 de 21** dias tiveram os três em configuração coerente.

| par | correlação (postos) | percentil histórico | Pearson | sem o dia mais influente |
|---|---|---|---|---|
| Ibovespa × dólar | **-0.409** | 63 | -0.864 | -0.204 ⚠️ |
| Ibovespa × juro | **-0.694** | 24 | -0.948 | -0.568 ⚠️ |

<small>⚠️ marca o par em que **um único dia carrega o número**: tirando aquele dia da janela, a correlação muda de patamar. Por isso o valor principal é o de postos (Spearman), que resiste a um ponto fora da curva, e o percentil é calculado contra ele. Vender “sincronia histórica” que na verdade é um pregão isolado seria estatística com cara de manchete.</small>

> [!note] Desde 2026-10-26 (16 pregões): Ibovespa × dólar **-0.124** · Ibovespa × juro **-0.559**.
> 
> reeleicao: Ibovespa -13,88%, dolar +8,8%, curva de DI +~260 p.b. em um dia, com circuit breaker.
> 
> **Para quem opera:** quando o elo com o dólar está fraco, usar o dólar como termômetro da bolsa é usar um termômetro desligado. O par com correlação mais forte é o que está mandando no período.

## Internacional

**Os que leem o mundo primeiro** — ouro, petróleo, cobre, dólar index e juro dos Estados Unidos.

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ouro 🔴 | 3.577,50 US$/oz | -2,93% | -8,24% | -17,59% | -13,59% |
| Cobre 🔴 | 5,55 US$/lb | -1,27% | -14,01% | -1,36% | 11,08% |
| Petróleo Brent 🔴 | 88,17 US$/bbl | -4,14% | -25,05% | 44,90% | 41,12% |
| Dollar Index 🔴 | 103,78 pontos | -0,11% | 1,87% | 5,60% | 4,14% |
| Juro EUA 10 anos 🔴 | 5,05 % a.a. | -1 p.b. | 12 p.b. | 89 p.b. | 101 p.b. |

<small>Taxas de juro variam em **pontos-base**, não em porcentagem de si mesmas: um juro que vai de 4,16% a 5,10% subiu 94 p.b.; dizer “+22%” seria tecnicamente verdade e praticamente inútil.</small>

## Commodities, por família

### Metais preciosos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Prata 🔴 | 42,31 US$/oz | -4,54% | -13,83% | -39,68% | -16,94% |
| Platina 🔴 | 1.302,10 US$/oz | -3,38% | -9,45% | -36,00% | -16,37% |
| Ouro 🔴 | 3.577,50 US$/oz | -2,93% | -8,24% | -17,59% | -13,59% |
| Paládio 🔴 | 892,50 US$/oz | -2,64% | -9,35% | -45,22% | -36,35% |

### Metais industriais

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Alumínio 🔴 | 2.839,50 US$/t | -2,72% | -14,23% | -2,30% | 3,61% |
| Cobre 🔴 | 5,55 US$/lb | -1,27% | -14,01% | -1,36% | 11,08% |
| Minério de ferro 🟢 | 90,86 US$/t | 0,15% | 0,17% | -15,19% | -12,99% |
| Aço laminado ⚪ | 1.352,00 US$/t | 0,00% | 0,37% | 44,60% | 58,13% |

### Energia

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Gás natural 🟢 | 3,57 US$/MMBtu | 9,27% | 23,22% | -3,12% | -19,28% |
| Petróleo Brent 🔴 | 88,17 US$/bbl | -4,14% | -25,05% | 44,90% | 41,12% |
| Óleo de aquecimento 🔴 | 3,85 US$/gal | -2,45% | -19,54% | 81,76% | 63,76% |
| Petróleo WTI 🔴 | 81,23 US$/bbl | -2,38% | -21,98% | 41,47% | 40,17% |
| Gasolina 🔴 | 2,44 US$/gal | -2,02% | -26,19% | 43,34% | 31,63% |

### Grãos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Aveia 🟢 | 366,25 ¢/bu | 3,02% | 6,55% | 21,07% | 18,15% |
| Trigo 🟢 | 593,00 ¢/bu | 2,55% | -1,74% | 16,96% | 12,47% |
| Milho 🟢 | 450,00 ¢/bu | 2,51% | 0,50% | 2,21% | 6,26% |
| Arroz 🟢 | 18,57 US$/cwt | 0,92% | 6,48% | 93,49% | 78,25% |
| Óleo de soja 🔴 | 59,70 ¢/lb | -0,65% | -9,41% | 24,19% | 18,69% |
| Farelo de soja 🟢 | 334,20 US$/t | 0,57% | 2,96% | 13,48% | 5,43% |
| Soja 🔴 | 1.207,25 ¢/bu | -0,02% | -1,23% | 17,15% | 7,33% |

### Softs

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Algodão 🟢 | 79,61 ¢/lb | 4,82% | 2,29% | 23,87% | 27,52% |
| Cacau 🟢 | 5.063,00 US$/t | 4,46% | -7,15% | -16,52% | -0,53% |
| Suco de laranja 🟢 | 132,55 ¢/lb | 2,32% | 14,91% | -35,40% | -3,14% |
| Café arábica 🔴 | 278,30 ¢/lb | -1,33% | -3,10% | -20,20% | -32,81% |
| Açúcar 🟢 | 17,21 ¢/lb | 0,29% | -11,11% | 14,66% | 15,43% |

### Proteína

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Suíno (EUA) 🟢 | 52,42 ¢/lb | 2,09% | -10,96% | -38,40% | -32,96% |
| Boi gordo (EUA) 🟢 | 222,85 ¢/lb | 1,40% | -0,51% | -3,94% | 7,55% |
| Bezerro (EUA) 🟢 | 338,05 ¢/lb | 0,31% | 0,08% | -3,48% | 10,85% |

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

## Fluxo: quem subiu, quem caiu e quanto custa ficar vendido

> [!note] De que pregão é cada número deste bloco
>
> Rankings e mais negociadas: **nossa base até 17/11**. Oscilação do dia, aluguel, termo e opções: **BDI de 19/11**. Os dois pregões são diferentes de propósito — o BDI sai depois do nosso fechamento.
>
> Entram no ranking os 450 papéis com volume mediano acima de R$ 1.000.000 por dia (ação 204 · ETF/FII 162 · BDR 67 · outro 9 · unit 8).

> [!warning] 4 papéis líquidos ficaram de fora dos rankings de período
>
> **AZUL53**, **BEEF1**, **M1RN34**, **RCSL4** tiveram desdobramento ou grupamento que a nossa série ainda não absorveu. A variação deles no período seria inventada, não medida.
>
> A barreira poupou 45 suspeitas que caíram no pregão de 26/10 — queda de 50% num dia de circuit breaker é indistinguível de um desdobramento 1:2 para quem só olha a razão — e 99 em que o preço voltou depois, o que desdobramento não faz.

### Maiores altas e baixas · ações e units

| período | desde | maiores altas | maiores baixas |
|---|---|---|---|
| dia | 16/11 · 211 papéis | **AZEV3** +31,1% · **LJQQ3** +17,5% · **HAPV3** +12,5% | **PMAM3** -12,0% · **ONCO3** -6,5% · **CURY3** -4,2% |
| mês ⚠️ | 18/10 · 211 papéis | **SUZB3** +28,7% · **EMBJ3** +20,0% · **TIMS3** +18,9% | **MOVI3** -64,1% · **SIMH3** -61,0% · **HBOR3** -61,0% |
| ano ⚠️ | 01/01 · 204 papéis | **AZEV3** +129,4% · **TASA4** +110,6% · **JSLG3** +96,3% | **AZTE3** -82,7% · **AZEV4** -82,1% · **BHIA3** -79,0% |
| 360 dias ⚠️ | 22/11/2025 · 202 papéis | **CBAV3** +129,3% · **JSLG3** +117,1% · **TASA4** +113,8% | **AZEV4** -85,0% · **AZTE3** -81,8% · **BHIA3** -80,7% |

### BDRs — separados de propósito

A variação de um BDR é a empresa lá fora multiplicada pelo dólar. É informação boa e responde outra pergunta: misturá-la com ação brasileira faria o ranking da B3 falar sobre Nasdaq.

| período | desde | maiores altas | maiores baixas |
|---|---|---|---|
| dia | 16/11 · 67 papéis | **BCPX39** +3,6% · **SPCX34** +2,8% · **BSIL39** +1,8% | **STOC34** -8,4% · **NIKE34** -6,8% · **D1DG34** -6,6% |
| mês ⚠️ | 18/10 · 66 papéis | **LILY34** +27,5% · **BERK34** +25,3% · **WALM34** +22,3% | **XPBR31** -43,9% · **ITLC34** -30,8% · **D1DG34** -27,8% |
| ano ⚠️ | 01/01 · 63 papéis | **D1EL34** +165,6% · **MUTC34** +153,5% · **A1MD34** +143,3% | **STOC34** -49,0% · **C2OI34** -47,1% · **NIKE34** -39,2% |
| 360 dias ⚠️ | 22/11/2025 · 63 papéis | **MUTC34** +258,0% · **D1EL34** +179,0% · **A1MD34** +160,6% | **C2OI34** -47,8% · **STOC34** -47,6% · **BABA34** -39,5% |

### ETFs e FIIs

| período | desde | maiores altas | maiores baixas |
|---|---|---|---|
| dia | 16/11 · 156 papéis | **HSLG11** +3,0% · **KORE11** +2,0% · **PCIP11** +2,0% | **BDIF11** -3,2% · **PVBI11** -3,0% · **XBCI11** -3,0% |
| mês ⚠️ | 18/10 · 154 papéis | **DOLA11** +14,3% · **USDB11** +13,9% · **DOLX11** +13,8% | **TGAR11** -38,2% · **HIGH11** -31,4% · **VGHF11** -30,2% |
| ano ⚠️ | 01/01 · 143 papéis | **CHIP11** +33,0% · **UTEC11** +18,5% · **SPBZ11** +15,5% | **TGAR11** -67,0% · **VGHF11** -46,6% · **TRXF11** -44,7% |
| 360 dias ⚠️ | 22/11/2025 · 137 papéis | **CHIP11** +50,5% · **UTEC11** +27,1% · **VXXV11** +21,5% | **TGAR11** -64,7% · **TRXF11** -46,2% · **VGHF11** -46,1% |

<small>⚠️ marca a janela que atravessa 26/10, o pregão do circuit breaker: dos dois lados dessa data o mercado não é o mesmo, e a variação acumulada mistura os dois.</small>

### Para onde foi o dinheiro no dia

| por volume financeiro | por número de negócios |
|---|---|
| **PETR4** <small>ação</small> R$ 1.048.938.654 | **BBAS3** <small>ação</small> 61.229 negócios |
| **VALE3** <small>ação</small> R$ 1.037.385.239 | **MXRF11** <small>ETF/FII</small> 51.165 negócios |
| **BBAS3** <small>ação</small> R$ 978.980.690 | **BOVA11** <small>ETF/FII</small> 46.443 negócios |
| **BOVA11** <small>ETF/FII</small> R$ 693.878.916 | **NVDC34** <small>BDR</small> 45.410 negócios |
| **B3SA3** <small>ação</small> R$ 628.511.867 | **VALE3** <small>ação</small> 38.776 negócios |
| **EMBJ3** <small>ação</small> R$ 573.084.586 | **MGLU3** <small>ação</small> 38.027 negócios |

<small>Aqui entra toda classe de ativo. Dinheiro negociado em BDR é fluxo real da B3: escondê-lo seria mentir sobre para onde o dinheiro foi, ainda que o papel acompanhe uma empresa de fora.</small>

### Aluguel: o custo de ficar vendido

| papel | posição em aberto | taxa do tomador | de quando |
|---|---|---|---|
| **BOVA11** | R$ 22.818.653.455 | 0,18% a.a. <small>564 ctr</small> | hoje |
| **VALE3** | R$ 9.968.702.695 | 0,04% a.a. <small>1.083 ctr</small> | 17/11 |
| **PETR4** | R$ 9.768.844.342 | 0,10% a.a. <small>119 ctr</small> | hoje |
| **BBAS3** | R$ 8.717.546.306 | 0,70% a.a. <small>1.294 ctr</small> | hoje |
| **ITUB4** | R$ 7.285.867.155 | 0,04% a.a. <small>413 ctr</small> | hoje |
| **PETR3** | R$ 6.794.550.194 | 3,84% a.a. <small>748 ctr</small> | hoje |
| **BOVV11** | R$ 4.993.801.633 | 0,10% a.a. <small>632 ctr</small> | 17/11 |
| **BBSE3** | R$ 4.873.438.008 | 0,13% a.a. <small>456 ctr</small> | hoje |

<small>A taxa é a média dos contratos fechados na sessão, e só aparece com ao menos 20 contratos — abaixo disso é média de quase nada. Quando o dia não tem amostra, vale a última sessão que teve, e a coluna diz qual. O acervo de taxas tem 4 sessões e cresce a cada pregão.</small>

| mais caros de alugar | taxa | posição | movimento no acervo |
|---|---|---|---|
| **CMIN3** | 48,70% a.a. | R$ 27.521.274 | caindo · 50,4% → 48,7% desde 16/11 |
| **BHIA3** | 40,97% a.a. | R$ 1.231.433 | estável · 41,0% → 41,0% desde 16/11 |
| **CSNA3** | 32,72% a.a. | R$ 87.335.040 | subindo · 31,4% → 32,7% desde 16/11 |
| **HBRE3** | 32,56% a.a. | R$ 3.062.759 | caindo · 32,8% → 32,6% desde 16/11 |
| **INTB3** | 30,99% a.a. | R$ 11.623.186 | subindo · 27,1% → 31,0% desde 16/11 |
| **YDUQ3** | 21,34% a.a. | R$ 3.202.813 | caindo · 21,5% → 21,3% desde 16/11 |
| **CYRE3** | 19,91% a.a. | R$ 65.896.542 | caindo · 23,5% → 19,9% desde 16/11 |
| **ORVR3** | 18,58% a.a. | R$ 2.398.162 | caindo · 19,6% → 18,6% desde 16/11 |

<small>Taxa alta e subindo é o mercado cobrando caro para emprestar o papel. Pode ser demanda de quem quer vender a descoberto, pode ser oferta minguando — a tabela mede o custo, não o motivo.</small>

### Mercado a termo

| papel | empresa | prazos | prazo médio | quantidade |
|---|---|---|---|---|
| **CPTS11** <small>ETF/FII</small> | FII CAPI SEC | 2 | 50d | 2.223.000 |
| **AXIA3** <small>ação</small> | AXIA ENERGIA | 3 | 71d | 1.142.500 |
| **PCAR3** <small>ação</small> | P.ACUCAR-CBD | 1 | 61d | 625.000 |
| **BEEF3** <small>ação</small> | MINERVA | 2 | 23d | 623.800 |
| **ASAI3** <small>ação</small> | ASSAI | 1 | 90d | 500.000 |
| **PNVL3** <small>ação</small> | DIMED | 1 | 61d | 425.000 |
| **PGMN3** <small>ação</small> | PAGUE MENOS | 4 | 105d | 417.600 |
| **LPSB3** <small>ação</small> | LOPES BRASIL | 1 | 61d | 310.000 |

<small>90 papéis em 155 linhas do boletim: a B3 publica uma linha por papel E prazo, então somar sem agregar mostra o mesmo papel várias vezes e nenhuma delas é o tamanho da posição.</small>

## O que o dólar futuro cobra

*Boletim da B3 de 2026-11-19.*

O futuro de dólar é sempre mais caro que o à vista, e isso **não é opinião do mercado sobre o dólar** — é juro. Quem vende dólar para a frente fica com reais rendendo CDI e abre mão de dólares rendendo juro americano; a diferença entra no preço. Esse pedaço se chama carrego, e dá para medir exatamente.

### O carrego, medido entre dois vencimentos

| | vencimento | ajuste | dias úteis | contratos |
|---|---|---|---|---|
| curto | `WDOZ26` | 5.924,052 | 7 | 4.998.267 |
| longo | `WDOF27` | 5.957,353 | 29 | 19.010 |

Entre os dois vão **22 dias úteis**, e o mercado cobra **+0,562%** para atravessar esse pedaço — **+0,0256% por dia útil**, ou **+6,63% ao ano**.

Os dois ajustes saem do mesmo boletim, no mesmo instante, então essa inclinação é carrego limpo: não tem hora do relógio dentro.

### A conferência que o número tem de passar

A curva de DI diz que o juro em reais nessa mesma janela é **+13,75% ao ano**. Tirando o carrego, sobra o juro em dólar implícito: **+6,67% ao ano**.

A B3 publica o cupom cambial dela nos vencimentos longos: `DDIX27` +4,57% · `DDIZ27` +4,76% · `DDIF28` +4,95%. São duas curvas que não se falam — uma deduzida do dólar com o DI, outra negociada direto — e elas ficam a **1,9 ponto percentual** uma da outra, dentro da tolerância de 3 pontos que este bloco usa. Não é o mesmo número, e nem deveria ser: os vértices do DDI são de prazo bem maior que a janela medida aqui. O que a conferência garante é que não há erro de ordem de grandeza — se um dia elas se afastarem muito, o bloco avisa em vez de publicar.

Repare no vencimento mais curto do cupom cambial, o `DDIZ26`: **-47,18% ao ano**, negativo. Juro negativo em dólar não existe. Ele fica assim porque é calculado contra a PTAX da véspera e carrega a defasagem dela.

A série inteira mostra a distorção se diluindo conforme o prazo cresce: **-47,2% → -8,0% → -2,7% → -0,3% → +1,2%**, até estabilizar nos vértices de um ano em diante. É o mesmo artefato explicado abaixo, impresso pela própria bolsa — e é a razão de este bloco medir o carrego entre dois vencimentos de dólar em vez de comparar futuro com PTAX.

### Por que a diferença entre o futuro e a PTAX engana

| ajuste do `WDOZ26` contra a PTAX | **+0,597%** |
|---|---|
| carrego de verdade, nos 7 dias úteis que faltam para o vencimento | +0,179% |
| **sobra, que não é carrego** | **+0,418%** |

A sobra não é o mercado apostando em alta do dólar. A PTAX é fixada por volta das 13h; o ajuste do futuro sai no fechamento. São cinco horas de pregão entre uma medida e outra, e tudo que o dólar andou nesse intervalo aparece como se fosse prêmio.

### Onde pode estar a vantagem, e o que não fazer

- **O carrego é previsível; o resto não.** Quem opera dólar futuro comprado paga esse carrego todo dia, chova ou faça sol. Num carrego de +0,0256% ao dia útil, uma posição parada por um mês já começa com essa conta contra. Posição comprada em dólar precisa de movimento maior que o carrego só para empatar.
- **Carrego subindo é juro mudando, não dólar mudando.** Se esta inclinação se abrir sem que a curva de DI se mexa, a conta não fecha e vale desconfiar do dado antes de desconfiar do mercado.
- **Não leia a diferença entre futuro e PTAX como sinal.** É quase toda relógio, como a tabela acima mostra. Quem conclui “o mercado está apostando no dólar” a partir daqueles dois números está lendo o calendário.
- **Não compare número de dias corridos com dias úteis.** O carrego corre em dias úteis (252), o juro americano em dias corridos (360). Misturar os dois erra por vários por cento ao ano.

<small>Leitura de risco a partir de dado público da B3, não recomendação. Quem monta a posição carrega o risco.</small>

## Anomalias do dia

| ativo | movimento | desvio | onde |
|---|---|---|---|
| **Algodão** | 4,82% | z 3,1 | internacional |
| **Dow Jones** | -2,19% | z -2,6 | internacional |
| **Nikkei 225** | -5,06% | z -2,7 | internacional |
| **BNO (Petróleo Brent)** | volume 0,48× a mediana | abaixo do normal | fluxo de ETF |
| **CORN (Milho)** | volume 2,04× a mediana | acima do normal | fluxo de ETF |
| **SPY (S&P 500)** | volume 1,88× a mediana | acima do normal | fluxo de ETF |
| **EWZS (Small caps Brasil)** | volume 0,38× a mediana | abaixo do normal | fluxo de ETF |
| **Dólar (PTAX)** | 1,35% | z 2.25 (mediana/MAD) | Brasil |

<small>O desvio é medido contra a mediana e o MAD dos últimos 252 pregões, não contra o desvio-padrão: um único dia extremo — como 26/10/2026 — infla o desvio-padrão a ponto de nenhum dia normal mais parecer anômalo, e o alerta ficaria cego justamente depois de um susto.</small>

---

## De onde vem cada número, e de quando

| bloco | fonte | coletado |
|---|---|---|
| Internacional e commodities | Yahoo Finance · atraso de ~15 min, cotação revisável | 20/11 às 06:54 |
| Ibovespa (fechamento) | B3 · Boletim Diário do Mercado | 20/11 às 06:55 |
| Dólar | Banco Central · PTAX de venda (série SGS 1) | 20/11 às 06:55 |
| Curva de juros | B3 · boletim, 43 vencimentos de DI1 | 20/11 às 06:55 |
| Índices da B3 | B3 · acervo diário de índices | 2026-11-18 |
| Fluxo: rankings, aluguel e termo | B3 · Boletim Diário + nossa base COTAHIST ajustada | 20/11 às 06:56 |
| O lado | medido sobre o painel do próprio site | 20/11 às 06:56 |

Os horários em que cada página do site atualiza estão em [🕐 Quando este site atualiza](/horarios).

> [!warning] O que esta página não decide por você
>
> Os números acima são medição. O que fazer com eles é leitura de risco,
> e o risco é de quem opera. Quando nenhuma vantagem passa das travas,
> a página diz isso em vez de inventar convicção — e ficar de fora
> também é posição.

