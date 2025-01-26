import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar..."
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        ></S.Campo>
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legendas="pendente"
          />
          <FiltroCard
            valor={enums.Status.COMPLETA}
            criterio="status"
            legendas="concluída"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legendas="urgentes"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legendas="importantes"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legendas="normal"
          />
          <FiltroCard criterio="todas" legendas="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
