import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

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
          <FiltroCard legendas="pendente" contador={1} />
          <FiltroCard legendas="concluída" contador={2} ativo />
          <FiltroCard legendas="urgentes" contador={2} />
          <FiltroCard legendas="importantes" contador={4} />
          <FiltroCard legendas="normal" contador={5} />
          <FiltroCard legendas="todas" contador={14} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
