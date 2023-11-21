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
const sData = document.querySelector('#m-data')
const vData = document.querySelector('#m-data-vencimento')

let itens
let copyItens
let id
let statusPayment

async function loadBackend() {
  await loadStatus()
  await loadPlanos()
  await loadStudentsBD()
}

loadBackend()
const getItensBack = () => JSON.parse(localStorage.getItem('dbBackend')) ?? []

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
    sNome.value = itens[index].name
    sTelefone.value = itens[index].phone
    sCPF.value = itens[index].cpf
    sData.value = formatData(itens[index].finance.payday, '-')
    vData.value = formatData(itens[index].finance.dueDate, '-')
    sEmail.value = itens[index].email
    id = index
    sPlano.value = itens[index].finance.plan.id
    sStatus.value = itens[index].status.id
  } else {
    sNome.value = ''
    sTelefone.value = ''
    sCPF.value = ''
    sEmail.value = ''
    sPlano.value = ''
    sStatus.value = ''
    sData.value = ''
  }
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(id) {
  const confirmDelete = window.confirm('Realmente deseja apagar este dado?')
  if (confirmDelete) {
    deleteStudent(id)
    loadStudentsBD()
  }
}

function insertItem(item, index) {
  let tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.phone}</td>
    <td>${item.cpf}</td>
    <td>${item.finance.payday}</td>
    <td>${item.email}</td>
    <td>${item.finance.plan.description}</td>
    <td>${item.status.description}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${item.id})"><i class='bx bx-trash'></i></button>
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
    || sData.value == ''
    || sEmail.value == ''
    || sPlano.value == ''
    || sStatus.value == '') {
    return
  }

  e.preventDefault();
  if (id !== undefined) {
    const student = {
      id: itens[id].id,
      name: sNome.value,
      phone: sTelefone.value,
      cpf: sCPF.value,
      email: sEmail.value,
      plan_id: sPlano.value,
      status_id: sStatus.value,
      finance_id: itens[id].finance.id,
      date: sData.value,
      dueDate: vData.value
    }
    updateStudent(student)
  } else {
    const student = {
      name: sNome.value,
      phone: sTelefone.value,
      cpf: sCPF.value,
      email: sEmail.value,
      plan_id: sPlano.value,
      status_id: sStatus.value,
      date: sData.value,
      dueDate: vData.value
    }
    insertStudent(student)
  }

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function ordenar(ascendente, coluna) {
  if (coluna === 'plan') {
    copyItens.sort((a, b) => (a.finance.plan.description
      > b.finance.plan.description
    ) ? ascendente.a : ((b.finance.plan.description
      > a.finance.plan.description
    ) ? ascendente.b : 0))
  } else if(coluna === 'date'){
    copyItens.sort((a, b) => (a.finance.payday
      > b.finance.payday
    ) ? ascendente.a : ((b.finance.payday
      > a.finance.payday
    ) ? ascendente.b : 0))
  } else if(coluna === 'status'){
    copyItens.sort((a, b) => (a.status.description
      > b.status.description
    ) ? ascendente.a : ((b.status.description
      > a.status.description
    ) ? ascendente.b : 0))
  } else
    copyItens.sort((a, b) => (a[coluna] > b[coluna]) ? ascendente.a : ((b[coluna] > a[coluna]) ? ascendente.b : 0));
}

let ordem = { a: -1, b: 1 }

function loadItens(tituloColuna) {
  const setOrdem = ordem.a === -1 && ordem.b === 1 ? ordem = { a: 1, b: -1 } : ordem = { a: -1, b: 1 }
  itens = getItensBack()
  copyItens = getItensBack()

  copyItens.map(item => { item.finance.payday = formatData(item.finance.payday, '/'); return item })
  ordenar(ordem, tituloColuna)
  tbody.innerHTML = ''
  copyItens.forEach((item, index) => {
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

async function deleteStudent(id) {
  const response = await fetch(`https://back-gymapi.onrender.com/api/enrolled/{id}?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': '*/*',
    },
  });
}

function tratmentDate(data) {
  const dateJS = (date) => new Date(date)
  return JSON.stringify(data.map(student => {
    if(student.status.id === 1){
      if (dateJS(student.finance.dueDate) > dateJS()) {
        student.status.description = statusPayment[2].description
        student.status.id = statusPayment[2].id
      } else {
        student.status.description = statusPayment[0].description
        student.status.id = statusPayment[0].id
      }
    }
    return student
  }))
}

async function loadStudentsBD() {
  await fetch('https://back-gymapi.onrender.com/api/enrolled', {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    },
  }).then(data => data.json())
    .then(
      data => {
        localStorage.setItem('dbBackend', tratmentDate(data))
      }
    )
  loadItens()
}

async function loadStatus() {
  const response = await fetch('https://back-gymapi.onrender.com/api/status', {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    },
  }).then(data => data.json())
  statusPayment = response
  sStatus.innerHTML = `
<option style="display: none;" selected disabled value="">Selecione o status</option>
${response.map(data => `<option value="${data.id}">${data.description}</option>`)}
`
}

async function loadPlanos() {
  const response = await fetch('https://back-gymapi.onrender.com/api/plan', {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    },
  }).then(data => data.json())

  sPlano.innerHTML = `
  <option style="display: none;" selected disabled value="">Selecione um plano</option>
${response.map(data => `<option value="${data.id}">${data.description}</option>`)}
`
}

async function insertStudent(student) {
  const createFinanceResponse = await createFinance(student.date, student.dueDate, student.plan_id)

  const studentJson = JSON.stringify({
    name: student.name,
    phone: student.phone,
    cpf: student.cpf,
    email: student.email,
    status_id: student.status_id,
    finance_id: createFinanceResponse.id
  })

  try {
    const createStudent = await fetch('https://back-gymapi.onrender.com/api/enrolled', {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: studentJson,
    });
    if (!createStudent.ok) {
      const customError = await response.json()
      alert('Erro, se persistir contate os desenvolvedores')
      throw new Error(`Erro HTTP: ${customError.status} - ${customError.error}`);
    }
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error; // Propaga o erro para quem chamou a função
  }

  loadStudentsBD()
}

async function updateStudent(student) {
  const { name, phone, cpf, email, plan_id, status_id, finance_id, date, dueDate } = student

  updateFinance(date, dueDate, plan_id)

  const studentJson = JSON.stringify({
    name,
    phone,
    cpf,
    email,
    status_id,
    finance_id
  })

  const url = `https://back-gymapi.onrender.com/api/enrolled/${itens[id].id}`
  try {
    const updateStudent = await fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: studentJson,
    });
    if (!updateStudent.ok) {
      const customError = await response.json()
      alert('Erro, se persistir contate os desenvolvedores')
      throw new Error(`Erro HTTP: ${customError.status} - ${customError.error}`);
    }
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error; // Propaga o erro para quem chamou a função
  }
  loadStudentsBD()
}

async function updateFinance(date, dueDate, plan_id) {
  const financeJson = JSON.stringify({
    payday: formatarDataHora(date),
    dueDate: formatarDataHora(dueDate),
    plan_id: Number(plan_id),
    planMonths: 1
  })

  const url = `https://back-gymapi.onrender.com/api/finance/${itens[id].finance.id}`

  try {
    const updateFincance = await fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: financeJson,
    });

    if (!updateFincance.ok) {
      const customError = await updateFincance.json()
      alert('Erro, se persistir contate os desenvolvedores')
      throw new Error(`Erro HTTP: ${customError.status} - ${customError.error}`);
    }

  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error; // Propaga o erro para quem chamou a função
  }
}

async function createFinance(date, dueDate, plan) {
  const financeJson = JSON.stringify({
    payday: formatarDataHora(date),
    dueDate: formatarDataHora(dueDate),
    plan_id: plan,
    planMonths: 1
  })

  try {
    const createFinance = await fetch('https://back-gymapi.onrender.com/api/finance', {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: financeJson,
    });
    if (!createFinance.ok) {
      const customError = await createFinance.json()
      alert('Erro, se persistir contate os desenvolvedores')
      throw new Error(`Erro HTTP: ${customError.status} - ${customError.error}`);
    }
    return await createFinance.json();
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error; // Propaga o erro para quem chamou a função
  }
}

function formatarDataHora(date) {
  const dataAtual = new Date(date);

  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const dia = String(Number(dataAtual.getDate()) + 1).padStart(2, '0');

  const hora = String(dataAtual.getHours()).padStart(2, '0');
  const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
  const segundo = String(dataAtual.getSeconds()).padStart(2, '0');
  const milissegundo = String(dataAtual.getMilliseconds()).padStart(3, '0');

  const dataHoraFormatada = `${ano}-${mes}-${dia}T${hora}:${minuto}:${segundo}.${milissegundo}Z`;
  return dataHoraFormatada
}

function formatData(dateString, separator) {
  const parsedDate = new Date(dateString);

  if (isNaN(parsedDate.getTime())) {
    console.error('Erro: Data inválida.');
    return null;
  }

  let formattedDateString = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(parsedDate);
  formattedDateString = separator === '/' ? formattedDateString : formattedDateString.split('/').reverse().join('-')
  return formattedDateString
}