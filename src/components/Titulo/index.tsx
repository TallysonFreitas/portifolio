import { Titulo as EstiloDeTitulo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <EstiloDeTitulo fontSize={props.fontSize}>{props.children}</EstiloDeTitulo>
)

export default Titulo
