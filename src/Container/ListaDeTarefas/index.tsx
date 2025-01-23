import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'Estudar typescript',
    descricao: 'Ver a aula 3 do curso',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Ração do Milley',
    descricao: 'Ir no mercadinho comprar ração',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.COMPLETA
  },
  {
    titulo: 'Trocar torneira da cozinha',
    descricao:
      'Trocar torneira da cozinha segunda de manhã, a tarde a tia Sandra vai vir em casa',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.COMPLETA
  }
]
const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
