import { Title as StyleTitle } from './style'

export type Props = {
  children: string
  fontSize?: string
  // Com o children criamos um componente que aceita coisas dentro dele
}

const Title = (props: Props) => {
  return <StyleTitle fontSize={props.fontSize}>{props.children}</StyleTitle>
}

export default Title
