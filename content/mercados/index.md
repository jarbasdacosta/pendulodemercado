---
title: "🌍 Mercados"
date: 2026-11-24
tags: [mercados]
description: "O que mandou no dia: internacional, Brasil, a sincronia entre Ibovespa, dólar e juro, os índices da B3 e onde está — ou não está — a vantagem"
pregao: 2026-11-23
---

> [!note] A que pregão se refere cada bloco
>
> **Internacional**: 2026-11-25 · **Ibovespa (fechamento oficial)**: 2026-11-23 · **Dólar (PTAX)**: 2026-11-24 · **Curva de juros**: 2026-11-23 · **O lado (painel de vantagem)**: 2026-11-23
>
> Blocos com datas diferentes é o normal: as bolsas lá fora negociam enquanto a B3 ainda não publicou o boletim do dia, e a PTAX sai no meio da tarde. O que não vale é comparar número de um com número de outro.

## O lado de hoje

> [!example] ⚪ nenhum sinal passou da trava hoje — sem vantagem medível, ficar de fora é a posição
>
> Medido em 1022 pregões (2022-10-18 a 2026-11-23), 4 sinais testados.
>
> **Por que a régua é dura:** testando 4 sinais a 0.05, a chance de um passar por sorte seria ~19%. Por isso a exigência de cada sinal é p < 0.0125, e não os 5% de costume. Sem essa correção o site viraria uma máquina de achar padrão onde não tem.
>
> **Quando nada passa, não operar é a posição.** Isto mede o que aconteceu depois de dias parecidos; o risco é de quem opera.

| sinal | situação | lado | base medida | o que NÃO fazer |
|---|---|---|---|---|
| configuração do dia (bolsa, dólar, juro) | bolsa cai e dolar sobe, juro em queda · Ibovespa -0.95%, dólar +1.39%, juro -15 p.b. | FORA | 87 casos · subiu em 50,6% (± 5,4 p.p.) · p=0,915 | operar a configuração como se ela mandasse: o teste mede o dia seguinte, não a semana |
| tendência (preço contra as médias de 21 e 63 dias) | abaixo da média de 21 dias · média de 21 abaixo da de 63 | FORA | 212 casos · subiu em 50,0% (± 3,4 p.p.) · p=1,000 | usar isso para o intradia: a medida é de 5 pregões |
| o dólar ainda informa a bolsa? (últimos 126 pregões) | nos últimos 126 pregões, depois de o dólar subir o Ibovespa ficou em -0.095% no dia seguin | FORA | 126 casos · subiu em 45,2% (± 4,5 p.p.) · p=0,285 | tratar o dólar como termômetro da bolsa quando esta medida não passar — o elo clássico nem sempre está ligado |
| o juro informa a bolsa? (últimos 126 pregões) | juro de hoje -15 p.b. | FORA | 126 casos · subiu em 43,7% (± 4,5 p.p.) · p=0,154 | inverter a leitura num dia de Copom ou de leilão do Tesouro: ali o juro reage a evento, não a risco |
| tamanho do dia (volatilidade) | movimento de 0.95% contra 0.95% típicos de 21 dias — dentro do normal | NÃO DÁ LADO · DIMENSIONA | razão 1.00 contra a mediana de 21 dias | nada a ajustar por volatilidade |

## Brasil

**Ibovespa** · fechamento oficial da B3 em 2026-11-23: **164.796** pontos

| | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ibovespa 🔴 | 164.796 pts | -0,95% | -1,86% | 2,28% | 4,06% |
| Dólar (PTAX) 🔴 | R$ 5,8573 | -1,90% | 8,04% | 6,45% | 9,81% |
| DI 2030 🔴 | 15,265% | -16 p.b. | 6 p.b. | 208 p.b. | 254 p.b. |
| Dólar futuro (WDOZ26) | 5.938,50 | — | — | — | — |

<small>Ibovespa e DI pela série do MT5 (fecha em 2026-11-23); dólar pela PTAX do Banco Central em 2026-11-24, que é a taxa oficial e não tem salto de rolagem como o futuro contínuo. Juro em pontos-base, não em porcentagem de si mesmo: de 14,00% para 15,00% são 100 p.b., não “+7%”.</small>

**Curva de juros** · 43 vencimentos negociados em 2026-11-23

| 1 ano | 2 anos | 3 anos | 5 anos | 10 anos | inclinação 10a−1a |
|---|---|---|---|---|---|
| 14,56% | 15,04% | 15,22% | 15,33% | 15,30% | **73 p.b.** |

> [!note] A inclinação era de -23 p.b. em 2026-10-15 e está em 73 p.b. — 96 p.b. de mudança.
> 
> **O que isso significa:** curva com inclinação negativa é o mercado pagando mais no curto que no longo, o que costuma acompanhar expectativa de corte de juro à frente. Inclinação positiva é o contrário: prêmio para carregar prazo. A virada de uma para outra não é ajuste fino, é mudança de como o mercado enxerga o risco de prazo.
> 
> *Medido: os dois números e a diferença. Interpretação: o parágrafo acima. O risco de agir é de quem opera.*

> A leitura da curva contra o que os economistas esperam está na página [📉 Juros](/juros).

## Sincronia: Ibovespa, dólar e juro andam juntos?

> [!example] 🟡 **bolsa cai e dolar sobe, juro em queda** em 2026-11-23
>
> Ibovespa -0,95% · dólar +1,39% · juro -16 p.b.
>
> Nos últimos 21 pregões, **14 de 21** dias tiveram os três em configuração coerente.

| par | correlação (postos) | percentil histórico | Pearson | sem o dia mais influente |
|---|---|---|---|---|
| Ibovespa × dólar | **-0.379** | 68 | -0.856 | -0.162 ⚠️ |
| Ibovespa × juro | **-0.598** | 44 | -0.948 | -0.542 ⚠️ |

<small>⚠️ marca o par em que **um único dia carrega o número**: tirando aquele dia da janela, a correlação muda de patamar. Por isso o valor principal é o de postos (Spearman), que resiste a um ponto fora da curva, e o percentil é calculado contra ele. Vender “sincronia histórica” que na verdade é um pregão isolado seria estatística com cara de manchete.</small>

> [!note] Desde 2026-10-26 (18 pregões): Ibovespa × dólar **-0.158** · Ibovespa × juro **-0.516**.
> 
> reeleicao: Ibovespa -13,88%, dolar +8,8%, curva de DI +~260 p.b. em um dia, com circuit breaker.
> 
> **Para quem opera:** quando o elo com o dólar está fraco, usar o dólar como termômetro da bolsa é usar um termômetro desligado. O par com correlação mais forte é o que está mandando no período.

## Internacional

**Os que leem o mundo primeiro** — ouro, petróleo, cobre, dólar index e juro dos Estados Unidos.

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ouro 🔴 | 3.547,80 US$/oz | -2,84% | -9,01% | -18,27% | -16,62% |
| Cobre 🔴 | 5,50 US$/lb | -2,30% | -14,88% | -2,35% | 6,02% |
| Petróleo Brent 🔴 | 88,05 US$/bbl | -1,48% | -25,15% | 44,70% | 39,32% |
| Dollar Index 🔴 | 103,87 pontos | -0,43% | 1,96% | 5,69% | 4,44% |
| Juro EUA 10 anos 🔴 | 4,90 % a.a. | -1 p.b. | -2 p.b. | 74 p.b. | 89 p.b. |

<small>Taxas de juro variam em **pontos-base**, não em porcentagem de si mesmas: um juro que vai de 4,16% a 5,10% subiu 94 p.b.; dizer “+22%” seria tecnicamente verdade e praticamente inútil.</small>

## Commodities, por família

### Metais preciosos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Prata 🔴 | 40,99 US$/oz | -5,01% | -16,52% | -41,56% | -27,39% |
| Platina 🔴 | 1.258,50 US$/oz | -4,89% | -12,48% | -38,14% | -24,99% |
| Paládio 🔴 | 863,50 US$/oz | -3,54% | -12,30% | -47,00% | -41,20% |
| Ouro 🔴 | 3.547,80 US$/oz | -2,84% | -9,01% | -18,27% | -16,62% |

### Metais industriais

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Alumínio 🔴 | 2.748,50 US$/t | -5,14% | -16,98% | -5,43% | -2,12% |
| Aço laminado 🟢 | 1.404,00 US$/t | 3,85% | 4,23% | 50,16% | 54,63% |
| Cobre 🔴 | 5,50 US$/lb | -2,30% | -14,88% | -2,35% | 6,02% |
| Minério de ferro ⚪ | 90,67 US$/t | 0,00% | -0,04% | -15,36% | -13,52% |

### Energia

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Gás natural 🟢 | 3,67 US$/MMBtu | 15,14% | 26,50% | -0,54% | -24,41% |
| Óleo de aquecimento 🔴 | 3,63 US$/gal | -1,70% | -24,13% | 71,39% | 55,79% |
| Petróleo Brent 🔴 | 88,05 US$/bbl | -1,48% | -25,15% | 44,70% | 39,32% |
| Petróleo WTI 🟢 | 81,26 US$/bbl | 1,36% | -21,96% | 41,52% | 38,79% |
| Gasolina 🟢 | 2,42 US$/gal | 0,74% | -26,83% | 42,10% | 27,82% |

### Grãos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Milho 🟢 | 450,25 ¢/bu | 3,68% | 0,56% | 2,27% | 3,39% |
| Aveia 🟢 | 376,75 ¢/bu | 3,43% | 9,60% | 24,55% | 27,82% |
| Óleo de soja 🔴 | 58,05 ¢/lb | -2,21% | -11,91% | 20,76% | 12,15% |
| Trigo 🟢 | 587,75 ¢/bu | 1,86% | -2,61% | 15,93% | 10,69% |
| Farelo de soja 🟢 | 348,60 US$/t | 0,84% | 7,39% | 18,37% | 10,88% |
| Soja 🔴 | 1.226,50 ¢/bu | -0,18% | 0,35% | 19,02% | 7,80% |
| Arroz 🔴 | 18,83 US$/cwt | -0,05% | 8,03% | 96,30% | 86,95% |

### Softs

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Algodão 🟢 | 82,34 ¢/lb | 6,20% | 5,79% | 28,12% | 30,89% |
| Café arábica 🔴 | 260,40 ¢/lb | -5,08% | -9,33% | -25,33% | -36,95% |
| Cacau 🟢 | 5.444,00 US$/t | 4,97% | -0,17% | -10,24% | 0,74% |
| Suco de laranja 🔴 | 131,20 ¢/lb | -2,31% | 13,74% | -36,06% | -15,92% |
| Açúcar 🟢 | 17,70 ¢/lb | 0,51% | -8,57% | 17,92% | 16,37% |

### Proteína

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Suíno (EUA) 🟢 | 56,28 ¢/lb | 7,29% | -4,42% | -33,87% | -30,18% |
| Boi gordo (EUA) 🟢 | 229,93 ¢/lb | 2,39% | 2,65% | -0,89% | 6,66% |
| Bezerro (EUA) 🔴 | 332,95 ¢/lb | -0,41% | -1,43% | -4,94% | 2,77% |

> As agrícolas negociadas **na B3**, com a curva e o que ela diz, estão na página [🌾 Agro](/agro). Aqui é o preço lá fora, que é o que chega antes.

## Índices da B3

Os índices publicados pela B3 no pregão de **23/11/2026**, na ordem do que mais subiu ao que mais caiu no dia. Boletim coletado no acervo em **24/11/2026 19:53** · 33 índices.

| índice | fechamento | no dia | intradiário | mínimo | máximo |
|---|---|---|---|---|---|
| IBHB 🟢 | 1.593 | 1,08% | 1,14% | 1.551 | 1.597 |
| BDRX 🟢 | 29.392 | 0,60% | 1,44% | 28.677 | 29.840 |
| ICONSUMO 🟢 | 2.636 | 0,34% | 0,34% | 2.591 | 2.649 |
| IVBX2 🟢 | 17.572 | 0,10% | 0,11% | 17.345 | 17.617 |
| IMOBILIARIO ⚪ | 1.086 | 0,00% | 0,00% | 1.068 | 1.094 |
| SMALL CAP ⚪ | 1.979 | 0,00% | 0,00% | 1.952 | 1.990 |
| GPTW ⚪ | 1.232 | 0,00% | 0,08% | 1.216 | 1.239 |
| ISE 🔴 | 3.977 | -0,20% | -0,20% | 3.937 | 3.997 |
| ICO2 🔴 | 2.914 | -0,21% | -0,21% | 2.881 | 2.929 |
| UTILITIES 🔴 | 17.482 | -0,26% | -0,24% | 17.284 | 17.530 |
| IDIVERSA B3 🔴 | 1.393 | -0,29% | -0,29% | 1.381 | 1.400 |
| IBLV 🔴 | 1.294 | -0,31% | -0,31% | 1.289 | 1.305 |
| IGNM 🔴 | 4.311 | -0,42% | -0,42% | 4.278 | 4.332 |
| IBEW 🔴 | 1.389 | -0,57% | -0,57% | 1.383 | 1.399 |
| IBEP 🔴 | 1.630 | -0,61% | -0,61% | 1.620 | 1.640 |
| AGFS 🔴 | 1.371 | -0,65% | -0,58% | 1.363 | 1.383 |
| IFINANCEIRO 🔴 | 16.149 | -0,73% | -0,73% | 16.043 | 16.274 |
| IEE 🔴 | 120.151 | -0,83% | -0,82% | 119.081 | 121.147 |
| IBOV SD TR 🔴 | 1.886 | -0,84% | -0,79% | 1.870 | 1.901 |
| IGC 🔴 | 25.407 | -0,86% | -0,86% | 25.287 | 25.627 |
| ITAG 🔴 | 35.457 | -0,94% | -0,94% | 35.309 | 35.793 |
| I DIVIDENDOS 🔴 | 11.605 | -0,94% | -0,94% | 11.545 | 11.715 |
| IBOVESPA 🔴 | 164.796 | -0,95% | -0,95% | 164.129 | 166.373 |
| IBRASIL 🔴 | 6.448 | -0,97% | -0,97% | 6.424 | 6.511 |
| IBRX100 🔴 | 69.406 | -0,98% | -0,98% | 69.142 | 70.093 |
| IBRX50 🔴 | 27.845 | -0,98% | -0,98% | 27.736 | 28.121 |
| IGC TRADE 🔴 | 7.312 | -0,99% | -0,99% | 7.283 | 7.385 |
| IMATBASICOS 🔴 | 6.167 | -1,01% | -1,00% | 6.134 | 6.247 |
| MIDLARGE CAP 🔴 | 3.425 | -1,07% | -1,07% | 3.415 | 3.462 |
| IBEE 🔴 | 4.661 | -1,17% | -1,04% | 4.637 | 4.710 |
| IFIL 🔴 | 1.520 | -1,17% | -1,17% | 1.512 | 1.539 |
| IFIX 🔴 | 3.440 | -1,29% | -1,29% | 3.425 | 3.486 |
| INDX 🔴 | 30.686 | -1,60% | -1,59% | 30.572 | 31.184 |

<small><b>no dia</b> é o fechamento contra o fechamento do pregão anterior (19/11/2026) — a convenção de mercado, e a conta com que qualquer outra fonte vai ser comparada. <b>intradiário</b> é o fechamento contra a abertura do próprio pregão, que é a conta que o boletim da B3 permite direto e que <b>descarta o gap de abertura</b>. As duas aparecem porque a diferença entre elas é o gap, e gap é informação.</small>

## Fluxo: quem subiu, quem caiu e quanto custa ficar vendido

> [!note] De que pregão é cada número deste bloco
>
> Rankings e mais negociadas: **nossa base até 17/11**. Oscilação do dia, aluguel, termo e opções: **BDI de 23/11**. Os dois pregões são diferentes de propósito — o BDI sai depois do nosso fechamento.
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
| **BOVA11** | R$ 23.194.283.259 | 0,18% a.a. <small>564 ctr</small> | 19/11 |
| **VALE3** | R$ 10.178.271.950 | 0,04% a.a. <small>1.083 ctr</small> | 17/11 |
| **PETR4** | R$ 9.773.492.192 | 0,09% a.a. <small>2.460 ctr</small> | hoje |
| **BBAS3** | R$ 8.814.933.625 | 0,70% a.a. <small>534 ctr</small> | hoje |
| **ITUB4** | R$ 7.606.162.095 | 0,04% a.a. <small>78 ctr</small> | hoje |
| **PETR3** | R$ 7.118.024.468 | 3,79% a.a. <small>1.115 ctr</small> | hoje |
| **BOVV11** | R$ 5.039.373.712 | 0,10% a.a. <small>632 ctr</small> | 17/11 |
| **BBSE3** | R$ 4.938.754.181 | 0,13% a.a. <small>389 ctr</small> | hoje |

<small>A taxa é a média dos contratos fechados na sessão, e só aparece com ao menos 20 contratos — abaixo disso é média de quase nada. Quando o dia não tem amostra, vale a última sessão que teve, e a coluna diz qual. O acervo de taxas tem 5 sessões e cresce a cada pregão.</small>

| mais caros de alugar | taxa | posição | movimento no acervo |
|---|---|---|---|
| **CSNA3** | 48,17% a.a. | R$ 9.237.306 | subindo · 31,4% → 48,2% desde 16/11 |
| **CMIN3** | 47,98% a.a. | R$ 16.461.559 | caindo · 50,4% → 48,0% desde 16/11 |
| **BHIA3** | 40,97% a.a. | R$ 301.584 | estável · 41,0% → 41,0% desde 16/11 |
| **BRKM5** | 23,76% a.a. | R$ 8.368.687 | caindo · 24,0% → 23,8% desde 16/11 |
| **YDUQ3** | 20,11% a.a. | R$ 3.443.136 | caindo · 21,5% → 20,1% desde 16/11 |
| **ORVR3** | 18,42% a.a. | R$ 13.510.931 | caindo · 19,6% → 18,4% desde 16/11 |
| **CYRE3** | 17,46% a.a. | R$ 52.522.835 | caindo · 23,5% → 17,5% desde 16/11 |
| **NVDC34** | 15,99% a.a. | R$ 52.992.153 | caindo · 16,6% → 16,0% desde 16/11 |

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

*Boletim da B3 de 2026-11-23.*

O futuro de dólar é sempre mais caro que o à vista, e isso **não é opinião do mercado sobre o dólar** — é juro. Quem vende dólar para a frente fica com reais rendendo CDI e abre mão de dólares rendendo juro americano; a diferença entra no preço. Esse pedaço se chama carrego, e dá para medir exatamente.

### O carrego, medido entre dois vencimentos

| | vencimento | ajuste | dias úteis | contratos |
|---|---|---|---|---|
| curto | `WDOZ26` | 5.936,091 | 6 | 4.597.265 |
| longo | `WDOF27` | 5.969,478 | 28 | 16.833 |

Entre os dois vão **22 dias úteis**, e o mercado cobra **+0,562%** para atravessar esse pedaço — **+0,0256% por dia útil**, ou **+6,64% ao ano**.

Os dois ajustes saem do mesmo boletim, no mesmo instante, então essa inclinação é carrego limpo: não tem hora do relógio dentro.

### A conferência que o número tem de passar

A curva de DI diz que o juro em reais nessa mesma janela é **+13,72% ao ano**. Tirando o carrego, sobra o juro em dólar implícito: **+6,64% ao ano**.

A B3 publica o cupom cambial dela nos vencimentos longos: `DDIX27` +5,83% · `DDIZ27` +5,90% · `DDIF28` +6,01%. São duas curvas que não se falam — uma deduzida do dólar com o DI, outra negociada direto — e elas ficam a **0,7 ponto percentual** uma da outra, dentro da tolerância de 3 pontos que este bloco usa. Não é o mesmo número, e nem deveria ser: os vértices do DDI são de prazo bem maior que a janela medida aqui. O que a conferência garante é que não há erro de ordem de grandeza — se um dia elas se afastarem muito, o bloco avisa em vez de publicar.

Repare no vencimento mais curto do cupom cambial, o `DDIZ26`: **-22,16% ao ano**, negativo. Juro negativo em dólar não existe. Ele fica assim porque é calculado contra a PTAX da véspera e carrega a defasagem dela.

A série inteira mostra a distorção se diluindo conforme o prazo cresce: **-22,2% → +0,6% → +2,8% → +3,7% → +4,3%**, até estabilizar nos vértices de um ano em diante. É o mesmo artefato explicado abaixo, impresso pela própria bolsa — e é a razão de este bloco medir o carrego entre dois vencimentos de dólar em vez de comparar futuro com PTAX.

### Por que a diferença entre o futuro e a PTAX engana

> [!note] Hoje não dá para medir esse pedaço
> PTAX é de 2026-11-24 e o boletim é de 2026-11-23. Comparar o ajuste de um dia com a PTAX de outro é exatamente o erro que esta seção existe para explicar, então o número não sai.

### Onde pode estar a vantagem, e o que não fazer

- **O carrego é previsível; o resto não.** Quem opera dólar futuro comprado paga esse carrego todo dia, chova ou faça sol. Num carrego de +0,0256% ao dia útil, uma posição parada por um mês já começa com essa conta contra. Posição comprada em dólar precisa de movimento maior que o carrego só para empatar.
- **Carrego subindo é juro mudando, não dólar mudando.** Se esta inclinação se abrir sem que a curva de DI se mexa, a conta não fecha e vale desconfiar do dado antes de desconfiar do mercado.
- **Não leia a diferença entre futuro e PTAX como sinal.** É quase toda relógio, como a tabela acima mostra. Quem conclui “o mercado está apostando no dólar” a partir daqueles dois números está lendo o calendário.
- **Não compare número de dias corridos com dias úteis.** O carrego corre em dias úteis (252), o juro americano em dias corridos (360). Misturar os dois erra por vários por cento ao ano.

<small>Leitura de risco a partir de dado público da B3, não recomendação. Quem monta a posição carrega o risco.</small>

## Anomalias do dia

| ativo | movimento | desvio | onde |
|---|---|---|---|
| **Alumínio** | -5,14% | z -2,9 | internacional |
| **Aço laminado** | 3,85% | z 4,4 | internacional |
| **Gás natural** | 15,14% | z 2,6 | internacional |
| **Milho** | 3,68% | z 2,7 | internacional |
| **Algodão** | 6,20% | z 3,9 | internacional |
| **Suíno (EUA)** | 7,29% | z 3,9 | internacional |
| **DBB (Metais industriais)** | volume 2,69× a mediana | acima do normal | fluxo de ETF |
| **WEAT (Trigo)** | volume 0,42× a mediana | abaixo do normal | fluxo de ETF |
| **EWZS (Small caps Brasil)** | volume 0,33× a mediana | abaixo do normal | fluxo de ETF |
| **Dólar (PTAX)** | -1,90% | z -3.3 (mediana/MAD) | Brasil |

<small>O desvio é medido contra a mediana e o MAD dos últimos 252 pregões, não contra o desvio-padrão: um único dia extremo — como 26/10/2026 — infla o desvio-padrão a ponto de nenhum dia normal mais parecer anômalo, e o alerta ficaria cego justamente depois de um susto.</small>

---

## De onde vem cada número, e de quando

| bloco | fonte | coletado |
|---|---|---|
| Internacional e commodities | Yahoo Finance · atraso de ~15 min, cotação revisável | 24/11 às 23:12 |
| Ibovespa (fechamento) | B3 · Boletim Diário do Mercado | 24/11 às 23:12 |
| Dólar | Banco Central · PTAX de venda (série SGS 1) | 24/11 às 23:12 |
| Curva de juros | B3 · boletim, 43 vencimentos de DI1 | 24/11 às 23:12 |
| Índices da B3 | B3 · acervo diário de índices | 24/11/2026 19:53 |
| Fluxo: rankings, aluguel e termo | B3 · Boletim Diário + nossa base COTAHIST ajustada | 24/11 às 23:12 |
| O lado | medido sobre o painel do próprio site | 24/11 às 23:12 |

Os horários em que cada página do site atualiza estão em [🕐 Quando este site atualiza](/horarios).

> [!warning] O que esta página não decide por você
>
> Os números acima são medição. O que fazer com eles é leitura de risco,
> e o risco é de quem opera. Quando nenhuma vantagem passa das travas,
> a página diz isso em vez de inventar convicção — e ficar de fora
> também é posição.

