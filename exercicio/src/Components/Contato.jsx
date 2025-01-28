export default function Contato({
  id,
  nome,
  telefone,
  remover,
  toggleSelecionado,
  selecionado,
}) {
  return (
    <div className="d-flex align-items-center">
      <input
        type="checkbox"
        checked={selecionado}
        onChange={() => toggleSelecionado(id)}
        className="mr-2"
      />
      {nome} - {telefone}
      <button onClick={() => remover(id)} className="ml-2">
        Remover
      </button>
    </div>
  )
}
