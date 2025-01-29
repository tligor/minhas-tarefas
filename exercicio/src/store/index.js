import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from '../store/slices/contatoSlice'

export const store = configureStore({
  reducer: {
    contatos: contatosReducer,
  },
})
