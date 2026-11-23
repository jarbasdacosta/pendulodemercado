---
title: "🕐 Quando este site atualiza"
---

*Lido do agendamento do próprio servidor em 23/11/2026 09:41.*


Esta página não é escrita à mão. Ela é **lida do agendamento do servidor** toda vez que o
site é publicado. Uma lista de horários digitada à mão envelhece na primeira mudança e
passa a mentir para quem a lê; esta está certa por construção.

Os horários são de Brasília. O que o servidor não conseguir fazer num horário, ele tenta
no seguinte — nenhuma destas rotinas depende de alguém estar olhando.

## O agendamento

| horário | o que roda |
|---|---|
| domingos, 02h00 | **Arquivamento do Boletim Diário** — A B3 mantém só os últimos ~21 pregões no ar. O que não for guardado some. Esta rodada guarda o pregão anterior, já fechado. |
| dia 2-6, a cada 60 min, das 03h10 às 05h10 | **Vigia do Boletim Diário da B3** — Sonda a B3 depois do fechamento e, assim que o boletim do pregão sai, refaz as páginas que dependem dele (juros, inflação e câmbio, agro, posicionamento, aluguel e ADRs) e republica. Para no primeiro sucesso do dia. |
| dias úteis, a cada 30 min, das 05h10 às 08h40 | **Capital estrangeiro** — Busca o relatório de fluxo da B3, que sai com dois dias de atraso, e republica a página de capital estrangeiro quando há dado novo. Sem dado novo, não publica nada. |
| todo dia, a cada 20 min, das 06h00 às 21h40 | **Vigia da publicação** — O site é construído e publicado em dois passos, e o segundo falha de vez em quando do lado do GitHub. Sem isto, o site seguiria mostrando o conteúdo do dia anterior sem avisar ninguém. |
| dias úteis, 06h10 | **Arquivamento do Boletim Diário** — A B3 mantém só os últimos ~21 pregões no ar. O que não for guardado some. Esta rodada guarda o pregão anterior, já fechado. |
| dias úteis, a cada 20 min, das 06h25 às 06h45 | **Vigia do Boletim Diário da B3** — Sonda a B3 depois do fechamento e, assim que o boletim do pregão sai, refaz as páginas que dependem dele (juros, inflação e câmbio, agro, posicionamento, aluguel e ADRs) e republica. Para no primeiro sucesso do dia. |
| domingos, 06h30 | **Limpeza de arquivos antigos** |
| dias úteis, 06h30 | **Índices da B3** — Guarda o comportamento do dia dos 34 índices — Ibovespa, IFIX, setoriais, small e mid cap. Eles não vêm prontos no boletim: cada um exige uma requisição própria e vira uma linha do dia. |
| todo dia 1 do mês, 07h00 | **Compactação do repositório** — Mensal, com o mercado fechado. |
| domingos, 07h00 | **Índices da B3** — Guarda o comportamento do dia dos 34 índices — Ibovespa, IFIX, setoriais, small e mid cap. Eles não vêm prontos no boletim: cada um exige uma requisição própria e vira uma linha do dia. |
| dias úteis, 07h05 | **ticks_b3.py** |
| domingos, 07h13 | **Séries longas ajustadas** — Reconstrói o ajuste por proventos da série histórica da B3, na ordem obrigatória dos seis passos — trocar a ordem faz os ajustes contarem duas vezes. |
| sábados, 07h15 | **Ofertas na CVM** — Atualiza a página de ofertas públicas com os registros da CVM e publica só quando algo mudou. |
| dias úteis, 07h15 | **Vigia do Boletim Diário da B3** — Sonda a B3 depois do fechamento e, assim que o boletim do pregão sai, refaz as páginas que dependem dele (juros, inflação e câmbio, agro, posicionamento, aluguel e ADRs) e republica. Para no primeiro sucesso do dia. |
| sábados, 08h00 | **Setups** — Testa e republica as páginas dos setups. |
| dias úteis, a cada 15 min, das 10h00 às 17h45 | **Sinal intradiário** — Recalcula o sinal com a última barra fechada e republica a página do dia. |
| dias úteis, a cada 15 min, das 10h00 às 18h45 | **Vigia do feed de preços** — Confere se o feed está chegando. |
| dias úteis, a cada 15 min, das 10h02 às 18h47 | **Monitor** — Acompanha o estado do sistema durante o pregão. |
| dias úteis, 12h10 | **Capital estrangeiro** — Busca o relatório de fluxo da B3, que sai com dois dias de atraso, e republica a página de capital estrangeiro quando há dado novo. Sem dado novo, não publica nada. |
| dias úteis, 13h20 | **PTAX de fechamento** — O Banco Central consulta o mercado em quatro janelas (10h, 11h, 12h e 13h) e divulga a PTAX de fechamento por volta das 13h10. Esta rodada publica o dólar do dia às 13h20, sem esperar a rodada das 19h. Atraso do BC acontece: se a taxa ainda não estiver publicada, o valor do dia entra na rodada diária. |
| segundas, 17h00 | **Espectro wavelet** — Recalcula a decomposição em frequências dos últimos 504 pregões e refaz a página do espectro. As frequências do mercado se movem devagar: refazer isso todo dia mostraria a mesma figura. |
| dias úteis, 18h25 | **Fechamento do intradiário** — A última barra do pregão só é entregue completa por volta das 18h20. Esta rodada fecha o dia e dispara o aviso. |
| dias úteis, 18h45 | **Cálculo do ζ** — Calcula o ζ dos pregões que faltam, no diário e em velas de 15 minutos, e refaz as duas páginas de estudo do sinal. Roda entre o fechamento e a publicação, para o número do dia entrar na rodada das 19h. |
| todo dia, 18h50 | **Documentação do sistema** — Refaz esta página e os dois inventários (scripts e dados) a partir do próprio servidor. Documentação lida do sistema não envelhece; lista digitada à mão envelhece na primeira mudança. |
| dias úteis, 19h00 | **Rodada diária** — Refaz todas as páginas do dia e dispara o aviso diário. Roda às 19h, antes de a B3 publicar o boletim — por isso existe o vigia abaixo. |
| dias úteis, 19h30 | **Resumo do dia** — Fecha o resumo e envia. |
| dias úteis, 19h40 | **Setups** — Testa e republica as páginas dos setups. |
| todo dia, 20h40 | **Inventário dos dados** — Confere as séries do acervo — preços, boletins da B3, fluxo — e avisa quando alguma para de atualizar. O atraso é medido em pregões, então feriado não conta como falha. |


## As duas rodadas que importam para quem lê os números

**A rodada diária, às 19h.** Refaz todas as páginas e dispara o aviso do dia. Ela roda
*antes* de a B3 publicar o Boletim Diário do pregão — então, sozinha, ela deixaria as
páginas de mercado sempre um pregão atrasadas.

**O vigia do boletim, da noite.** É ele que resolve isso. De 15 em 15 minutos depois do
fechamento, ele pergunta à B3 se o boletim do dia já saiu. Enquanto não saiu, não escreve
nada; assim que sai, refaz as páginas que dependem dele e republica. Em 16/11/2026 o
boletim saiu por volta das 19h50 e o site foi publicado às 20h20.

Por que ele não grava antes de ter certeza: o arquivador pula um pregão cujo arquivo já
existe. Se gravasse o boletim pela metade, aquele pregão ficaria pela metade **para
sempre** — e a B3 só mantém os últimos ~21 pregões no ar. Por isso a sonda vem antes da
gravação, e não o contrário.

## O que cada página espera

- **Páginas de mercado** (juros, inflação e câmbio, agro, posicionamento, aluguel, ADRs):
  dependem do Boletim Diário da B3. São refeitas pelo vigia, na noite do próprio pregão.
- **Páginas do sinal** (diário, intradiário, amplitude, gráficos): dependem do preço do
  índice, que chega ao longo do pregão. São refeitas a cada 15 minutos durante o dia.
- **Páginas de estudo** (setups, espectro): mudam devagar e têm rodada própria.

---

*Página gerada automaticamente a partir do agendamento do servidor.*
