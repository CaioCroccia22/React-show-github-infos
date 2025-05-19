import Paragraph from '../../components/Paragraph/Paragraph'
import Title from '../../components/Title/Title'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Title fontSize={'16'}>Sobre mim</Title>
      <Paragraph tipo="outro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum
        quaerat aliquid similique excepturi quas debitis nihil harum sunt dicta
        vitae, odit culpa asperiores. Iure voluptate ab vitae dolor animi?
      </Paragraph>
      <GithubSecao>
        <img
          src="https://github-readme-stats.vercel.app/api?username=caiocroccia22&show_icons=true&theme=merko"
          alt="GitHub Stats"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=caiocroccia22&layout=compact&langs_count=8&theme=merko"
          alt="Top Languages"
        />
      </GithubSecao>
    </section>
  )
}

export default Sobre
