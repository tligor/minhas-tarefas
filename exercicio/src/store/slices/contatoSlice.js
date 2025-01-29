import { createSlice } from '@reduxjs/toolkit'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    listaContatos: [],
    selecionados: {},
  },
  reducers: {
    adicionarContato(state, action) {
      state.listaContatos.push(action.payload)
    },
    removerContato(state, action) {
      state.listaContatos = state.listaContatos.filter(
        (contato) => contato.id !== action.payload,
      )
    },
    editarContato(state, action) {
      const { id, nome, telefone, email } = action.payload
      const contato = state.listaContatos.find((ct) => ct.id === id)
      if (contato) {
        contato.nome = nome
        contato.telefone = telefone
        contato.email = email
      }
    },
    selecionarContato(state, action) {
      const { id } = action.payload
      state.selecionados[id] = !state.selecionados[id]
    },
    carregarContatos(state, action) {
      state.listaContatos = action.payload
    },
  },
})

export const {
  adicionarContato,
  removerContato,
  editarContato,
  selecionarContato,
  carregarContatos,
} = contatosSlice.actions

export default contatosSlice.reducer
