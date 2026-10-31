import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


// Explorer: pastas em ordem alfabética; páginas por data DECRESCENTE
// (nomes de arquivo são YYYY-MM-DD, então ordenar pelo slug = ordenar por data)
const explorerDateSort = Component.Explorer({
  sortFn: (a, b) => {
    // menu: ordem fixa na raiz do site
    const ordem = ["diario", "intraday", "historico", "linha-do-tempo", "operacoes", "sinais-topo-fundo", "amplitude", "estrangeiros", "tecnico", "metodologia", "ranking", "tendencia", "entradas", "ultimas-operacoes", "historico-por-ano", "todos-os-sinais", "tutorial", "crise", "sinais", "regras-de-operacao", "o-que-nao-passou"]
    const ia = ordem.indexOf(a.slugSegment)
    const ib = ordem.indexOf(b.slugSegment)
    if (ia !== -1 || ib !== -1) {
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
    }
    if (a.isFolder && b.isFolder) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    if (!a.isFolder && !b.isFolder) {
      return b.slugSegment.localeCompare(a.slugSegment, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    return a.isFolder ? -1 : 1
  },
})

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
    explorerDateSort,
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
    explorerDateSort,
  ],
  right: [],
}
