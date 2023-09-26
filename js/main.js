const $ = (elemento) => document.querySelector(elemento);

$('#logar').addEventListener('click', (ev) => {
  ev.preventDefault();

  const usuario = JSON.parse(sessionStorage.getItem('db_usuario'));

  if (!usuario || !validarDados(usuario.login, usuario.senha)) {
    alert('Dados inválidos');
    return;
  }

  usuario.conexao = true;
  sessionStorage.setItem('db_usuario', JSON.stringify(usuario));

  window.location.href = '../pages/tela-inicial';
});

function validarDados(login, senha) {
  return login === $('#usuario').value && senha === $('#senha').value;
};