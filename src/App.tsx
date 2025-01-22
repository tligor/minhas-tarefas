import BarraLateral from './Container/BarraLateral'
import ListaDeTarefas from './Container/ListaDeTarefas'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
