import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <h1>ola</h1>
      <Botao principal>Clique aqui</Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo as="a" principal={false}></BotaoPerigo>
    </>
  )
}

export default Teste
