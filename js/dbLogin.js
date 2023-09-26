const usuarioTeste = {
  login: "teste",
  senha: "teste",
  conexao: false
}

const u = JSON.stringify(usuarioTeste);
sessionStorage.setItem("db_usuario", u);