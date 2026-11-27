---
title: "🌍 Mercados"
date: 2026-11-27
tags: [mercados]
description: "O que mandou no dia: internacional, Brasil, a sincronia entre Ibovespa, dólar e juro, os índices da B3 e onde está — ou não está — a vantagem"
pregao: 2026-11-26
---

> [!note] A que pregão se refere cada bloco
>
> **Internacional**: 2026-11-27 · **Ibovespa (fechamento oficial)**: 2026-11-26 · **Dólar (PTAX)**: 2026-11-26 · **Curva de juros**: 2026-11-26 · **O lado (painel de vantagem)**: 2026-11-26
>
> Blocos com datas diferentes é o normal: as bolsas lá fora negociam enquanto a B3 ainda não publicou o boletim do dia, e a PTAX sai no meio da tarde. O que não vale é comparar número de um com número de outro.

## O lado de hoje

> [!example] ⚪ nenhum sinal passou da trava hoje — sem vantagem medível, ficar de fora é a posição
>
> Medido em 1023 pregões (2022-10-20 a 2026-11-26), 4 sinais testados.
>
> **Por que a régua é dura:** testando 4 sinais a 0.05, a chance de um passar por sorte seria ~19%. Por isso a exigência de cada sinal é p < 0.0125, e não os 5% de costume. Sem essa correção o site viraria uma máquina de achar padrão onde não tem.
>
> **Quando nada passa, não operar é a posição.** Isto mede o que aconteceu depois de dias parecidos; o risco é de quem opera.

| sinal | situação | lado | base medida | o que NÃO fazer |
|---|---|---|---|---|
| configuração do dia (bolsa, dólar, juro) | risco entrando · Ibovespa +6.07%, dólar -2.34%, juro -54 p.b. | FORA | 236 casos · subiu em 51,7% (± 3,3 p.p.) · p=0,603 | operar a configuração como se ela mandasse: o teste mede o dia seguinte, não a semana |
| tendência (preço contra as médias de 21 e 63 dias) | acima da média de 21 dias · média de 21 abaixo da de 63 | FORA | 173 casos · subiu em 54,9% (± 3,8 p.p.) · p=0,196 | usar isso para o intradia: a medida é de 5 pregões |
| o dólar ainda informa a bolsa? (últimos 126 pregões) | nos últimos 126 pregões, depois de o dólar subir o Ibovespa ficou em -0.09% no dia seguint | FORA | 126 casos · subiu em 46,0% (± 4,5 p.p.) · p=0,373 | tratar o dólar como termômetro da bolsa quando esta medida não passar — o elo clássico nem sempre está ligado |
| o juro informa a bolsa? (últimos 126 pregões) | juro de hoje -54 p.b. | FORA | 126 casos · subiu em 43,7% (± 4,5 p.p.) · p=0,154 | inverter a leitura num dia de Copom ou de leilão do Tesouro: ali o juro reage a evento, não a risco |
| tamanho do dia (volatilidade) | movimento de 6.07% contra 0.95% típicos de 21 dias — muito acima do normal | NÃO DÁ LADO · DIMENSIONA | razão 6.39 contra a mediana de 21 dias | reduzir tamanho: um stop do tamanho de sempre vira stop apertado |

## Brasil

**Ibovespa** · fechamento oficial da B3 em 2026-11-26: **176.799** pontos

| | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ibovespa 🟢 | 176.800 pts | 6,07% | 5,29% | 9,73% | 11,14% |
| Dólar (PTAX) 🔴 | R$ 5,7446 | -2,34% | 5,97% | 4,40% | 7,70% |
| DI 2030 🔴 | 14,335% | -54 p.b. | -88 p.b. | 116 p.b. | 160 p.b. |
| Dólar futuro (WDOZ26) | 5.656,00 | — | — | — | — |

<small>Ibovespa e DI pela série do MT5 (fecha em 2026-11-26); dólar pela PTAX do Banco Central em 2026-11-26, que é a taxa oficial e não tem salto de rolagem como o futuro contínuo. Juro em pontos-base, não em porcentagem de si mesmo: de 14,00% para 15,00% são 100 p.b., não “+7%”.</small>

**Curva de juros** · 43 vencimentos negociados em 2026-11-26

| 1 ano | 2 anos | 3 anos | 5 anos | 10 anos | inclinação 10a−1a |
|---|---|---|---|---|---|
| 14,14% | 14,39% | 14,57% | 14,69% | 14,76% | **62 p.b.** |

> [!note] A inclinação era de -23 p.b. em 2026-10-15 e está em 62 p.b. — 85 p.b. de mudança.
> 
> **O que isso significa:** curva com inclinação negativa é o mercado pagando mais no curto que no longo, o que costuma acompanhar expectativa de corte de juro à frente. Inclinação positiva é o contrário: prêmio para carregar prazo. A virada de uma para outra não é ajuste fino, é mudança de como o mercado enxerga o risco de prazo.
> 
> *Medido: os dois números e a diferença. Interpretação: o parágrafo acima. O risco de agir é de quem opera.*

> A leitura da curva contra o que os economistas esperam está na página [📉 Juros](/juros).

## Sincronia: Ibovespa, dólar e juro andam juntos?

> [!example] 🟢 **risco entrando** em 2026-11-26
>
> Ibovespa +6,07% · dólar -2,34% · juro -54 p.b.
>
> Nos últimos 21 pregões, **12 de 21** dias tiveram os três em configuração coerente.

| par | correlação (postos) | percentil histórico | Pearson | sem o dia mais influente |
|---|---|---|---|---|
| Ibovespa × dólar | **-0.401** | 64 | -0.424 | -0.12 ⚠️ |
| Ibovespa × juro | **-0.59** | 46 | -0.715 | -0.565 |

<small>⚠️ marca o par em que **um único dia carrega o número**: tirando aquele dia da janela, a correlação muda de patamar. Por isso o valor principal é o de postos (Spearman), que resiste a um ponto fora da curva, e o percentil é calculado contra ele. Vender “sincronia histórica” que na verdade é um pregão isolado seria estatística com cara de manchete.</small>

> [!note] Desde 2026-10-26 (21 pregões): Ibovespa × dólar **-0.424** · Ibovespa × juro **-0.715**.
> 
> reeleicao: Ibovespa -13,88%, dolar +8,8%, curva de DI +~260 p.b. em um dia, com circuit breaker.
> 
> **Para quem opera:** quando o elo com o dólar está fraco, usar o dólar como termômetro da bolsa é usar um termômetro desligado. O par com correlação mais forte é o que está mandando no período.

## Internacional

**Os que leem o mundo primeiro** — ouro, petróleo, cobre, dólar index e juro dos Estados Unidos.

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Ouro 🟢 | 3.707,20 US$/oz | 4,85% | -4,92% | -14,60% | -12,17% |
| Cobre 🟢 | 5,71 US$/lb | 7,02% | -11,64% | 1,37% | 10,58% |
| Petróleo Brent 🔴 | 92,33 US$/bbl | -2,41% | -21,51% | 51,73% | 47,85% |
| Dollar Index 🟢 | 103,82 pontos | 0,14% | 1,90% | 5,63% | 4,49% |
| Juro EUA 10 anos 🔴 | 4,85 % a.a. | -6 p.b. | -8 p.b. | 68 p.b. | 83 p.b. |

<small>Taxas de juro variam em **pontos-base**, não em porcentagem de si mesmas: um juro que vai de 4,16% a 5,10% subiu 94 p.b.; dizer “+22%” seria tecnicamente verdade e praticamente inútil.</small>

## Commodities, por família

### Metais preciosos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Prata 🟢 | 44,74 US$/oz | 11,69% | -8,88% | -36,21% | -22,85% |
| Paládio 🟢 | 919,50 US$/oz | 10,64% | -6,61% | -43,56% | -37,49% |
| Platina 🟢 | 1.354,30 US$/oz | 9,09% | -5,82% | -33,43% | -17,62% |
| Ouro 🟢 | 3.707,20 US$/oz | 4,85% | -4,92% | -14,60% | -12,17% |

### Metais industriais

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Cobre 🟢 | 5,71 US$/lb | 7,02% | -11,64% | 1,37% | 10,58% |
| Aço laminado 🟢 | 1.433,00 US$/t | 2,14% | 6,38% | 53,26% | 59,05% |
| Alumínio 🟢 | 2.860,00 US$/t | 1,32% | -13,61% | -1,59% | 0,36% |
| Minério de ferro 🔴 | 90,64 US$/t | -0,03% | -0,08% | -15,39% | -13,54% |

### Energia

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Gás natural 🟢 | 3,57 US$/MMBtu | 9,21% | 23,19% | -3,15% | -26,24% |
| Petróleo WTI 🟢 | 85,85 US$/bbl | 2,59% | -17,55% | 49,51% | 46,40% |
| Petróleo Brent 🔴 | 92,33 US$/bbl | -2,41% | -21,51% | 51,73% | 47,85% |
| Gasolina 🟢 | 2,46 US$/gal | 0,83% | -25,65% | 44,39% | 34,54% |
| Óleo de aquecimento 🔴 | 3,69 US$/gal | -0,32% | -22,96% | 74,03% | 59,58% |

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
| Açúcar 🟢 | 18,85 ¢/lb | 2,78% | -2,63% | 25,58% | 25,83% |
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

Os índices publicados pela B3 no pregão de **26/11/2026**, na ordem do que mais subiu ao que mais caiu no dia. Boletim coletado no acervo em **27/11/2026 06:31** · 33 índices.

| índice | fechamento | no dia | intradiário | mínimo | máximo |
|---|---|---|---|---|---|
| IFINANCEIRO 🟢 | 18.044 | 8,97% | 8,97% | 16.559 | 18.044 |
| IBHB 🟢 | 1.798 | 8,71% | 8,64% | 1.655 | 1.798 |
| ICO2 🟢 | 3.200 | 7,89% | 7,89% | 2.966 | 3.200 |
| IMOBILIARIO 🟢 | 1.204 | 7,69% | 7,69% | 1.118 | 1.204 |
| ICONSUMO 🟢 | 2.883 | 7,37% | 7,37% | 2.685 | 2.889 |
| GPTW 🟢 | 1.343 | 6,84% | 6,84% | 1.257 | 1.345 |
| SMALL CAP 🟢 | 2.175 | 6,77% | 6,77% | 2.037 | 2.175 |
| ISE 🟢 | 4.331 | 6,70% | 6,70% | 4.059 | 4.331 |
| IDIVERSA B3 🟢 | 1.517 | 6,68% | 6,68% | 1.422 | 1.519 |
| IVBX2 🟢 | 19.105 | 6,27% | 6,25% | 17.981 | 19.177 |
| IBEP 🟢 | 1.752 | 6,18% | 6,12% | 1.651 | 1.753 |
| UTILITIES 🟢 | 19.044 | 6,11% | 6,08% | 17.952 | 19.122 |
| I DIVIDENDOS 🟢 | 12.438 | 6,08% | 6,08% | 11.725 | 12.438 |
| IEE 🟢 | 130.354 | 6,07% | 6,02% | 122.940 | 130.354 |
| IGC TRADE 🟢 | 7.847 | 6,07% | 6,07% | 7.398 | 7.860 |
| IBOVESPA 🟢 | 176.799 | 6,07% | 6,06% | 166.695 | 177.024 |
| IBRX50 🟢 | 29.840 | 6,04% | 6,02% | 28.141 | 29.893 |
| ITAG 🟢 | 38.044 | 6,04% | 6,03% | 35.881 | 38.107 |
| IBRX100 🟢 | 74.358 | 6,00% | 6,00% | 70.151 | 74.478 |
| IBRASIL 🟢 | 6.908 | 5,98% | 5,98% | 6.518 | 6.919 |
| IGC 🟢 | 27.239 | 5,96% | 5,95% | 25.709 | 27.289 |
| IGNM 🟢 | 4.626 | 5,96% | 5,93% | 4.367 | 4.633 |
| IBEW 🟢 | 1.496 | 5,87% | 5,87% | 1.413 | 1.496 |
| MIDLARGE CAP 🟢 | 3.656 | 5,85% | 5,85% | 3.454 | 3.663 |
| IBEE 🟢 | 4.998 | 5,76% | 5,62% | 4.731 | 4.998 |
| IBOV SD TR 🟢 | 2.004 | 5,70% | 5,64% | 1.897 | 2.004 |
| IBLV 🟢 | 1.379 | 5,19% | 5,19% | 1.310 | 1.379 |
| AGFS 🟢 | 1.455 | 4,45% | 4,45% | 1.393 | 1.457 |
| INDX 🟢 | 31.511 | 3,17% | 3,16% | 30.546 | 31.576 |
| IMATBASICOS 🟢 | 6.311 | 2,00% | 1,86% | 6.170 | 6.342 |
| IFIX 🟢 | 3.578 | 1,04% | 1,04% | 3.541 | 3.595 |
| IFIL 🟢 | 1.583 | 1,02% | 1,02% | 1.567 | 1.591 |
| BDRX 🔴 | 28.253 | -0,20% | 0,07% | 28.125 | 28.563 |

<small><b>no dia</b> é o fechamento contra o fechamento do pregão anterior (25/11/2026) — a convenção de mercado, e a conta com que qualquer outra fonte vai ser comparada. <b>intradiário</b> é o fechamento contra a abertura do próprio pregão, que é a conta que o boletim da B3 permite direto e que <b>descarta o gap de abertura</b>. As duas aparecem porque a diferença entre elas é o gap, e gap é informação.</small>

## Fluxo: quem subiu, quem caiu e quanto custa ficar vendido

> [!note] De que pregão é cada número deste bloco
>
> Rankings e mais negociadas: **nossa base até 17/11**. Oscilação do dia, aluguel, termo e opções: **BDI de 26/11**. Os dois pregões são diferentes de propósito — o BDI sai depois do nosso fechamento.
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
| **BOVA11** | R$ 22.871.418.499 | 0,59% a.a. <small>22 ctr</small> | hoje |
| **PETR4** | R$ 11.536.402.794 | 0,13% a.a. <small>5.491 ctr</small> | 25/11 |
| **VALE3** | R$ 9.698.894.922 | 0,04% a.a. <small>55 ctr</small> | hoje |
| **ITUB4** | R$ 7.556.627.890 | 0,08% a.a. <small>30 ctr</small> | hoje |
| **BBAS3** | R$ 7.476.675.476 | 0,65% a.a. <small>335 ctr</small> | hoje |
| **PETR3** | R$ 6.752.887.639 | 3,75% a.a. <small>53 ctr</small> | hoje |
| **BOVV11** | R$ 5.820.080.578 | 0,13% a.a. <small>241 ctr</small> | hoje |
| **BBSE3** | R$ 4.625.398.867 | 0,12% a.a. <small>37 ctr</small> | hoje |

<small>A taxa é a média dos contratos fechados na sessão, e só aparece com ao menos 20 contratos — abaixo disso é média de quase nada. Quando o dia não tem amostra, vale a última sessão que teve, e a coluna diz qual. O acervo de taxas tem 8 sessões e cresce a cada pregão.</small>

| mais caros de alugar | taxa | posição | movimento no acervo |
|---|---|---|---|
| **CSNA3** | 50,21% a.a. | R$ 6.154.942 | subindo · 31,4% → 50,2% desde 16/11 |
| **CMIN3** | 46,83% a.a. | R$ 16.839.803 | caindo · 50,4% → 46,8% desde 16/11 |
| **BEEF3** | 42,75% a.a. | R$ 17.320.715 | subindo · 3,1% → 42,8% desde 16/11 |
| **INTB3** | 30,28% a.a. | R$ 3.257.014 | subindo · 27,1% → 30,3% desde 16/11 |
| **BRKM5** | 22,92% a.a. | R$ 1.637.559 | caindo · 24,0% → 22,9% desde 16/11 |
| **MBRF3** | 22,72% a.a. | R$ 47.453.409 | subindo · 18,2% → 22,7% desde 16/11 |
| **ORVR3** | 16,37% a.a. | R$ 24.966.558 | caindo · 19,6% → 16,4% desde 16/11 |
| **NVDC34** | 15,66% a.a. | R$ 39.434.956 | caindo · 16,6% → 15,7% desde 16/11 |

<small>Taxa alta e subindo é o mercado cobrando caro para emprestar o papel. Pode ser demanda de quem quer vender a descoberto, pode ser oferta minguando — a tabela mede o custo, não o motivo.</small>

### Mercado a termo

| papel | empresa | prazos | prazo médio | quantidade |
|---|---|---|---|---|
| **MRVE3** <small>ação</small> | MRV | 2 | 180d | 4.482.500 |
| **VAMO3** <small>ação</small> | VAMOS | 2 | 89d | 2.061.300 |
| **CSED3** <small>ação</small> | CRUZEIRO EDU | 2 | 71d | 622.000 |
| **PGMN3** <small>ação</small> | PAGUE MENOS | 3 | 87d | 610.000 |
| **GOLD11** <small>ETF/FII</small> | TREND OURO | 1 | 90d | 509.440 |
| **CEAB3** <small>ação</small> | CEA MODAS | 1 | 123d | 380.000 |
| **ENGI11** <small>unit</small> | ENERGISA | 1 | 90d | 370.000 |
| **LIGT3** <small>ação</small> | LIGHT S/A | 3 | 38d | 323.000 |

<small>114 papéis em 203 linhas do boletim: a B3 publica uma linha por papel E prazo, então somar sem agregar mostra o mesmo papel várias vezes e nenhuma delas é o tamanho da posição.</small>

## O que o dólar futuro cobra

*Boletim da B3 de 2026-11-26.*

O futuro de dólar é sempre mais caro que o à vista, e isso **não é opinião do mercado sobre o dólar** — é juro. Quem vende dólar para a frente fica com reais rendendo CDI e abre mão de dólares rendendo juro americano; a diferença entra no preço. Esse pedaço se chama carrego, e dá para medir exatamente.

### O carrego, medido entre dois vencimentos

| | vencimento | ajuste | dias úteis | contratos |
|---|---|---|---|---|
| curto | `WDOZ26` | 5.746,512 | 3 | 3.188.634 |
| longo | `WDOF27` | 5.779,633 | 25 | 123.022 |

Entre os dois vão **22 dias úteis**, e o mercado cobra **+0,576%** para atravessar esse pedaço — **+0,0262% por dia útil**, ou **+6,80% ao ano**.

Os dois ajustes saem do mesmo boletim, no mesmo instante, então essa inclinação é carrego limpo: não tem hora do relógio dentro.

### A conferência que o número tem de passar

A curva de DI diz que o juro em reais nessa mesma janela é **+13,68% ao ano**. Tirando o carrego, sobra o juro em dólar implícito: **+6,43% ao ano**.

A B3 publica o cupom cambial dela nos vencimentos longos: `DDIX27` +9,02% · `DDIZ27` +8,85% · `DDIF28` +8,70%. São duas curvas que não se falam — uma deduzida do dólar com o DI, outra negociada direto — e elas ficam a **2,4 ponto percentual** uma da outra, dentro da tolerância de 3 pontos que este bloco usa. Não é o mesmo número, e nem deveria ser: os vértices do DDI são de prazo bem maior que a janela medida aqui. O que a conferência garante é que não há erro de ordem de grandeza — se um dia elas se afastarem muito, o bloco avisa em vez de publicar.

### Por que a diferença entre o futuro e a PTAX engana

| ajuste do `WDOZ26` contra a PTAX | **+0,033%** |
|---|---|
| carrego de verdade, nos 3 dias úteis que faltam para o vencimento | +0,079% |
| **sobra, que não é carrego** | **-0,045%** |

A sobra não é o mercado apostando em alta do dólar. A PTAX é fixada por volta das 13h; o ajuste do futuro sai no fechamento. São cinco horas de pregão entre uma medida e outra, e tudo que o dólar andou nesse intervalo aparece como se fosse prêmio.

### Onde pode estar a vantagem, e o que não fazer

- **O carrego é previsível; o resto não.** Quem opera dólar futuro comprado paga esse carrego todo dia, chova ou faça sol. Num carrego de +0,0262% ao dia útil, uma posição parada por um mês já começa com essa conta contra. Posição comprada em dólar precisa de movimento maior que o carrego só para empatar.
- **Carrego subindo é juro mudando, não dólar mudando.** Se esta inclinação se abrir sem que a curva de DI se mexa, a conta não fecha e vale desconfiar do dado antes de desconfiar do mercado.
- **Não leia a diferença entre futuro e PTAX como sinal.** É quase toda relógio, como a tabela acima mostra. Quem conclui “o mercado está apostando no dólar” a partir daqueles dois números está lendo o calendário.
- **Não compare número de dias corridos com dias úteis.** O carrego corre em dias úteis (252), o juro americano em dias corridos (360). Misturar os dois erra por vários por cento ao ano.

<small>Leitura de risco a partir de dado público da B3, não recomendação. Quem monta a posição carrega o risco.</small>

## Anomalias do dia

| ativo | movimento | desvio | onde |
|---|---|---|---|
| **Ouro** | 4,85% | z 2,6 | internacional |
| **Prata** | 11,69% | z 2,7 | internacional |
| **Platina** | 9,09% | z 2,6 | internacional |
| **Paládio** | 10,64% | z 3,0 | internacional |
| **Cobre** | 7,02% | z 3,8 | internacional |
| **Xangai** | 3,73% | z 4,0 | internacional |
| **Ibovespa** | 6,07% | z 3,8 | internacional |
| **Dólar/Real** | -2,91% | z -3,0 | internacional |
| **SLV (Prata)** | volume 2,53× a mediana | acima do normal | fluxo de ETF |
| **PPLT (Platina)** | volume 2,36× a mediana | acima do normal | fluxo de ETF |
| **PALL (Paládio)** | volume 1,88× a mediana | acima do normal | fluxo de ETF |
| **DBB (Metais industriais)** | volume 1,94× a mediana | acima do normal | fluxo de ETF |
| **USO (Petróleo WTI)** | volume 0,48× a mediana | abaixo do normal | fluxo de ETF |
| **WEAT (Trigo)** | volume 1,85× a mediana | acima do normal | fluxo de ETF |
| **EWZS (Small caps Brasil)** | volume 0,38× a mediana | abaixo do normal | fluxo de ETF |
| **Ibovespa** | 6,07% | z 5.85 (mediana/MAD) | Brasil |
| **Dólar (PTAX)** | -2,34% | z -4.04 (mediana/MAD) | Brasil |
| **BEEF3 · aluguel** | 3,1% → 42,8% a.a. | 13,7× em 8 pregões | custo de ficar vendido |

<small>O desvio é medido contra a mediana e o MAD dos últimos 252 pregões, não contra o desvio-padrão: um único dia extremo — como 26/10/2026 — infla o desvio-padrão a ponto de nenhum dia normal mais parecer anômalo, e o alerta ficaria cego justamente depois de um susto.</small>

---

## De onde vem cada número, e de quando

| bloco | fonte | coletado |
|---|---|---|
| Internacional e commodities | Yahoo Finance · atraso de ~15 min, cotação revisável | 27/11 às 06:45 |
| Ibovespa (fechamento) | B3 · Boletim Diário do Mercado | 27/11 às 06:45 |
| Dólar | Banco Central · PTAX de venda (série SGS 1) | 27/11 às 06:45 |
| Curva de juros | B3 · boletim, 43 vencimentos de DI1 | 27/11 às 06:45 |
| Índices da B3 | B3 · acervo diário de índices | 27/11/2026 06:31 |
| Fluxo: rankings, aluguel e termo | B3 · Boletim Diário + nossa base COTAHIST ajustada | 27/11 às 06:45 |
| O lado | medido sobre o painel do próprio site | 27/11 às 06:45 |

Os horários em que cada página do site atualiza estão em [🕐 Quando este site atualiza](/horarios).

> [!warning] O que esta página não decide por você
>
> Os números acima são medição. O que fazer com eles é leitura de risco,
> e o risco é de quem opera. Quando nenhuma vantagem passa das travas,
> a página diz isso em vez de inventar convicção — e ficar de fora
> também é posição.

