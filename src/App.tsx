import BarraLateral from './Container/BarraLateral'
import ListaDeTarefas from './Container/ListaDeTarefas'
import GlobalStyle, { Container } from './styles'
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
