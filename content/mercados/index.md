---
title: "🌍 Mercados"
date: 2026-11-23
tags: [mercados]
description: "O que mandou no dia: internacional, Brasil, a sincronia entre Ibovespa, dólar e juro, os índices da B3 e onde está — ou não está — a vantagem"
pregao: 2026-11-18
---

> [!warning] Divergência entre números desta página
>
> O fechamento do Ibovespa é de **2026-11-18**, mas as variações de dia, mês, ano e 360 dias são calculadas sobre a série que termina em **2026-11-19**. Os dois números são corretos, só não são do mesmo pregão — não os compare entre si.
>
> Isto é um defeito, não uma característica — está dito aqui porque esconder seria pior.

> [!note] A que pregão se refere cada bloco
>
> **Internacional**: 2026-11-23 · **Ibovespa (fechamento oficial)**: 2026-11-18 · **Ibovespa (série das variações)**: 2026-11-19 · **Dólar (PTAX)**: 2026-11-23 · **Curva de juros**: 2026-11-19 · **O lado (painel de vantagem)**: 2026-11-19
>
> Blocos com datas diferentes é o normal: as bolsas lá fora negociam enquanto a B3 ainda não publicou o boletim do dia, e a PTAX sai no meio da tarde. O que não vale é comparar número de um com número de outro.

## O lado de hoje

> [!example] ⚪ nenhum sinal passou da trava hoje — sem vantagem medível, ficar de fora é a posição
>
> Medido em 1021 pregões (2022-10-18 a 2026-11-19), 4 sinais testados.
>
> **Por que a régua é dura:** testando 4 sinais a 0.05, a chance de um passar por sorte seria ~19%. Por isso a exigência de cada sinal é p < 0.0125, e não os 5% de costume. Sem essa correção o site viraria uma máquina de achar padrão onde não tem.
>
> **Quando nada passa, não operar é a posição.** Isto mede o que aconteceu depois de dias parecidos; o risco é de quem opera.

| sinal | situação | lado | base medida | o que NÃO fazer |
|---|---|---|---|---|
| configuração do dia (bolsa, dólar, juro) | risco saindo · Ibovespa -0.69%, dólar +1.35%, juro +21 p.b. | FORA | 221 casos · subiu em 55,2% (± 3,4 p.p.) · p=0,122 | operar a configuração como se ela mandasse: o teste mede o dia seguinte, não a semana |
| tendência (preço contra as médias de 21 e 63 dias) | abaixo da média de 21 dias · média de 21 abaixo da de 63 | FORA | 211 casos · subiu em 50,2% (± 3,4 p.p.) · p=0,945 | usar isso para o intradia: a medida é de 5 pregões |
| o dólar ainda informa a bolsa? (últimos 126 pregões) | nos últimos 126 pregões, depois de o dólar subir o Ibovespa ficou em -0.09% no dia seguint | FORA | 126 casos · subiu em 44,4% (± 4,5 p.p.) · p=0,212 | tratar o dólar como termômetro da bolsa quando esta medida não passar — o elo clássico nem sempre está ligado |
| o juro informa a bolsa? (últimos 126 pregões) | juro de hoje +21 p.b. | FORA | 126 casos · subiu em 42,9% (± 4,5 p.p.) · p=0,109 | inverter a leitura num dia de Copom ou de leilão do Tesouro: ali o juro reage a evento, não a risco |
| tamanho do dia (volatilidade) | movimento de 0.69% contra 0.86% típicos de 21 dias — dentro do normal | NÃO DÁ LADO · DIMENSIONA | razão 0.80 contra a mediana de 21 dias | nada a ajustar por volatilidade |

## Brasil

**Ibovespa** · fechamento oficial da B3 em 2026-11-18: **167.537** pontos

| | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ibovespa 🔴 | 166.376 pts | -0,69% | -0,92% | 3,26% | 7,50% |
| Dólar (PTAX) 🟢 | R$ 5,9708 | 1,39% | 10,14% | 8,51% | 11,62% |
| DI 2030 🟢 | 15,420% | 21 p.b. | 21 p.b. | 224 p.b. | 256 p.b. |
| Dólar futuro (WDOZ26) | 5.933,50 | — | — | — | — |

<small>Ibovespa e DI pela série do MT5 (fecha em 2026-11-19); dólar pela PTAX do Banco Central em 2026-11-23, que é a taxa oficial e não tem salto de rolagem como o futuro contínuo. Juro em pontos-base, não em porcentagem de si mesmo: de 14,00% para 15,00% são 100 p.b., não “+7%”.</small>

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

> [!example] 🟢 **risco saindo** em 2026-11-19
>
> Ibovespa -0,69% · dólar +1,35% · juro +21 p.b.
>
> Nos últimos 21 pregões, **14 de 21** dias tiveram os três em configuração coerente.

| par | correlação (postos) | percentil histórico | Pearson | sem o dia mais influente |
|---|---|---|---|---|
| Ibovespa × dólar | **-0.332** | 76 | -0.857 | -0.138 ⚠️ |
| Ibovespa × juro | **-0.648** | 33 | -0.951 | -0.567 ⚠️ |

<small>⚠️ marca o par em que **um único dia carrega o número**: tirando aquele dia da janela, a correlação muda de patamar. Por isso o valor principal é o de postos (Spearman), que resiste a um ponto fora da curva, e o percentil é calculado contra ele. Vender “sincronia histórica” que na verdade é um pregão isolado seria estatística com cara de manchete.</small>

> [!note] Desde 2026-10-26 (17 pregões): Ibovespa × dólar **-0.137** · Ibovespa × juro **-0.556**.
> 
> reeleicao: Ibovespa -13,88%, dolar +8,8%, curva de DI +~260 p.b. em um dia, com circuit breaker.
> 
> **Para quem opera:** quando o elo com o dólar está fraco, usar o dólar como termômetro da bolsa é usar um termômetro desligado. O par com correlação mais forte é o que está mandando no período.

## Internacional

**Os que leem o mundo primeiro** — ouro, petróleo, cobre, dólar index e juro dos Estados Unidos.

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ouro 🟢 | 3.668,80 US$/oz | 4,36% | -5,90% | -15,49% | -13,77% |
| Cobre 🟢 | 5,65 US$/lb | 3,24% | -12,45% | 0,44% | 9,04% |
| Petróleo Brent 🔴 | 86,41 US$/bbl | -6,65% | -26,55% | 42,00% | 36,72% |
| Dollar Index 🟢 | 104,40 pontos | 0,57% | 2,47% | 6,22% | 4,96% |
| Juro EUA 10 anos 🟢 | 4,94 % a.a. | 2 p.b. | 1 p.b. | 77 p.b. | 92 p.b. |

<small>Taxas de juro variam em **pontos-base**, não em porcentagem de si mesmas: um juro que vai de 4,16% a 5,10% subiu 94 p.b.; dizer “+22%” seria tecnicamente verdade e praticamente inútil.</small>

## Commodities, por família

### Metais preciosos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Prata 🟢 | 43,40 US$/oz | 5,78% | -11,59% | -38,11% | -23,10% |
| Ouro 🟢 | 3.668,80 US$/oz | 4,36% | -5,90% | -15,49% | -13,77% |
| Platina 🟢 | 1.323,80 US$/oz | 2,67% | -7,94% | -34,93% | -21,09% |
| Paládio 🟢 | 899,00 US$/oz | 0,82% | -8,69% | -44,82% | -38,79% |

### Metais industriais

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Aço laminado 🟢 | 1.399,00 US$/t | 3,48% | 3,86% | 49,63% | 54,07% |
| Cobre 🟢 | 5,65 US$/lb | 3,24% | -12,45% | 0,44% | 9,04% |
| Alumínio 🔴 | 2.817,50 US$/t | -1,49% | -14,89% | -3,05% | 0,34% |
| Minério de ferro 🔴 | 90,67 US$/t | -0,21% | -0,04% | -15,36% | -13,24% |

### Energia

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Petróleo Brent 🔴 | 86,41 US$/bbl | -6,65% | -26,55% | 42,00% | 36,72% |
| Óleo de aquecimento 🔴 | 3,68 US$/gal | -6,28% | -23,28% | 73,31% | 57,53% |
| Petróleo WTI 🔴 | 80,18 US$/bbl | -4,52% | -22,99% | 39,64% | 36,94% |
| Gasolina 🔴 | 2,41 US$/gal | -3,80% | -27,30% | 41,18% | 27,00% |
| Gás natural 🟢 | 3,46 US$/MMBtu | 1,38% | 19,32% | -6,19% | -28,70% |

### Grãos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Aveia 🟢 | 373,00 ¢/bu | 3,18% | 8,51% | 23,31% | 26,55% |
| Milho 🟢 | 448,25 ¢/bu | 3,16% | 0,11% | 1,82% | 2,93% |
| Trigo 🟢 | 588,25 ¢/bu | 2,44% | -2,53% | 16,03% | 10,78% |
| Arroz 🟢 | 18,85 US$/cwt | 1,54% | 8,12% | 96,46% | 87,10% |
| Soja 🟢 | 1.229,50 ¢/bu | 0,72% | 0,59% | 19,31% | 8,06% |
| Óleo de soja 🔴 | 59,64 ¢/lb | -0,28% | -9,50% | 24,07% | 15,22% |
| Farelo de soja 🟢 | 341,50 US$/t | 0,15% | 5,21% | 15,96% | 8,62% |

### Softs

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Algodão 🟢 | 80,60 ¢/lb | 6,80% | 3,56% | 25,41% | 28,12% |
| Açúcar 🟢 | 17,71 ¢/lb | 3,99% | -8,52% | 17,99% | 16,44% |
| Suco de laranja 🟢 | 132,60 ¢/lb | 3,92% | 14,95% | -35,38% | -15,03% |
| Cacau 🟢 | 5.310,00 US$/t | 3,61% | -2,62% | -12,45% | -1,74% |
| Café arábica 🔴 | 266,80 ¢/lb | -2,93% | -7,10% | -23,50% | -35,40% |

### Proteína

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Suíno (EUA) 🔴 | 51,88 ¢/lb | -1,38% | -11,89% | -39,04% | -35,64% |
| Boi gordo (EUA) 🟢 | 225,10 ¢/lb | 0,94% | 0,49% | -2,97% | 4,42% |
| Bezerro (EUA) 🟢 | 336,10 ¢/lb | 0,20% | -0,50% | -4,04% | 3,74% |

> As agrícolas negociadas **na B3**, com a curva e o que ela diz, estão na página [🌾 Agro](/agro). Aqui é o preço lá fora, que é o que chega antes.

## Índices da B3

Os índices publicados pela B3 no pregão de **18/11/2026**, na ordem do que mais subiu ao que mais caiu no dia. Boletim coletado no acervo em **19/11/2026 06:26** · 33 índices.

| índice | fechamento | no dia | intradiário | mínimo | máximo |
|---|---|---|---|---|---|
| BDRX 🟢 | 29.429 | 1,92% | 1,44% | 28.979 | 29.622 |
| IMATBASICOS 🟢 | 6.243 | 0,66% | 0,66% | 6.196 | 6.297 |
| INDX 🟢 | 31.288 | 0,43% | 0,44% | 31.130 | 31.622 |
| ICONSUMO 🔴 | 2.660 | -0,15% | -0,15% | 2.653 | 2.695 |
| IVBX2 🔴 | 17.683 | -0,67% | -0,62% | 17.619 | 17.891 |
| IBHB 🔴 | 1.607 | -0,74% | -0,62% | 1.603 | 1.644 |
| IBLV 🔴 | 1.315 | -0,75% | -0,83% | 1.309 | 1.331 |
| IFIL 🔴 | 1.552 | -0,77% | -0,77% | 1.548 | 1.565 |
| SMALL CAP 🔴 | 2.004 | -0,79% | -0,79% | 2.000 | 2.034 |
| IFIX 🔴 | 3.513 | -0,82% | -0,82% | 3.506 | 3.543 |
| IBEW 🔴 | 1.411 | -0,84% | -0,84% | 1.406 | 1.430 |
| AGFS 🔴 | 1.391 | -0,86% | -0,86% | 1.386 | 1.412 |
| GPTW 🔴 | 1.249 | -0,95% | -0,95% | 1.247 | 1.268 |
| IBOV SD TR 🔴 | 1.915 | -1,03% | -0,98% | 1.915 | 1.942 |
| ISE 🔴 | 4.017 | -1,11% | -1,11% | 4.011 | 4.078 |
| IDIVERSA B3 🔴 | 1.408 | -1,12% | -1,05% | 1.404 | 1.429 |
| IEE 🔴 | 121.934 | -1,18% | -1,18% | 121.425 | 123.384 |
| ICO2 🔴 | 2.943 | -1,18% | -1,18% | 2.929 | 2.992 |
| IBEP 🔴 | 1.652 | -1,20% | -1,20% | 1.650 | 1.676 |
| I DIVIDENDOS 🔴 | 11.778 | -1,21% | -1,20% | 11.759 | 11.958 |
| UTILITIES 🔴 | 17.614 | -1,29% | -1,29% | 17.582 | 17.844 |
| IBOVESPA 🔴 | 167.537 | -1,34% | -1,32% | 167.099 | 170.259 |
| IBRASIL 🔴 | 6.559 | -1,37% | -1,35% | 6.542 | 6.665 |
| IBRX100 🔴 | 70.601 | -1,37% | -1,37% | 70.411 | 71.749 |
| IGNM 🔴 | 4.361 | -1,38% | -1,38% | 4.350 | 4.428 |
| IBRX50 🔴 | 28.321 | -1,39% | -1,38% | 28.232 | 28.785 |
| MIDLARGE CAP 🔴 | 3.486 | -1,41% | -1,41% | 3.475 | 3.543 |
| IGC TRADE 🔴 | 7.440 | -1,42% | -1,42% | 7.419 | 7.565 |
| IGC 🔴 | 25.826 | -1,43% | -1,43% | 25.750 | 26.253 |
| ITAG 🔴 | 36.069 | -1,44% | -1,44% | 35.970 | 36.679 |
| IBEE 🔴 | 4.701 | -1,61% | -1,57% | 4.680 | 4.788 |
| IMOBILIARIO 🔴 | 1.102 | -1,87% | -1,87% | 1.099 | 1.125 |
| IFINANCEIRO 🔴 | 16.334 | -2,44% | -2,43% | 16.303 | 16.763 |

<small><b>no dia</b> é o fechamento contra o fechamento do pregão anterior (17/11/2026) — a convenção de mercado, e a conta com que qualquer outra fonte vai ser comparada. <b>intradiário</b> é o fechamento contra a abertura do próprio pregão, que é a conta que o boletim da B3 permite direto e que <b>descarta o gap de abertura</b>. As duas aparecem porque a diferença entre elas é o gap, e gap é informação.</small>

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

> [!note] Hoje não dá para medir esse pedaço
> PTAX é de 2026-11-23 e o boletim é de 2026-11-19. Comparar o ajuste de um dia com a PTAX de outro é exatamente o erro que esta seção existe para explicar, então o número não sai.

### Onde pode estar a vantagem, e o que não fazer

- **O carrego é previsível; o resto não.** Quem opera dólar futuro comprado paga esse carrego todo dia, chova ou faça sol. Num carrego de +0,0256% ao dia útil, uma posição parada por um mês já começa com essa conta contra. Posição comprada em dólar precisa de movimento maior que o carrego só para empatar.
- **Carrego subindo é juro mudando, não dólar mudando.** Se esta inclinação se abrir sem que a curva de DI se mexa, a conta não fecha e vale desconfiar do dado antes de desconfiar do mercado.
- **Não leia a diferença entre futuro e PTAX como sinal.** É quase toda relógio, como a tabela acima mostra. Quem conclui “o mercado está apostando no dólar” a partir daqueles dois números está lendo o calendário.
- **Não compare número de dias corridos com dias úteis.** O carrego corre em dias úteis (252), o juro americano em dias corridos (360). Misturar os dois erra por vários por cento ao ano.

<small>Leitura de risco a partir de dado público da B3, não recomendação. Quem monta a posição carrega o risco.</small>

## Anomalias do dia

| ativo | movimento | desvio | onde |
|---|---|---|---|
| **Aço laminado** | 3,48% | z 4,0 | internacional |
| **Algodão** | 6,80% | z 4,3 | internacional |
| **VIX** | -8,20% | z -4,5 | internacional |
| **S&P 500** | 5,12% | z 5,3 | internacional |
| **Nasdaq** | 6,91% | z 5,1 | internacional |
| **Dow Jones** | 3,33% | z 3,7 | internacional |
| **Nikkei 225** | -5,06% | z -2,7 | internacional |
| **GLD (Ouro)** | volume 2,54× a mediana | acima do normal | fluxo de ETF |
| **SLV (Prata)** | volume 2,59× a mediana | acima do normal | fluxo de ETF |
| **PPLT (Platina)** | volume 2,01× a mediana | acima do normal | fluxo de ETF |
| **CPER (Cobre)** | volume 1,97× a mediana | acima do normal | fluxo de ETF |
| **SPY (S&P 500)** | volume 3,00× a mediana | acima do normal | fluxo de ETF |
| **QQQ (Nasdaq)** | volume 2,99× a mediana | acima do normal | fluxo de ETF |
| **DIA (Dow Jones)** | volume 1,81× a mediana | acima do normal | fluxo de ETF |
| **EWG (Alemanha)** | volume 1,92× a mediana | acima do normal | fluxo de ETF |
| **EWJ (Japão)** | volume 2,28× a mediana | acima do normal | fluxo de ETF |
| **TLT (Treasury 20a+)** | volume 1,86× a mediana | acima do normal | fluxo de ETF |
| **UUP (Dólar)** | volume 1,88× a mediana | acima do normal | fluxo de ETF |
| **Dólar (PTAX)** | 1,39% | z 2.24 (mediana/MAD) | Brasil |

<small>O desvio é medido contra a mediana e o MAD dos últimos 252 pregões, não contra o desvio-padrão: um único dia extremo — como 26/10/2026 — infla o desvio-padrão a ponto de nenhum dia normal mais parecer anômalo, e o alerta ficaria cego justamente depois de um susto.</small>

---

## De onde vem cada número, e de quando

| bloco | fonte | coletado |
|---|---|---|
| Internacional e commodities | Yahoo Finance · atraso de ~15 min, cotação revisável | 23/11 às 13:20 |
| Ibovespa (fechamento) | B3 · Boletim Diário do Mercado | 23/11 às 13:20 |
| Dólar | Banco Central · PTAX de venda (série SGS 1) | 23/11 às 13:20 |
| Curva de juros | B3 · boletim, 43 vencimentos de DI1 | 23/11 às 13:20 |
| Índices da B3 | B3 · acervo diário de índices | 19/11/2026 06:26 |
| Fluxo: rankings, aluguel e termo | B3 · Boletim Diário + nossa base COTAHIST ajustada | 21/11 às 10:43 |
| O lado | medido sobre o painel do próprio site | 23/11 às 13:20 |

Os horários em que cada página do site atualiza estão em [🕐 Quando este site atualiza](/horarios).

> [!warning] O que esta página não decide por você
>
> Os números acima são medição. O que fazer com eles é leitura de risco,
> e o risco é de quem opera. Quando nenhuma vantagem passa das travas,
> a página diz isso em vez de inventar convicção — e ficar de fora
> também é posição.

