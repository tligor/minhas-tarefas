import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuid } from 'uuid'
import * as S from './styles.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCirclePlus,
  faList,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import Contato from './Components/Contato'
import {
  adicionarContato,
  removerContato,
  editarContato,
  selecionarContato,
  carregarContatos,
} from './store/slices/contatoSlice.js'

export default function App() {
  const dispatch = useDispatch()
  const listaContatos = useSelector((state) => state.contatos.listaContatos)
  const selecionados = useSelector((state) => state.contatos.selecionados)

  const [contato, setContato] = React.useState({
    nome: '',
    telefone: '',
    email: '',
  })

  const [contatoEditando, setContatoEditando] = React.useState(null)

  const inputNome = useRef()
  const inputTelefone = useRef()
  const inputEmail = useRef()

  function setNome(e) {
    setContato({ ...contato, nome: e.target.value })
  }

  function setTelefone(e) {
    setContato({ ...contato, telefone: e.target.value })
  }

  function setEmail(e) {
    setContato({ ...contato, email: e.target.value })
  }

  // Adicionar um novo contato
  function addContato() {
    if (contato.nome === '' || contato.telefone === '' || contato.email === '')
      return

    const novoContato = { ...contato, id: uuid() }
    dispatch(adicionarContato(novoContato))

    setContato({ nome: '', telefone: '', email: '' })
    inputNome.current.focus()
  }

  // Editar os contatos selecionados
  function editarContatosSelecionados() {
    const contatosSelecionados = listaContatos.filter(
      (contato) => selecionados[contato.id],
    )

    // Se houver apenas um contato selecionado, preenche os campos de entrada para edição
    if (contatosSelecionados.length === 1) {
      const contatoSelecionado = contatosSelecionados[0]
      setContato({
        nome: contatoSelecionado.nome,
        telefone: contatoSelecionado.telefone,
        email: contatoSelecionado.email,
      })
      setContatoEditando(contatoSelecionado.id)
    }
  }

  // Salvar a edição do contato
  function salvarContatoEditado() {
    if (contatoEditando) {
      dispatch(editarContato({ ...contato, id: contatoEditando }))
      setContatoEditando(null)
      setContato({ nome: '', telefone: '', email: '' })
    }
  }

  function toggleSelecionado(id) {
    dispatch(selecionarContato({ id }))
  }

  function removerContatoHandler(id) {
    dispatch(removerContato(id))
  }

  useEffect(() => {
    const contatosSalvos = localStorage.getItem('meus_contatos')
    if (contatosSalvos) {
      dispatch(carregarContatos(JSON.parse(contatosSalvos)))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('meus_contatos', JSON.stringify(listaContatos))
  }, [listaContatos])

  return (
    <S.Main>
      <S.Container className="container-fluid">
        <div className="row">
          <div className="col">
            <h4 className="text-center">
              <FontAwesomeIcon icon={faList} />
              Lista de Contatos
            </h4>
          </div>
        </div>
      </S.Container>

      <S.Formulario className="container-fluid">
        <div className="row col-sm-6 col-md-6 col-lg-4 col-xxl-3">
          <div className="col">
            <div className="row justify-content-center">
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
                />
              </div>
              <div>
                <label className="form-label">E-mail</label>
                <input
                  className="form-control"
                  ref={inputEmail}
                  onChange={setEmail}
                  type="email"
                  value={contato.email}
                />
              </div>
              <S.campoAcoes>
                <div>
                  <button
                    className="btn btn-outline-warning"
                    onClick={editarContatosSelecionados}
                  >
                    <FontAwesomeIcon className="me-2" icon={faTrash} />
                    Editar selecionado(s)
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-outline-success"
                    onClick={
                      contatoEditando ? salvarContatoEditado : addContato
                    }
                  >
                    <FontAwesomeIcon className="me-2" icon={faCirclePlus} />
                    {contatoEditando ? 'Salvar' : 'Adicionar'}
                  </button>
                </div>
              </S.campoAcoes>
            </div>
          </div>
        </div>
      </S.Formulario>

      <S.ListaDeContatos>
        {listaContatos.map((ct) => (
          <li key={ct.id}>
            <Contato
              id={ct.id}
              nome={ct.nome}
              telefone={ct.telefone}
              email={ct.email}
              remover={removerContatoHandler}
              toggleSelecionado={toggleSelecionado}
              selecionado={selecionados[ct.id] || false}
            />
          </li>
        ))}
      </S.ListaDeContatos>
    </S.Main>
  )
}
