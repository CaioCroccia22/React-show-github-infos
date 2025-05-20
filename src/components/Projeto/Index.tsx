import Paragraph from '../Paragraph/Paragraph'
import { Title } from '../Title/style'
import { Card, LinkBotao } from './style'

const Projeto = () => {
  return (
    <>
      <Card>
        <Title>Projeto Lista de Tarefas</Title>
        <Paragraph tipo="secundario">
          Lista de Tarefas feito com ReactJS
        </Paragraph>
        <LinkBotao>Visualizar</LinkBotao>
      </Card>
    </>
  )
}

export default Projeto
