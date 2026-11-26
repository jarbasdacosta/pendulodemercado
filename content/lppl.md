---
title: "LPPL — bolha e antibolha"
date: 2026-11-26
---

<p style="margin:.4rem 0 0"><span style="display:inline-block;text-align:center;margin:0 1.8rem .2rem 0"><span style="font-size:4rem;font-weight:800;line-height:1;color:inherit">0%</span><br><span style="font-size:.95rem;opacity:.75">bolha</span></span><span style="display:inline-block;text-align:center;margin:0 1.8rem .2rem 0"><span style="font-size:4rem;font-weight:800;line-height:1;color:inherit">0%</span><br><span style="font-size:.95rem;opacity:.75">antibolha</span></span></p>

**Leitura de 25/11/2026** · pagina gerada em 26/11/2026 10:30 BRT

O LPPL **nao** decide o semaforo do site — veja a nota no fim. Sobre o que conta como sinal, leia a secao *O unico episodio* antes de tratar qualquer numero daqui como alto: a referencia de 30% que esta pagina usava perdeu o lastro na remedicao de 25/11/2026.

## Dia a dia

As 30 leituras mais recentes. O registro completo tem **274 datas** e esta no arquivo para baixar.

| Data | 🫧 bolha | 🫧 antibolha |
|---|---|---|
| 25/11/2026 | 0% | 0% |
| 24/11/2026 | 0% | 0% |
| 23/11/2026 | 0% | 0% |
| 19/11/2026 | 0% | 0% |
| 18/11/2026 | 0% | 0% |
| 17/11/2026 | 0% | 0% |
| 16/11/2026 | 0% | 0% |
| 13/11/2026 | 0% | 0% |
| 12/11/2026 | 0% | 0% |
| 11/11/2026 | 0% | 0% |
| 10/11/2026 | 0% | 0% |
| 09/11/2026 | 0% | 0% |
| 06/11/2026 | 0% | 0% |
| 05/11/2026 | 0% | 0% |
| 04/11/2026 | 0% | 0% |
| 03/11/2026 | 0% | 0% |
| 30/10/2026 | 0% | 0% |
| 29/10/2026 | 0% | 0% |
| 28/10/2026 | 0% | 0% |
| 27/10/2026 | 0% | 0% |
| 26/10/2026 | 0% | 0% |
| 23/10/2026 | 0% | 0% |
| 22/10/2026 | 0% | 0% |
| 21/10/2026 | 0% | 0% |
| 20/10/2026 | 0% | 0% |
| 19/10/2026 | 0% | 0% |
| 16/10/2026 | 0% | 0% |
| 15/10/2026 | 0% | 0% |
| 14/10/2026 | 0% | 0% |
| 13/10/2026 | 0% | 0% |

[**Baixar o historico completo**](lppl-completo.csv) (274 datas · abre no Excel e no LibreOffice)

## O que ele mede

O LPPL (*Log-Periodic Power Law*, de Didier Sornette) procura **alta super-exponencial com oscilacoes que aceleram** — o padrao de preco que costuma preceder o estouro de uma bolha. A versao usada aqui e a **DS-Confidence**: ajusta o modelo em 45 janelas (de 60 a 500 pregoes) terminando na mesma data, e o numero publicado e a **fracao dessas janelas cujo ajuste passa nos filtros de validade**.

- **bolha**: alta acelerando (risco de queda brusca)
- **antibolha**: queda acelerando (risco de repique)

## O que ele ja disse

Medido em **25/11/2026**, sobre **274 datas de cache** (17/10/2025 a 25/11/2026), ja com o modelo corrigido naquele dia — veja a nota no fim sobre o que mudou:

| | |
|---|---|
| datas de cache com bolha acima de zero | **133** em 274 |
| maior valor ja visto | **62,22%**, em 10/03/2026 |
| datas de cache com antibolha acima de zero | **nenhuma**, em 274 |
| leituras ja publicadas no site com LPPL acima de zero | **nenhuma** |

As 133 datas acima de zero nao estao espalhadas: **130 delas** caem entre 04/12/2025 e 24/06/2026, e as outras **3** sao 21, 22 e 23/10/2026 — as tres em **2,22%**, que e *uma janela em 45*, o menor valor diferente de zero que este indicador consegue produzir. O Ibovespa caiu 13,9% no pregao seguinte, no circuit breaker de 26/10, e seria desonesto chamar aqueles 2,22% de aviso: e ruido, e so parece outra coisa porque se sabe o que veio depois.

Para comparar, no mesmo periodo publicado o **ζ Topo** falou 1.611 vezes e passou de 60% em 316 leituras.

## O unico episodio, e o que veio depois

Acima de 30%, o LPPL marcou bolha em **32 pregoes, entre 05/02 e 27/03 de 2026**, com pico de **62,22%** em 10/03 — o Ibovespa estava em torno de 177–191 mil pontos. O que aconteceu depois, comparado com um pregao qualquer da base (1.248 pregoes desde 2021):

| depois do sinal | mediana do Ibovespa | um pregao qualquer |
|---|---|---|
| 20 pregoes | **+0,8%** · subiu em 53% | +0,9% · subiu em 55% |
| 60 pregoes | **-5,7%** · subiu em 6% | +2,0% · subiu em 57% |
| 120 pregoes | **-3,8%** · subiu em 28% | +6,0% · subiu em 69% |

> [!danger] Um episodio nao e uma estatistica, e a tabela acima engana
> Os 32 pregoes estao todos dentro de **sete semanas**. Nao sao 32 eventos independentes: sao **um episodio com 32 dias dentro**, e a amostra efetiva e **1**.
>
> Pior que isso: medir a partir de datas espalhadas DENTRO da subida pesa mais as do fim, que ja estao perto do topo — e e por isso que a mediana aparece negativa. Medindo a partir do **primeiro dia** do episodio (05/02/2026), que e quando alguem de fato reagiria ao sinal, 60 pregoes depois o Ibovespa estava em **+0,6%**. Nenhuma vantagem.
>
> Com o limiar em 50% o episodio comeca mais tarde (20/02) e o desfecho a partir do primeiro dia e **-7,5% em 20 pregoes** e **-12,3% em 120**. Isso e melhor — e continua sendo **um** caso.

## O lado

**O que esta medido:** o LPPL falou uma vez so, num episodio de sete semanas no inicio de 2026. Medido do primeiro dia desse episodio, com o limiar de 30%, nao houve vantagem nenhuma (+0,6% em 60 pregoes). Com o limiar de 50% houve (-7,5% em 20 pregoes). Depois disso ele so produziu ruido de uma janela em 45.

**O que e interpretacao:** que o limiar mais alto seja o que presta. Um caso nao decide isso — pode ser so a sorte de o episodio de 50% ter comecado mais perto do topo.

**O que NAO fazer:** montar posicao vendida porque o LPPL subiu, ou ignorar o ζ Topo porque o LPPL esta em zero. Os dois medem coisas diferentes, e so o ζ Topo tem historico suficiente para sustentar decisao.

**O que observar:** se o LPPL voltar a passar de 30%, vale olhar o que o ζ Topo diz no mesmo dia. Se os dois subirem juntos, a leitura fica mais forte do que qualquer um isolado. Se discordarem, o ζ Topo e o que tem lastro aqui.

*Leitura educacional baseada no historico medido. O risco e de quem opera.*

## Pendencia aberta: a antibolha nunca falou

A antibolha detecta **queda** super-exponencial. Em **272 datas de cache** ela nunca saiu de zero — nem em **26/10/2026**, dia do circuit breaker, com o Ibovespa caindo 10% no pregao.

Deteccao de queda que nao dispara num circuit breaker tem duas explicacoes possiveis, e nenhuma delas e "nao houve sinal": ou o criterio de validade e inalcancavel na pratica, ou o ramo da antibolha esta com defeito. Fica registrado como **pendencia a investigar**.

---

**Nota sobre o peso no semaforo.** A calibracao do site da ao LPPL **peso 0,00** (`peso_ima: 1.00, peso_lppl: 0.00`): o semaforo VERDE/AMARELO/VERMELHO e decidido **so pelo ζ Topo**. O LPPL e leitura paralela — informa, nao decide.

**O que mudou em 25/11/2026.** A busca do tempo critico procurava numa regiao mais larga do que a que o filtro de validade aprova, entao ajustes bons eram achados fora da area valida e descartados. Corrigido, e as 274 datas do cache foram recalculadas. Os numeros desta pagina mudaram por isso, nao porque o mercado mudou: o pico foi de 57,78% para 62,22% e as datas acima de zero de 96 para 133. A antibolha continuou em **zero nas 274 datas**, inclusive no circuit breaker — ou seja, o defeito corrigido nao era a causa disso, e a pendencia abaixo segue aberta.

Metodo: Prof. Didier Sornette (ETH-Zurich), LPPL DS-Confidence. Medicao de **25/11/2026** com `medir_lppl.py`, `medir_lppl_cache.py` e `medir_lppl_desfecho.py`, sobre o cache `lppl_v6_cache.json`.
