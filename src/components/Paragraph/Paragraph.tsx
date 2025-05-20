import { p as StyleParagraph } from './style'

export type Props = {
  children: string
  tipo?: string
  fontSize?: number
}

const Paragraph = ({ children, tipo = 'principal', fontSize }: Props) => {
  return (
    <StyleParagraph fontSize={fontSize} tipo={tipo}>
      {children}
    </StyleParagraph>
  )
}

export default Paragraph
