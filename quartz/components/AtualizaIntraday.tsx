// @ts-ignore
import atualizaScript from "./scripts/atualiza-intraday.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// v1 (25/11/2026): a pagina do intraday muda a cada 15 min e o GitHub Pages a
// serve com cache-control max-age=600. Quem deixa a aba aberta durante o
// pregao fica vendo numero de ate dez minutos antes. Este componente e so a
// linha de texto; quem faz o trabalho e o script inline.
const AtualizaIntraday: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div
      class={classNames(displayClass, "atualiza-intraday")}
      data-atualiza-intraday=""
      style="margin:1.2rem 0 0;font-size:.85rem;opacity:.7"
    >
      atualizacao automatica: iniciando...
    </div>
  )
}

AtualizaIntraday.afterDOMLoaded = atualizaScript

export default (() => AtualizaIntraday) satisfies QuartzComponentConstructor
