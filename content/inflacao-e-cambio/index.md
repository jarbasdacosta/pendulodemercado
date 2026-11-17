---
title: "🧮 Inflação e dólar: o que o mercado paga × o que os economistas esperam"
---
*Curvas da B3 de 16/11/2026 · Focus de 13/11/2026 · PTAX de 16/11/2026 · atualizado em 17/11/2026 06:27*


<!-- NOTAS-INICIO -->
> [!danger]- 4 pontos de atenção nesta página
> **⛔ A inflação implícita não é expectativa de inflação** — Ela soma três coisas: a inflação esperada, o **prêmio de risco inflacionário** e diferenças de liquidez entre o mercado de DI e o de DAP. Uma implícita de 7% com consenso em 4% não quer dizer que o mercado projeta 7% de IPCA — quer dizer que ele cobra 3 pontos para carregar o risco em torno do cenário do consenso. Nem o Banco Central separa as duas parcelas com precisão.
>
> **⛔ O dólar futuro não é previsão de ninguém** — Ele é o preço à vista multiplicado pelo diferencial de juros entre real e dólar. Subiria do mesmo jeito se todo o mercado achasse que o dólar vai cair. Ler a curva como projeção — *"o mercado espera dólar a R\$ 7,00"* — é o erro mais caro que se comete lendo manchete de mercado.
>
> **⚠️ Os vencimentos curtos de DAP não decidem nada** — Parte do IPCA do período já é conhecida, porque o índice sai com defasagem. O juro real curto é o resíduo dessa mistura, não um preço limpo — por isso a implícita curta pula de 5% para 9% entre vencimentos vizinhos sem que nada tenha mudado. Esses contratos aparecem marcados na tabela e ficam fora de toda conclusão da página.
>
> **ℹ️ Duas aproximações estão embutidas na comparação** — O caminho do Focus é composto no intervalo exato de cada contrato, repartindo o IPCA de cada ano de forma **uniforme** para recortar os anos das pontas. E o Focus só projeta IPCA e câmbio para cerca de cinco anos: além disso a página mostra o número medido e deixa a comparação em branco, em vez de inventar um consenso.
>
> *Todos os pontos de atenção do site estão juntos em [Avisos](/avisos/).*
<!-- NOTAS-FIM -->

A [página de juros](/juros/) compara o juro que o mercado paga com o juro
que os economistas projetam. Esta faz o mesmo com as outras duas pontas do mesmo
problema: **a inflação** e **o dólar**. São as três variáveis que, juntas, decidem o preço
de quase tudo na bolsa brasileira.

A lógica é a mesma das duas páginas. O **Boletim Focus** é opinião informada, publicada
toda segunda pelo Banco Central, e ninguém paga nada por errar nela. A **curva da B3** é
dinheiro: cada contrato embute um número que alguém aceitou pagar e alguém aceitou
receber. Quando as duas discordam, a diferença é o prêmio — e é onde mora a vantagem de
quem souber de que lado ficar.

## 1 · A inflação que o mercado está pagando

Existem dois contratos de juro na B3, e a diferença entre eles é a conta inteira:

- O **DI1** paga juro **nominal** — a taxa cheia, em reais.
- O **DAP** paga juro **real** — uma taxa *acima* do IPCA. Quem compra recebe a inflação
  medida mais o juro contratado.

Se um paga 14,5% nominal e o outro paga 7,3% real para o mesmo prazo, a inflação que
sobra entre os dois é o que o mercado está pagando para o período. É a **inflação
implícita**, e a conta é a identidade de Fisher:

```
inflação implícita = (1 + juro nominal) / (1 + juro real) − 1
```

Esse número não é opinião de analista: é o preço em que as duas pontas fecharam negócio.

> [!warning] O que a implícita não é
> **Ela não é expectativa pura de inflação.** A implícita soma três coisas: a inflação que o mercado espera, o **prêmio de risco inflacionário** (quanto se cobra para carregar o risco de errar) e diferenças de liquidez entre os dois mercados.
>
> Isso muda a leitura por completo. Uma implícita de 7% com consenso em 4% **não** significa que o mercado projeta 7% de IPCA. Significa que o mercado cobra 3 pontos para aceitar o risco em torno do cenário do consenso — e quanto desses 3 pontos é expectativa e quanto é prêmio, nem o Banco Central consegue separar com precisão.
>
> Quem trata a diferença toda como previsão de inflação opera o ativo errado.


> [!info] Como os prazos foram casados
> Dois cuidados que mudam o número, e que esta página toma:
>
> **1. Os vencimentos não coincidem.** O DI1 vence no 1º dia útil do mês, o DAP no dia 15. Casar "agosto com agosto" compara prazos diferentes. Aqui a curva de DI é **interpolada no dia útil exato** de cada DAP. Onde o DAP é mais longo que o DI mais longo, a linha não sai: extrapolar curva de juros é inventar número.
>
> **2. A implícita é uma média, o Focus é um ano.** A implícita de um contrato de ago/2028 é a média de inflação de **hoje até ago/2028** — pega o resto de 2026, todo o 2027 e dois terços de 2028. O Focus publica um número por ano calendário. Comparar a média com o ano de 2028 isolado infla a diferença. Nesta tabela o caminho do Focus é **composto no mesmo intervalo do contrato** e devolvido como média ao ano, na mesma grandeza. Os anos das pontas entram em fração, repartindo o IPCA do ano de forma uniforme — é a única suposição da conta, e ela só afeta os pedaços das extremidades.


| contrato | vencimento | dias úteis | real (DAP) | nominal (DI interpolado) | implícita | Focus no mesmo intervalo | diferença | contratos no dia |
|---|---|---|---|---|---|---|---|---|
| DAPF27 ⚠️ | 15/01/2027 | 43 | 5,440% | 13,740% | **7,871%** | 5,08% | +2,79 p.p. | 38 |
| DAPK27 ⚠️ | 17/05/2027 | 125 | 4,350% | 14,009% | **9,257%** | 5,03% | +4,23 p.p. | 2.108 |
| DAPQ28 | 15/08/2028 | 438 | 7,410% | 14,804% | **6,884%** | 4,65% | +2,23 p.p. | 20.042 |
| DAPK29 | 15/05/2029 | 622 | 7,550% | 15,035% | **6,960%** | 4,46% | +2,50 p.p. | 9.574 |
| DAPQ30 | 15/08/2030 | 936 | 7,790% | 15,153% | **6,831%** | 4,29% | +2,54 p.p. | 4.834 |
| DAPK31 | 15/05/2031 | 1.122 | 7,800% | 15,236% | **6,898%** | — | — | 19.492 |
| DAPQ32 | 16/08/2032 | 1.435 | 7,860% | 15,266% | **6,866%** | — | — | 6.700 |
| DAPK33 | 16/05/2033 | 1.627 | 7,745% | 15,294% | **7,007%** | — | — | 4.781 |
| DAPK35 | 15/05/2035 | 2.126 | 7,735% | 15,282% | **7,005%** | — | — | 5.556 |
| DAPK37 | 15/05/2037 | 2.627 | 7,610% | 15,255% | **7,104%** | — | — | 434 |


> [!danger] ⚠️ Os vencimentos curtos não servem para decidir nada
> Os contratos marcados (**DAPF27, DAPK27**) têm prazo de até 130 dias úteis, e a taxa real deles é contaminada: **parte do IPCA do período já é conhecida**. O índice sai com defasagem, então um DAP curto está negociando um pedaço de inflação que já aconteceu e um pedaço que ainda não — e o juro real que aparece é um resíduo dessa mistura, não um preço de mercado limpo.
>
> É por isso que a implícita curta oscila de 5% para 9% entre vencimentos vizinhos sem que nada tenha mudado no mundo. Eles estão na tabela para mostrar o formato da curva, e ficam **fora de qualquer conclusão** desta página.

- *DAPQ40 ficou sem par: fora das pontas da curva de DI (10 a 2792 dias úteis).*

*O Focus projeta IPCA até 2030. Vencimentos além disso aparecem com a implícita medida e sem comparação — porque não existe consenso publicado para aquele prazo, e inventar um seria pior que deixar em branco.*


### O que fazer com isso

**Medido:** nos vencimentos não contaminados, a diferença entre a implícita e o caminho do
Focus vai de 2,23 p.p. a 2,54 p.p., e a maior está em **DAPQ30** (15/08/2030), com 2,54 p.p..

**Interpretação, e aqui é leitura de risco e não previsão:** uma diferença dessa ordem não
se explica só por prêmio. Ela diz que o mercado está disposto a pagar caro por proteção
contra inflação acima da meta — e o lugar onde ela é maior é onde o mercado julga que o
problema está concentrado.

**A vantagem, se existir, está no formato e não no nível.** Comprar proteção de inflação
quando a implícita já embute 2 pontos de prêmio é pagar o seguro no pico. Os dois usos
práticos são outros:

1. **Escolher entre prefixado e IPCA+.** Esta é a decisão de carteira que a tabela resolve
   direto. Se você acredita que o IPCA vai rodar **acima** da implícita do prazo, o título
   indexado (IPCA+) rende mais; se acredita que vai rodar **abaixo**, o prefixado rende
   mais. A implícita é exatamente o ponto de empate entre os dois. Não é uma opinião sobre
   inflação — é o número contra o qual a sua opinião é comparada.
2. **Operar o formato da curva.** Quando a implícita de um prazo sobe muito mais que a dos
   vizinhos, o que ficou caro foi aquele pedaço específico. Essa distorção se corrige com
   mais frequência que o nível geral, e é nela que mora a operação de prêmio — comprando
   um vencimento e vendendo outro, não tomando posição direcional.

**O risco, que é de quem opera:** nenhuma dessas duas leituras protege de uma mudança de
regime. Numa deterioração fiscal, a implícita e o juro real sobem **juntos**, e as duas
pontas da operação de formato podem perder ao mesmo tempo. Dimensione pela perda, não pelo
prêmio.

## 2 · O dólar futuro não é previsão

Este é o mal-entendido mais caro do mercado brasileiro, e ele aparece em manchete toda
semana: *"o mercado futuro projeta dólar a R\$ 6,50 em 2029"*. Não projeta. O dólar futuro
não é opinião de ninguém sobre o futuro — é uma conta de arbitragem:

```
dólar futuro = dólar à vista × (1 + juro em real) / (1 + juro em dólar)
```

A razão é simples. Quem tem reais aplica hoje a 13,648% ao ano no vértice curto do DI. Quem tem
dólares aplica a muito menos no exterior. Se o dólar futuro **não** subisse pela diferença
entre as duas taxas, daria para pegar reais emprestados, comprar dólar à vista, vender no
futuro e travar lucro sem risco. Como esse lucro não existe por muito tempo, o futuro sobe
pelo diferencial — **por construção, não por previsão**.

É daí que vem o nome **carrego** (ou *carry*): o futuro já traz embutido o custo de
carregar a posição até o vencimento.

*Dólar de venda do Banco Central (PTAX) em 16/11/2026: **R\$ 5,7324** — aqui só como referência. As contas da tabela **não** usam a PTAX: ela é fixada por volta do meio-dia e o ajuste dos futuros é do fechamento, e misturar os dois horários produz carrego absurdo nos dias em que o dólar anda forte à tarde.*

*Todas as contas da tabela partem do vencimento mais curto, o **DOLZ26** (01/12/2026), a R\$ 5,8063: é ajuste contra ajuste, do mesmo instante. Por isso a linha dele sai sem número — ele é a régua.*


| contrato | vencimento | ajuste (R\$/US\$) | depreciação ao ano desde a âncora | DI do mesmo prazo | juro em dólar a termo | contratos no dia |
|---|---|---|---|---|---|---|
| DOLZ26 | 01/12/2026 | R\$ 5,8063 | — | 13,648% | — | 290.710 |
| DOLF27 | 04/01/2027 | R\$ 5,8391 | 6,24% | 13,709% | 5,95% | 0 |
| DOLG27 | 01/02/2027 | R\$ 5,8726 | 6,91% | 13,755% | 5,93% | 0 |
| DOLH27 | 01/03/2027 | R\$ 5,9001 | 6,72% | 13,810% | 5,97% | 0 |
| DOLJ27 | 01/04/2027 | R\$ 5,9381 | 7,00% | 13,890% | 6,00% | 0 |
| DOLK27 | 03/05/2027 | R\$ 5,9715 | 6,92% | 13,955% | 6,07% | 0 |
| DOLM27 | 01/06/2027 | R\$ 6,0056 | 7,00% | 14,040% | 6,13% | 0 |
| DOLN27 | 01/07/2027 | R\$ 6,0466 | 7,23% | 14,130% | 6,17% | 0 |
| DOLQ27 | 02/08/2027 | R\$ 6,0849 | 7,26% | 14,225% | 6,25% | 0 |
| DOLU27 | 01/09/2027 | R\$ 6,1266 | 7,42% | 14,290% | 6,28% | 0 |
| DOLV27 | 01/10/2027 | R\$ 6,1632 | 7,42% | 14,330% | 6,41% | 0 |
| DOLX27 | 01/11/2027 | R\$ 6,1982 | 7,37% | 14,385% | 6,43% | 0 |
| DOLF28 | 03/01/2028 | R\$ 6,2789 | 7,44% | 14,485% | 6,47% | 0 |
| DOLJ28 | 03/04/2028 | R\$ 6,4046 | 7,59% | 14,620% | 6,55% | 0 |
| DOLN28 | 03/07/2028 | R\$ 6,5285 | 7,66% | 14,760% | 6,61% | 0 |
| DOLV28 | 02/10/2028 | R\$ 6,6610 | 7,76% | 14,850% | 6,69% | 0 |

*… e 7 vencimentos mais longos, no arquivo para download.*


> [!info] A última coluna é um mercado de verdade
> O **juro em dólar a termo** — o mercado chama de *cupom cambial* — é o que sobra quando se desconta o DI do carrego do dólar. Ele é a taxa pela qual se empresta dólar dentro do Brasil, e tem contrato próprio na B3: o **FRC**, que é exatamente esta conta entre dois vencimentos.
>
> Para quem opera, serve como **termômetro de aperto de dólar no país**: quando o cupom curto dispara, há falta de dólar no mercado local, e isso costuma vir antes de movimento forte no câmbio à vista. É um indicador de estresse, não uma opinião sobre direção.


### O futuro contra o consenso, ano a ano

O Focus projeta o dólar no **fim** de cada ano. O contrato que marca esse instante é o de
**janeiro do ano seguinte**, que liquida contra a taxa do último dia útil de dezembro. É
assim que os dois são casados aqui — e não "contrato de dezembro contra fim de dezembro",
que erraria um mês inteiro de carrego.

| ano | contrato | futuro | Focus (30 dias) | Focus (5 dias) | futuro − Focus | ganho no período se o Focus acertar | o mesmo ao ano |
|---|---|---|---|---|---|---|---|
| 2026 | DOLF27 | R\$ 5,8391 | R\$ 5,4000 | R\$ 5,5000 | +R\$ 0,4391 | +8,1% | +79,0% |
| 2027 | DOLF28 | R\$ 6,2789 | R\$ 5,4500 | R\$ 5,4000 | +R\$ 0,8289 | +15,2% | +13,3% |
| 2028 | DOLF29 | R\$ 6,7875 | R\$ 5,4821 | R\$ 5,3800 | +R\$ 1,3054 | +23,8% | +10,5% |
| 2029 | DOLF30 | R\$ 7,3517 | R\$ 5,5000 | R\$ 5,4500 | +R\$ 1,8517 | +33,7% | +9,7% |
| 2030 | DOLF31 | R\$ 7,9611 | R\$ 5,5500 | R\$ 5,4500 | +R\$ 2,4111 | +43,4% | +9,1% |


### O que fazer com isso

**Medido:** a curva de dólar embute depreciação de **7,74% ao ano** nos vencimentos longos. O
Focus projeta o dólar saindo de R\$ 5,40 em 2026 para R\$ 5,55 em 2030, o que equivale a **0,69% ao ano**.
As duas coisas discordam em torno de 7,05 p.p. ao ano.

**O que isso NÃO é:** não é o mercado discordando do Focus sobre o dólar. O futuro é
aritmética do diferencial de juros — ele subiria do mesmo jeito se todo mundo no mercado
achasse que o dólar vai cair. Tratar a diferença como "o mercado espera mais
desvalorização" é ler carrego como previsão.

**O que isso É, e aqui está a operação:** essa diferença é o retorno de uma posição
**vendida em dólar futuro** caso o dólar simplesmente fique onde o Focus projeta. É o
*carry trade*, a operação mais clássica e mais lucrativa do Brasil em períodos calmos — e
a que mais destrói capital nos outros.

A conta é essa: vendendo o contrato **DOLF31** a R\$ 7,96, se o dólar terminar 2030 nos R\$ 5,55 que o Focus
projeta, o ganho é de **43,4% no período** — cerca de 9,1% ao ano. Enquanto nada acontece,
recebe-se o carrego todo mês. É dinheiro parecendo fácil, e é exatamente aí que está o
problema.

> [!danger] O carry trade e a conta que ele esconde
> O carrego paga alguns por cento ao ano, em prestações mensais e silenciosas. O risco não vem em prestações: vem de uma vez.
>
> **O exemplo não é hipótese, é o pior pregão do próprio arquivo desta página.** Em **26/10/2026**, o ajuste do dólar futuro variou **+8,26%**, o DI de um ano andou **+182 pontos-base** e o índice futuro variou **-14,61%** — os três na mesma direção, numa sessão só. A variação é do mesmo contrato em relação ao ajuste anterior, então não é efeito de troca de vencimento.
>
> Uma posição vendida em dólar futuro perdeu, naquele único pregão, **mais do que o carrego de um ano inteiro**.
>
> **A assimetria é a característica definidora da operação, não um azar.** Ela ganha pouco com frequência alta e perde muito com frequência baixa. Quem dimensiona a posição pelo retorno esperado está dimensionando pela parte boa da distribuição.
>
> Se for operar isso, dimensione pelo salto: quanto a posição perde num movimento de 10% contra, e se esse número cabe no seu capital. **A conta é sua e o risco é seu** — esta página mede os números, não recomenda posição.


## 3 · Juros, inflação e dólar se leem juntos

As três páginas medem pedaços do mesmo preço, e o sinal forte aparece quando as três
apontam para o mesmo lado no mesmo dia.

O padrão que importa é este: **DI subindo, dólar subindo e índice caindo, ao mesmo tempo**.
Quando as três acontecem juntas, não é notícia de empresa nem rotação entre setores — é
prêmio de risco do país sendo repreçado. Nesses dias a correlação entre ativos vai a 1:
diversificar entre ações brasileiras não protege nada, porque o que se move é o
denominador comum de todas elas.

O inverso vale igual e é menos lembrado: **DI caindo, dólar caindo e índice subindo** é a
mesma força em sentido contrário, e é o dia em que a bolsa sobe muito sem que nenhuma
empresa tenha ficado melhor.

**Para quem opera intradiário, a utilidade é direta.** Nesses dias os movimentos têm
direção definida e andam longe, porque todos os participantes estão repreçando a mesma
coisa. Nos outros dias — em que as três discordam entre si — o mercado fica dentro de uma
faixa e devolve o que deu. A leitura das três curvas juntas serve menos para escolher o
lado e mais para **saber em que tipo de dia você está**, o que decide se vale perseguir
movimento ou operar contra os extremos.

**O que medir para confirmar:** o sinal é a direção simultânea, não o tamanho. Um DI que
sobe 10 pontos-base com dólar e índice andando junto diz mais que um DI que sobe 30 com os
outros dois parados.

### A série que está sendo construída para medir isso

Dizer que esses dias existem é uma coisa; **medir quantos são, quanto andam e se o padrão
se repete** é outra, e precisa de série histórica. O arquivo do Boletim Diário da B3 guarda
poucas semanas, então a partir de agora cada pregão é gravado numa linha, com três cuidados
que decidem se o estudo vai valer alguma coisa daqui a um ano:

- **Taxa de DI em prazos fixos, não em contratos.** Guardar "a taxa do contrato de jan/28"
  dá uma série que quebra toda vez que o contrato rola. A linha guarda a taxa interpolada
  em 21, 63, 126, 252, 504, 1260 dias úteis, que é comparável entre dias por construção.
- **A variação do dia sai da própria linha.** O boletim publica o ajuste e o ajuste
  anterior do **mesmo** contrato, então a variação de dólar e índice não é contaminada por
  rolagem. Para o DI vale o mesmo: o preço anterior é do mesmo contrato com um dia útil a
  mais, e a taxa de ontem é recuperada dele.
- **Um buraco não contamina o dia seguinte.** Como cada linha carrega o seu próprio
  "ontem", um pregão que falte no arquivo não vira um salto falso na série.

Hoje há **22 pregões** na série — pouco para concluir qualquer coisa, e é exatamente por isso que a coleta começa antes da pergunta. O arquivo está aqui: [serie-macro.csv](serie-macro.csv).

> [!tip] As três páginas
> - [Juros: o que o mercado paga × o que os economistas esperam](/juros/) — a curva de DI contra o Focus de Selic, ano a ano
> - **Esta página** — a inflação implícita e o dólar futuro contra o Focus
> - [Panorama das posições](/posicionamento/) — quem está posicionado e em quê


## Onde conferir e baixar

- **Curvas completas do dia** (DI1, DAP e DOL, com todos os vencimentos):
  [curvas.csv](curvas.csv)
- **Fontes:** Boletim Diário da B3 (arquivo local, sem raspagem de site), API de
  Expectativas do Banco Central (`olinda.bcb.gov.br`, licença ODbL) e série SGS 1 do Banco
  Central para a PTAX de venda.

---

*Página gerada automaticamente. Os números são medidos; as leituras são interpretação, e o risco é de quem opera.*
