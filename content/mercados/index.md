---
title: "🌍 Mercados"
date: 2026-11-26
tags: [mercados]
description: "O que mandou no dia: internacional, Brasil, a sincronia entre Ibovespa, dólar e juro, os índices da B3 e onde está — ou não está — a vantagem"
pregao: 2026-11-25
---

> [!note] A que pregão se refere cada bloco
>
> **Internacional**: 2026-11-26 · **Ibovespa (fechamento oficial)**: 2026-11-25 · **Dólar (PTAX)**: 2026-11-25 · **Curva de juros**: 2026-11-25 · **O lado (painel de vantagem)**: 2026-11-25
>
> Blocos com datas diferentes é o normal: as bolsas lá fora negociam enquanto a B3 ainda não publicou o boletim do dia, e a PTAX sai no meio da tarde. O que não vale é comparar número de um com número de outro.

## O lado de hoje

> [!example] ⚪ nenhum sinal passou da trava hoje — sem vantagem medível, ficar de fora é a posição
>
> Medido em 1023 pregões (2022-10-19 a 2026-11-25), 4 sinais testados.
>
> **Por que a régua é dura:** testando 4 sinais a 0.05, a chance de um passar por sorte seria ~19%. Por isso a exigência de cada sinal é p < 0.0125, e não os 5% de costume. Sem essa correção o site viraria uma máquina de achar padrão onde não tem.
>
> **Quando nada passa, não operar é a posição.** Isto mede o que aconteceu depois de dias parecidos; o risco é de quem opera.

| sinal | situação | lado | base medida | o que NÃO fazer |
|---|---|---|---|---|
| configuração do dia (bolsa, dólar, juro) | bolsa sobe com dolar em alta e juro em queda · Ibovespa +1.58%, dólar +0.43%, juro -27 p.b | FORA | 106 casos · subiu em 50,0% (± 4,9 p.p.) · p=1,000 | operar a configuração como se ela mandasse: o teste mede o dia seguinte, não a semana |
| tendência (preço contra as médias de 21 e 63 dias) | abaixo da média de 21 dias · média de 21 abaixo da de 63 | FORA | 214 casos · subiu em 49,5% (± 3,4 p.p.) · p=0,891 | usar isso para o intradia: a medida é de 5 pregões |
| o dólar ainda informa a bolsa? (últimos 126 pregões) | nos últimos 126 pregões, depois de o dólar subir o Ibovespa ficou em -0.095% no dia seguin | FORA | 126 casos · subiu em 46,8% (± 4,5 p.p.) · p=0,476 | tratar o dólar como termômetro da bolsa quando esta medida não passar — o elo clássico nem sempre está ligado |
| o juro informa a bolsa? (últimos 126 pregões) | juro de hoje -27 p.b. | FORA | 126 casos · subiu em 43,7% (± 4,5 p.p.) · p=0,154 | inverter a leitura num dia de Copom ou de leilão do Tesouro: ali o juro reage a evento, não a risco |
| tamanho do dia (volatilidade) | movimento de 1.58% contra 0.95% típicos de 21 dias — acima do normal | NÃO DÁ LADO · DIMENSIONA | razão 1.67 contra a mediana de 21 dias | ajustar o stop ao dia, não ao hábito |

## Brasil

**Ibovespa** · fechamento oficial da B3 em 2026-11-25: **166.684** pontos

| | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ibovespa 🟢 | 166.685 pts | 1,58% | -0,74% | 3,45% | 4,79% |
| Dólar (PTAX) 🟢 | R$ 5,8825 | 0,43% | 8,51% | 6,91% | 10,29% |
| DI 2030 🔴 | 14,880% | -28 p.b. | -33 p.b. | 170 p.b. | 214 p.b. |
| Dólar futuro (WDOZ26) | 5.830,00 | — | — | — | — |

<small>Ibovespa e DI pela série do MT5 (fecha em 2026-11-25); dólar pela PTAX do Banco Central em 2026-11-25, que é a taxa oficial e não tem salto de rolagem como o futuro contínuo. Juro em pontos-base, não em porcentagem de si mesmo: de 14,00% para 15,00% são 100 p.b., não “+7%”.</small>

**Curva de juros** · 43 vencimentos negociados em 2026-11-25

| 1 ano | 2 anos | 3 anos | 5 anos | 10 anos | inclinação 10a−1a |
|---|---|---|---|---|---|
| 14,24% | 14,68% | 14,86% | 15,02% | 15,05% | **82 p.b.** |

> [!note] A inclinação era de -23 p.b. em 2026-10-15 e está em 82 p.b. — 105 p.b. de mudança.
> 
> **O que isso significa:** curva com inclinação negativa é o mercado pagando mais no curto que no longo, o que costuma acompanhar expectativa de corte de juro à frente. Inclinação positiva é o contrário: prêmio para carregar prazo. A virada de uma para outra não é ajuste fino, é mudança de como o mercado enxerga o risco de prazo.
> 
> *Medido: os dois números e a diferença. Interpretação: o parágrafo acima. O risco de agir é de quem opera.*

> A leitura da curva contra o que os economistas esperam está na página [📉 Juros](/juros).

## Sincronia: Ibovespa, dólar e juro andam juntos?

> [!example] 🟡 **bolsa sobe com dolar em alta e juro em queda** em 2026-11-25
>
> Ibovespa +1,58% · dólar +0,43% · juro -28 p.b.
>
> Nos últimos 21 pregões, **12 de 21** dias tiveram os três em configuração coerente.

| par | correlação (postos) | percentil histórico | Pearson | sem o dia mais influente |
|---|---|---|---|---|
| Ibovespa × dólar | **-0.414** | 60 | -0.827 | -0.12 ⚠️ |
| Ibovespa × juro | **-0.59** | 45 | -0.948 | -0.565 ⚠️ |

<small>⚠️ marca o par em que **um único dia carrega o número**: tirando aquele dia da janela, a correlação muda de patamar. Por isso o valor principal é o de postos (Spearman), que resiste a um ponto fora da curva, e o percentil é calculado contra ele. Vender “sincronia histórica” que na verdade é um pregão isolado seria estatística com cara de manchete.</small>

> [!note] Desde 2026-10-26 (20 pregões): Ibovespa × dólar **-0.12** · Ibovespa × juro **-0.565**.
> 
> reeleicao: Ibovespa -13,88%, dolar +8,8%, curva de DI +~260 p.b. em um dia, com circuit breaker.
> 
> **Para quem opera:** quando o elo com o dólar está fraco, usar o dólar como termômetro da bolsa é usar um termômetro desligado. O par com correlação mais forte é o que está mandando no período.

## Internacional

**Os que leem o mundo primeiro** — ouro, petróleo, cobre, dólar index e juro dos Estados Unidos.

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ouro 🟢 | 3.601,70 US$/oz | 1,86% | -7,62% | -17,03% | -15,75% |
| Cobre 🟢 | 5,45 US$/lb | 2,15% | -15,66% | -3,25% | 4,37% |
| Petróleo Brent 🔴 | 91,39 US$/bbl | -3,40% | -22,31% | 50,19% | 44,67% |
| Dollar Index 🟢 | 103,78 pontos | 0,10% | 1,86% | 5,59% | 4,39% |
| Juro EUA 10 anos 🔴 | 4,85 % a.a. | -6 p.b. | -8 p.b. | 68 p.b. | 83 p.b. |

<small>Taxas de juro variam em **pontos-base**, não em porcentagem de si mesmas: um juro que vai de 4,16% a 5,10% subiu 94 p.b.; dizer “+22%” seria tecnicamente verdade e praticamente inútil.</small>

## Commodities, por família

### Metais preciosos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Paládio 🟢 | 879,50 US$/oz | 5,82% | -10,67% | -46,02% | -39,13% |
| Prata 🟢 | 41,85 US$/oz | 4,49% | -14,76% | -40,33% | -28,36% |
| Platina 🟢 | 1.285,80 US$/oz | 3,58% | -10,58% | -36,80% | -23,01% |
| Ouro 🟢 | 3.601,70 US$/oz | 1,86% | -7,62% | -17,03% | -15,75% |

### Metais industriais

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Cobre 🟢 | 5,45 US$/lb | 2,15% | -15,66% | -3,25% | 4,37% |
| Alumínio 🔴 | 2.768,50 US$/t | -1,92% | -16,37% | -4,74% | -2,63% |
| Aço laminado 🟢 | 1.429,00 US$/t | 1,85% | 6,09% | 52,83% | 58,25% |
| Minério de ferro 🔴 | 90,64 US$/t | -0,03% | -0,08% | -15,39% | -13,54% |

### Energia

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Gás natural 🟢 | 3,62 US$/MMBtu | 10,65% | 24,81% | -1,87% | -26,50% |
| Petróleo Brent 🔴 | 91,39 US$/bbl | -3,40% | -22,31% | 50,19% | 44,67% |
| Petróleo WTI 🟢 | 84,86 US$/bbl | 1,41% | -18,50% | 47,79% | 43,05% |
| Óleo de aquecimento 🔴 | 3,69 US$/gal | -0,32% | -22,96% | 74,05% | 57,73% |
| Gasolina 🟢 | 2,45 US$/gal | 0,18% | -26,13% | 43,46% | 30,91% |

### Grãos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Farelo de soja 🟢 | 361,60 US$/t | 2,44% | 11,40% | 22,78% | 15,01% |
| Aveia 🔴 | 353,25 ¢/bu | -2,42% | 2,76% | 16,78% | 19,85% |
| Milho 🟢 | 439,75 ¢/bu | 1,32% | -1,79% | -0,11% | 0,98% |
| Soja 🟢 | 1.244,00 ¢/bu | 0,81% | 1,78% | 20,72% | 9,34% |
| Trigo 🔴 | 565,50 ¢/bu | -0,75% | -6,30% | 11,54% | 6,50% |
| Arroz 🔴 | 18,75 US$/cwt | -0,42% | 7,57% | 95,47% | 86,15% |
| Óleo de soja 🔴 | 58,08 ¢/lb | -0,05% | -11,87% | 20,82% | 12,21% |

### Softs

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Suco de laranja 🔴 | 125,25 ¢/lb | -4,68% | 8,58% | -38,96% | -19,74% |
| Açúcar 🟢 | 18,34 ¢/lb | 3,85% | -5,27% | 22,19% | 20,58% |
| Café arábica 🟢 | 275,65 ¢/lb | 2,64% | -4,02% | -20,96% | -33,26% |
| Algodão 🟢 | 79,65 ¢/lb | 0,67% | 2,34% | 23,93% | 26,61% |
| Cacau 🟢 | 5.302,00 US$/t | 0,40% | -2,77% | -12,58% | -1,89% |

### Proteína

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Suíno (EUA) 🔴 | 49,92 ¢/lb | -3,62% | -15,20% | -41,33% | -38,06% |
| Bezerro (EUA) 🔴 | 327,52 ¢/lb | -1,61% | -3,03% | -6,49% | 1,10% |
| Boi gordo (EUA) 🔴 | 223,32 ¢/lb | -1,14% | -0,30% | -3,74% | 3,60% |

> As agrícolas negociadas **na B3**, com a curva e o que ela diz, estão na página [🌾 Agro](/agro). Aqui é o preço lá fora, que é o que chega antes.

## Índices da B3

Os índices publicados pela B3 no pregão de **25/11/2026**, na ordem do que mais subiu ao que mais caiu no dia. Boletim coletado no acervo em **26/11/2026 06:30** · 33 índices.

| índice | fechamento | no dia | intradiário | mínimo | máximo |
|---|---|---|---|---|---|
| IBHB 🟢 | 1.654 | 3,83% | 3,83% | 1.593 | 1.657 |
| IFINANCEIRO 🟢 | 16.558 | 2,72% | 2,72% | 16.120 | 16.611 |
| SMALL CAP 🟢 | 2.037 | 2,67% | 2,67% | 1.984 | 2.038 |
| IMOBILIARIO 🟢 | 1.118 | 2,66% | 2,66% | 1.089 | 1.120 |
| GPTW 🟢 | 1.257 | 2,28% | 2,28% | 1.229 | 1.260 |
| IFIL 🟢 | 1.567 | 2,22% | 2,15% | 1.534 | 1.567 |
| IFIX 🟢 | 3.541 | 2,13% | 2,13% | 3.467 | 3.541 |
| IVBX2 🟢 | 17.978 | 1,81% | 1,80% | 17.660 | 17.988 |
| IBEE 🟢 | 4.726 | 1,81% | 1,83% | 4.641 | 4.730 |
| UTILITIES 🟢 | 17.948 | 1,81% | 1,80% | 17.628 | 17.989 |
| ITAG 🟢 | 35.877 | 1,74% | 1,74% | 35.254 | 35.955 |
| IGC 🟢 | 25.706 | 1,72% | 1,72% | 25.261 | 25.753 |
| IGC TRADE 🟢 | 7.398 | 1,72% | 1,72% | 7.271 | 7.415 |
| IDIVERSA B3 🟢 | 1.422 | 1,72% | 1,72% | 1.398 | 1.424 |
| IGNM 🟢 | 4.366 | 1,70% | 1,70% | 4.285 | 4.372 |
| ISE 🟢 | 4.059 | 1,60% | 1,60% | 3.995 | 4.065 |
| IBRX50 🟢 | 28.140 | 1,59% | 1,61% | 27.687 | 28.216 |
| IBOVESPA 🟢 | 166.684 | 1,58% | 1,60% | 164.042 | 167.105 |
| IBRX100 🟢 | 70.151 | 1,58% | 1,58% | 69.046 | 70.339 |
| IBRASIL 🟢 | 6.518 | 1,57% | 1,57% | 6.416 | 6.535 |
| ICO2 🟢 | 2.966 | 1,54% | 1,54% | 2.919 | 2.970 |
| IBEP 🟢 | 1.650 | 1,54% | 1,60% | 1.623 | 1.654 |
| IBEW 🟢 | 1.413 | 1,51% | 1,51% | 1.389 | 1.418 |
| IBLV 🟢 | 1.311 | 1,47% | 1,47% | 1.286 | 1.317 |
| IBOV SD TR 🟢 | 1.896 | 1,44% | 1,44% | 1.869 | 1.900 |
| MIDLARGE CAP 🟢 | 3.454 | 1,44% | 1,47% | 3.400 | 3.464 |
| IEE 🟢 | 122.894 | 1,42% | 1,42% | 121.176 | 123.436 |
| IMATBASICOS 🟢 | 6.187 | 1,36% | 1,34% | 6.064 | 6.233 |
| I DIVIDENDOS 🟢 | 11.725 | 1,36% | 1,36% | 11.568 | 11.751 |
| AGFS 🟢 | 1.393 | 1,31% | 1,31% | 1.374 | 1.399 |
| ICONSUMO 🟢 | 2.685 | 1,21% | 1,21% | 2.653 | 2.697 |
| INDX 🔴 | 30.544 | -0,75% | -0,75% | 30.049 | 30.783 |
| BDRX 🔴 | 28.311 | -2,56% | -2,32% | 27.675 | 28.984 |

<small><b>no dia</b> é o fechamento contra o fechamento do pregão anterior (24/11/2026) — a convenção de mercado, e a conta com que qualquer outra fonte vai ser comparada. <b>intradiário</b> é o fechamento contra a abertura do próprio pregão, que é a conta que o boletim da B3 permite direto e que <b>descarta o gap de abertura</b>. As duas aparecem porque a diferença entre elas é o gap, e gap é informação.</small>

## Fluxo: quem subiu, quem caiu e quanto custa ficar vendido

> [!note] De que pregão é cada número deste bloco
>
> Rankings e mais negociadas: **nossa base até 17/11**. Oscilação do dia, aluguel, termo e opções: **BDI de 25/11**. Os dois pregões são diferentes de propósito — o BDI sai depois do nosso fechamento.
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
| **BOVA11** | R$ 22.901.260.711 | 0,65% a.a. <small>40 ctr</small> | hoje |
| **PETR4** | R$ 12.266.056.319 | 0,13% a.a. <small>5.491 ctr</small> | hoje |
| **VALE3** | R$ 10.046.192.696 | 0,04% a.a. <small>40 ctr</small> | 24/11 |
| **ITUB4** | R$ 7.691.508.187 | 0,08% a.a. <small>2.078 ctr</small> | hoje |
| **BBAS3** | R$ 7.584.416.179 | 0,70% a.a. <small>8.266 ctr</small> | 24/11 |
| **PETR3** | R$ 6.962.911.044 | 3,77% a.a. <small>1.861 ctr</small> | hoje |
| **BOVV11** | R$ 5.733.463.518 | 0,13% a.a. <small>291 ctr</small> | hoje |
| **BBSE3** | R$ 4.622.340.506 | 0,13% a.a. <small>1.487 ctr</small> | hoje |

<small>A taxa é a média dos contratos fechados na sessão, e só aparece com ao menos 20 contratos — abaixo disso é média de quase nada. Quando o dia não tem amostra, vale a última sessão que teve, e a coluna diz qual. O acervo de taxas tem 7 sessões e cresce a cada pregão.</small>

| mais caros de alugar | taxa | posição | movimento no acervo |
|---|---|---|---|
| **CSNA3** | 48,48% a.a. | R$ 44.236.373 | subindo · 31,4% → 48,5% desde 16/11 |
| **CMIN3** | 47,21% a.a. | R$ 129.541.250 | caindo · 50,4% → 47,2% desde 16/11 |
| **BHIA3** | 40,94% a.a. | R$ 5.401.353 | caindo · 41,0% → 40,9% desde 16/11 |
| **INTB3** | 30,28% a.a. | R$ 18.725.425 | subindo · 27,1% → 30,3% desde 16/11 |
| **PCAR3** | 25,00% a.a. | R$ 2.931.708 | subindo · 4,5% → 25,0% desde 16/11 |
| **BRKM5** | 23,34% a.a. | R$ 11.275.388 | caindo · 24,0% → 23,3% desde 16/11 |
| **MBRF3** | 22,84% a.a. | R$ 98.090.388 | subindo · 18,2% → 22,8% desde 16/11 |
| **FRAS3** | 19,60% a.a. | R$ 4.946.214 | caindo · 20,9% → 19,6% desde 16/11 |

<small>Taxa alta e subindo é o mercado cobrando caro para emprestar o papel. Pode ser demanda de quem quer vender a descoberto, pode ser oferta minguando — a tabela mede o custo, não o motivo.</small>

### Mercado a termo

| papel | empresa | prazos | prazo médio | quantidade |
|---|---|---|---|---|
| **VAMO3** <small>ação</small> | VAMOS | 4 | 33d | 533.000 |
| **ASAI3** <small>ação</small> | ASSAI | 1 | 90d | 520.000 |
| **BRKM5** <small>ação</small> | BRASKEM | 4 | 263d | 466.200 |
| **PASS3** <small>ação</small> | COMPASS | 1 | 93d | 440.000 |
| **BBDC4** <small>ação</small> | BRADESCO | 3 | 33d | 300.900 |
| **TEND3** <small>ação</small> | TENDA | 1 | 121d | 270.000 |
| **SPXU11** <small>ETF/FII</small> | TRD SPX USD | 2 | 336d | 193.764 |
| **COGN3** <small>ação</small> | COGNA ON | 2 | 58d | 170.000 |

<small>91 papéis em 149 linhas do boletim: a B3 publica uma linha por papel E prazo, então somar sem agregar mostra o mesmo papel várias vezes e nenhuma delas é o tamanho da posição.</small>

## O que o dólar futuro cobra

*Boletim da B3 de 2026-11-25.*

O futuro de dólar é sempre mais caro que o à vista, e isso **não é opinião do mercado sobre o dólar** — é juro. Quem vende dólar para a frente fica com reais rendendo CDI e abre mão de dólares rendendo juro americano; a diferença entra no preço. Esse pedaço se chama carrego, e dá para medir exatamente.

### O carrego, medido entre dois vencimentos

| | vencimento | ajuste | dias úteis | contratos |
|---|---|---|---|---|
| curto | `WDOZ26` | 5.820,484 | 4 | 4.720.519 |
| longo | `WDOF27` | 5.853,650 | 26 | 39.113 |

Entre os dois vão **22 dias úteis**, e o mercado cobra **+0,570%** para atravessar esse pedaço — **+0,0259% por dia útil**, ou **+6,72% ao ano**.

Os dois ajustes saem do mesmo boletim, no mesmo instante, então essa inclinação é carrego limpo: não tem hora do relógio dentro.

### A conferência que o número tem de passar

A curva de DI diz que o juro em reais nessa mesma janela é **+13,69% ao ano**. Tirando o carrego, sobra o juro em dólar implícito: **+6,53% ao ano**.

A B3 publica o cupom cambial dela nos vencimentos longos: `DDIX27` +7,24% · `DDIZ27` +7,18% · `DDIF28` +7,20%. São duas curvas que não se falam — uma deduzida do dólar com o DI, outra negociada direto — e elas ficam a **0,7 ponto percentual** uma da outra, dentro da tolerância de 3 pontos que este bloco usa. Não é o mesmo número, e nem deveria ser: os vértices do DDI são de prazo bem maior que a janela medida aqui. O que a conferência garante é que não há erro de ordem de grandeza — se um dia elas se afastarem muito, o bloco avisa em vez de publicar.

### Por que a diferença entre o futuro e a PTAX engana

| ajuste do `WDOZ26` contra a PTAX | **-1,054%** |
|---|---|
| carrego de verdade, nos 4 dias úteis que faltam para o vencimento | +0,104% |
| **sobra, que não é carrego** | **-1,158%** |

A sobra não é o mercado apostando em alta do dólar. A PTAX é fixada por volta das 13h; o ajuste do futuro sai no fechamento. São cinco horas de pregão entre uma medida e outra, e tudo que o dólar andou nesse intervalo aparece como se fosse prêmio.

### Onde pode estar a vantagem, e o que não fazer

- **O carrego é previsível; o resto não.** Quem opera dólar futuro comprado paga esse carrego todo dia, chova ou faça sol. Num carrego de +0,0259% ao dia útil, uma posição parada por um mês já começa com essa conta contra. Posição comprada em dólar precisa de movimento maior que o carrego só para empatar.
- **Carrego subindo é juro mudando, não dólar mudando.** Se esta inclinação se abrir sem que a curva de DI se mexa, a conta não fecha e vale desconfiar do dado antes de desconfiar do mercado.
- **Não leia a diferença entre futuro e PTAX como sinal.** É quase toda relógio, como a tabela acima mostra. Quem conclui “o mercado está apostando no dólar” a partir daqueles dois números está lendo o calendário.
- **Não compare número de dias corridos com dias úteis.** O carrego corre em dias úteis (252), o juro americano em dias corridos (360). Misturar os dois erra por vários por cento ao ano.

<small>Leitura de risco a partir de dado público da B3, não recomendação. Quem monta a posição carrega o risco.</small>

## Anomalias do dia

| ativo | movimento | desvio | onde |
|---|---|---|---|
| **FTSE 100** | 1,97% | z 2,5 | internacional |
| **Dólar/Real** | -2,82% | z -2,9 | internacional |
| **SLV (Prata)** | volume 2,52× a mediana | acima do normal | fluxo de ETF |
| **PPLT (Platina)** | volume 2,35× a mediana | acima do normal | fluxo de ETF |
| **PALL (Paládio)** | volume 1,87× a mediana | acima do normal | fluxo de ETF |
| **DBB (Metais industriais)** | volume 1,94× a mediana | acima do normal | fluxo de ETF |
| **USO (Petróleo WTI)** | volume 0,48× a mediana | abaixo do normal | fluxo de ETF |
| **WEAT (Trigo)** | volume 1,85× a mediana | acima do normal | fluxo de ETF |
| **EWZS (Small caps Brasil)** | volume 0,38× a mediana | abaixo do normal | fluxo de ETF |
| **PCAR3 · aluguel** | 4,5% → 25,0% a.a. | 5,6× em 7 pregões | custo de ficar vendido |

<small>O desvio é medido contra a mediana e o MAD dos últimos 252 pregões, não contra o desvio-padrão: um único dia extremo — como 26/10/2026 — infla o desvio-padrão a ponto de nenhum dia normal mais parecer anômalo, e o alerta ficaria cego justamente depois de um susto.</small>

---

## De onde vem cada número, e de quando

| bloco | fonte | coletado |
|---|---|---|
| Internacional e commodities | Yahoo Finance · atraso de ~15 min, cotação revisável | 26/11 às 13:20 |
| Ibovespa (fechamento) | B3 · Boletim Diário do Mercado | 26/11 às 13:20 |
| Dólar | Banco Central · PTAX de venda (série SGS 1) | 26/11 às 13:20 |
| Curva de juros | B3 · boletim, 43 vencimentos de DI1 | 26/11 às 13:20 |
| Índices da B3 | B3 · acervo diário de índices | 26/11/2026 06:30 |
| Fluxo: rankings, aluguel e termo | B3 · Boletim Diário + nossa base COTAHIST ajustada | 26/11 às 06:44 |
| O lado | medido sobre o painel do próprio site | 26/11 às 13:20 |

Os horários em que cada página do site atualiza estão em [🕐 Quando este site atualiza](/horarios).

> [!warning] O que esta página não decide por você
>
> Os números acima são medição. O que fazer com eles é leitura de risco,
> e o risco é de quem opera. Quando nenhuma vantagem passa das travas,
> a página diz isso em vez de inventar convicção — e ficar de fora
> também é posição.

