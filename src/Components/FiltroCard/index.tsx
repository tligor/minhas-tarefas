import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legendas: string
}
const FiltroCard = ({ ativo, contador, legendas }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legendas}</S.Label>
  </S.Card>
)

export default FiltroCard
