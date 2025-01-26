import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle, { Container } from './styles'
import store from './store'
import { Provider } from 'react-redux'
import Home from './pages/home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <h1>Página de Novo</h1>
  }
])
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
