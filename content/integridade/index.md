---
title: "🔎 Integridade dos dados"
date: 2026-11-16
description: "O que foi conferido, contra qual fonte e quando — medido na hora, tabela por tabela e página por página"
tags: [integridade]
---

*Pregão conferido: **16/11/2026**, com 59 tabelas no acervo · página gerada em 17/11/2026 10:31*

O pregão conferido é o último **fechado e arquivado inteiro**, não o de hoje: enquanto o dia corre, só algumas tabelas estão gravadas, e conferir um dia pela metade produziria alarme falso.

Esta página não declara que o site está correto. Ela **mede** e escreve o resultado, inclusive quando o resultado é ruim. Cada número abaixo vem de uma contagem feita agora, contra a fonte que a própria B3 publica.

## Resumo

| o que | situação |
|---|---|
| Tabelas do boletim conferidas | **33** de 59 guardadas |
| Tabelas incompletas | **nenhuma** |
| Tabelas sem alvo publicado pela B3 | 26 — não há como conferir |
| Páginas publicadas | 350 |
| Página escrita mais recentemente | 17/11 10:31 |
| Páginas sem data no cabeçalho | 12 — cegas para a conferência de dado |

## 1 · Acervo do boletim diário

A B3 publica, no próprio boletim, a lista de tickers de cada tabela. Essa lista é o alvo: baixou certo quando o que chegou bate com o que ela declarou. É a mesma ideia usada nos feriados, onde o alvo é o `WdrwlDays` que ela publica por contrato.

### Completas (33)

Bateram exatamente com o alvo da B3. As incompletas estão acima e não se repetem aqui.

| tabela | linhas | alvo |
|---|---:|---:|
| `CNLDistrionCoffeLocation` | 1 | 1 |
| `CNLHarvestCoffeApprov` | 1 | 1 |
| `CNLValidLotsSettle` | 1 | 1 |
| `COEInventory` | 1 | 1 |
| `COERegistration` | 1 | 1 |
| `ConsolidatedTradesDerivatives` | 7.630 | 7.630 |
| `ConsolidatedTradesDerivativesAfter` | 53 | 53 |
| `ConsolidatedTradesEquities` | 75.185 | 75.185 |
| `ConsolidatedTradesRVAfter` | 29 | 29 |
| `DailyAverageDerivatives2` | 9 | 9 |
| `DailyAverageStocks` | 9 | 9 |
| `DebenturesBusiness` | 76 | 76 |
| `DerivativesMtM` | 4 | 4 |
| `DistrionCoffeLocation` | 18 | 18 |
| `Forward` | 5 | 5 |
| `HarvestCoffeApprov` | 2 | 2 |
| `IOPV` | 70 | 70 |
| `IbovespaStockBiggestHighs` | 10 | 10 |
| `IbovespaStockBiggestLow` | 10 | 10 |
| `InCash` | 5 | 5 |
| `InCashMarketBiggestHighs` | 10 | 10 |
| `InCashMarketBiggestLow` | 10 | 10 |
| `InstrumentsDerivatives` | 9.608 | 9.608 |
| `OTCInventoryCCP` | 3 | 3 |
| `OTCInventoryWCCP` | 4 | 4 |
| `OTCRegistrationCCP` | 3 | 3 |
| `OTCRegistrationWCCP` | 4 | 4 |
| `OpenPositionsEquities` | 45.150 | 45.150 |
| `Register` | 16 | 16 |
| `SharesInvesVolum` | 5 | 5 |
| `SharesInvesVolumMonthly` | 5 | 5 |
| `Stock` | 42 | 42 |
| `StocksOperationSummary` | 59 | 59 |

## 2 · Páginas publicadas

Duas medidas diferentes, que antes eram confundidas numa só. O **mtime** diz quando o gerador escreveu o arquivo e pega gerador que parou de rodar. A **data declarada** diz a que pregão o conteúdo se refere e pega gerador que roda mas cujo dado não anda — que foi o defeito do agro em 16/11.

Pregão mais recente declarado por alguma página: **17/11/2026**.

Nenhuma página gerada ficou mais de 2 dias sem ser reescrita.

## 3 · O que **não** está conferido

A seção mais importante da página. Sem ela, "nenhum problema encontrado" se confunde com "nada foi olhado".

**Tabelas sem alvo publicado pela B3** (26). Vêm sem a lista de tickers, então não existe contagem contra a qual comparar. Elas podem estar completas — só não dá para provar.

| tabela | linhas | por quê |
|---|---:|---|
| `AverageChart` | 13 | não achei a coluna do ticker |
| `BTBLendingOpenPosition` | 2.916 | alvo de tamanho diferente das linhas |
| `BTBLoanBalance` | 4.743 | alvo de tamanho diferente das linhas |
| `BTBTrade` | 45.543 | alvo de tamanho diferente das linhas |
| `Custody` | 61 | alvo de tamanho diferente das linhas |
| `DIover` | 1 | não achei a coluna do ticker |
| `DeadlineDepositSecurities` | 35 | alvo de tamanho diferente das linhas |
| `DerivativesOperation2` | 104 | alvo de tamanho diferente das linhas |
| `EconomicIndicators` | 457 | alvo de tamanho diferente das linhas |
| `EletronicTerm` | 2 | alvo de tamanho diferente das linhas |
| `FlexibleOptions` | 893 | alvo de tamanho diferente das linhas |
| `ForwardMarket` | 110 | alvo de tamanho diferente das linhas |
| `FugibleCustody` | 7 | alvo de tamanho diferente das linhas |
| `HistoricalExchange` | 3 | alvo de tamanho diferente das linhas |
| `INDEXES` | 0 | sem alvo declarado pela B3 |
| `MarginScenarios` | 134.340 | alvo de tamanho diferente das linhas |
| `NegotiStrategi` | 139 | alvo de tamanho diferente das linhas |
| `OptionsPurshase` | 10 | alvo de tamanho diferente das linhas |
| `OptionsSelling` | 10 | alvo de tamanho diferente das linhas |
| `Previa` | 0 | sem alvo declarado pela B3 |
| `PreviaQuadrimestral` | 0 | sem alvo declarado pela B3 |
| `ProventionCreditVariable` | 233 | alvo de tamanho diferente das linhas |
| `Renewals` | 3.405 | alvo de tamanho diferente das linhas |
| `SaleOff` | 46 | alvo de tamanho diferente das linhas |
| `SwapFlex` | 5 | alvo de tamanho diferente das linhas |
| `ValidLotsSettle` | 8 | alvo de tamanho diferente das linhas |

**Páginas sem `date:` no cabeçalho** (12). O mtime mostra que o gerador rodou, mas sem data declarada não dá para saber se o *dado* avançou junto.

- `adr/index.md`
- `agro/index.md`
- `avisos/index.md`
- `diario/index.md`
- `historico.md`
- `inflacao-e-cambio/index.md`
- `intraday/index.md`
- `por-onde-comecar.md`
- `posicionamento/aluguel.md`
- `posicionamento/derivativos.md`
- `posicionamento/index.md`
- `sinais-topo-fundo/tutorial.md`

**Páginas estáticas**, fora de qualquer conferência de atualização:

- `calendario.md` — widget do myfxbook, a tabela se atualiza no navegador

## Como isto é medido

O `integridade.py` roda junto com as páginas do boletim, abre cada arquivo do acervo do pregão mais recente, conta as linhas distintas e compara com o `availableTickers` que veio no próprio arquivo da B3. Depois percorre todas as páginas publicadas lendo a hora de gravação e o `date:` do cabeçalho. Nenhum número desta página é guardado de uma rodada para a outra: tudo é recontado na hora, e o que não puder ser contado aparece na seção 3 em vez de sumir.

