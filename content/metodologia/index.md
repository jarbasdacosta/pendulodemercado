---
title: "📚 Metodologia"
date: 2026-10-30
tags: [metodologia]
description: "Como cada módulo da Ondaleta funciona e como foi testado"
---

A Ondaleta tem quatro módulos. Cada página explica como o módulo funciona, de onde vêm os números e o que foi testado.

| Página | O que tem |
|---|---|
| 🌊 [Sinal de Crise](metodologia/crise) | IMA Wavelet (Caetano) e LPPL (Sornette): o que o ζ mede, o que 26 anos de dados mostram, como usar e limites |
| 📍 [Sinais](metodologia/sinais) | Sinais de topo e fundo (candles de Oliver Velez + RSI, CCI, MACD-V e Bollinger), 🎯 sinais raros de grande fundo e ⚠️ alerta raro de topo |
| 🎯 [Regras de operação](metodologia/regras-de-operacao) | Tendência MME9 e Entradas do método: regras, testes fora da amostra, walk-forward e PBO |
| 🧪 [O que testamos e não passou](metodologia/o-que-nao-passou) | Venda (mesmo só em mercado de baixa), radar de grande queda como compra, harami, envelope do Nadaraya e outros |

**Como os testes foram feitos.** Ibovespa 2000–2026, candle fechado, custo de 0,05% por operação. Sempre que possível: regras escolhidas só com uma parte do histórico e conferidas na outra (2001–2013 × 2014–2026), walk-forward (escolher pelo passado e operar o ano seguinte), PBO (probabilidade de overfitting) e comparação com Ibovespas embaralhados (o mesmo teste num mercado sem estrutura). A partir de 23/10/2026 as regras ficaram congeladas e o site mostra um **placar ao vivo** — o único resultado sem nenhum ajuste ao histórico.

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.
