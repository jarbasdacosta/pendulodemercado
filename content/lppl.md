---
title: "LPPL — bolha e antibolha"
date: 2026-11-27
---

<p style="margin:.4rem 0 0"><span style="display:inline-block;text-align:center;margin:0 1.8rem .2rem 0"><span style="font-size:4rem;font-weight:800;line-height:1;color:inherit">0%</span><br><span style="font-size:.95rem;opacity:.75">bolha</span></span><span style="display:inline-block;text-align:center;margin:0 1.8rem .2rem 0"><span style="font-size:4rem;font-weight:800;line-height:1;color:inherit">0%</span><br><span style="font-size:.95rem;opacity:.75">antibolha</span></span></p>

**Leitura de 26/11/2026** · pagina gerada em 27/11/2026 11:30 BRT

O LPPL **não** decide o semáforo do site — veja a nota no fim. Sobre o que conta como sinal, leia a seção *O único episódio* antes de tratar qualquer numero daqui como alto: a referencia de 30% que esta página usava perdeu o lastro na remedição de 25/11/2026.

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

[**Baixar o histórico completo**](lppl-completo.csv) (274 datas · abre no Excel e no LibreOffice)

## O que ele mede

O LPPL (*Log-Periodic Power Law*, de Didier Sornette) procura **alta super-exponencial com oscilações que aceleram** — o padrão de preço que costuma preceder o estouro de uma bolha. A versão usada aqui é a **DS-Confidence**: ajusta o modelo em 45 janelas (de 60 a 500 pregões) terminando na mesma data, e o número publicado é a **fração dessas janelas cujo ajuste passa nos filtros de validade**.

- **bolha**: alta acelerando (risco de queda brusca)
- **antibolha**: queda acelerando (risco de repique)

## O que ele já disse

Medido em **25/11/2026**, sobre **274 datas de cache** (17/10/2025 a 25/11/2026), já com o modelo corrigido naquele dia — veja a nota no fim sobre o que mudou:

| | |
|---|---|
| datas de cache com bolha acima de zero | **133** em 274 |
| maior valor já visto | **62,22%**, em 10/03/2026 |
| datas de cache com antibolha acima de zero | **nenhuma**, em 274 |
| leituras já publicadas no site com LPPL acima de zero | **nenhuma** |

As 133 datas acima de zero não estão espalhadas: **130 delas** caem entre 04/12/2025 e 24/06/2026, e as outras **3** são 21, 22 e 23/10/2026 — as três em **2,22%**, que é *uma janela em 45*, o menor valor diferente de zero que este indicador consegue produzir. O Ibovespa caiu 13,9% no pregão seguinte, no circuit breaker de 26/10, e seria desonesto chamar aqueles 2,22% de aviso: é ruído, e só parece outra coisa porque se sabe o que veio depois.

Para comparar, no mesmo período publicado o **ζ Topo** falou 1.611 vezes e passou de 60% em 316 leituras.

## O único episódio, e o que veio depois

Acima de 30%, o LPPL marcou bolha em **32 pregoes, entre 05/02 e 27/03 de 2026**, com pico de **62,22%** em 10/03 — o Ibovespa estava em torno de 177–191 mil pontos. O que aconteceu depois, comparado com um pregão qualquer da base (1.248 pregões desde 2021):

| depois do sinal | mediana do Ibovespa | um pregão qualquer |
|---|---|---|
| 20 pregoes | **+0,8%** · subiu em 53% | +0,9% · subiu em 55% |
| 60 pregoes | **-5,7%** · subiu em 6% | +2,0% · subiu em 57% |
| 120 pregoes | **-3,8%** · subiu em 28% | +6,0% · subiu em 69% |

> [!danger] Um episódio não é uma estatística, e a tabela acima engana
> Os 32 pregões estão todos dentro de **sete semanas**. Não são 32 eventos independentes: são **um episódio com 32 dias dentro**, e a amostra efetiva e **1**.
>
> Pior que isso: medir a partir de datas espalhadas DENTRO da subida pesa mais as do fim, que já estão perto do topo — e é por isso que a mediana aparece negativa. Medindo a partir do **primeiro dia** do episódio (05/02/2026), que é quando alguém de fato reagiria ao sinal, 60 pregoes depois o Ibovespa estava em **+0,6%**. Nenhuma vantagem.
>
> Com o limiar em 50% o episódio começa mais tarde (20/02) e o desfecho a partir do primeiro dia e **-7,5% em 20 pregoes** e **-12,3% em 120**. Isso é melhor — e continua sendo **um** caso.

## O lado

**O que esta medido:** o LPPL falou uma vez so, num episodio de sete semanas no inicio de 2026. Medido do primeiro dia desse episodio, com o limiar de 30%, não houve vantagem nenhuma (+0,6% em 60 pregoes). Com o limiar de 50% houve (-7,5% em 20 pregoes). Depois disso ele só produziu ruído de uma janela em 45.

**O que é interpretação:** que o limiar mais alto seja o que presta. Um caso não decide isso — pode ser só a sorte de o episódio de 50% ter começado mais perto do topo.

**O que NÃO fazer:** montar posição vendida porque o LPPL subiu, ou ignorar o ζ Topo porque o LPPL esta em zero. Os dois medem coisas diferentes, e só o ζ Topo tem histórico suficiente para sustentar decisão.

**O que observar:** se o LPPL voltar a passar de 30%, vale olhar o que o ζ Topo diz no mesmo dia. Se os dois subirem juntos, a leitura fica mais forte do que qualquer um isolado. Se discordarem, o ζ Topo e o que tem lastro aqui.

*Leitura educacional baseada no histórico medido. O risco é de quem opera.*

## Pendencia aberta: a antibolha nunca falou

A antibolha detecta **queda** super-exponencial. Em **272 datas de cache** ela nunca saiu de zero — nem em **26/10/2026**, dia do circuit breaker, com o Ibovespa caindo 10% no pregão.

Detecção de queda que não dispara num circuit breaker tem duas explicações possíveis, e nenhuma delas é "não houve sinal": ou o critério de validade é inalcançável na prática, ou o ramo da antibolha esta com defeito. Fica registrado como **pendencia a investigar**.

---

**Nota sobre o peso no semáforo.** A calibração do site dá ao LPPL **peso 0,00** (`peso_ima: 1.00, peso_lppl: 0.00`): o semáforo VERDE/AMARELO/VERMELHO é decidido **só pelo ζ Topo**. O LPPL é leitura paralela — informa, não decide.

**O que mudou em 25/11/2026.** A busca do tempo critico procurava numa região mais larga do que a que o filtro de validade aprova, então ajustes bons eram achados fora da área válida e descartados. Corrigido, e as 274 datas do cache foram recalculadas. Os números desta página mudaram por isso, não porque o mercado mudou: o pico foi de 57,78% para 62,22% e as datas acima de zero de 96 para 133. A antibolha continuou em **zero nas 274 datas**, inclusive no circuit breaker — ou seja, o defeito corrigido não era a causa disso, e a pendencia abaixo segue aberta.

Metodo: Prof. Didier Sornette (ETH-Zurich), LPPL DS-Confidence. Medição de **25/11/2026** com `medir_lppl.py`, `medir_lppl_cache.py` e `medir_lppl_desfecho.py`, sobre o cache `lppl_v6_cache.json`.
