---
title: "🔎 Integridade dos dados"
date: 2026-11-17
description: "O que foi conferido, contra qual fonte e quando — medido na hora, tabela por tabela e página por página"
tags: [integridade]
---

*Pregão conferido: **17/11/2026**, com 61 tabelas no acervo · página gerada em 18/11/2026 13:16*

O pregão conferido é o último **fechado e arquivado inteiro**, não o de hoje: enquanto o dia corre, só algumas tabelas estão gravadas, e conferir um dia pela metade produziria alarme falso.

Esta página não declara que o site está correto. Ela **mede** e escreve o resultado, inclusive quando o resultado é ruim. Cada número abaixo vem de uma contagem feita agora, contra a fonte que a própria B3 publica.

## Resumo

| o que | situação |
|---|---|
| Tabelas do boletim conferidas | **55** de 61 guardadas |
| Tabelas **incompletas** | **1** — veja abaixo |
| Tabelas sem alvo publicado pela B3 | 6 — não há como conferir |
| Pregão com sinal de que aconteceu | sim |
| Tabelas com conteúdo fora da curva | nenhuma |
| Páginas publicadas | 353 |
| Conferências cruzadas das páginas | 71 certas, nenhuma divergência |
| Página escrita mais recentemente | 18/11 13:16 |
| Páginas sem data no cabeçalho | 8 — cegas para a conferência de dado |

## 1 · Acervo do boletim diário

A B3 publica, no próprio boletim, a lista de tickers de cada tabela. Essa lista é o alvo: baixou certo quando todo ticker declarado aparece no que chegou. É a mesma ideia usada nos feriados, onde o alvo é o `WdrwlDays` que ela publica por contrato.

A conferência é por **conjunto**, não por contagem de linhas: várias tabelas trazem muitas linhas para o mesmo ticker. Ticker faltando é fatia da tabela que nunca chegou — foi assim que a tabela de negócios de ações ficou semanas com 22 mil tickers ausentes sem ninguém notar. O que isto **não** prova é que todas as linhas de cada ticker vieram: com o que a B3 publica, cobertura de conjunto é o teto do que dá para afirmar.

### Incompletas

| tabela | declarado pela B3 | obtido | completude |
|---|---:|---:|---:|
| `Renewals` | 691 | 507 | **73,4%** |

**O que isso significa para quem opera.** Número calculado sobre tabela incompleta é número sobre amostra, não sobre o mercado. Onde a completude estiver abaixo de 100%, trate o que vier dessa tabela como indicativo e confira na fonte antes de decidir. A avaliação é leitura de risco; o risco é de quem opera.

### Completas (54)

Bateram exatamente com o alvo da B3. As incompletas estão acima e não se repetem aqui.

| tabela | linhas | tickers obtidos | declarados pela B3 |
|---|---:|---:|---:|
| `AnalyticalFramework2` | 68 | 68 | 68 |
| `BTBLendingOpenPosition` | 2.904 | 1.027 | 1.027 |
| `BTBLoanBalance` | 4.743 | 1.655 | 1.655 |
| `BTBTrade` | 57.325 | 546 | 546 |
| `CNLDistrionCoffeLocation` | 1 | 1 | 1 |
| `CNLHarvestCoffeApprov` | 1 | 1 | 1 |
| `CNLValidLotsSettle` | 1 | 1 | 1 |
| `COEInventory` | 1 | 1 | 1 |
| `COERegistration` | 1 | 1 | 1 |
| `ConsolidatedTradesDerivatives` | 7.494 | 7.494 | 7.494 |
| `ConsolidatedTradesDerivativesAfter` | 52 | 52 | 52 |
| `ConsolidatedTradesEquities` | 76.851 | 76.851 | 76.851 |
| `ConsolidatedTradesRVAfter` | 27 | 27 | 27 |
| `Custody` | 54 | 54 | 54 |
| `DailyAverageDerivatives2` | 9 | 9 | 9 |
| `DailyAverageStocks` | 9 | 9 | 9 |
| `DeadlineDepositSecurities` | 41 | 41 | 41 |
| `DebenturesBusiness` | 76 | 76 | 76 |
| `DerivativesMtM` | 4 | 4 | 4 |
| `DerivativesOperation2` | 90 | 90 | 90 |
| `DistrionCoffeLocation` | 18 | 18 | 18 |
| `EconomicIndicators` | 458 | 64 | 64 |
| `EletronicTerm` | 1 | 1 | 1 |
| `FlexibleOptions` | 925 | 115 | 115 |
| `Forward` | 4 | 4 | 4 |
| `ForwardMarket` | 85 | 85 | 85 |
| `FugibleCustody` | 5 | 5 | 5 |
| `HarvestCoffeApprov` | 2 | 2 | 2 |
| `HistoricalExchange` | 1 | 1 | 1 |
| `IOPV` | 70 | 70 | 70 |
| `IbovespaStockBiggestHighs` | 10 | 10 | 10 |
| `IbovespaStockBiggestLow` | 10 | 10 | 10 |
| `InCash` | 5 | 5 | 5 |
| `InCashMarketBiggestHighs` | 10 | 10 | 10 |
| `InCashMarketBiggestLow` | 10 | 10 | 10 |
| `InstrumentsDerivatives` | 9.481 | 9.481 | 9.481 |
| `MarginScenarios` | 134.625 | 7.023 | 7.023 |
| `NegotiStrategi` | 126 | 14 | 14 |
| `OTCInventoryCCP` | 3 | 3 | 3 |
| `OTCInventoryWCCP` | 4 | 4 | 4 |
| `OTCRegistrationCCP` | 3 | 3 | 3 |
| `OTCRegistrationWCCP` | 4 | 4 | 4 |
| `OpenPositionsEquities` | 45.951 | 45.951 | 45.951 |
| `OptionsPurshase` | 5 | 5 | 5 |
| `OptionsSelling` | 5 | 5 | 5 |
| `ProventionCreditVariable` | 16 | 16 | 16 |
| `Register` | 20 | 20 | 20 |
| `SaleOff` | 12 | 12 | 12 |
| `SharesInvesVolum` | 5 | 5 | 5 |
| `SharesInvesVolumMonthly` | 5 | 5 | 5 |
| `Stock` | 43 | 43 | 43 |
| `StocksOperationSummary` | 58 | 58 | 58 |
| `SwapFlex` | 1 | 1 | 1 |
| `ValidLotsSettle` | 1 | 1 | 1 |

### O pregão realmente aconteceu?

A conferência acima compara o arquivo com a lista de tickers que o próprio arquivo traz. Um retrato tirado **antes** do pregão é internamente coerente e passa como íntegro — fecha 100% e não prova nada. Em 18/11/2026 a tabela de negócios de derivativos de 17/11 estava assim: 100% dos tickers declarados e **zero** contratos futuros, porque tinha sido baixada às 06h26 do próprio dia 17. Daí esta segunda pergunta, que usa o mesmo teste do vigia do boletim: as linhas que só existem depois do pregão estão lá?

| tabela | linhas no dia | referência | linhas | piso (70%) | |
|---|---:|---|---:|---:|---|
| `OpenPositionsEquities` | 45.951 | 16/11/2026 | 45.150 | 31.604 | ok |
| `ConsolidatedTradesDerivatives` | 809 | 16/11/2026 | 789 | 552 | ok |

### Alguma tabela veio magra demais?

As duas conferências acima têm pontos cegos: a primeira compara o arquivo com o alvo que ele mesmo traz, a segunda olha só as duas tabelas que decidem quando arquivar. Em 18/11/2026 a `EconomicIndicators` de 17/11 entrou com **4 linhas contra 458** do normal, passou pelas duas, e a página do agro saiu sem boi, milho, etanol e café.

Esta terceira pergunta não precisa saber nada sobre cada tabela: compara o volume do dia com a **mediana dos últimos dez dias dela mesma**, e acusa quem ficou abaixo de metade. Vale para todas, inclusive as que ainda não deram problema.

Nenhuma tabela do pregão conferido ficou abaixo da metade do seu próprio normal.

## 2 · Páginas publicadas

Duas medidas diferentes, que antes eram confundidas numa só. O **mtime** diz quando o gerador escreveu o arquivo e pega gerador que parou de rodar. A **data declarada** diz a que pregão o conteúdo se refere e pega gerador que roda mas cujo dado não anda — que foi o defeito do agro em 16/11.

Pregão mais recente declarado por alguma página: **18/11/2026**.

Nenhuma página gerada ficou mais de 2 dias sem ser reescrita.

### As páginas concordam entre si?

Cada página do safecluster é conferida contra as operações do motor. Isso não basta: em 17/11/2026 a página de operações mostrava o pregão do dia e o extrato da carteira parava no dia anterior — **as duas corretas em relação à própria fonte, e contraditórias entre si**. A auditoria passou com "68 certas, 0 erradas" porque ninguém comparava as duas versões do mesmo fato. Desde 18/11/2026 ela também compara.

*Última auditoria: 2026-11-18 às 09:27:05 · 71 conferências, 0 divergência(s).*

Nenhuma divergência entre páginas nesta rodada.

## 3 · O que **não** está conferido

A seção mais importante da página. Sem ela, "nenhum problema encontrado" se confunde com "nada foi olhado".

**Tabelas fora da conferência** (6), com o motivo de cada uma. Nenhuma delas é falha de coleta: parte são agrupadores do catálogo, que não têm dados próprios, e parte são séries ou valores únicos, que não têm ticker a conferir. O motivo vai escrito porque "sem alvo" sozinho insinuaria falta da B3 e esconderia que três delas nem são tabelas de dados.

| tabela | linhas | por quê |
|---|---:|---|
| `AverageChart` | 12 | não achei a coluna do ticker |
| `DIover` | 1 | não achei a coluna do ticker |
| `INDEXES` | 0 | agrupador do catálogo (34 item(ns)), não tem dados próprios |
| `IndicesB3` | 33 | sem lista de tickers — é série ou valor único, não tem ticker a conferir |
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
| Pregões arquivados | **20**, de 19/10/2026 a 17/11/2026 |
| Tamanho | 404 KB |
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

