const $ = (elemento) => document.querySelector(elemento);

$('#logar').addEventListener('click', (ev) => {
  ev.preventDefault();

  const {login, senha} = JSON.parse(sessionStorage.getItem('db_usuario'));

  if (!validarDados(login, senha)) {
    alert('Dados inválidos');
    return;
  }

  window.location.href = '../pages/tela-inicial';
});

function validarDados(login, senha) {
  return login === $('#usuario').value && senha === $('#senha').value;
};