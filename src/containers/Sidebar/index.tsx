import Title from '../../components/Title/Title'
import Avatar from '../../components/Avatar/Index'
import Paragraph from '../../components/Paragraph/Paragraph'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={'20'}>CaioCroccia22</Title>
        <Paragraph tipo="secundario" fontSize={16}>
          Caio Croccia
        </Paragraph>
        <Descricao fontSize={12}>Engenheiro Front-End</Descricao>
        <BotaoTema>Trocar Tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
