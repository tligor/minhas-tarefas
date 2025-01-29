import styled from 'styled-components'

export const Main = styled.div`
  margin: 0;
  padding: 0;
  background-color: rgb(27, 42, 74);
`
export const Container = styled.div`
  padding: 20px;
  color: white;
  width: 100%;
  h4 {
    text-align: center;
    font-size: 24px;
  }
`

export const MainContato = styled.div``

export const Formulario = styled.div`
  background-color: rgb(44, 61, 98);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  label {
    font-size: 16px;
  }
  input {
    margin-bottom: 1rem;
  }
`
export const campoAcoes = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
  }
`

export const Contato = styled.div`
  display: flex;
`
export const ListaDeContatos = styled.ul`
  list-style: none;
  margin: 0 auto;
  color: white;
  width: 50%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  div {
    display: block;
    flex-direction: column;
  }
`
