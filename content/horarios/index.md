---
title: "🕐 Quando este site atualiza"
---

*Lido do agendamento do próprio servidor em 26/11/2026 19:07.*


Esta página não é escrita à mão. Ela é **lida do agendamento do servidor** toda vez que o
site é publicado. Uma lista de horários digitada à mão envelhece na primeira mudança e
passa a mentir para quem a lê; esta está certa por construção.

Os horários são de Brasília. Nenhuma destas rotinas depende de alguém estar olhando.

As rotinas estão separadas por **cadência**, e essa separação também é lida do
agendamento: o que roda em todo pregão em hora marcada, o que acompanha o mercado ao longo
do dia, o que fica tentando até a fonte responder, o que roda todo dia e o que roda uma vez
por semana ou por mês. Uma rotina nova entra no grupo certo sozinha — não há lista escrita
à mão para envelhecer.

A diferença entre os dois grupos de "a cada poucos minutos" importa: um repete porque o
**preço** muda, o outro porque a **fonte** ainda não respondeu.

## Todo pregão, em hora marcada

O que acontece em todo dia útil, sempre no mesmo horário. É daqui que vem o número que você lê nas páginas do dia.

| horário | o que roda |
|---|---|
| dias úteis, 06h10 | **Arquivamento do Boletim Diário** — A B3 mantém só os últimos ~21 pregões no ar. O que não for guardado some. Esta rodada guarda o pregão anterior, já fechado. |
| dias úteis, 06h30 | **Índices da B3** — Guarda o comportamento do dia dos 34 índices — Ibovespa, IFIX, setoriais, small e mid cap. Eles não vêm prontos no boletim: cada um exige uma requisição própria e vira uma linha do dia. |
| dias úteis, 07h05 | **Negócios tick a tick da B3** — Arquiva as barras de um minuto dos índices a partir dos negócios individuais que a B3 publica em arquivo fechado, com hora até o milissegundo. É fonte primária: não depende do feed da corretora e não desaparece quando o MetaTrader para. |
| dias úteis, 13h20 | **PTAX de fechamento** — O Banco Central consulta o mercado em quatro janelas (10h, 11h, 12h e 13h) e divulga a PTAX de fechamento por volta das 13h10. Esta rodada publica o dólar do dia às 13h20, sem esperar a rodada das 19h. Atraso do BC acontece: se a taxa ainda não estiver publicada, o valor do dia entra na rodada diária. |
| dias úteis, 18h25 | **Fechamento do intradiário** — A última barra do pregão só é entregue completa por volta das 18h20. Esta rodada fecha o dia e dispara o aviso. |
| dias úteis, 18h45 | **Cálculo do ζ** — Calcula o ζ dos pregões que faltam, no diário e em velas de 15 minutos, e refaz as duas páginas de estudo do sinal. Roda entre o fechamento e a publicação, para o número do dia entrar na rodada das 19h. |
| dias úteis, 19h00 | **Rodada diária** — Refaz todas as páginas do dia e dispara o aviso diário. Roda às 19h, antes de a B3 publicar o boletim — por isso existe o vigia abaixo. |
| dias úteis, 19h30 | **Resumo do dia** — Fecha o resumo e envia. |
| dias úteis, 19h40 | **Varredura de omissões** — Compara o que cada rodada escreveu com o que ela sempre escreve, e avisa quando alguma coisa deixa de sair sem dar erro. |
| dias úteis, 19h45 | **Publicação do Pêndulo** — Envia ao GitHub as páginas que a rodada das 19h gerou. Tem horário próprio desde 25/11/2026: antes ela saía no fim da rodada dos setups, e o site do Pêndulo esperava meia hora sem precisar. |
| dias úteis, 19h50 | **Série do Ibovespa** — Estende a série diária do Ibovespa com o pregão que acabou de fechar, vindo da corretora. É a série que os estudos leem. Confere antes se as duas fontes ainda batem e não grava nada se divergirem: série contaminada não se percebe, série atrasada sim. |
| dias úteis, 20h15 | **Setups** — Testa e republica as páginas dos setups. |
| dias úteis, 21h15 | **Velas de uma hora** — Monta as velas de uma hora a partir das de um minuto que a corretora entrega. A conferência ignora a última vela, que é parcial por construção — era isso que fazia esta rotina parecer parada. |


## Ao longo do pregão, de poucos em poucos minutos

Estas acompanham o mercado enquanto ele negocia. Repetem porque o **preço** muda, não porque a rodada anterior falhou.

| horário | o que roda |
|---|---|
| dias úteis, a cada 15 min, das 10h00 às 17h45 | **Sinal intradiário** — Recalcula o sinal com a última barra fechada e republica a página do dia. |
| dias úteis, a cada 15 min, das 10h00 às 18h45 | **Vigia do feed de preços** — Confere se o feed está chegando. |
| dias úteis, a cada 15 min, das 10h02 às 18h47 | **Monitor** — Acompanha o estado do sistema durante o pregão. |


## Todo pregão, tentando até a fonte responder

Estas não têm hora de entrega — têm hora de tentativa. Dependem de um dado que vem de fora (a B3, o GitHub) e que pode ainda não estar pronto. Enquanto não está, não escrevem nada e tentam de novo mais tarde. Por isso aparecem com vários horários: é a mesma rotina insistindo, não várias rotinas diferentes.

| horário | o que roda |
|---|---|
| dias úteis, a cada 30 min, das 05h10 às 08h40 | **Capital estrangeiro** — Busca o relatório de fluxo da B3, que sai com dois dias de atraso, e republica a página de capital estrangeiro quando há dado novo. Sem dado novo, não publica nada. |
| dias úteis, a cada 20 min, das 06h25 às 06h45 | **Vigia do Boletim Diário da B3** — Sonda a B3 depois do fechamento e, assim que o boletim do pregão sai, refaz as páginas que dependem dele (juros, inflação e câmbio, agro, posicionamento, aluguel e ADRs) e republica. Para no primeiro sucesso do dia. |
| dias úteis, 07h15 | **Vigia do Boletim Diário da B3** — Sonda a B3 depois do fechamento e, assim que o boletim do pregão sai, refaz as páginas que dependem dele (juros, inflação e câmbio, agro, posicionamento, aluguel e ADRs) e republica. Para no primeiro sucesso do dia. |
| dias úteis, 12h10 | **Capital estrangeiro** — Busca o relatório de fluxo da B3, que sai com dois dias de atraso, e republica a página de capital estrangeiro quando há dado novo. Sem dado novo, não publica nada. |
| dias úteis, 18h50 | **Vigia do Boletim Diário da B3** — Sonda a B3 depois do fechamento e, assim que o boletim do pregão sai, refaz as páginas que dependem dele (juros, inflação e câmbio, agro, posicionamento, aluguel e ADRs) e republica. Para no primeiro sucesso do dia. |
| dias úteis, a cada 30 min, das 19h10 às 23h40 | **Vigia do Boletim Diário da B3** — Sonda a B3 depois do fechamento e, assim que o boletim do pregão sai, refaz as páginas que dependem dele (juros, inflação e câmbio, agro, posicionamento, aluguel e ADRs) e republica. Para no primeiro sucesso do dia. |


## Todos os dias, fim de semana incluído

Vigilância e documentação. Não dependem de haver pregão.

| horário | o que roda |
|---|---|
| todo dia, a cada 20 min, das 06h00 às 21h40 | **Vigia da publicação** — O site é construído e publicado em dois passos, e o segundo falha de vez em quando do lado do GitHub. Sem isto, o site seguiria mostrando o conteúdo do dia anterior sem avisar ninguém. |
| todo dia, 18h50 | **Documentação do sistema** — Refaz esta página e os dois inventários (scripts e dados) a partir do próprio servidor. Documentação lida do sistema não envelhece; lista digitada à mão envelhece na primeira mudança. |
| todo dia, 20h40 | **Inventário dos dados** — Confere as séries do acervo — preços, boletins da B3, fluxo — e avisa quando alguma para de atualizar. O atraso é medido em pregões, então feriado não conta como falha. |


## Uma vez por semana

Cálculos que se movem devagar: refazer todo dia mostraria a mesma figura. Três rotinas aparecem aqui e também mais acima — o arquivamento do boletim, os índices da B3 e os setups. Não é repetição: em dia útil elas fazem o pregão do dia, e no fim de semana fazem uma varredura mais funda, que recupera o que ficou faltando na semana.

| horário | o que roda |
|---|---|
| domingos, 02h00 | **Arquivamento do Boletim Diário** — A B3 mantém só os últimos ~21 pregões no ar. O que não for guardado some. Esta rodada guarda o pregão anterior, já fechado. |
| domingos, 06h30 | **Limpeza de arquivos antigos** — Apaga da pasta de saída do sistema os arquivos `*.png` com mais de 30 dias. É rotina de espaço, não de dados: roda com o mercado fechado e não alcança o conteúdo publicado, que fica no repositório do site. |
| domingos, 07h00 | **Índices da B3** — Guarda o comportamento do dia dos 34 índices — Ibovespa, IFIX, setoriais, small e mid cap. Eles não vêm prontos no boletim: cada um exige uma requisição própria e vira uma linha do dia. |
| domingos, 07h13 | **Séries longas ajustadas** — Reconstrói o ajuste por proventos da série histórica da B3, na ordem obrigatória dos seis passos — trocar a ordem faz os ajustes contarem duas vezes. |
| sábados, 07h15 | **Ofertas na CVM** — Atualiza a página de ofertas públicas com os registros da CVM e publica só quando algo mudou. |
| sábados, 08h00 | **Setups** — Testa e republica as páginas dos setups. |
| sextas, 21h10 | **Espectro wavelet** — Recalcula a decomposição em frequências dos últimos 504 pregões e refaz a página do espectro. Roda na sexta à noite, bem depois do fechamento, para a figura estar pronta antes do fim de semana. Só uma vez por semana porque as frequências do mercado se movem devagar: refazer isso todo dia mostraria a mesma figura. |


## Uma vez por mês

Manutenção, com o mercado fechado.

| horário | o que roda |
|---|---|
| todo dia 1 do mês, 07h00 | **Compactação do repositório** — Mensal, com o mercado fechado. |


## Como o Boletim Diário da B3 chega — e por que isso decide tudo

A B3 **não publica o boletim de uma vez.** Ela abre as tabelas durante a noite e vai
acrescentando linhas. Medido na noite do pregão de 19/11/2026, sondando a própria fonte:

| hora da sondagem | negócios no boletim de derivativos |
|---|---|
| 18h50 | 518 linhas |
| 19h10 | 648 linhas |
| 19h40 | 776 linhas |
| 20h10 | 783 linhas — para de crescer |

E a tabela de **posições em aberto** do mercado à vista ficou em **zero a noite inteira**:
apareceu com 46.564 linhas só às 06h25 da manhã seguinte.

**É isso que explica o desenho do vigia.** Ele sonda de 20 em 20 minutos no fim da
madrugada e de 30 em 30 à noite, e só grava quando encontra o boletim **completo** — nunca
pela metade. O motivo é que o arquivador pula um pregão cujo arquivo já existe: se gravasse
às 19h10, aquele pregão ficaria com 135 negócios a menos **para sempre**, e a B3 só mantém
os últimos ~21 pregões no ar. Não haveria como voltar e consertar.

O que isso significa na prática, para quem lê os números:

- **Às 19h** sai a rodada diária, com o preço e o sinal do pregão que acabou. Esses não
  dependem do boletim e estão certos desde a noite.
- **Durante a noite**, se a parte de derivativos fechar, as páginas que dependem só dela
  são refeitas.
- **De manhã, por volta das 6h30**, quando as posições em aberto chegam, o boletim é
  arquivado inteiro e as páginas de mercado ficam completas.

Então uma página de mercado aberta às 20h pode estar mostrando o pregão anterior. Isso não
é atraso do site: é o momento em que o dado passa a existir. **Toda página diz a data e a
hora do dado que mostra** — é por ela que se confere, nunca pelo horário em que você abriu
a página.

## O que cada página espera

- **Páginas de mercado** (juros, inflação e câmbio, agro, posicionamento, aluguel, ADRs):
  dependem do Boletim Diário da B3. São refeitas pelo vigia, na noite do próprio pregão.
- **Páginas do sinal** (diário, intradiário, amplitude, gráficos): dependem do preço do
  índice, que chega ao longo do pregão. São refeitas a cada 15 minutos durante o dia.
- **Páginas de estudo** (setups, espectro): mudam devagar e têm rodada própria.

## O que não tem horário

Nem tudo aqui é rotina, e esta página não ficaria honesta fingindo que é. Os estudos — a
concordância entre o ζ diário e o intradiário, o comportamento do ζ no teto da escala, os
testes de setup — são recalculados **quando há motivo**: uma amostra nova que pode mudar o
resultado, um erro encontrado, uma pergunta nova. Não aparecem nas tabelas acima porque
não têm agendamento, e inventar um horário para eles seria escrever uma data falsa.

Como saber de quando é o número de uma página assim: **ela própria diz.** Todo dado
publicado neste site carrega a data e a hora em que foi medido. Se uma página não aparece
nas tabelas desta, a data está no texto dela.

---

*Página gerada automaticamente a partir do agendamento do servidor.*
