---
title: "🔎 Integridade dos dados"
date: 2026-11-16
description: "O que foi conferido, contra qual fonte e quando — medido na hora, tabela por tabela e página por página"
tags: [integridade]
---

*Pregão conferido: **16/11/2026**, com 59 tabelas no acervo · página gerada em 17/11/2026 17:15*

O pregão conferido é o último **fechado e arquivado inteiro**, não o de hoje: enquanto o dia corre, só algumas tabelas estão gravadas, e conferir um dia pela metade produziria alarme falso.

Esta página não declara que o site está correto. Ela **mede** e escreve o resultado, inclusive quando o resultado é ruim. Cada número abaixo vem de uma contagem feita agora, contra a fonte que a própria B3 publica.

## Resumo

| o que | situação |
|---|---|
| Tabelas do boletim conferidas | **54** de 59 guardadas |
| Tabelas incompletas | **nenhuma** |
| Tabelas sem alvo publicado pela B3 | 5 — não há como conferir |
| Páginas publicadas | 351 |
| Página escrita mais recentemente | 17/11 17:15 |
| Páginas sem data no cabeçalho | 8 — cegas para a conferência de dado |

## 1 · Acervo do boletim diário

A B3 publica, no próprio boletim, a lista de tickers de cada tabela. Essa lista é o alvo: baixou certo quando todo ticker declarado aparece no que chegou. É a mesma ideia usada nos feriados, onde o alvo é o `WdrwlDays` que ela publica por contrato.

A conferência é por **conjunto**, não por contagem de linhas: várias tabelas trazem muitas linhas para o mesmo ticker. Ticker faltando é fatia da tabela que nunca chegou — foi assim que a tabela de negócios de ações ficou semanas com 22 mil tickers ausentes sem ninguém notar. O que isto **não** prova é que todas as linhas de cada ticker vieram: com o que a B3 publica, cobertura de conjunto é o teto do que dá para afirmar.

### Completas (54)

Bateram exatamente com o alvo da B3. As incompletas estão acima e não se repetem aqui.

| tabela | linhas | tickers obtidos | declarados pela B3 |
|---|---:|---:|---:|
| `BTBLendingOpenPosition` | 2.916 | 1.034 | 1.034 |
| `BTBLoanBalance` | 4.743 | 1.655 | 1.655 |
| `BTBTrade` | 45.543 | 525 | 525 |
| `CNLDistrionCoffeLocation` | 1 | 1 | 1 |
| `CNLHarvestCoffeApprov` | 1 | 1 | 1 |
| `CNLValidLotsSettle` | 1 | 1 | 1 |
| `COEInventory` | 1 | 1 | 1 |
| `COERegistration` | 1 | 1 | 1 |
| `ConsolidatedTradesDerivatives` | 7.630 | 7.630 | 7.630 |
| `ConsolidatedTradesDerivativesAfter` | 53 | 53 | 53 |
| `ConsolidatedTradesEquities` | 75.185 | 75.185 | 75.185 |
| `ConsolidatedTradesRVAfter` | 29 | 29 | 29 |
| `Custody` | 61 | 54 | 54 |
| `DailyAverageDerivatives2` | 9 | 9 | 9 |
| `DailyAverageStocks` | 9 | 9 | 9 |
| `DeadlineDepositSecurities` | 35 | 32 | 32 |
| `DebenturesBusiness` | 76 | 76 | 76 |
| `DerivativesMtM` | 4 | 4 | 4 |
| `DerivativesOperation2` | 104 | 88 | 88 |
| `DistrionCoffeLocation` | 18 | 18 | 18 |
| `EconomicIndicators` | 457 | 64 | 64 |
| `EletronicTerm` | 2 | 1 | 1 |
| `FlexibleOptions` | 893 | 111 | 111 |
| `Forward` | 5 | 5 | 5 |
| `ForwardMarket` | 110 | 66 | 66 |
| `FugibleCustody` | 7 | 5 | 5 |
| `HarvestCoffeApprov` | 2 | 2 | 2 |
| `HistoricalExchange` | 3 | 1 | 1 |
| `IOPV` | 70 | 70 | 70 |
| `IbovespaStockBiggestHighs` | 10 | 10 | 10 |
| `IbovespaStockBiggestLow` | 10 | 10 | 10 |
| `InCash` | 5 | 5 | 5 |
| `InCashMarketBiggestHighs` | 10 | 10 | 10 |
| `InCashMarketBiggestLow` | 10 | 10 | 10 |
| `InstrumentsDerivatives` | 9.608 | 9.608 | 9.608 |
| `MarginScenarios` | 134.340 | 7.010 | 7.010 |
| `NegotiStrategi` | 139 | 28 | 28 |
| `OTCInventoryCCP` | 3 | 3 | 3 |
| `OTCInventoryWCCP` | 4 | 4 | 4 |
| `OTCRegistrationCCP` | 3 | 3 | 3 |
| `OTCRegistrationWCCP` | 4 | 4 | 4 |
| `OpenPositionsEquities` | 45.150 | 45.150 | 45.150 |
| `OptionsPurshase` | 10 | 5 | 5 |
| `OptionsSelling` | 10 | 5 | 5 |
| `ProventionCreditVariable` | 233 | 192 | 192 |
| `Register` | 16 | 16 | 16 |
| `Renewals` | 3.405 | 67 | 67 |
| `SaleOff` | 46 | 12 | 12 |
| `SharesInvesVolum` | 5 | 5 | 5 |
| `SharesInvesVolumMonthly` | 5 | 5 | 5 |
| `Stock` | 42 | 42 | 42 |
| `StocksOperationSummary` | 59 | 59 | 59 |
| `SwapFlex` | 5 | 1 | 1 |
| `ValidLotsSettle` | 8 | 1 | 1 |

## 2 · Páginas publicadas

Duas medidas diferentes, que antes eram confundidas numa só. O **mtime** diz quando o gerador escreveu o arquivo e pega gerador que parou de rodar. A **data declarada** diz a que pregão o conteúdo se refere e pega gerador que roda mas cujo dado não anda — que foi o defeito do agro em 16/11.

Pregão mais recente declarado por alguma página: **17/11/2026**.

Nenhuma página gerada ficou mais de 2 dias sem ser reescrita.

## 3 · O que **não** está conferido

A seção mais importante da página. Sem ela, "nenhum problema encontrado" se confunde com "nada foi olhado".

**Tabelas fora da conferência** (5), com o motivo de cada uma. Nenhuma delas é falha de coleta: parte são agrupadores do catálogo, que não têm dados próprios, e parte são séries ou valores únicos, que não têm ticker a conferir. O motivo vai escrito porque "sem alvo" sozinho insinuaria falta da B3 e esconderia que três delas nem são tabelas de dados.

| tabela | linhas | por quê |
|---|---:|---|
| `AverageChart` | 13 | não achei a coluna do ticker |
| `DIover` | 1 | não achei a coluna do ticker |
| `INDEXES` | 0 | agrupador do catálogo (34 item(ns)), não tem dados próprios |
| `Previa` | 0 | agrupador do catálogo (3 item(ns)), não tem dados próprios |
| `PreviaQuadrimestral` | 0 | agrupador do catálogo (34 item(ns)), não tem dados próprios |

**Páginas sem `date:` no cabeçalho** (8). O mtime mostra que o gerador rodou, mas sem data declarada não dá para saber se o *dado* avançou junto.

- `avisos/index.md`
- `diario/index.md`
- `historico.md`
- `horarios/index.md`
- `intraday/index.md`
- `por-onde-comecar.md`
- `posicionamento/index.md`
- `sinais-topo-fundo/tutorial.md`

**Perdas definitivas** (1). Dias que entraram incompletos no acervo e saíram do ar da B3 antes de poderem ser refeitos: ela mantém só os ~21 pregões mais recentes. O acervo guarda a única cópia que existe desses dias, e ela está incompleta. Não há conserto — está escrito aqui para que quem usar esses pregões num estudo saiba que eles são diferentes dos outros.

| tabela | pregão | obtido | declarado | completude | registrado em |
|---|---|---:|---:|---:|---|
| `ConsolidatedTradesEquities` | 15/10/2026 | 57.320 | 81.364 | **70,4%** | 2026-11-17 |

**Páginas estáticas**, fora de qualquer conferência de atualização:

- `calendario.md` — widget do myfxbook, a tabela se atualiza no navegador

## 4 · Acervo de negócios tick a tick

Barras de 1 minuto dos contratos de índice, montadas dos negócios individuais que a B3 publica por pregão. É fonte primária: não depende de feed e não some quando o MetaTrader para.

| o que | situação |
|---|---|
| Pregões arquivados | **19**, de 19/10/2026 a 16/11/2026 |
| Tamanho | 381 KB |
| Pregões parciais | **3** |
| Dias úteis sem arquivo na faixa | **1** |

A B3 mantém esses arquivos por cerca de 21 pregões. O acervo só cresce para frente: o que não for guardado a tempo some, e por isso ele começa em 19/10/2026 e não antes.

**Pregões parciais.** O arquivo da B3 veio sem parte do dia. Os dados ficam guardados assim mesmo — meio pregão ainda serve, desde que quem for usar saiba o que está pegando.

| pregão | instrumento | primeira barra | última barra |
|---|---|---|---|
| 27/10/2026 | `WINZ26` | 12:36 | 18:31 |
| 29/10/2026 | `WINZ26` | 12:04 | 18:31 |
| 05/11/2026 | `WINZ26` | 10:24 | 18:31 |

**Dia útil sem arquivo:** 28/10/2026. Houve pregão nesse dia — ele está no boletim diário —, mas o arquivo de negócios não existe no site da B3. Não é falha de coleta.

## Como isto é medido

O `integridade.py` roda junto com as páginas do boletim, abre cada arquivo do acervo do pregão mais recente, conta as linhas distintas e compara com o `availableTickers` que veio no próprio arquivo da B3. Depois percorre todas as páginas publicadas lendo a hora de gravação e o `date:` do cabeçalho. Nenhum número desta página é guardado de uma rodada para a outra: tudo é recontado na hora, e o que não puder ser contado aparece na seção 3 em vez de sumir.

