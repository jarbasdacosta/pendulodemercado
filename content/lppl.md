---
title: "LPPL — bolha e antibolha"
date: 2026-11-24
---

# LPPL · bolha e antibolha

**Leitura de 23/11/2026:** 🫧 bolha **0%** · 🫧 antibolha **0%**

*Pagina gerada em 24/11/2026 17:29 BRT.*

> [!warning] Este indicador NAO entra no semaforo
> A calibracao do site da a ele **peso 0,00** (`peso_ima: 1.00, peso_lppl: 0.00`). O semaforo VERDE/AMARELO/VERMELHO e decidido **so pelo ζ Topo**. O LPPL aparece aqui como leitura paralela: informa, nao decide.

## O que ele mede

O LPPL (*Log-Periodic Power Law*, de Didier Sornette) procura **alta super-exponencial com oscilacoes que aceleram** — o padrao de preco que costuma preceder o estouro de uma bolha. A versao usada aqui e a **DS-Confidence**: ajusta o modelo em 45 janelas (de 60 a 500 pregoes) terminando na mesma data, e o numero publicado e a **fracao dessas janelas cujo ajuste passa nos filtros de validade**.

- **bolha**: alta acelerando (risco de queda brusca)
- **antibolha**: queda acelerando (risco de repique)

Entre 0% e 30% o sinal e considerado ruido.

## O que ele ja disse

Medido em 24/11/2026, sobre 272 datas de cache (17/10/2025 a 23/11/2026) e 2.577 leituras publicadas (desde 03/07/2026):

| | |
|---|---|
| leituras publicadas com LPPL acima de zero | **nenhuma** |
| datas de cache com bolha acima de zero | 96, **todas anteriores a 03/07/2026** |
| maior valor ja visto | **57,78%** (25/02, 27/02, 05/03 e 11/03 de 2026) |
| datas de cache com antibolha acima de zero | **nenhuma**, em 272 |

Para comparar, no mesmo periodo publicado o **ζ Topo** falou 1.611 vezes e passou de 60% em 316 leituras.

## O unico episodio, e o que veio depois

O LPPL marcou bolha em 24 pregoes, entre **25/02 e 11/03 de 2026**, com pico de 57,78% — o Ibovespa estava em torno de 180–191 mil pontos. O que aconteceu depois, comparado com um pregao qualquer da base (1.267 pregoes desde 2021):

| depois do sinal | mediana do Ibovespa | um pregao qualquer |
|---|---|---|
| 20 pregoes | **-3,1%** | +1,0% |
| 60 pregoes | **-6,3%** · subiu em **0%** das vezes | +2,4% · subiu em 58% |
| 120 pregoes | **-6,8%** · subiu em 12% | +5,8% · subiu em 69% |

> [!danger] Um episodio nao e uma estatistica
> Os 24 pregoes acima estao **todos dentro da mesma quinzena**. Nao sao 24 eventos independentes: sao **um episodio com 24 dias dentro**, e a amostra efetiva e **1**.
>
> "Subiu em 0% das vezes" impressiona e significa apenas que aquele episodio foi seguido de queda — qualquer sequencia continua de dias herda o mesmo desfecho. O numero descreve o que aconteceu; ele **nao** mede com que frequencia o indicador acerta.

## O lado

**O que esta medido:** o LPPL falou uma vez desde que ha registro, e naquela vez o mercado caiu mais do que cairia num periodo qualquer. Desde julho ele nao fala.

**O que e interpretacao:** um acerto em um episodio e indicio, nao evidencia. Com peso 0,00, ele hoje nao muda nenhuma decisao do site — e nao deveria mudar a sua sozinho.

**O que NAO fazer:** montar posicao vendida porque o LPPL subiu, ou ignorar o ζ Topo porque o LPPL esta em zero. Os dois medem coisas diferentes, e so o ζ Topo tem historico suficiente para sustentar decisao.

**O que observar:** se o LPPL voltar a passar de 30%, vale olhar o que o ζ Topo diz no mesmo dia. Se os dois subirem juntos, a leitura fica mais forte do que qualquer um isolado. Se discordarem, o ζ Topo e o que tem lastro aqui.

*Leitura educacional baseada no historico medido. O risco e de quem opera.*

## Pendencia aberta: a antibolha nunca falou

A antibolha detecta **queda** super-exponencial. Em **272 datas de cache** ela nunca saiu de zero — nem em **26/10/2026**, dia do circuit breaker, com o Ibovespa caindo 10% no pregao.

Deteccao de queda que nao dispara num circuit breaker tem duas explicacoes possiveis, e nenhuma delas e "nao houve sinal": ou o criterio de validade e inalcancavel na pratica, ou o ramo da antibolha esta com defeito. Fica registrado aqui como **pendencia a investigar**, nao como ausencia de bolha.

---

Metodo: Prof. Didier Sornette (ETH-Zurich), LPPL DS-Confidence. A medicao acima foi feita em 24/11/2026 com `medir_lppl.py`, `medir_lppl_cache.py` e `medir_lppl_desfecho.py`.
