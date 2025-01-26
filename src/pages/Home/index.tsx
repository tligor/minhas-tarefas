import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../Container/BarraLateral'
import ListaDeTarefas from '../../Container/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
