---
title: "🌍 Mercados"
date: 2026-11-25
tags: [mercados]
description: "O que mandou no dia: internacional, Brasil, a sincronia entre Ibovespa, dólar e juro, os índices da B3 e onde está — ou não está — a vantagem"
pregao: 2026-11-24
---

> [!note] A que pregão se refere cada bloco
>
> **Internacional**: 2026-11-25 · **Ibovespa (fechamento oficial)**: 2026-11-24 · **Dólar (PTAX)**: 2026-11-24 · **Curva de juros**: 2026-11-24 · **O lado (painel de vantagem)**: 2026-11-24
>
> Blocos com datas diferentes é o normal: as bolsas lá fora negociam enquanto a B3 ainda não publicou o boletim do dia, e a PTAX sai no meio da tarde. O que não vale é comparar número de um com número de outro.

## O lado de hoje

> [!example] ⚪ nenhum sinal passou da trava hoje — sem vantagem medível, ficar de fora é a posição
>
> Medido em 1023 pregões (2022-10-18 a 2026-11-24), 4 sinais testados.
>
> **Por que a régua é dura:** testando 4 sinais a 0.05, a chance de um passar por sorte seria ~19%. Por isso a exigência de cada sinal é p < 0.0125, e não os 5% de costume. Sem essa correção o site viraria uma máquina de achar padrão onde não tem.
>
> **Quando nada passa, não operar é a posição.** Isto mede o que aconteceu depois de dias parecidos; o risco é de quem opera.

| sinal | situação | lado | base medida | o que NÃO fazer |
|---|---|---|---|---|
| configuração do dia (bolsa, dólar, juro) | bolsa cai com dolar e juro em queda · Ibovespa -0.43%, dólar -1.90%, juro -11 p.b. | FORA | 77 casos · subiu em 36,4% (± 5,7 p.p.) · p=0,017 | operar a configuração como se ela mandasse: o teste mede o dia seguinte, não a semana |
| tendência (preço contra as médias de 21 e 63 dias) | abaixo da média de 21 dias · média de 21 abaixo da de 63 | FORA | 213 casos · subiu em 49,8% (± 3,4 p.p.) · p=0,945 | usar isso para o intradia: a medida é de 5 pregões |
| o dólar ainda informa a bolsa? (últimos 126 pregões) | nos últimos 126 pregões, depois de o dólar subir o Ibovespa ficou em -0.097% no dia seguin | FORA | 126 casos · subiu em 46,0% (± 4,5 p.p.) · p=0,373 | tratar o dólar como termômetro da bolsa quando esta medida não passar — o elo clássico nem sempre está ligado |
| o juro informa a bolsa? (últimos 126 pregões) | juro de hoje -11 p.b. | FORA | 126 casos · subiu em 42,9% (± 4,5 p.p.) · p=0,109 | inverter a leitura num dia de Copom ou de leilão do Tesouro: ali o juro reage a evento, não a risco |
| tamanho do dia (volatilidade) | movimento de 0.43% contra 0.82% típicos de 21 dias — abaixo do normal | NÃO DÁ LADO · DIMENSIONA | razão 0.52 contra a mediana de 21 dias | dia parado costuma anteceder dia grande; não confundir calma com segurança |

## Brasil

**Ibovespa** · fechamento oficial da B3 em 2026-11-24: **164.089** pontos

| | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ibovespa 🔴 | 164.090 pts | -0,43% | -2,28% | 1,84% | 3,15% |
| Dólar (PTAX) 🔴 | R$ 5,8573 | -1,90% | 8,04% | 6,45% | 9,81% |
| DI 2030 🔴 | 15,155% | -11 p.b. | -6 p.b. | 198 p.b. | 242 p.b. |
| Dólar futuro (WDOZ26) | 5.910,00 | — | — | — | — |

<small>Ibovespa e DI pela série do MT5 (fecha em 2026-11-24); dólar pela PTAX do Banco Central em 2026-11-24, que é a taxa oficial e não tem salto de rolagem como o futuro contínuo. Juro em pontos-base, não em porcentagem de si mesmo: de 14,00% para 15,00% são 100 p.b., não “+7%”.</small>

**Curva de juros** · 43 vencimentos negociados em 2026-11-24

| 1 ano | 2 anos | 3 anos | 5 anos | 10 anos | inclinação 10a−1a |
|---|---|---|---|---|---|
| 14,38% | 14,82% | 15,02% | 15,18% | 15,19% | **82 p.b.** |

> [!note] A inclinação era de -23 p.b. em 2026-10-15 e está em 82 p.b. — 105 p.b. de mudança.
> 
> **O que isso significa:** curva com inclinação negativa é o mercado pagando mais no curto que no longo, o que costuma acompanhar expectativa de corte de juro à frente. Inclinação positiva é o contrário: prêmio para carregar prazo. A virada de uma para outra não é ajuste fino, é mudança de como o mercado enxerga o risco de prazo.
> 
> *Medido: os dois números e a diferença. Interpretação: o parágrafo acima. O risco de agir é de quem opera.*

> A leitura da curva contra o que os economistas esperam está na página [📉 Juros](/juros).

## Sincronia: Ibovespa, dólar e juro andam juntos?

> [!example] 🟡 **bolsa cai com dolar e juro em queda** em 2026-11-24
>
> Ibovespa -0,43% · dólar -1,90% · juro -11 p.b.
>
> Nos últimos 21 pregões, **13 de 21** dias tiveram os três em configuração coerente.

| par | correlação (postos) | percentil histórico | Pearson | sem o dia mais influente |
|---|---|---|---|---|
| Ibovespa × dólar | **-0.423** | 56 | -0.836 | -0.144 ⚠️ |
| Ibovespa × juro | **-0.564** | 51 | -0.948 | -0.523 ⚠️ |

<small>⚠️ marca o par em que **um único dia carrega o número**: tirando aquele dia da janela, a correlação muda de patamar. Por isso o valor principal é o de postos (Spearman), que resiste a um ponto fora da curva, e o percentil é calculado contra ele. Vender “sincronia histórica” que na verdade é um pregão isolado seria estatística com cara de manchete.</small>

> [!note] Desde 2026-10-26 (19 pregões): Ibovespa × dólar **-0.135** · Ibovespa × juro **-0.51**.
> 
> reeleicao: Ibovespa -13,88%, dolar +8,8%, curva de DI +~260 p.b. em um dia, com circuit breaker.
> 
> **Para quem opera:** quando o elo com o dólar está fraco, usar o dólar como termômetro da bolsa é usar um termômetro desligado. O par com correlação mais forte é o que está mandando no período.

## Internacional

**Os que leem o mundo primeiro** — ouro, petróleo, cobre, dólar index e juro dos Estados Unidos.

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ouro 🔴 | 3.476,40 US$/oz | -2,40% | -10,84% | -19,92% | -18,30% |
| Cobre 🔴 | 5,34 US$/lb | -0,41% | -17,31% | -5,14% | 2,99% |
| Petróleo Brent 🔴 | 89,85 US$/bbl | -1,70% | -23,62% | 47,66% | 42,17% |
| Dollar Index 🟢 | 103,93 pontos | 0,12% | 2,02% | 5,75% | 4,50% |
| Juro EUA 10 anos 🔴 | 4,80 % a.a. | -10 p.b. | -12 p.b. | 64 p.b. | 79 p.b. |

<small>Taxas de juro variam em **pontos-base**, não em porcentagem de si mesmas: um juro que vai de 4,16% a 5,10% subiu 94 p.b.; dizer “+22%” seria tecnicamente verdade e praticamente inútil.</small>

## Commodities, por família

### Metais preciosos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Prata 🔴 | 38,96 US$/oz | -4,43% | -20,66% | -44,46% | -30,99% |
| Platina 🔴 | 1.208,50 US$/oz | -3,99% | -15,96% | -40,60% | -27,97% |
| Paládio 🔴 | 827,00 US$/oz | -3,61% | -16,01% | -49,24% | -43,69% |
| Ouro 🔴 | 3.476,40 US$/oz | -2,40% | -10,84% | -19,92% | -18,30% |

### Metais industriais

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Aço laminado 🟢 | 1.431,00 US$/t | 5,84% | 6,24% | 53,05% | 57,60% |
| Alumínio 🔴 | 2.745,50 US$/t | -4,42% | -17,07% | -5,53% | -2,23% |
| Cobre 🔴 | 5,34 US$/lb | -0,41% | -17,31% | -5,14% | 2,99% |
| Minério de ferro ⚪ | 90,67 US$/t | 0,00% | -0,04% | -15,36% | -13,52% |

### Energia

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Gás natural 🟢 | 3,67 US$/MMBtu | 10,59% | 26,81% | -0,30% | -24,23% |
| Petróleo Brent 🔴 | 89,85 US$/bbl | -1,70% | -23,62% | 47,66% | 42,17% |
| Petróleo WTI 🟢 | 83,34 US$/bbl | 1,57% | -19,96% | 45,14% | 42,34% |
| Gasolina 🔴 | 2,43 US$/gal | -0,92% | -26,58% | 42,59% | 28,27% |
| Óleo de aquecimento 🔴 | 3,69 US$/gal | -0,45% | -23,05% | 73,84% | 58,02% |

### Grãos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Milho 🟢 | 452,75 ¢/bu | 4,32% | 1,12% | 2,84% | 3,96% |
| Trigo 🟢 | 582,75 ¢/bu | 2,28% | -3,44% | 14,94% | 9,75% |
| Aveia 🟢 | 367,50 ¢/bu | 1,52% | 6,91% | 21,49% | 24,68% |
| Arroz 🔴 | 18,70 US$/cwt | -0,72% | 7,26% | 94,89% | 85,61% |
| Farelo de soja 🟢 | 354,10 US$/t | 0,31% | 9,09% | 20,24% | 12,63% |
| Óleo de soja 🔴 | 57,94 ¢/lb | -0,29% | -12,08% | 20,53% | 11,94% |
| Soja 🟢 | 1.236,50 ¢/bu | 0,20% | 1,17% | 19,99% | 8,68% |

### Softs

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Suco de laranja 🔴 | 122,00 ¢/lb | -7,15% | 5,77% | -40,55% | -21,82% |
| Açúcar 🟢 | 18,24 ¢/lb | 3,28% | -5,79% | 21,52% | 19,92% |
| Algodão 🟢 | 81,57 ¢/lb | 3,10% | 4,81% | 26,92% | 29,66% |
| Cacau 🟢 | 5.406,00 US$/t | 2,37% | -0,86% | -10,87% | 0,04% |
| Café arábica 🟢 | 270,95 ¢/lb | 0,89% | -5,66% | -22,31% | -34,39% |

### Proteína

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Suíno (EUA) 🔴 | 50,72 ¢/lb | -2,08% | -13,84% | -40,39% | -37,07% |
| Bezerro (EUA) 🔴 | 328,45 ¢/lb | -1,34% | -2,76% | -6,22% | 1,38% |
| Boi gordo (EUA) 🔴 | 224,07 ¢/lb | -0,81% | 0,03% | -3,42% | 3,94% |

> As agrícolas negociadas **na B3**, com a curva e o que ela diz, estão na página [🌾 Agro](/agro). Aqui é o preço lá fora, que é o que chega antes.

## Índices da B3

Os índices publicados pela B3 no pregão de **24/11/2026**, na ordem do que mais subiu ao que mais caiu no dia. Boletim coletado no acervo em **25/11/2026 06:26** · 33 índices.

| índice | fechamento | no dia | intradiário | mínimo | máximo |
|---|---|---|---|---|---|
| IFIL 🟢 | 1.533 | 0,86% | 0,79% | 1.520 | 1.542 |
| IEE 🟢 | 121.176 | 0,85% | 0,84% | 120.165 | 123.080 |
| UTILITIES 🟢 | 17.629 | 0,84% | 0,82% | 17.485 | 17.883 |
| IFIX 🟢 | 3.467 | 0,78% | 0,76% | 3.441 | 3.487 |
| ICONSUMO 🟢 | 2.653 | 0,64% | 0,64% | 2.636 | 2.711 |
| IVBX2 🟢 | 17.658 | 0,49% | 0,45% | 17.579 | 17.922 |
| ISE 🟢 | 3.995 | 0,45% | 0,45% | 3.977 | 4.076 |
| IDIVERSA B3 🟢 | 1.398 | 0,36% | 0,36% | 1.393 | 1.425 |
| AGFS 🟢 | 1.375 | 0,29% | 0,29% | 1.371 | 1.398 |
| INDX 🟢 | 30.775 | 0,29% | 0,29% | 30.539 | 30.899 |
| IMOBILIARIO 🟢 | 1.089 | 0,28% | 0,28% | 1.086 | 1.116 |
| SMALL CAP 🟢 | 1.984 | 0,25% | 0,25% | 1.979 | 2.039 |
| ICO2 🟢 | 2.921 | 0,24% | 0,24% | 2.914 | 2.987 |
| IBEW 🟢 | 1.392 | 0,22% | 0,14% | 1.388 | 1.414 |
| IBHB ⚪ | 1.593 | 0,00% | -0,06% | 1.593 | 1.656 |
| IBLV 🔴 | 1.292 | -0,15% | -0,15% | 1.291 | 1.311 |
| IFINANCEIRO 🔴 | 16.120 | -0,18% | -0,18% | 16.120 | 16.668 |
| GPTW 🔴 | 1.229 | -0,24% | -0,24% | 1.229 | 1.265 |
| IBEP 🔴 | 1.625 | -0,31% | -0,37% | 1.624 | 1.656 |
| I DIVIDENDOS 🔴 | 11.568 | -0,32% | -0,33% | 11.562 | 11.831 |
| IBEE 🔴 | 4.642 | -0,41% | -0,39% | 4.642 | 4.755 |
| IGNM 🔴 | 4.293 | -0,42% | -0,42% | 4.293 | 4.372 |
| IBOVESPA 🔴 | 164.089 | -0,43% | -0,46% | 164.023 | 167.579 |
| IBRASIL 🔴 | 6.417 | -0,48% | -0,48% | 6.415 | 6.557 |
| IBRX100 🔴 | 69.062 | -0,50% | -0,50% | 69.036 | 70.560 |
| IBRX50 🔴 | 27.699 | -0,52% | -0,56% | 27.688 | 28.298 |
| IGC TRADE 🔴 | 7.273 | -0,53% | -0,53% | 7.271 | 7.437 |
| IGC 🔴 | 25.271 | -0,54% | -0,54% | 25.265 | 25.813 |
| ITAG 🔴 | 35.262 | -0,55% | -0,55% | 35.256 | 36.055 |
| MIDLARGE CAP 🔴 | 3.405 | -0,58% | -0,61% | 3.403 | 3.477 |
| IBOV SD TR 🔴 | 1.869 | -0,90% | -0,95% | 1.868 | 1.913 |
| IMATBASICOS 🔴 | 6.104 | -1,02% | -1,02% | 6.034 | 6.179 |
| BDRX 🔴 | 29.054 | -1,15% | -0,26% | 28.381 | 29.177 |

<small><b>no dia</b> é o fechamento contra o fechamento do pregão anterior (23/11/2026) — a convenção de mercado, e a conta com que qualquer outra fonte vai ser comparada. <b>intradiário</b> é o fechamento contra a abertura do próprio pregão, que é a conta que o boletim da B3 permite direto e que <b>descarta o gap de abertura</b>. As duas aparecem porque a diferença entre elas é o gap, e gap é informação.</small>

## Fluxo: quem subiu, quem caiu e quanto custa ficar vendido

> [!note] De que pregão é cada número deste bloco
>
> Rankings e mais negociadas: **nossa base até 17/11**. Oscilação do dia, aluguel, termo e opções: **BDI de 24/11**. Os dois pregões são diferentes de propósito — o BDI sai depois do nosso fechamento.
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
| **BOVA11** | R$ 23.268.663.000 | 0,96% a.a. <small>44 ctr</small> | hoje |
| **PETR4** | R$ 11.652.754.350 | 0,14% a.a. <small>1.349 ctr</small> | hoje |
| **VALE3** | R$ 10.203.592.316 | 0,04% a.a. <small>40 ctr</small> | hoje |
| **BBAS3** | R$ 8.436.557.214 | 0,70% a.a. <small>8.266 ctr</small> | hoje |
| **ITUB4** | R$ 7.618.546.460 | 0,08% a.a. <small>225 ctr</small> | hoje |
| **PETR3** | R$ 6.961.470.133 | 3,77% a.a. <small>224 ctr</small> | hoje |
| **BOVV11** | R$ 5.117.171.930 | 0,16% a.a. <small>127 ctr</small> | hoje |
| **BBSE3** | R$ 4.815.010.823 | 0,13% a.a. <small>168 ctr</small> | hoje |

<small>A taxa é a média dos contratos fechados na sessão, e só aparece com ao menos 20 contratos — abaixo disso é média de quase nada. Quando o dia não tem amostra, vale a última sessão que teve, e a coluna diz qual. O acervo de taxas tem 6 sessões e cresce a cada pregão.</small>

| mais caros de alugar | taxa | posição | movimento no acervo |
|---|---|---|---|
| **CSNA3** | 48,53% a.a. | R$ 2.534.810 | subindo · 31,4% → 48,5% desde 16/11 |
| **CMIN3** | 47,27% a.a. | R$ 9.684.845 | caindo · 50,4% → 47,3% desde 16/11 |
| **BRKM5** | 23,34% a.a. | R$ 3.818.040 | caindo · 24,0% → 23,3% desde 16/11 |
| **FRAS3** | 19,60% a.a. | R$ 8.448.904 | caindo · 20,9% → 19,6% desde 16/11 |
| **ORVR3** | 16,85% a.a. | R$ 9.483.804 | caindo · 19,6% → 16,9% desde 16/11 |
| **VIVA3** | 10,82% a.a. | R$ 3.190.862 | caindo · 11,1% → 10,8% desde 16/11 |
| **AZEV3** | 10,28% a.a. | R$ 133.809 | estável · 10,3% → 10,3% desde 16/11 |
| **CEAB3** | 6,69% a.a. | R$ 31.357.654 | caindo · 6,9% → 6,7% desde 16/11 |

<small>Taxa alta e subindo é o mercado cobrando caro para emprestar o papel. Pode ser demanda de quem quer vender a descoberto, pode ser oferta minguando — a tabela mede o custo, não o motivo.</small>

### Mercado a termo

| papel | empresa | prazos | prazo médio | quantidade |
|---|---|---|---|---|
| **MRVE3** <small>ação</small> | MRV | 1 | 180d | 1.210.400 |
| **ASAI3** <small>ação</small> | ASSAI | 1 | 90d | 559.300 |
| **XINA11** <small>ETF/FII</small> | XPETFCHINA | 2 | 118d | 521.184 |
| **ORVR3** <small>ação</small> | ORIZON | 1 | 34d | 350.000 |
| **NATU3** <small>ação</small> | NATURA | 2 | 36d | 310.000 |
| **VALE3** <small>ação</small> | VALE | 12 | 129d | 222.200 |
| **FESA4** <small>ação</small> | FERBASA | 1 | 16d | 200.000 |
| **RIAA3** <small>ação</small> | RIACHUELO | 1 | 62d | 175.000 |

<small>67 papéis em 123 linhas do boletim: a B3 publica uma linha por papel E prazo, então somar sem agregar mostra o mesmo papel várias vezes e nenhuma delas é o tamanho da posição.</small>

## O que o dólar futuro cobra

*Boletim da B3 de 2026-11-24.*

O futuro de dólar é sempre mais caro que o à vista, e isso **não é opinião do mercado sobre o dólar** — é juro. Quem vende dólar para a frente fica com reais rendendo CDI e abre mão de dólares rendendo juro americano; a diferença entra no preço. Esse pedaço se chama carrego, e dá para medir exatamente.

### O carrego, medido entre dois vencimentos

| | vencimento | ajuste | dias úteis | contratos |
|---|---|---|---|---|
| curto | `WDOZ26` | 5.905,211 | 5 | 4.917.549 |
| longo | `WDOF27` | 5.938,253 | 27 | 34.508 |

Entre os dois vão **22 dias úteis**, e o mercado cobra **+0,560%** para atravessar esse pedaço — **+0,0254% por dia útil**, ou **+6,60% ao ano**.

Os dois ajustes saem do mesmo boletim, no mesmo instante, então essa inclinação é carrego limpo: não tem hora do relógio dentro.

### A conferência que o número tem de passar

A curva de DI diz que o juro em reais nessa mesma janela é **+13,69% ao ano**. Tirando o carrego, sobra o juro em dólar implícito: **+6,65% ao ano**.

A B3 publica o cupom cambial dela nos vencimentos longos: `DDIX27` +7,93% · `DDIZ27` +7,84% · `DDIF28` +7,79%. São duas curvas que não se falam — uma deduzida do dólar com o DI, outra negociada direto — e elas ficam a **1,2 ponto percentual** uma da outra, dentro da tolerância de 3 pontos que este bloco usa. Não é o mesmo número, e nem deveria ser: os vértices do DDI são de prazo bem maior que a janela medida aqui. O que a conferência garante é que não há erro de ordem de grandeza — se um dia elas se afastarem muito, o bloco avisa em vez de publicar.

### Por que a diferença entre o futuro e a PTAX engana

| ajuste do `WDOZ26` contra a PTAX | **+0,818%** |
|---|---|
| carrego de verdade, nos 5 dias úteis que faltam para o vencimento | +0,127% |
| **sobra, que não é carrego** | **+0,691%** |

A sobra não é o mercado apostando em alta do dólar. A PTAX é fixada por volta das 13h; o ajuste do futuro sai no fechamento. São cinco horas de pregão entre uma medida e outra, e tudo que o dólar andou nesse intervalo aparece como se fosse prêmio.

### Onde pode estar a vantagem, e o que não fazer

- **O carrego é previsível; o resto não.** Quem opera dólar futuro comprado paga esse carrego todo dia, chova ou faça sol. Num carrego de +0,0254% ao dia útil, uma posição parada por um mês já começa com essa conta contra. Posição comprada em dólar precisa de movimento maior que o carrego só para empatar.
- **Carrego subindo é juro mudando, não dólar mudando.** Se esta inclinação se abrir sem que a curva de DI se mexa, a conta não fecha e vale desconfiar do dado antes de desconfiar do mercado.
- **Não leia a diferença entre futuro e PTAX como sinal.** É quase toda relógio, como a tabela acima mostra. Quem conclui “o mercado está apostando no dólar” a partir daqueles dois números está lendo o calendário.
- **Não compare número de dias corridos com dias úteis.** O carrego corre em dias úteis (252), o juro americano em dias corridos (360). Misturar os dois erra por vários por cento ao ano.

<small>Leitura de risco a partir de dado público da B3, não recomendação. Quem monta a posição carrega o risco.</small>

## Anomalias do dia

| ativo | movimento | desvio | onde |
|---|---|---|---|
| **Aço laminado** | 5,84% | z 6,4 | internacional |
| **Milho** | 4,32% | z 3,1 | internacional |
| **VIX** | 6,99% | z 3,6 | internacional |
| **S&P 500** | -2,88% | z -3,0 | internacional |
| **Nasdaq** | -4,25% | z -3,1 | internacional |
| **DBB (Metais industriais)** | volume 2,69× a mediana | acima do normal | fluxo de ETF |
| **WEAT (Trigo)** | volume 0,42× a mediana | abaixo do normal | fluxo de ETF |
| **EWZS (Small caps Brasil)** | volume 0,33× a mediana | abaixo do normal | fluxo de ETF |
| **Dólar (PTAX)** | -1,90% | z -3.3 (mediana/MAD) | Brasil |

<small>O desvio é medido contra a mediana e o MAD dos últimos 252 pregões, não contra o desvio-padrão: um único dia extremo — como 26/10/2026 — infla o desvio-padrão a ponto de nenhum dia normal mais parecer anômalo, e o alerta ficaria cego justamente depois de um susto.</small>

---

## De onde vem cada número, e de quando

| bloco | fonte | coletado |
|---|---|---|
| Internacional e commodities | Yahoo Finance · atraso de ~15 min, cotação revisável | 25/11 às 13:20 |
| Ibovespa (fechamento) | B3 · Boletim Diário do Mercado | 25/11 às 13:20 |
| Dólar | Banco Central · PTAX de venda (série SGS 1) | 25/11 às 13:20 |
| Curva de juros | B3 · boletim, 43 vencimentos de DI1 | 25/11 às 13:20 |
| Índices da B3 | B3 · acervo diário de índices | 25/11/2026 06:26 |
| Fluxo: rankings, aluguel e termo | B3 · Boletim Diário + nossa base COTAHIST ajustada | 25/11 às 06:27 |
| O lado | medido sobre o painel do próprio site | 25/11 às 13:20 |

Os horários em que cada página do site atualiza estão em [🕐 Quando este site atualiza](/horarios).

> [!warning] O que esta página não decide por você
>
> Os números acima são medição. O que fazer com eles é leitura de risco,
> e o risco é de quem opera. Quando nenhuma vantagem passa das travas,
> a página diz isso em vez de inventar convicção — e ficar de fora
> também é posição.

