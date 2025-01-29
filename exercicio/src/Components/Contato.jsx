import React from 'react'

export default function Contato({
  id,
  nome,
  telefone,
  email,
  remover,
  toggleSelecionado,
  selecionado,
}) {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={selecionado}
          onChange={() => toggleSelecionado(id)}
        />
        <span>{nome}</span> - <span>{telefone}</span> - <span>{email}</span>
        <button onClick={() => remover(id)}>Remover</button>
      </div>
    </div>
  )
}
