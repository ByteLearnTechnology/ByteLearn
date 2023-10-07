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

function voltar() {
  window.history.back();
}

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
    sTelefone.value = itens[index].telefone
    sCPF.value = itens[index].cpf
    sEmail.value = itens[index].email
    id = index
    sPlano.value = itens[index].plano
    sStatus.value = itens[index].status
  } else {
    sNome.value = ''
    sTelefone.value = ''
    sCPF.value = ''
    sEmail.value = ''
    sPlano.value = ''
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
    <td>${item.telefone}</td>
    <td>${item.cpf}</td>
    <td>${item.email}</td>
    <td>${item.plano}</td>
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
  || sTelefone.value == '' 
  || sTelefone.value == '' 
  || sCPF.value == '' 
  || sEmail.value == ''
  || sPlano.value == '' 
  || sStatus.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].telefone = sTelefone.value
    itens[id].cpf = sCPF.value
    itens[id].email = sEmail.value
    itens[id].plano = sPlano.value
    itens[id].status = sStatus.value
  } else {
    itens.push({
    'nome': sNome.value, 
    'telefone': sTelefone.value, 
    'cpf': sCPF.value, 
    'email': sEmail.value,
    'plano': sPlano.value, 
    'status': sStatus.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function ordenar(ascendente, coluna) {
  if (coluna == 'nome') {
    itens.sort((a, b) => (a.nome > b.nome) ? ascendente.a : ((b.nome > a.nome) ? ascendente.b : 0));
  } else if (coluna == 'telefone') {
    itens.sort((a, b) => (a.telefone > b.telefone) ? ascendente.a : ((b.telefone > a.telefone) ? ascendente.b : 0));
  } else if (coluna == 'cpf') {    
    itens.sort((a, b) => (a.cpf > b.cpf) ? ascendente.a : ((b.cpf > a.cpf) ? ascendente.b : 0));
  } else if (coluna == 'email') {
    itens.sort((a, b) => (a.email > b.email) ? ascendente.a : ((b.email > a.email) ? ascendente.b : 0));
  } else if (coluna == 'plano') {
    itens.sort((a, b) => (a.plano > b.plano) ? ascendente.a : ((b.plano > a.plano) ? ascendente.b : 0));
  }
  else if (coluna == 'status') {itens.sort((a, b) => (a.status > b.status) ? ascendente.a : ((b.status > a.status) ? ascendente.b : 0));
  }
}
let ordem = {a: -1, b: 1}

function loadItens(tituloColuna) {
  const setOrdem = ordem.a === -1 && ordem.b === 1 ? ordem = {a: 1, b: -1} : ordem = {a: -1, b: 1}
  itens = getItensBD()
  ordenar(ordem, tituloColuna)

  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}
function searchData() {
  // Pega o valor do campo de busca
  var searchText = document.getElementById("searchInput").value.toLowerCase();

  // Pega a tabela dentro da div
  var table = document.querySelector(".divTable table");

  // Pega todas as linhas (tr) da tabela
  var rows = table.querySelectorAll("tbody tr");

  // Itera pelas linhas da tabela
  for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var rowData = row.textContent.toLowerCase();

      // Verifica se a linha contém o texto de busca
      if (rowData.includes(searchText)) {
          row.style.display = "";
      } else {
          row.style.display = "none"; // Esconde a linha se não contém o texto de busca
      }
  }
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()