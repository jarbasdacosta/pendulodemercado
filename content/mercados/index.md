---
title: "🌍 Mercados"
date: 2026-11-18
tags: [mercados]
description: "O que mandou no dia: internacional, Brasil, a sincronia entre Ibovespa, dólar e juro, os índices da B3 e onde está — ou não está — a vantagem"
---

> [!note] A que pregão se refere cada bloco
>
> **Internacional**: 2026-11-18 · **Ibovespa (fechamento oficial)**: 2026-11-17 · **Dólar (PTAX)**: 2026-11-18 · **Curva de juros**: 2026-11-17 · **O lado (painel de vantagem)**: 2026-11-17
>
> Blocos com datas diferentes é o normal: as bolsas lá fora negociam enquanto a B3 ainda não publicou o boletim do dia, e a PTAX sai no meio da tarde. O que não vale é comparar número de um com número de outro.

## O lado de hoje

> [!example] ⚪ nenhum sinal passou da trava hoje — sem vantagem medível, ficar de fora é a posição
>
> Medido em 1023 pregões (2022-10-11 a 2026-11-17), 4 sinais testados.
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

**Ibovespa** · fechamento oficial da B3 em 2026-11-17: **169.816** pontos

| | dia | mês | ano | 360 dias |
|---|---|---|---|---|
| Ibovespa 🟢 | 0,31% | 1,13% | 5,39% | 9,72% |
| Dólar (PTAX) 🟢 | 0,43% | 7,18% | 5,59% | 7,79% |
| DI 2030 🔴 | -14 p.b. | -18 p.b. | 186 p.b. | 217 p.b. |

<small>Ibovespa e DI pela série do MT5 (fecha em 2026-11-17); dólar pela PTAX do Banco Central em 2026-11-18, que é a taxa oficial e não tem salto de rolagem como o futuro contínuo. Juro em pontos-base, não em porcentagem de si mesmo: de 14,00% para 15,00% são 100 p.b., não “+7%”.</small>

**Curva de juros** · 43 vencimentos negociados em 2026-11-17

| 1 ano | 2 anos | 3 anos | 5 anos | 10 anos | inclinação 10a−1a |
|---|---|---|---|---|---|
| 14,36% | 14,79% | 14,98% | 15,10% | 15,10% | **75 p.b.** |

> [!note] A inclinação era de -23 p.b. em 2026-10-15 e está em 75 p.b. — 98 p.b. de mudança.
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
| Ouro 🔴 | 3.749,30 US$/oz | -2,97% | -3,84% | -13,63% | -8,09% |
| Cobre 🔴 | 5,76 US$/lb | -3,67% | -10,87% | 2,25% | 14,93% |
| Petróleo Brent 🔴 | 90,37 US$/bbl | -2,97% | -23,18% | 48,51% | 44,45% |
| Dollar Index 🟢 | 103,86 pontos | 0,36% | 1,95% | 5,68% | 3,68% |
| Juro EUA 10 anos 🔴 | 5,10 % a.a. | -2 p.b. | 17 p.b. | 94 p.b. | 104 p.b. |

<small>Taxas de juro variam em **pontos-base**, não em porcentagem de si mesmas: um juro que vai de 4,16% a 5,10% subiu 94 p.b.; dizer “+22%” seria tecnicamente verdade e praticamente inútil.</small>

## Commodities, por família

### Metais preciosos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Platina 🔴 | 1.356,20 US$/oz | -4,91% | -5,69% | -33,34% | -10,41% |
| Prata 🔴 | 45,24 US$/oz | -4,33% | -7,86% | -35,49% | -9,29% |
| Paládio 🔴 | 943,50 US$/oz | -3,19% | -4,17% | -42,09% | -31,81% |
| Ouro 🔴 | 3.749,30 US$/oz | -2,97% | -3,84% | -13,63% | -8,09% |

### Metais industriais

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Aço laminado 🟢 | 1.435,00 US$/t | 5,98% | 6,53% | 53,48% | 67,44% |
| Cobre 🔴 | 5,76 US$/lb | -3,67% | -10,87% | 2,25% | 14,93% |
| Alumínio 🔴 | 2.938,50 US$/t | -3,36% | -11,24% | 1,11% | 9,03% |
| Minério de ferro 🔴 | 90,58 US$/t | -0,36% | -0,14% | -15,45% | -13,12% |

### Energia

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Petróleo Brent 🔴 | 90,37 US$/bbl | -2,97% | -23,18% | 48,51% | 44,45% |
| Petróleo WTI 🔴 | 84,23 US$/bbl | -2,07% | -19,10% | 46,69% | 45,07% |
| Gasolina 🔴 | 2,48 US$/gal | -2,05% | -25,03% | 45,60% | 31,84% |
| Óleo de aquecimento 🔴 | 3,97 US$/gal | -1,99% | -17,19% | 87,06% | 61,49% |
| Gás natural 🟢 | 3,25 US$/MMBtu | 1,43% | 12,28% | -11,72% | -28,95% |

### Grãos

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Aveia 🔴 | 356,00 ¢/bu | -1,25% | 3,56% | 17,69% | 16,53% |
| Trigo 🟢 | 602,25 ¢/bu | 1,18% | -0,21% | 18,79% | 14,28% |
| Óleo de soja 🔴 | 61,53 ¢/lb | -0,97% | -6,63% | 28,00% | 22,42% |
| Milho 🔴 | 443,50 ¢/bu | -0,73% | -0,95% | 0,74% | 4,23% |
| Soja 🔴 | 1.221,00 ¢/bu | -0,37% | -0,10% | 18,49% | 8,53% |
| Farelo de soja 🔴 | 334,10 US$/t | -0,33% | 2,93% | 13,45% | 6,03% |
| Arroz 🟢 | 18,36 US$/cwt | 0,14% | 5,33% | 91,40% | 75,83% |

### Softs

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Algodão 🟢 | 81,04 ¢/lb | 4,81% | 4,12% | 26,09% | 32,09% |
| Café arábica 🔴 | 280,10 ¢/lb | -2,27% | -2,47% | -19,68% | -29,97% |
| Açúcar 🔴 | 17,88 ¢/lb | -1,60% | -7,64% | 19,12% | 20,97% |
| Suco de laranja 🔴 | 135,00 ¢/lb | -0,84% | 17,04% | -34,21% | -5,20% |
| Cacau 🟢 | 5.049,00 US$/t | 0,38% | -7,41% | -16,75% | -0,69% |

### Proteína

| ativo | último | dia | mês | ano | 360 dias |
|---|---|---|---|---|---|
| Suíno (EUA) 🔴 | 53,10 ¢/lb | -4,07% | -9,81% | -37,60% | -31,75% |
| Boi gordo (EUA) 🔴 | 218,77 ¢/lb | -0,70% | -2,33% | -5,70% | 2,02% |
| Bezerro (EUA) 🔴 | 335,58 ¢/lb | -0,53% | -0,65% | -4,19% | 6,79% |

> As agrícolas negociadas **na B3**, com a curva e o que ela diz, estão na página [🌾 Agro](/agro). Aqui é o preço lá fora, que é o que chega antes.

## Índices da B3

Os 33 índices publicados pela B3 no pregão de 2026-11-17, do que mais subiu ao que mais caiu no dia.

| índice | fechamento | no dia | mínimo | máximo |
|---|---|---|---|---|
| AGFS 🟢 | 1.403 | 1,52% | 1.382 | 1.408 |
| IBHB 🟢 | 1.619 | 1,50% | 1.595 | 1.643 |
| IVBX2 🟢 | 17.802 | 1,12% | 17.605 | 17.943 |
| UTILITIES 🟢 | 17.844 | 1,11% | 17.644 | 17.973 |
| ISE 🟢 | 4.062 | 0,87% | 4.027 | 4.100 |
| SMALL CAP 🟢 | 2.020 | 0,80% | 2.003 | 2.040 |
| ICONSUMO 🟢 | 2.664 | 0,79% | 2.642 | 2.692 |
| GPTW 🟢 | 1.261 | 0,72% | 1.252 | 1.275 |
| IEE 🟢 | 123.384 | 0,67% | 122.415 | 124.403 |
| INDX 🟢 | 31.154 | 0,62% | 30.957 | 31.460 |
| IGNM 🟢 | 4.422 | 0,59% | 4.396 | 4.471 |
| IDIVERSA B3 🟢 | 1.424 | 0,56% | 1.416 | 1.438 |
| ICO2 🟢 | 2.978 | 0,37% | 2.962 | 3.014 |
| IBEP 🟢 | 1.672 | 0,36% | 1.666 | 1.692 |
| IGC 🟢 | 26.200 | 0,35% | 26.109 | 26.497 |
| IBOVESPA 🟢 | 169.816 | 0,30% | 169.300 | 171.749 |
| IBRASIL 🟢 | 6.650 | 0,30% | 6.630 | 6.724 |
| IBRX100 🟢 | 71.584 | 0,29% | 71.374 | 72.390 |
| IBRX50 🟢 | 28.721 | 0,28% | 28.640 | 29.050 |
| ITAG 🟢 | 36.596 | 0,28% | 36.485 | 37.020 |
| IMATBASICOS 🟢 | 6.202 | 0,26% | 6.179 | 6.286 |
| IGC TRADE 🟢 | 7.547 | 0,25% | 7.524 | 7.635 |
| MIDLARGE CAP 🟢 | 3.536 | 0,23% | 3.527 | 3.577 |
| I DIVIDENDOS 🟢 | 11.922 | 0,05% | 11.882 | 12.041 |
| IBEW ⚪ | 1.423 | 0,00% | 1.420 | 1.441 |
| IFIX 🔴 | 3.542 | -0,03% | 3.536 | 3.565 |
| IFIL 🔴 | 1.564 | -0,06% | 1.562 | 1.575 |
| IBOV SD TR 🔴 | 1.935 | -0,15% | 1.930 | 1.955 |
| IBEE 🔴 | 4.778 | -0,23% | 4.768 | 4.833 |
| IBLV 🔴 | 1.325 | -0,38% | 1.323 | 1.343 |
| IFINANCEIRO 🔴 | 16.742 | -0,65% | 16.688 | 17.041 |
| IMOBILIARIO 🔴 | 1.123 | -0,88% | 1.116 | 1.149 |
| BDRX 🔴 | 28.874 | -1,64% | 28.827 | 29.547 |

<small>A variação do dia é calculada do próprio boletim (fechamento contra abertura do mesmo pregão), e não contra o fechamento anterior — é o que a B3 publica nesta tabela.</small>

## Anomalias do dia

| ativo | movimento | desvio | onde |
|---|---|---|---|
| **Aço laminado** | 5,98% | z 6.561043535881422 | internacional |
| **Algodão** | 4,81% | z 3.1052505831047386 | internacional |
| **SPY (S&P 500)** | volume 1,82× a mediana | True | fluxo de ETF |
| **EWZS (Small caps Brasil)** | volume 0,20× a mediana | True | fluxo de ETF |

<small>O desvio é medido contra a mediana e o MAD dos últimos 252 pregões, não contra o desvio-padrão: um único dia extremo — como 26/10/2026 — infla o desvio-padrão a ponto de nenhum dia normal mais parecer anômalo, e o alerta ficaria cego justamente depois de um susto.</small>

---

## De onde vem cada número, e de quando

| bloco | fonte | coletado |
|---|---|---|
| Internacional e commodities | Yahoo Finance · atraso de ~15 min, cotação revisável | 18/11 às 10:03 |
| Ibovespa (fechamento) | B3 · Boletim Diário do Mercado | 18/11 às 20:24 |
| Dólar | Banco Central · PTAX de venda (série SGS 1) | 18/11 às 20:24 |
| Curva de juros | B3 · boletim, 43 vencimentos de DI1 | 18/11 às 20:24 |
| Índices da B3 | B3 · acervo diário de índices | 2026-11-17 |
| O lado | medido sobre o painel do próprio site | 18/11 às 20:25 |

Os horários em que cada página do site atualiza estão em [🕐 Quando este site atualiza](/horarios).

> [!warning] O que esta página não decide por você
>
> Os números acima são medição. O que fazer com eles é leitura de risco,
> e o risco é de quem opera. Quando nenhuma vantagem passa das travas,
> a página diz isso em vez de inventar convicção — e ficar de fora
> também é posição.

