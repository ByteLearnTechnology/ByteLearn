const usuarioTeste = {
  login: "teste",
  senha: "teste"
}

const u = JSON.stringify(usuarioTeste);
sessionStorage.setItem("db_usuario", u);