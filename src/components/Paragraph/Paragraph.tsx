import { p as StyleParagraph } from './style'

export type Props = {
  children: string
  tipo?: string
}

const Paragraph = ({ children, tipo = 'principal' }: Props) => {
  return <StyleParagraph tipo={tipo}>{children}</StyleParagraph>
}

export default Paragraph
