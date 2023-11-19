/**
 * Retorna o primeiro elemento que corresponde ao seletor CSS especificado.
 *
 * @param {string} elemento - O seletor CSS do elemento a ser selecionado.
 * @returns {HTMLElement} Retorna o elemento correspondente ao seletor CSS especificado.
 */
const $ = (elemento) => document.querySelector(elemento);

/**
 * Manipula o evento de clique no botão de login.
 * Verifica os dados do usuário armazenados na sessão e redireciona para a página inicial se os dados forem válidos.
 * Mostra um alerta se os dados de login forem inválidos.
 *
 * @param {Event} ev - O objeto de evento gerado pelo clique no botão de login.
 */
$('#logar').addEventListener('click', (ev) => {
  ev.preventDefault();
  logar(true)
  // window.location.assign('./pages/tela-inicial/index.html')
  return
  // Recupera os dados do usuário da sessão.
  const usuario = JSON.parse(sessionStorage.getItem('db_usuario'));

  // Verifica se há um usuário na sessão e valida os dados de login.
  if (!usuario || !validarDados(usuario.login, usuario.senha)) {
    alert('Dados inválidos');
    return;
  }

  // Define a propriedade 'conexao' como true e atualiza os dados do usuário na sessão.
  usuario.conexao = true;
  sessionStorage.setItem('db_usuario', JSON.stringify(usuario));

  // Redireciona para a página inicial.
});

/**
 * Valida os dados de login do usuário.
 *
 * @param {string} login - O nome de usuário inserido pelo usuário.
 * @param {string} senha - A senha inserida pelo usuário.
 * @returns {boolean} Retorna true se os dados de login são válidos, caso contrário, retorna false.
 */
function validarDados(login, senha) {
  return login === $('#usuario').value && senha === $('#senha').value;
};


async function logar(loginPage) {
  const inputItems = JSON.stringify({
    login: $('#usuario').value,
    password: $('#senha').value
  });

  try {
    const response = await fetch('https://back-gymapi.onrender.com/api/user/login', {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: inputItems,
    });

    if (!response.ok) {
      const customError = await response.json()
      throw new Error(`Erro HTTP: ${customError.status} - ${customError.error}`);
    }

    const data = await response.json();
    sessionStorage.setItem('db_usuario', JSON.stringify(data));

  if (loginPage) {
    window.location.assign('./pages/tela-inicial/index.html');
  }
  
    return data;
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error; // Propaga o erro para quem chamou a função
  }
}
