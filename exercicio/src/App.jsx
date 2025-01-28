import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Contato from './Components/Contato' // Importando o componente Contato
import * as S from './styles.ts'

// Função principal do componente App
export default function App() {
  const [contato, setContato] = useState({
    nome: '',
    telefone: '',
  })

  const [listaContatos, setListaContatos] = useState([])
  const [selecionados, setSelecionados] = useState({}) // Estado para seleção dos contatos

  const inputNome = useRef()
  const inputTelefone = useRef()

  // Função para definir o nome
  function setNome(e) {
    setContato({ ...contato, nome: e.target.value })
  }

  // Função para definir o telefone
  function setTelefone(e) {
    setContato({ ...contato, telefone: e.target.value })
  }

  // Função que adiciona um novo contato
  function addContato() {
    if (contato.nome === '' || contato.telefone === '') return

    // Verifica se o contato já existe
    const contatoDuplicado = listaContatos.find(
      (ct) => ct.nome === contato.nome && ct.telefone === contato.telefone,
    )
    if (contatoDuplicado) {
      inputTelefone.current.focus()
      return
    }

    // Cria um novo contato com id único
    const novoContato = { ...contato, id: uuid() }

    // Atualiza a lista de contatos
    setListaContatos([...listaContatos, novoContato])
    setContato({ nome: '', telefone: '' }) // Limpa os campos após a adição

    inputNome.current.focus()
  }

  // Função que alterna a seleção de um contato
  function toggleSelecionado(id) {
    setSelecionados((prev) => ({
      ...prev,
      [id]: !prev[id], // Inverte o valor do checkbox
    }))
  }

  // Função para apagar os contatos selecionados
  function apagarSelecionados() {
    const contatosFiltrados = listaContatos.filter(
      (ct) => !selecionados[ct.id], // Mantém apenas os contatos não selecionados
    )
    setListaContatos(contatosFiltrados)
    setSelecionados({}) // Limpa a seleção
  }

  // Função para remover um contato específico
  function removerContato(id) {
    setListaContatos(listaContatos.filter((contato) => contato.id !== id))
  }

  // Função para adicionar contato com os Enters
  function enterAdicionarContato(e) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') addContato()
  }

  // Carregar contatos do localStorage ao inicializar o componente
  useEffect(() => {
    const contatosSalvos = localStorage.getItem('meus_contatos')
    if (contatosSalvos) {
      setListaContatos(JSON.parse(contatosSalvos))
    }
  }, [])

  // Salvar contatos no localStorage sempre que a lista for alterada
  useEffect(() => {
    localStorage.setItem('meus_contatos', JSON.stringify(listaContatos))
  }, [listaContatos])

  return (
    <>
      <S.Container className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <h4 className="text-center">Lista de Contatos</h4>
          </div>
        </div>
      </S.Container>

      <S.Formulario className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-6">
                <div>
                  <label className="form-label">Nome</label>
                  <input
                    className="form-control"
                    ref={inputNome}
                    onChange={setNome}
                    type="text"
                    value={contato.nome}
                  />
                </div>
                <div>
                  <label className="form-label">Telefone</label>
                  <input
                    className="form-control"
                    ref={inputTelefone}
                    onChange={setTelefone}
                    type="text"
                    value={contato.telefone}
                    onKeyUp={enterAdicionarContato}
                  />
                </div>
              </div>
              <div>
                <button type="submit" onClick={addContato}>
                  Adicionar Contato
                </button>
                <button onClick={apagarSelecionados}>
                  Apagar Contato(s) selecionado
                </button>
              </div>
            </div>
          </div>
        </div>
      </S.Formulario>

      <ul>
        {listaContatos.map((ct) => (
          <li key={ct.id}>
            <Contato
              id={ct.id}
              nome={ct.nome}
              telefone={ct.telefone}
              remover={removerContato}
              toggleSelecionado={toggleSelecionado}
              selecionado={selecionados[ct.id] || false}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
