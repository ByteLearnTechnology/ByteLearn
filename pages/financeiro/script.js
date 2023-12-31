const itensBD = JSON.parse(localStorage.getItem('dbfunc')) ?? []
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sData = document.querySelector('#m-data')
const btnSalvar = document.querySelector('#btnSalvar')
const btnFechar = document.querySelector('.btn-close-modal')
const sStatus = document.querySelector('#m-status')

let itens
let copyItens
let id


let ordem = { a: -1, b: 1 }

function ordenar(ascendente, coluna) {
  copyItens.sort((a, b) => (a[coluna] > b[coluna]) ? ascendente.a : ((b[coluna] > a[coluna]) ? ascendente.b : 0));
}

function loadItens(tituloColuna) {
  const setOrdem = ordem.a === -1 && ordem.b === 1 ? ordem = { a: 1, b: -1 } : ordem = { a: -1, b: 1 }
  itens = getItensBD()
  copyItens = getItensBD()
  copyItens.map(item => {item.data = item.data.split('-').reverse().join('/'); return item})
  ordenar(ordem, tituloColuna)

  tbody.innerHTML = ''
  copyItens.forEach((item, index) => {
    insertItem(item, index)
  })

}

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
    id = index
    sData.value = itens[index].data
    sStatus.value = itens[index].status
  } else {
    sNome.value = ''
    sData.value = ''
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
    <td>${item.data}</td>
    <td>${item.status}</td>    
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
  `
  tbody.appendChild(tr)

}

btnSalvar.onclick = e => {
  if (
    sNome.value == ''
    || sData.value == ''
    || sStatus.value == '') {
    return
  }

  e.preventDefault();
  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].status = sStatus.value
    itens[id].data = sData.value
  } else {
    itens.push({
      'nome': sNome.value,
      'status': sStatus.value,
      'data': sData.value
    })
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
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

loadItens()