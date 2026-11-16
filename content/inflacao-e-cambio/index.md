---
title: "🧮 Inflação e dólar: o que o mercado paga × o que os economistas esperam"
---
*Curvas da B3 de 13/11/2026 · Focus de 13/11/2026 · PTAX de 13/11/2026 · atualizado em 16/11/2026 15:28*


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
| DAPZ26 ⚠️ | 15/12/2026 | 21 | 7,590% | 13,665% | **5,646%** | 5,11% | +0,54 p.p. | 400 |
| DAPF27 ⚠️ | 15/01/2027 | 43 | 5,460% | 13,684% | **7,799%** | 5,08% | +2,71 p.p. | 2 |
| DAPK27 ⚠️ | 17/05/2027 | 124 | 4,360% | 13,873% | **9,115%** | 5,03% | +4,09 p.p. | 4.503 |
| DAPQ28 | 15/08/2028 | 439 | 7,300% | 14,564% | **6,770%** | 4,65% | +2,12 p.p. | 26.053 |
| DAPK29 | 15/05/2029 | 623 | 7,435% | 14,793% | **6,848%** | 4,46% | +2,39 p.p. | 13.167 |
| DAPQ30 | 15/08/2030 | 937 | 7,655% | 14,940% | **6,767%** | 4,29% | +2,47 p.p. | 8.808 |
| DAPK31 | 15/05/2031 | 1.123 | 7,670% | 15,007% | **6,815%** | — | — | 10.859 |
| DAPQ32 | 16/08/2032 | 1.441 | 7,750% | 15,122% | **6,841%** | — | — | 5.404 |
| DAPK33 | 16/05/2033 | 1.628 | 7,665% | 15,142% | **6,945%** | — | — | 5.866 |
| DAPK35 | 15/05/2035 | 2.131 | 7,640% | 15,144% | **6,971%** | — | — | 4.002 |
| DAPK37 | 15/05/2037 | 2.628 | 7,560% | 15,131% | **7,039%** | — | — | 573 |


> [!danger] ⚠️ Os vencimentos curtos não servem para decidir nada
> Os contratos marcados (**DAPZ26, DAPF27, DAPK27**) têm prazo de até 130 dias úteis, e a taxa real deles é contaminada: **parte do IPCA do período já é conhecida**. O índice sai com defasagem, então um DAP curto está negociando um pedaço de inflação que já aconteceu e um pedaço que ainda não — e o juro real que aparece é um resíduo dessa mistura, não um preço de mercado limpo.
>
> É por isso que a implícita curta oscila de 5% para 9% entre vencimentos vizinhos sem que nada tenha mudado no mundo. Eles estão na tabela para mostrar o formato da curva, e ficam **fora de qualquer conclusão** desta página.

- *DAPQ40 ficou sem par: fora das pontas da curva de DI (11 a 2775 dias úteis).*
- *DAPK45 ficou sem par: fora das pontas da curva de DI (11 a 2775 dias úteis).*
- *DAPQ50 ficou sem par: fora das pontas da curva de DI (11 a 2775 dias úteis).*

*O Focus projeta IPCA até 2030. Vencimentos além disso aparecem com a implícita medida e sem comparação — porque não existe consenso publicado para aquele prazo, e inventar um seria pior que deixar em branco.*


### O que fazer com isso

**Medido:** nos vencimentos não contaminados, a diferença entre a implícita e o caminho do
Focus vai de 2,12 p.p. a 2,47 p.p., e a maior está em **DAPQ30** (15/08/2030), com 2,47 p.p..

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

A razão é simples. Quem tem reais aplica hoje a 13,647% ao ano no vértice curto do DI. Quem tem
dólares aplica a muito menos no exterior. Se o dólar futuro **não** subisse pela diferença
entre as duas taxas, daria para pegar reais emprestados, comprar dólar à vista, vender no
futuro e travar lucro sem risco. Como esse lucro não existe por muito tempo, o futuro sobe
pelo diferencial — **por construção, não por previsão**.

É daí que vem o nome **carrego** (ou *carry*): o futuro já traz embutido o custo de
carregar a posição até o vencimento.

*À vista (dólar de venda, Banco Central) em 13/11/2026: **R\$ 5,6518**.*


| contrato | vencimento | ajuste (R\$/US\$) | depreciação ao ano embutida | DI do mesmo prazo | juro em dólar embutido | contratos no dia |
|---|---|---|---|---|---|---|
| DOLZ26 | 01/12/2026 | R\$ 5,6630 | 4,11% | 13,647% | 7,21% | 205.000 |
| DOLF27 | 04/01/2027 | R\$ 5,6951 | 5,50% | 13,672% | 6,36% | 515 |
| DOLG27 | 01/02/2027 | R\$ 5,7278 | 6,28% | 13,692% | 6,18% | 0 |
| DOLH27 | 01/03/2027 | R\$ 5,7543 | 6,26% | 13,735% | 6,15% | 0 |
| DOLJ27 | 01/04/2027 | R\$ 5,7902 | 6,56% | 13,775% | 6,14% | 0 |
| DOLK27 | 03/05/2027 | R\$ 5,8219 | 6,53% | 13,835% | 6,19% | 0 |
| DOLM27 | 01/06/2027 | R\$ 5,8541 | 6,63% | 13,905% | 6,24% | 0 |
| DOLN27 | 01/07/2027 | R\$ 5,8924 | 6,84% | 13,970% | 6,27% | 0 |
| DOLQ27 | 02/08/2027 | R\$ 5,9287 | 6,89% | 14,025% | 6,31% | 0 |
| DOLU27 | 01/09/2027 | R\$ 5,9672 | 7,02% | 14,075% | 6,35% | 0 |
| DOLV27 | 01/10/2027 | R\$ 6,0015 | 7,04% | 14,150% | 6,44% | 0 |
| DOLX27 | 01/11/2027 | R\$ 6,0331 | 6,98% | 14,190% | 6,48% | 0 |
| DOLF28 | 03/01/2028 | R\$ 6,1085 | 7,06% | 14,285% | 6,53% | 0 |
| DOLJ28 | 03/04/2028 | R\$ 6,2260 | 7,21% | 14,420% | 6,59% | 0 |
| DOLN28 | 03/07/2028 | R\$ 6,3415 | 7,28% | 14,525% | 6,63% | 0 |
| DOLV28 | 02/10/2028 | R\$ 6,4650 | 7,38% | 14,600% | 6,71% | 0 |

*… e 7 vencimentos mais longos, no arquivo para download.*


> [!info] A última coluna é um mercado de verdade
> O **juro em dólar embutido** — o mercado chama de *cupom cambial* — é o que sobra quando se desconta o DI do carrego do dólar. Ele é a taxa pela qual se empresta dólar dentro do Brasil, e tem contrato próprio na B3 (DDI e FRC).
>
> Para quem opera, serve como **termômetro de aperto de dólar no país**: quando o cupom curto dispara, há falta de dólar no mercado local, e isso costuma vir antes de movimento forte no câmbio à vista. É um indicador de estresse, não uma opinião sobre direção.


### O futuro contra o consenso, ano a ano

O Focus projeta o dólar no **fim** de cada ano. O contrato que marca esse instante é o de
**janeiro do ano seguinte**, que liquida contra a taxa do último dia útil de dezembro. É
assim que os dois são casados aqui — e não "contrato de dezembro contra fim de dezembro",
que erraria um mês inteiro de carrego.

| ano | contrato | futuro | Focus (30 dias) | Focus (5 dias) | futuro − Focus | ganho no período se o Focus acertar | o mesmo ao ano |
|---|---|---|---|---|---|---|---|
| 2026 | DOLF27 | R\$ 5,6951 | R\$ 5,4000 | R\$ 5,5000 | +R\$ 0,2951 | +5,5% | +45,3% |
| 2027 | DOLF28 | R\$ 6,1085 | R\$ 5,4500 | R\$ 5,4000 | +R\$ 0,6585 | +12,1% | +10,5% |
| 2028 | DOLF29 | R\$ 6,5775 | R\$ 5,4821 | R\$ 5,3800 | +R\$ 1,0954 | +20,0% | +8,9% |
| 2029 | DOLF30 | R\$ 7,1164 | R\$ 5,5000 | R\$ 5,4500 | +R\$ 1,6164 | +29,4% | +8,6% |
| 2030 | DOLF31 | R\$ 7,6959 | R\$ 5,5500 | R\$ 5,4500 | +R\$ 2,1459 | +38,7% | +8,2% |


### O que fazer com isso

**Medido:** a curva de dólar embute depreciação de **7,38% ao ano** nos vencimentos longos. O
Focus projeta o dólar saindo de R\$ 5,40 em 2026 para R\$ 5,55 em 2030, o que equivale a **0,69% ao ano**.
As duas coisas discordam em torno de 6,69 p.p. ao ano.

**O que isso NÃO é:** não é o mercado discordando do Focus sobre o dólar. O futuro é
aritmética do diferencial de juros — ele subiria do mesmo jeito se todo mundo no mercado
achasse que o dólar vai cair. Tratar a diferença como "o mercado espera mais
desvalorização" é ler carrego como previsão.

**O que isso É, e aqui está a operação:** essa diferença é o retorno de uma posição
**vendida em dólar futuro** caso o dólar simplesmente fique onde o Focus projeta. É o
*carry trade*, a operação mais clássica e mais lucrativa do Brasil em períodos calmos — e
a que mais destrói capital nos outros.

A conta é essa: vendendo o contrato **DOLF31** a R\$ 7,70, se o dólar terminar 2030 nos R\$ 5,55 que o Focus
projeta, o ganho é de **38,7% no período** — cerca de 8,2% ao ano. Enquanto nada acontece,
recebe-se o carrego todo mês. É dinheiro parecendo fácil, e é exatamente aí que está o
problema.

> [!danger] O carry trade e a conta que ele esconde
> O carrego paga alguns por cento ao ano, em prestações mensais e silenciosas. O risco não vem em prestações: vem de uma vez.
>
> **O exemplo é recente.** Na eleição de 2026, o dólar saiu de cerca de R\$ 4,96 na sexta anterior ao segundo turno para R\$ 5,48 na terça seguinte — o maior fechamento do ano — e a inflação implícita nos títulos públicos avançou mais de um ponto no mesmo intervalo. Uma posição vendida em dólar futuro perdeu, em três sessões, mais do que o carrego de um ano inteiro.
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
