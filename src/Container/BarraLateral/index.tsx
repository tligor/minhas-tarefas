import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'
const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar..."></S.Campo>
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

export default BarraLateral
