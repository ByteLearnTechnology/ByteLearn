// Objeto de exemplo representando um usuário com informações de login.
const usuarioTeste = {
  login: "teste",
  senha: "teste",
  conexao: false
}
// Converte o objeto usuarioTeste para uma string JSON.
const u = JSON.stringify(usuarioTeste);

// Armazena a string JSON na sessão com a chave "db_usuario"
sessionStorage.setItem("db_usuario", u);

// Este código cria um objeto chamado usuarioTeste com informações de login pré-definidas.
// Em seguida, converte esse objeto para uma string JSON usando JSON.stringify.
// A string JSON é armazenada na sessão do navegador com a chave "db_usuario" usando o método sessionStorage.setItem.
// Esta informação pode ser acessada e utilizada posteriormente enquanto a sessão do navegador estiver ativa.