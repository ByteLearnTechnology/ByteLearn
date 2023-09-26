const usuario = JSON.parse(sessionStorage.getItem('db_usuario'));

document.addEventListener('DOMContentLoaded', () => {
  if (!usuario || usuario.conexao !== true) {
    alert('Conexão inválida. Faça o login');
    window.location.href = '../../index.html';
  }
});
