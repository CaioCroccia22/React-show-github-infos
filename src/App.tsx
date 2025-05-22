import React from 'react'
import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'

function App() {
  const [enableDarkTheme, setDarkTheme] = useState(true)

  function switchTheme() {
    setDarkTheme(!enableDarkTheme)
  }

  return (
    <ThemeProvider theme={enableDarkTheme ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar func={switchTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
