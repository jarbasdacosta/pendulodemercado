---
title: "🔀 O ζ diário e o ζ intraday concordam — e daí?"
date: 2026-11-25
description: "As 13 vezes em 5 anos em que os dois IMAs apontaram topo ao mesmo tempo, o que veio depois, e por que no lado do fundo não há nada"
tags: [espectro]
---

*Página refeita em 25/11/2026 18:45 · medição de 25/11/2026 às 18:45 · **dados do ζ até 24/11/2026 17:30**.*

> [!info] O dado não vai até hoje
> 
> Os caches de ζ usados aqui terminam em **24/11/2026**. O que aconteceu no mercado depois dessa data não está nesta página. Quando os caches forem recalculados, ela se refaz sozinha.

## A pergunta

O sistema calcula o ζ em duas frequências: no **diário**, com janela de 252 pregões, e no **intraday**, em velas de 15 minutos. Os dois nunca tinham sido cruzados. A pergunta é direta: *houve momentos em que os dois apontaram topo ao mesmo tempo? E fundo? O que veio depois?*

Resposta: sim, e é raro. No período de **12/11/2021 a 24/11/2026** (1.255 pregões, 18.379 leituras de 30 em 30 minutos), os dois concordaram em **13 episódios de topo** e **8 de fundo** — menos de 1% do tempo.

> [!warning] O que esta página NÃO diz
> 
> A série intraday começa em **novembro de 2021**. Nenhum dos quatro grandes eventos do Ibovespa — 2001, 2002, 2008 e 2020 — está dentro da amostra. O maior movimento aqui é a queda de 2021–2022.
> 
> Portanto isto mede eventos **médios**. Um acerto aqui é indício de que o cruzamento carrega informação; **não** é evidência de que ele veria uma crise. Para a pergunta da crise, veja a [cobertura do IMA nos grandes tombos](grandes-tombos).

## Lado do topo: sugestivo, não comprovado

**Todos os episódios de topo** — 13 episódios

| horizonte | episódios negativos | o normal seria | mediana | mediana de um pregão qualquer | chance de ser sorte |
|---|---|---|---|---|---|
| 1 pregão | **9 de 13** (69%) | 49% | -0,80% | +0,03% | 0,122 |
| 5 pregões | **11 de 13** (85%) | 48% | -1,04% | +0,12% | 0,007 |
| 20 pregões | **9 de 13** (69%) | 44% | -1,64% | +0,97% | 0,065 |
| 60 pregões | **9 de 13** (69%) | 42% | -3,23% | +2,17% | 0,044 |

A coluna *o normal seria* é a taxa base: de todos os pregões do período, quantos teriam dado negativo naquele horizonte. O Ibovespa sobe mais do que cai, então essa taxa **não é 50%** — comparar com 50% inflaria o resultado a favor do sinal.

### Sobreviveu fora da amostra

O corte que define "ζ alto" saiu do quantil 0,90 medido **só na primeira metade** do período. Separando os episódios nas mesmas metades:

**Primeira metade (onde o corte foi escolhido)** — 6 episódios

| horizonte | episódios negativos | o normal seria | mediana | mediana de um pregão qualquer | chance de ser sorte |
|---|---|---|---|---|---|
| 1 pregão | **3 de 6** (50%) | 49% | -0,16% | +0,03% | 0,643 |
| 5 pregões | **5 de 6** (83%) | 48% | -1,02% | +0,12% | 0,091 |
| 20 pregões | **3 de 6** (50%) | 44% | -0,88% | +0,97% | 0,549 |
| 60 pregões | **4 de 6** (67%) | 42% | -1,74% | +2,17% | 0,207 |

**Segunda metade (fora da amostra)** — 7 episódios

| horizonte | episódios negativos | o normal seria | mediana | mediana de um pregão qualquer | chance de ser sorte |
|---|---|---|---|---|---|
| 1 pregão | **6 de 7** (86%) | 49% | -1,00% | +0,03% | 0,058 |
| 5 pregões | **6 de 7** (86%) | 48% | -1,05% | +0,12% | 0,050 |
| 20 pregões | **6 de 7** (86%) | 44% | -1,64% | +0,97% | 0,034 |
| 60 pregões | **5 de 7** (71%) | 42% | -3,45% | +2,17% | 0,116 |

A segunda metade saiu **igual ou mais forte** que a primeira. Sinal que melhora fora da amostra onde foi calibrado não tem cara de ajuste forçado. Mas são seis e sete episódios: a consistência entre as duas metades vale mais do que qualquer um dos números isolados.

### E o quanto disso é sorte

Foram testados quatro horizontes em dois lados: **oito combinações**. Anunciar a melhor sem descontar a procura é atirar na parede e desenhar o alvo depois. Corrigido por Holm-Bonferroni, o melhor resultado (topo em 5 pregões) vai de **p = 0,007** para **p = 0,060**.

Ou seja: fica **logo acima** do limiar convencional de 0,05. É um indício que merece atenção, não um fato estabelecido. A página diz isso de propósito — o número bonito sem a correção seria mais vendável e menos verdadeiro.

## Isto não é a mesma coisa que "o preço está esticado"

Todo sinal precisa bater uma régua boba antes de valer alguma coisa. A régua aqui é a mais simples possível: **a distância do preço à média de 252 pregões, em percentil dos últimos dois anos**. Sem wavelet, sem parâmetro escolhido, sem ajuste.

**A régua boba, no mesmo período** — 5 episódios

| horizonte | episódios negativos | o normal seria | mediana | mediana de um pregão qualquer | chance de ser sorte |
|---|---|---|---|---|---|
| 1 pregão | **5 de 5** (100%) | 49% | -0,89% | +0,03% | 0,029 |
| 5 pregões | **5 de 5** (100%) | 48% | -2,58% | +0,12% | 0,025 |
| 20 pregões | **5 de 5** (100%) | 44% | -4,02% | +0,97% | 0,018 |
| 60 pregões | **4 de 5** (80%) | 42% | -5,29% | +2,17% | 0,103 |

Olhando só essa tabela, a régua boba parece melhor: cai mais fundo e erra menos. Mas ela e a concordância **não são a mesma coisa**, e a diferença só aparece quando se olha o calendário:

**Quando a régua boba esteve ligada**

| quando | pregões | 1 pregão | 5 pregões | 20 pregões | 60 pregões |
|---|---|---|---|---|---|
| 03/10/2022 a 04/11/2022 | 8 | -2,38% | -5,00% | -7,41% | -4,00% |
| 07/06/2023 a 03/08/2023 | 33 | -0,89% | -1,85% | -4,02% | -6,68% |
| 14/11/2023 a 27/02/2024 | 54 | -1,16% | -2,73% | -3,66% | -5,29% |
| 23/09/2025 a 24/09/2025 | 2 | -0,76% | -0,62% | -1,06% | +8,05% |
| 29/10/2025 a 24/04/2026 | 118 | -0,50% | -2,58% | -6,85% | -9,03% |

A régua boba não dá avisos: ela marca **regimes**, e fica ligada por meses seguidos. A concordância dos dois ζ marca **dias**. Para quem opera, um aviso que dura seis meses não é acionável; um que dura um ou dois pregões é.

No cruzamento das duas listas: **6 coincidem**, **7 só a concordância enxerga**, e **1 só a régua boba**. Entre os que só a concordância vê estão os piores casos do período.

**Os episódios de concordância no topo**

| quando | pregões | 1 pregão | 5 pregões | 20 pregões | 60 pregões |
|---|---|---|---|---|---|
| 12/04/2022 | 1 | +0,26% | -1,86% | -9,24% | -13,87% |
| 10/08/2022 a 05/09/2022 | 7 | -2,17% | -1,26% | +3,59% | -0,25% |
| 05/01/2023 a 11/01/2023 | 2 | -0,59% | -0,26% | -2,28% | -9,48% |
| 09/02/2023 a 10/02/2023 | 2 | +0,70% | +1,02% | -4,76% | +0,36% |
| 29/06/2023 a 07/07/2023 | 5 | -0,80% | -1,00% | +0,51% | -3,23% |
| 28/11/2023 a 30/11/2023 | 2 | +0,67% | -1,04% | +4,21% | +1,33% |
| 04/09/2024 | 1 | +0,29% | -1,05% | -1,91% | -7,67% |
| 27/05/2025 a 29/05/2025 | 2 | -1,09% | -1,66% | -1,20% | -0,58% |
| 28/08/2025 a 23/09/2025 | 7 | -0,08% | -0,25% | -1,64% | +7,40% |
| 26/11/2025 a 04/12/2025 | 3 | -4,23% | -3,03% | -1,40% | +8,86% |
| 03/02/2026 a 11/02/2026 | 2 | -1,00% | +0,27% | -6,61% | -6,80% |
| 04/03/2026 a 05/03/2026 | 2 | -0,86% | -0,67% | +4,05% | -3,45% |
| 27/10/2026 | 1 | -2,71% | -4,66% | -6,59% | -6,59% |

## Lado do fundo: não serve

**Episódios de fundo** — 8 episódios

| horizonte | episódios negativos | o normal seria | mediana | mediana de um pregão qualquer | chance de ser sorte |
|---|---|---|---|---|---|
| 1 pregão | **3 de 8** (38%) | 49% | +0,17% | +0,03% | 0,846 |
| 5 pregões | **4 de 8** (50%) | 48% | -0,24% | +0,12% | 0,590 |
| 20 pregões | **3 de 8** (38%) | 44% | +1,50% | +0,97% | 0,772 |
| 60 pregões | **4 de 8** (50%) | 42% | +0,67% | +2,17% | 0,451 |

Nenhum horizonte se distingue da taxa base, nem na primeira metade nem na segunda. **Os dois ζ apontando fundo ao mesmo tempo não diz nada sobre o que vem depois** — e esta página registra isso com a mesma clareza com que registra o resultado do topo. Medição que só publica o que deu certo não é medição.

> [!tip] Por que o lado do fundo não funciona
> 
> Há uma medição separada, com **26 anos** e os eventos de cauda dentro (2001, 2008, 2020), que mostra o motivo: o ζ Fundo no teto da escala marca o **começo** de uma queda forte, não o fim dela. Quem comprasse no primeiro sinal de 2008 estaria 32% abaixo três meses depois.
> 
> [O ζ no teto da escala — o que realmente acontece depois](zeta-no-teto)

## O que fazer com isso

> [!tip] Onde pode estar a vantagem
> 
> **Reduzir exposição comprada por alguns pregões**, não vender a descoberto. A mediana é de -1,04% em cinco pregões — pequena. O que chama atenção é a assimetria: 11 de 13 episódios foram negativos — **85%**, contra **48%** dos pregões em geral.
> 
> **Usar junto com a régua boba, não no lugar dela.** Elas marcam coisas diferentes: regime contra dia. A maioria dos avisos da concordância cai fora dos regimes da régua.

> [!danger] O que não fazer
> 
> **Não trate como gatilho de venda.** Com p corrigido em 0,060 e treze casos, isto não suporta uma regra mecânica.
> 
> **Não use no lado do fundo.** Ali não há sinal nenhum.
> 
> **Não leia como aviso de crise.** Nenhum mega-evento está na amostra.
> 
> A avaliação acima é leitura de risco, não recomendação. **O risco é de quem opera.**

## Como foi medido

- **Causalidade:** o ζ diário de um pregão só existe depois do fechamento dele. Cada leitura intraday usa o ζ diário do **pregão anterior**, nunca o do próprio dia.
- **Limiar sem vazamento:** quantil 0,90 calculado apenas na primeira metade e aplicado às duas.
- **Unidade:** um voto por **episódio**, não por leitura de 30 minutos. Pesando por leitura, um episódio de 14 pregões valeria 14 vezes um de 1 pregão, e o resultado some.
- **Episódios** são marcos de concordância separados por até 20 pregões; acima disso, viram episódios distintos.
- **Taxa base** calculada sobre todos os pregões do mesmo período.
- **Correção de múltiplos testes:** Holm-Bonferroni sobre as oito combinações.

Fonte: `concordancia_zeta.py`, sobre os caches de ζ de 12/11/2021 a 24/11/2026. [Metodologia da Sinal IMA](../metodologia/crise) · [Espectro wavelet](./) · [Grandes tombos](grandes-tombos)

