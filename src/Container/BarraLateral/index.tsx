import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'
const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar..."></S.Campo>
      <S.Filtros>
        <FiltroCard />
        <FiltroCard ativo />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
