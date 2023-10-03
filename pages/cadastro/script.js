const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sPlano = document.querySelector('#m-plano')
const sTelefone = document.querySelector('#m-telefone')
const sCPF = document.querySelector('#m-cpf')
const sEmail = document.querySelector('#m-email')
const btnSalvar = document.querySelector('#btnSalvar')
const btnFechar = document.querySelector('.btn-close-modal')
const sStatus = document.querySelector('#m-status')

let itens
let id

function closeModal() {
  modal.classList.remove('active')
}

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sPlano.value = itens[index].plano
    sTelefone.value = itens[index].telefone
    sCPF.value = itens[index].cpf
    sEmail.value = itens[index].email
    id = index
    sStatus.value = itens[index].status
  } else {
    sNome.value = ''
    sPlano.value = ''
    sTelefone.value = ''
    sCPF.value = ''
    sEmail.value = ''
    sStatus.value = ''
  }
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.plano}</td>
    <td>${item.telefone}</td>
    <td>${item.cpf}</td>
    <td>${item.email}</td>
    <td>${item.status}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
  
}

btnSalvar.onclick = e => {
  if (
    sNome.value == '' 
  || sPlano.value == '' 
  || sTelefone.value == '' 
  || sTelefone.value == '' 
  || sCPF.value == '' 
  || sEmail.value == ''
  || sStatus.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].plano = sPlano.value
    itens[id].telefone = sTelefone.value
    itens[id].cpf = sCPF.value
    itens[id].email = sEmail.value
    itens[id].status = sStatus.value
  } else {
    itens.push({
    'nome': sNome.value, 
    'plano': sPlano.value, 
    'telefone': sTelefone.value, 
    'cpf': sCPF.value, 
    'email': sEmail.value,
    'status': sStatus.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()