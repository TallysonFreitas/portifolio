import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'

function App() {
  const [estaUsandoDark, setEstaUsandoDark] = useState(false)

  function trocaTema() {
    setEstaUsandoDark(!estaUsandoDark)
  }

  return (
    <ThemeProvider theme={estaUsandoDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
