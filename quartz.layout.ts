import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileTrieNode } from "./quartz/util/fileTrie"

// ══════════════════════════════════════════════════════════════════════════════════════
// MENU EM SETE GRUPOS
//
// Cada grupo é um Explorer próprio, com título e um filtro que deixa passar só as pastas
// dele. É assim que se consegue agrupamento visual sem mover pasta nenhuma — mover mudaria
// a URL de 334 páginas e o caminho de saída de nove geradores. O componente já prevê várias
// instâncias: ele numera cada uma com `explorer-${numExplorers++}`.
//
// TRÊS REGRAS QUE NÃO PODEM SER QUEBRADAS NESTE ARQUIVO:
//
// 1. AS FUNÇÕES NÃO ENXERGAM NADA DE FORA DO PRÓPRIO CORPO. O Explorer serializa sortFn,
//    filterFn e mapFn com .toString() e o navegador as reconstrói com new Function(). Uma
//    constante declarada aqui em cima compila no servidor e é `undefined` no navegador, e
//    o menu quebra só no cliente. Por isso cada lista está repetida DENTRO de cada função.
//    O helper `grupo()` abaixo é seguro porque só monta as opções fixas em tempo de build;
//    as funções chegam nele como literais e são serializadas de onde foram escritas.
//
// 2. O FILTRO É RECURSIVO E PODA. FileTrieNode.filter() roda em todos os níveis:
//        this.children = this.children.filter(filterFn)
//        this.children.forEach((child) => child.filter(filterFn))
//    Filtrar por slugSegment derrubaria as 141 páginas dentro de diario/, porque elas também
//    são testadas. Por isso o teste é no SLUG COMPLETO, aceitando a pasta e tudo abaixo:
//    pasta tem slug "nome/index" (o getter acrescenta "index"), arquivo na raiz tem "nome".
//
// 3. PÁGINA COM NOME DE DATA ORDENA DECRESCENTE POR EXCLUSÃO. Os slugs de diario/, intraday/
//    e linha-do-tempo/ (2026-11-13, 2026) não estão nas listas de ordem fixa, então os dois
//    lados caem em -1, o primeiro ramo do sortFn não dispara e elas chegam no localeCompare
//    invertido. Pôr qualquer coisa com cara de data numa lista de ordem quebra isso.
// ══════════════════════════════════════════════════════════════════════════════════════

const grupo = (
  title: string,
  filterFn: (node: FileTrieNode) => boolean,
  sortFn: (a: FileTrieNode, b: FileTrieNode) => number,
) =>
  Component.Explorer({
    title,
    folderDefaultState: "collapsed", // só as pastas; a seção do grupo continua aberta
    folderClickBehavior: "link",
    useSavedState: true,
    filterFn,
    sortFn,
  })

// NO CELULAR, UM EXPLORER SÓ. Cada Explorer desenha o seu próprio botão de hambúrguer na
// tela pequena — oito grupos viravam oito hambúrgueres empilhados, que foi como o menu
// quebrou no celular. Então o celular recebe a lista inteira num explorer, como sempre foi,
// e o agrupamento fica só no desktop, onde há espaço vertical para ele significar algo.
const menuCelular = Component.Explorer({
  folderDefaultState: "collapsed",
  folderClickBehavior: "link",
  useSavedState: true,
  sortFn: (a, b) => {
    const ordem = ["por-onde-comecar", "diario", "intraday", "amplitude", "larry-williams",
                   "tecnico", "calendario", "operacoes", "sinais-topo-fundo", "estrangeiros",
                   "adr", "ofertas", "posicionamento", "agro", "linha-do-tempo", "historico",
                   "historico-anterior", "metodologia", "ranking", "tendencia", "entradas",
                   "ultimas-operacoes", "historico-por-ano", "todos-os-sinais", "tutorial",
                   "crise", "sinais", "regras-de-operacao", "o-que-nao-passou",
                   "avanco-declinio", "aluguel", "derivativos"]
    const ia = ordem.indexOf(a.slugSegment)
    const ib = ordem.indexOf(b.slugSegment)
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
    if (a.isFolder && b.isFolder)
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true, sensitivity: "base",
      })
    if (!a.isFolder && !b.isFolder)
      return b.slugSegment.localeCompare(a.slugSegment, undefined, {
        numeric: true, sensitivity: "base",
      })
    return a.isFolder ? -1 : 1
  },
})

const grupos = [
  grupo(
    "1 · Onde está o mercado",
    (node) => {
      const dentro = ["por-onde-comecar", "diario", "intraday", "amplitude",
                      "larry-williams", "tecnico", "calendario"]
      const s = node.slug ?? ""
      return dentro.some((d) => s === d || s.startsWith(d + "/"))
    },
    (a, b) => {
      const ordem = ["por-onde-comecar", "diario", "intraday", "amplitude",
                     "larry-williams", "tecnico", "calendario", "avanco-declinio"]
      const ia = ordem.indexOf(a.slugSegment)
      const ib = ordem.indexOf(b.slugSegment)
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      if (a.isFolder && b.isFolder)
        return a.displayName.localeCompare(b.displayName, undefined, {
          numeric: true, sensitivity: "base",
        })
      if (!a.isFolder && !b.isFolder)
        return b.slugSegment.localeCompare(a.slugSegment, undefined, {
          numeric: true, sensitivity: "base",
        })
      return a.isFolder ? -1 : 1
    },
  ),

  grupo(
    "2 · Operar com tendência",
    (node) => {
      const dentro = ["operacoes"]
      const s = node.slug ?? ""
      return dentro.some((d) => s === d || s.startsWith(d + "/"))
    },
    (a, b) => {
      const ordem = ["operacoes", "ranking", "tendencia", "entradas", "ultimas-operacoes",
                     "historico-por-ano"]
      const ia = ordem.indexOf(a.slugSegment)
      const ib = ordem.indexOf(b.slugSegment)
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true, sensitivity: "base",
      })
    },
  ),

  grupo(
    "3 · Sinais de topo e fundo",
    (node) => {
      const dentro = ["sinais-topo-fundo"]
      const s = node.slug ?? ""
      return dentro.some((d) => s === d || s.startsWith(d + "/"))
    },
    (a, b) => {
      const ordem = ["sinais-topo-fundo", "todos-os-sinais", "tutorial"]
      const ia = ordem.indexOf(a.slugSegment)
      const ib = ordem.indexOf(b.slugSegment)
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true, sensitivity: "base",
      })
    },
  ),

  grupo(
    "4 · Para onde vai o dinheiro",
    (node) => {
      const dentro = ["estrangeiros", "adr", "ofertas"]
      const s = node.slug ?? ""
      return dentro.some((d) => s === d || s.startsWith(d + "/"))
    },
    (a, b) => {
      const ordem = ["estrangeiros", "adr", "ofertas"]
      const ia = ordem.indexOf(a.slugSegment)
      const ib = ordem.indexOf(b.slugSegment)
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true, sensitivity: "base",
      })
    },
  ),

  grupo(
    "5 · Quem está posicionado",
    (node) => {
      const dentro = ["posicionamento"]
      const s = node.slug ?? ""
      return dentro.some((d) => s === d || s.startsWith(d + "/"))
    },
    (a, b) => {
      const ordem = ["posicionamento", "aluguel", "derivativos"]
      const ia = ordem.indexOf(a.slugSegment)
      const ib = ordem.indexOf(b.slugSegment)
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true, sensitivity: "base",
      })
    },
  ),

  grupo(
    "6 · Agro",
    (node) => {
      const dentro = ["agro"]
      const s = node.slug ?? ""
      return dentro.some((d) => s === d || s.startsWith(d + "/"))
    },
    (a, b) => {
      const ordem = ["agro"]
      const ia = ordem.indexOf(a.slugSegment)
      const ib = ordem.indexOf(b.slugSegment)
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true, sensitivity: "base",
      })
    },
  ),

  grupo(
    "7 · O que já aconteceu",
    (node) => {
      const dentro = ["linha-do-tempo", "historico", "historico-anterior"]
      const s = node.slug ?? ""
      return dentro.some((d) => s === d || s.startsWith(d + "/"))
    },
    (a, b) => {
      // sem os anos (2000..2026) na lista, de propósito: é a ausência deles que os faz
      // cair no localeCompare invertido e sair do mais recente para o mais antigo
      const ordem = ["linha-do-tempo", "historico", "historico-anterior"]
      const ia = ordem.indexOf(a.slugSegment)
      const ib = ordem.indexOf(b.slugSegment)
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      if (a.isFolder && b.isFolder)
        return a.displayName.localeCompare(b.displayName, undefined, {
          numeric: true, sensitivity: "base",
        })
      if (!a.isFolder && !b.isFolder)
        return b.slugSegment.localeCompare(a.slugSegment, undefined, {
          numeric: true, sensitivity: "base",
        })
      return a.isFolder ? -1 : 1
    },
  ),

  grupo(
    "8 · Como isso funciona",
    (node) => {
      const dentro = ["metodologia"]
      const s = node.slug ?? ""
      return dentro.some((d) => s === d || s.startsWith(d + "/"))
    },
    (a, b) => {
      const ordem = ["metodologia", "crise", "sinais", "regras-de-operacao",
                     "o-que-nao-passou"]
      const ia = ordem.indexOf(a.slugSegment)
      const ib = ordem.indexOf(b.slugSegment)
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true, sensitivity: "base",
      })
    },
  ),
]

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Repositório": "https://github.com/jarbasdacosta/pendulodemercado",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.MobileOnly(menuCelular),
    ...grupos.map((g) => Component.DesktopOnly(g)),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.MobileOnly(menuCelular),
    ...grupos.map((g) => Component.DesktopOnly(g)),
  ],
  right: [],
}
