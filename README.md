
# GYM MANAGER

## Versão: 3.3.0

## Status do Projeto: ⚠️ Espera

## Tópicos

🔹 [Descrição do projeto](#descrição-do-projeto)


🔹 [Funcionalidades](#funcionalidades-%EF%B8%8F)


🔹 [Distribuição](#distribuição)

  

🔹 [Pré-requisitos](#pr%C3%A9-requisitos-%EF%B8%8F)

  

🔹 [Como rodar a aplicação](#como-rodar-a-aplicação)

  

🔹 [Testes realizados](#testes-realizados)

    

🔹 [Linguagens, dependências e libs utilizadas](#linguagens-dependencias-e-libs-utilizadas-)



🔹 [Recursos inseridos](#recursos-de-inseridos-)

  

🔹 [Desenvolvedores/Contribuintes](#desenvolvedorescontribuintes)



## Descrição do projeto

O projeto tem como objetivo apresentar um sistema de gerenciamento para academias, desenvolvido por um grupo de estudantes do Centro universitário Facens. O sistema foi criado para ajudar a simplificar e otimizar as operações de academias, incluindo a administração de membros, controle financeiro.

  

## Funcionalidades ⚙️

1. Autenticação: Somente pessoas autorizadas podem acessar o sistema.  ✔️
2. Cadastro de clientes e funcionários: Nele cadastramos os clientes e seus dados pessoais  ✔️
3. Controle Financeiro: Aqui listamos os clientes de acordo com nome, data de pagamento e status  ✔️

## Distribuição

[Versão online](https://bytelearntechnology.github.io/ByteLearn/)

## Pré-requisitos ⚠️

#### Navegador de internet: chrome, edge e mozilla firefox

#### Aparelhos utilizados para testes: 

- HP ProBook 640 G4 com sistema operacional ubuntu 22.04.3 LTS

- Smartphone moto g 30 com android 12

- Navegador de internet atualizado: chrome, edge e mozilla firefox

## Como rodar a aplicação

Entrar no [site](https://bytelearntechnology.github.io/ByteLearn/) para testar, no campo usuário inserir teste e no campo senha inserir teste e clicar em entrar. Após isso você sera direcionado a uma tela inicial contendo duas caixa nelas com seus respectivos nomes e o botão acessar, ao clicar neste botão será levado a página de destino. Lembresse se ao adentrar na página de financeiro tera que conter usuários cadastrados senão verá as tabelas em branco. Na tela de usuários clique no botão incluir lado direito superior da tela, prencha o formulario e clique em salvar.
Agora você vera na tabela dois botões, excluir ao clicar nele você apaga o usuário da tabela e o de editar que abre o formulário outra vez e altera o usuário.
Caso prefira podera baixar nosso [sistema](https://github.com/ByteLearnTechnology/ByteLearn/archive/refs/heads/main.zip) e utiliza-lo localmente clique neste [link](https://github.com/ByteLearnTechnology/ByteLearn/archive/refs/heads/main.zip) e baixe a versão mais atualizada.
Após a extração abra a pasta ByteLearn-main de um duplo clique no arquivo index.html e abrira o programa. Usuario e senha são teste

Caso prefira podera usar o git para baixar e ter o controle do código fonte
```
git clone git@github.com:ByteLearnTechnology/ByteLearn.git
```
## Testes realizados


- [Informativo](#informativo)
- [Teste de Sistema](#teste-de-sistema)
- [Teste de aceitação](#teste-de-aceitação) 
- [Caixa Branca](#caixa-branca)
- [Testes não funcionais](#testes-não-funcionais)


#### Informativo

| CLIENTE      | [NOME DO CLIENTE]         | AMBIENTE DE TESTE | [VERSÃO DO PROJETO]              |
|--------------|---------------------------|-------------------|----------------------------------|
| PROJETO      | GYM MENAGER               | DESKTOP/MOBILLE   | RYZEN 5, 16GB RAM                |
| COLABORADOR  | JOÃO CANDIANI RENAN FELIX | ANDROID           | ANDROID 13                       |
| REVISADO     | GUILHERME VIEIRA          | WINDOWS 11        | OPERA GX                         |
| DATA CRIAÇÃO | 9/10/2023                 | DESKTOP           | [VERSÃO DO PROJETO]              |
| TESTADO POR  | JOÃO CANDIANI RENAN FELIX | DESKTOP/MOBILLE   | RYZEN 5, 16GB RAM SANSUNG M52 5G |


<table>
<thead>
  <tr>
    <th colspan="4">HISTÓRICO DE REVISÕES</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>DATA</td>
    <td>ATUALIZADO POR</td>
    <td>DESCRIÇÃO DA ATUALIZAÇÃO</td>
    <td>VERSÃO DA APP</td>
  </tr>
  <tr>
    <td>8/nov</td>
    <td>Douglas Machado.<br></td>
    <td>Criado readme</td>
    <td>3.3</td>
  </tr>
  <tr>
    <td>7/nov</td>
    <td>Douglas Machado.</td>
    <td>Alterado lista do financeiro<br></td>
    <td>3.2</td>
  </tr>
  <tr>
    <td>7/nov</td>
    <td>Douglas Machado.<br></td>
    <td>Alteado forma como é mostrado o data na lista do financeiro</td>
    <td>3.1</td>
  </tr>
  <tr>
    <td>7/nov</td>
    <td>Douglas Machado.</td>
    <td>Alterado tela inicial e alterado financeiro</td>
    <td>3.0</td>
  </tr>
  <tr>
    <td>7/nov</td>
    <td>Douglas Machado.<br></td>
    <td>Delete pages/relatorio directory</td>
    <td>2.9</td>
  </tr>
  <tr>
    <td>6/nov</td>
    <td>Guilherme Silva.</td>
    <td>Documentação da tela de login<br></td>
    <td>2.8</td>
  </tr>
  <tr>
    <td>23/out</td>
    <td>Douglas Machado.<br></td>
    <td>Fix: Erros nas tabelas.</td>
    <td>2.7</td>
  </tr>
  <tr>
    <td>22/out</td>
    <td>Douglas Machado.</td>
    <td>Feat: Criado funções na tela de financeiro</td>
    <td>2.6</td>
  </tr>
  <tr>
    <td>21/out</td>
    <td>Luiz Silva.<br></td>
    <td>Tela de início – Card.</td>
    <td>2.5</td>
  </tr>
  <tr>
    <td>17/out</td>
    <td>Guilherme Vieira.<br></td>
    <td>Modulo financeiro iniciado.</td>
    <td>2.4</td>
  </tr>
  <tr>
    <td>9/out</td>
    <td>Douglas Machado.<br></td>
    <td>Fix: Botão voltar responsivo.</td>
    <td>2.3</td>
  </tr>
  <tr>
    <td>7/out</td>
    <td>Douglas Machado.</td>
    <td>Feat: A listagem agora é alterada<br> quando se clica no título da coluna.</td>
    <td>2.2</td>
  </tr>
  <tr>
    <td>5/out</td>
    <td>Luiz Silva.<br></td>
    <td>Botão back.</td>
    <td>2.1</td>
  </tr>
  <tr>
    <td>5/out</td>
    <td>Guilherme Vieira.<br></td>
    <td>Adicionando planos.</td>
    <td>2.0</td>
  </tr>
  <tr>
    <td>5/out</td>
    <td>Douglas Machado.<br></td>
    <td>Feat: Criado botão voltar.</td>
    <td>1.9</td>
  </tr>
  <tr>
    <td>5/out</td>
    <td>Douglas Machado.<br></td>
    <td>Feat: Plano agora é um option select.</td>
    <td>1.8</td>
  </tr>
  <tr>
    <td>4/out</td>
    <td>Luiz Silva.<br></td>
    <td>Responsividade da tela de cadastro.</td>
    <td>1.7</td>
  </tr>
  <tr>
    <td>4/out</td>
    <td>Luiz Silva.</td>
    <td>Atualização da tela de cadastro, <br>botão de busca.</td>
    <td>1.6</td>
  </tr>
  <tr>
    <td>3/out</td>
    <td>Luiz Silva.<br></td>
    <td>Atualização tela de login.</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td>3/out</td>
    <td>Douglas Machado.<br></td>
    <td>Adicionado campo ás tabelas e status.</td>
    <td>1.4</td>
  </tr>
  <tr>
    <td>2/out</td>
    <td>Guilherme Vieira.<br></td>
    <td>Alterações tela de cadastro.</td>
    <td>1.3</td>
  </tr>
  <tr>
    <td>1/out</td>
    <td>Douglas Machado.<br></td>
    <td>Fixado rotas e comprimindo arquivos.</td>
    <td>1.2</td>
  </tr>
  <tr>
    <td>27/set</td>
    <td>Douglas Machado.<br></td>
    <td>Styles: alterado resposividade.</td>
    <td>1.1</td>
  </tr>
</tbody>
</table>

#### Teste de Sistema
| ID | TITULO             | FUNCIONALIDADE/COMPONENTE   | EXECUÇÃO                                                                                                                                                                     | RESULTADO ESPERADO                                                                          | STATUS | OBS. |
|----|--------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|--------|------|
| 1  | Tela de login      | Campo Usuário e Campo Senha | 1- INSERE USUÁRIO NO PRIMEIRO CAMPO 2 - DIGITA A SENHA NO CAMPO SENHA 3 - ACIONA O BOTÃO ENTRAR                                                                              | 1 - USUÁRIO LOGA COM SUCESSO 2 - TEM ACESSO AO AMBIENTE DO SISTEMA                          | OK     |      |
| 2  | Tela de login      | Campo Usuário e Campo Senha | 1 - INSERE UM DADO INVÁLIDO NO PRIMEIRO CAMPO 2 - DIGITA SENHA CORRETA 3 - ACIONA O BOTÃO ENTRAR                                                                             | 1 - USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR. [USUÁRIO OU SENHA INCORRETOS]                  | OK     |      |
| 3  | Tela de login      | Campo Usuário e Campo Senha | 1 - INSERE UM USUÁRIO NÃO CADASTRADO NO PRIMEIRO CAMPO 2 - DIGITA UMA SENHA CORRETA 3 - ACIONA O BOTÃO ENTRAR                                                                | 1 - USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR. [USUÁRIO OU SENHA INCORRETOS]                  | OK     |      |
| 4  | Tela de login      | Campo Usuário e Campo Senha | 1 - INSERE UM USUÁRIO CADASTRADO 2 - DIGITA UMA SENHA INCORRETA 3 - ACIONA O BOTÃO ENTRAR                                                                                    | 1 - USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR. [USUÁRIO OU SENHA INCORRETOS]                  | OK     |      |
| 5  | Tela de login      | Responsividade              | 1 - USUÁRIO DIMINUI O TAMANHO DA PÁGINA                                                                                                                                      | 1 - SEGUIR DE ACORDO O TAMANHO DA TELA DO NAVEGADOR DO USUÁRIO, SEM INTERFERIR NA INTERFACE | OK     |      |
| 6  | Tela de menu       | Botão de Relatórios         | 1 - ACIONA O BOTÃO DE ACESSAR (RELATÓRIOS)                                                                                                                                   | 1 - TEM ACESSO A PÁGINA DE RELATÓRIOS                                                       | OK     |      |
| 7  | Tela de menu       | Botão de Cadastro           | 1 - ACIONA O BOTÃO DE ACESSAR (CADASTRO)                                                                                                                                     | 1 - USUÁRIO REDIRECIONADO AO AMBIENTE DE CADASTRO                                           | OK     |      |
| 8  | Tela de menu       | Botão de Financeiro         | 1 - ACIONA O BOTÃO DE ACESSAR (FINANCEIRO)                                                                                                                                   | 1 - USUÁRIO REDIRECIONADO AO AMBIENTE DE FINANCEIRO                                         | OK     |      |
| 9  | Tela de cadastro   | Botão de Inclusão           | 1 - ACIONA O BOTÃO DE INCLUIR                                                                                                                                                | 1 - MOSTRAR A TELA PARA PREENCHIMENTO DAS INFORMAÇÕES                                       | OK     |      |
| 10 | Tela de cadastro   | Campo de Inclusão           | 1 - DIGITA NOME VÁLIDO 2 - DIGITA TELEFONE VÁLIDO 3 - DIGITA CPF VÁLIDO 4 - DIGITA EMAIL VÁLIDO 5 - SELECIONA UM PLANO 6 - SELECIONA UM STATUS 7 - ACIONA O BOTÃO SALVAR     | 1 - INCLUI O CADASTRO AOS REGISTROS                                                         | OK     |      |
| 11 | Tela de cadastro   | Campo de Inclusão           | 1 - NÃO DIGITA NOME 2 - DIGITA TELEFONE VÁLIDO 3 - DIGITA CPF VÁLIDO 4 - DIGITA EMAIL VÁLIDO 5 - SELECIONA UM PLANO 6 - SELECIONA UM STATUS 7 - ACIONA O BOTÃO SALVAR        | 1 - O USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [Necessário preenchimento de todos os campos] | OK     |      |
| 12 | Tela de cadastro   | Campo de Inclusão           | 1 - DIGITA NOME VÁLIDO 2 - NÃO DIGITA TELEFONE  3 - DIGITA CPF VÁLIDO 4 - DIGITA EMAIL VÁLIDO 5 - SELECIONA UM PLANO 6 - SELECIONA UM STATUS 7 - ACIONA O BOTÃO SALVAR       | 1 - O USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [Necessário preenchimento de todos os campos] | OK     |      |
| 13 | Tela de cadastro   | Campo de Inclusão           | 1 - DIGITA NOME VÁLIDO 2 - DIGITA TELEFONE VÁLIDO 3 - NÃO DIGITA CPF 4 - DIGITA EMAIL VÁLIDO 5 - SELECIONA UM PLANO 6 - SELECIONA UM STATUS 7 - ACIONA O BOTÃO SALVAR        | 1 - O USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [Necessário preenchimento de todos os campos] | OK     |      |
| 14 | Tela de cadastro   | Campo de Inclusão           | 1 - DIGITA NOME VÁLIDO 2 - DIGITA TELEFONE VÁLIDO 3 - DIGITA CPF VÁLIDO 4 - NÃO DIGITA EMAIL 5 - SELECIONA UM PLANO 6 - SELECIONA UM STATUS 7 - ACIONA O BOTÃO SALVAR        | 1 - O USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [Necessário preenchimento de todos os campos] | OK     |      |
| 15 | Tela de cadastro   | Campo de Inclusão           | 1 - DIGITA NOME VÁLIDO 2 - DIGITA TELEFONE VÁLIDO 3 - DIGITA CPF VÁLIDO 4 - DIGITA EMAIL VÁLIDO 5 - NÃO SELECIONA UM PLANO 6 - SELECIONA UM STATUS 7 - ACIONA O BOTÃO SALVAR | 1 - O USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [Necessário preenchimento de todos os campos] | OK     |      |
| 16 | Tela de cadastro   | Campo de Inclusão           | 1 - DIGITA NOME VÁLIDO 2 - DIGITA TELEFONE VÁLIDO 3 - DIGITA CPF VÁLIDO 4 - DIGITA EMAIL VÁLIDO 5 - SELECIONA UM PLANO 6 - NÃO SELECIONA UM STATUS 7 - ACIONA O BOTÃO SALVAR | 1 - O USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [Necessário preenchimento de todos os campos] | OK     |      |
| 17 | Tela de cadastro   | Campo de Cadastro           | 1 - ACIONAR O BOTÃO DE LIXEIRA (EXCLUIR) DO USUÁRIO DESEJADO                                                                                                                 | 1 - EXCLUSÃO DO USUÁRIO DA LISTA DE REGISTROS                                               | OK     |      |
| 18 | Tela de cadastro   | Campo de Cadastro           | 1 - ACIONA O BOTÃO EDITAR DO USUÁRIO DESEJADO                                                                                                                                | 1 - MOSTRAR A TELA PARA EDIÇÃO DAS INFORMAÇÕES DO USUÁRIO                                   | OK     |      |
| 19 | Tela de financeiro | Campo de financeiro         | 1 - APLICAR OS FILTROS DESEJADOS 2 - ACIONAR O BOTÃO FILTRAR                                                                                                                 | 1- USUÁRIO VISUALIZA OS DADOS COM O FILTRO APLICADO                                         | OK     |      |
| 20 | Tela de financeiro | Campo de financeiro         | 1 - NÃO APLICA OS FILTROS  2 - ACIONAR O BOTÃO FILTRAR                                                                                                                       | 1- USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [Necessário aplicar um filtro]                   | OK     |      |
| 21 | Tela de relatório  | Campo de Filtros            | 1 - APLICAR OS FILTROS DESEJADOS 2 - ACIONAR O BOTÃO FILTRAR                                                                                                                 | 1 - USUÁRIO VISUALIZA OS DADOS COM OS FILTROS APLICADOS                                     | OK     |      |
| 22 | Tela de relatório  | Campo de Filtros            | 1 - NÃO APLICA OS FILTROS 2 - ACIONAR O BOTÃO FILTRAR                                                                                                                        | 1- USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [Necessário aplicar um filtro]                   | OK     |      |

#### Teste de aceitação 
| ID | REQUISITO                                                                                                                                                                                                                                                                                                                         | OPERAÇÃO                                                                                                                                                                                                                                      | RESULTADO ESPERADO                                                                                                                                                                                                                                                                             | COMENTÁRIO DO CLIENTE                                                                        | STATUS | RISCOS/AÇÕES                                                                                                                                                                                                                                                |
|----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | O CAMPO DE USUÁRIO CORRESPONDE AO ITEM DA TELA DE LOGIN E TRATA DE UM DOS ITENS DE IDENTIFICAÇÃO DO USUÁRIO PERANTE AO SERVIDOR. O CAMPO PODE SER PREENCHIDO COM OS VALORES NOME DE USUÁRIO O CAMPO SENHA É UM DOS INTENS DE IDENTIFICAÇÃO DO USUÁRIO O CAMPO PODE SER PREENCHIDO COM NUMEROS                                     | 1- OS CAMPOS CONTÉM UMA LEGENDA ACIMA DO CAMPO DE  DIGITAÇÃO PARA INSERIR UM  DOS DOIS TIPOS DE DADO [NOME DE  USUÁRIO E SENHA] 2. - AO INSERIR UM DOS VALORES O USUÁRIO DEVE INSERIR A SENHA E ACIONAR O BOTÃO DE ENTRAR.                    | 1 - OS DADOS SÃO ENVIADOS PARA O SERVIDOR E SERÃO CONFERIDOS; 2 - CASO O DADO (OU OS DADOS) ESTEJA CORRETO, O USUÁRIO TERÁ ACESSO A TELA DO AMBIENTE; 3 - CASO UM DOS DOIS (OU OS DOIS) DADOS ESTIVER INCORRETO IRÁ APARECER UMA MENSAGEM DO SERVIDOR INFORMANDO O USUÁRIO. [DADOS INVÁLIDOS]; | 1 - Informar que o E-mail ou Nome de  Usuário é inválido 2 - Informar que a senha é inválida |        | 1 - NO CAMPO DE INSERIR E-MAIL, ALERTAR O  USUÁRIO  [Esse nome de usuário é inválido] 2 - NO CAMPO DE INSERIR A SENHA [A senha é necessário que ela tenha pelo menos 15  caracteres Ou pelo menos 8 caracteres, incluindo um  número e uma letra minúscula] |
| 2  | O CAMPO DE SENHA CORRESPONDE A UM DOS ITENS A SEREM UTILIZADOS PARA IDENTIFICAR O USUÁRIO E DAR ACESSO NO SISTEMA AO MESMO                                                                                                                                                                                                        | 1 - O CAMPO CONTÉM UMA  LEGENDA ACIMA DO CAMPO DE DIGITAÇÃO PARA INSERIR A SENHA 2 - INSERIU UM NOME DE USUÁRIO VÁLIDO E CADASTRADO; 3  - APÓS A INSERÇÃO DO DADO ACIMA USUÁRIO INSERE A SENHA VÁLIDA AO CADASTRO E ACIONAR O BOTÃO DE ENTRAR | 1 - OS DADOS SÃO ENVIADOS PARA O SERVIDOR E SERÃO CONFERIDOS; 2 - CASO O DADO (OU OS DADOS) ESTEJA CORRETO, O USUÁRIO TERÁ ACESSO A TELA DO AMBIENTE; 3 - CASO UM DOS DOIS (OU OS DOIS) DADOS ESTIVER INCORRETO IRÁ APARECER UMA MENSAGEM DO SERVIDOR INFORMANDO O USUÁRIO. [DADOS INVÁLIDOS]; | 1 - Não apresenta o icone de desmascarar a senha para visualiza-la                           |        | 1 - COLOCAR UM ICONE  PARA DESMASCARAR A  SENHA DIGITADA NO  CAMPO                                                                                                                                                                                          |
| 3  | O CAMPO DE USUÁRIO CORRESPONDE AO ITEM DA TELA DE LOGIN E TRATA DE UM DOS ITENS DE IDENTIFICAÇÃO DO USUÁRIO PERANTE AO SERVIDOR. O CAMPO PODE SER PREENCHIDO COM OS VALORES E-MAIL OU NOME DE USUÁRIO. O CAMPO DE SENHA CORRESPONDE A UM DOS ITENS A SEREM UTILIZADOS PARA IDENTIFICAR O USUÁRIO E DAR ACESSO NO SISTEMA AO MESMO | 1 - INSERIR NOME DE USUÁRIO INVÁLIDO 2 - INSERIR SENHA VÁLIDA 3 - CLICA NO BOTÃO ENTRAR                                                                                                                                                       | 1 - CASO UM DOS DOIS (OU OS DOIS) DADOS ESTIVER INCORRETO IRÁ APARECER UMA MENSAGEM DO SERVIDOR INFORMANDO O USUÁRIO. [USUÁRIO OU SENHA INCORRETOS];                                                                                                                                           | 1 - Informar que Nome de Usuário é inválido                                                  |        | 1 - O USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [nome de usuário é inválido]                                                                                                                                                                                  |
| 4  | O CAMPO DE USUÁRIO CORRESPONDE AO ITEM DA TELA DE LOGIN E TRATA DE UM DOS ITENS DE IDENTIFICAÇÃO DO USUÁRIO PERANTE AO SERVIDOR. O CAMPO PODE SER PREENCHIDO COM O NOME DE USUÁRIO. O CAMPO DE SENHA CORRESPONDE A UM DOS ITENS A SEREM UTILIZADOS PARA IDENTIFICAR O USUÁRIO E DAR ACESSO NO SISTEMA AO MESMO                    | 1 - INSERIR NOME DE USUÁRIO INVÁLIDO, COM CAPS LOOK LIGADO 2 - INSERIR SENHA VÁLIDA 3 - CLICA NO BOTÃO ENTRAR                                                                                                                                 | 1 - CASO UM DOS DOIS (OU OS DOIS) DADOS ESTIVER INCORRETO IRÁ APARECER UMA MENSAGEM DO SERVIDOR INFORMANDO O USUÁRIO. [USUÁRIO OU SENHA INCORRETOS];                                                                                                                                           | 1 - Perguntar ao usuário se o caps look está desligado no campo de inserir nome de usuário   |        | 1 - ALERTAR O USUÁRIO PARA VERIFICAR SE O CAPS LOOK DO TECLADO ESTÁ DESLIGADO                                                                                                                                                                               |
| 5  | O CAMPO DE USUÁRIO CORRESPONDE AO ITEM DA TELA DE LOGIN E TRATA DE UM DOS ITENS DE IDENTIFICAÇÃO DO USUÁRIO PERANTE AO SERVIDOR. O CAMPO PODE SER PREENCHIDO COM O NOME DE USUÁRIO. O CAMPO DE SENHA CORRESPONDE A UM DOS ITENS A SEREM UTILIZADOS PARA IDENTIFICAR O USUÁRIO E DAR ACESSO NO SISTEMA AO MESMO                    | 1 - INSERIR NOME DE USUÁRIO INVÁLIDO, COM CAPS LOOK LIGADO 2 - INSERIR SENHA INVÁLIDA 3 - CLICA NO BOTÃO ENTRAR                                                                                                                               | 1 - CASO UM DOS DOIS (OU OS DOIS) DADOS ESTIVER INCORRETO IRÁ APARECER UMA MENSAGEM DO SERVIDOR INFORMANDO O USUÁRIO. [DADOS INVÁLIDOS];                                                                                                                                                       | 1 - Informar que a senha é inválida                                                          |        | 1 - O USUÁRIO RECEBE UMA MENSAGEM DO SERVIDOR [A senha é necessário que ela tenha pelo menos 15  caracteres Ou pelo menos 8 caracteres, incluindo um  número e uma letra minúscula]                                                                         |
| 6  | O CAMPO DE USUÁRIO CORRESPONDE AO ITEM DA TELA DE LOGIN E TRATA DE UM DOS ITENS DE IDENTIFICAÇÃO DO USUÁRIO PERANTE AO SERVIDOR. O CAMPO PODE SER PREENCHIDO COM O NOME DE USUÁRIO. O CAMPO DE SENHA CORRESPONDE A UM DOS ITENS A SEREM UTILIZADOS PARA IDENTIFICAR O USUÁRIO E DAR ACESSO NO SISTEMA AO MESMO                    | 1 - INSERIR NOME DE USUÁRIO VÁLIDO 2 - INSERIR SENHA INVÁLIDA, COM O CAPS LOOK LIGADO 3 - CLICA NO BOTÃO ENTRAR                                                                                                                               | 1 - CASO UM DOS DOIS (OU OS DOIS) DADOS ESTIVER INCORRETO IRÁ APARECER UMA MENSAGEM DO SERVIDOR INFORMANDO O USUÁRIO. [DADOS INVÁLIDOS];                                                                                                                                                       | 1 - Perguntar ao usuário se o caps look está desligado no campo de inserir a senha           |        | 1 - ALERTAR O USUÁRIO PARA VERIFICAR SE O CAPS LOOK DO TECLADO ESTÁ DESLIGADO                                                                                                                                                                               |
| 7  | NA BOTÃO DE INCLUIR, DEVE SER  INSERIDO, NOME, TELEFONE CPF, EMAIL, DATA DE PAGAMENTO ,PLANO E STATUS                                                                                                                                                                                                                             | 1 - INSERIR NOME COM NUMERO 2- INSERIR TELEFONE, CPF, EMAIL, DATA DE  PAGAMENTO, PLANO E STAUS VÁLIDOS                                                                                                                                        | 1 - OS DADOS SÃO ENVIADOS PARA O SERVIDOR E SERÃO CONFERIDOS                                                                                                                                                                                                                                   | 1 - Informar que no campo nome,  não é perimitido letra                                      |        | 1 - APARECER UMA MENSAGEM NO  CAMPO DE NOME, ALERTANDO QUE O  DADO É INVÁLIDO                                                                                                                                                                               |
| 8  | NA BOTÃO DE INCLUIR, DEVE SER  INSERIDO, NOME, TELEFONE CPF, EMAIL, DATA DE PAGAMENTO ,PLANO E STATUS                                                                                                                                                                                                                             | 1 - INSERIR TELEFONE COM LETRA 2- INSERIR NOME, CPF, EMAIL, DATA DE  PAGAMENTO, PLANO E STATUS VÁLIDOS                                                                                                                                        | 1 - OS DADOS SÃO ENVIADOS PARA O SERVIDOR E SERÃO CONFERIDOS                                                                                                                                                                                                                                   | 1 - Informar que no campo telefone,  o telefone não pode ter letra                           |        | 1 - APARECER UMA MENSAGEM NO  CAMPO DE TELEFONE, ALERTANDO QUE O  DADO É INVÁLIDO                                                                                                                                                                           |
| 9  | NA BOTÃO DE INCLUIR, DEVE SER  INSERIDO, NOME, TELEFONE CPF, EMAIL, DATA DE PAGAMENTO ,PLANO E STATUS                                                                                                                                                                                                                             | 1 - INSERIR EMAIL SEM @ 2- INSERIR NOME, TELEFONE, CPF, DATA DE  PAGAMENTO, PLANO E STATUS VÁLIDOS                                                                                                                                            | 1 - OS DADOS SÃO ENVIADOS PARA O SERVIDOR E SERÃO CONFERIDOS                                                                                                                                                                                                                                   | 1 - informar que no campo de email, o email deve conter "@"                                  |        | 1 - APARECER UMA MENSAGEM NO  CAMPO DE EMAIL, ALERTANDO QUE O DADO É INVÁLIDO                                                                                                                                                                               |
| 10 | NA BOTÃO DE INCLUIR, DEVE SER  INSERIDO, NOME, TELEFONE CPF, EMAIL, DATA DE PAGAMENTO ,PLANO E STATUS                                                                                                                                                                                                                             | 1 - NÃO INSERIR A DATA OU INSERIR UM ANO INVÁLIDO [EX: 1999] 2- INSERIR NOME, TELEFONE, CPF, EMAIL, PLANO E STATUS VÁLIDOS                                                                                                                    | 1 - OS DADOS SÃO ENVIADOS PARA O SERVIDOR E SERÃO CONFERIDOS                                                                                                                                                                                                                                   | 2 - informar que no campo de Data  de Pagamento, a data deve ser inse- rida e um ano válido  |        | 1 - APARECER UMA MENSAGEM NO  CAMPO DE DATA DE PAGAMENTO, ALERTANDO QUE O DADO É INVÁLIDO                                                                                                                                                                   |
| 11 | NA BOTÃO DE INCLUIR, DEVE SER  INSERIDO, NOME, TELEFONE CPF, EMAIL, DATA DE PAGAMENTO ,PLANO E STATUS                                                                                                                                                                                                                             | 1 - NÃO INSERIR O TIPO DE PLANO 2- INSERIR NOME, TELEFONE, CPF, EMAIL, DATA DE PAGAMENTO E STATUS VÁLIDOS                                                                                                                                     | 1 - OS DADOS SÃO ENVIADOS PARA O SERVIDOR E SERÃO CONFERIDOS                                                                                                                                                                                                                                   | 1- informar que deve ser selecionado um tipo de plano                                        |        | 1 -ALERTAR COM UMA MENSAGEM NO CAMPO DE PLANO QUE DEVE SER SELECIONADO UM TIPO                                                                                                                                                                              |
| 12 | NA BOTÃO DE INCLUIR, DEVE SER  INSERIDO, NOME, TELEFONE CPF, EMAIL, DATA DE PAGAMENTO ,PLANO E STATUS                                                                                                                                                                                                                             | 1 - NÃO INSERIR UM STATUS 2 - INSERIR NOME, TELEFONE, CPF, EMAIL, DATA  PAGAMENTO E PLANO VÁLIDOS                                                                                                                                             | 1 - OS DADOS SÃO ENVIADOS PARA O SERVIDOR E SERÃO CONFERIDOS                                                                                                                                                                                                                                   | 1 - informar que deve ser selecionado o status do plano                                      |        | 1 - ALERTAR COM UMA MENSAGEM NO CAMPO DE STATUS QUE DEVE SER SELECIONADO O STATUS DO PLANO                                                                                                                                                                  |
| 13 | NO BOTAO DE BUSCAR (LUPA) DEVE SER INSERIDO UM DADO NO CAMPO, QUE CONTENHA AS INFORMAÇÕES DO BOTAO DE INCLUIR                                                                                                                                                                                                                     | 1 - NÃO INSERIR NENHUM DADO PARA QUE  SEJA FILTRADO                                                                                                                                                                                           | 1 - OS DADOS SÃO ENVIADOS PARA O SERVIDOR E SERÃO CONFERIDOS                                                                                                                                                                                                                                   | 1 - informar que deve ser inserido um dado válido para busca                                 |        | 1 - ALERTA COM UMA MENSAGEM NO CAMPO, "DIGITE UM DADO VÁLIDO PARA FILTRAR"                                                                                                                                                                                  |


#### Caixa Branca
<table>
<thead>
  <tr>
    <th colspan="3">PROJETO / SISTEMA</th>
    <th colspan="2">GYM MANAGER</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="3">REVISOR</td>
    <td colspan="2">GUILHERME VIEIRA</td>
  </tr>
  <tr>
    <td colspan="3">DATA DA REVISÃO</td>
    <td colspan="2">08/11/23</td>
  </tr>
  <tr>
    <td>ID</td>
    <td>ITEM</td>
    <td>STATUS</td>
    <td>ARTEFATO COM ERRO</td>
    <td>CORREÇÕES A SEREM REALIZADAS</td>
  </tr>
  <tr>
    <td>1</td>
    <td>A DOCUMENTAÇÃO FOI DESCRITA NO CÓDIGO?</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>AS VARIÁVEIS E CONSTANTES POSSUEM BOA NOMENCLATURA?</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>EXISTEM LEGIBILIDADE E ORGANIZAÇÃO NO CÓDIGO</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>4</td>
    <td>TODOS OS NULLPOINTERS FORAM TRATADOS?</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>5</td>
    <td>A ARQUITETURA UTILIZADA FOI DEVIDAMENTE RESPEITADA?</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>AS CONEXÕES UTILIZADAS FORAM FECHADAS?</td>
    <td>NÃO</td>
    <td>NÃO HÁ CONEXÕES</td>
    <td></td>
  </tr>
  <tr>
    <td>7</td>
    <td>OS ARQUIVOS E CLASSES ESTÃO COM A NOMECLATURA SIGNIFICATIVA?</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>8</td>
    <td>AS VARIAVEIS E CONSTATNTES ESTÃO COM A NOMECLATURA SIGNIFICATIVA?</td>
    <td>NÃO</td>
    <td>u: Embora seja uma variável curta, é usada para armazenar a representação em string JSON do objeto usuarioTeste. No entanto, para uma melhor legibilidade, pode ser mais descritiva.</td>
    <td>No entanto, para maior clareza e compreensão do código, é recomendável usar nomes mais descritivos e significativos para todas as variáveis e constantes, especialmente em projetos maiores ou quando há mais contexto envolvido</td>
  </tr>
  <tr>
    <td>9</td>
    <td>INTERAÇÃO ENTRE O FORMULÁRIO DE LOGIN E O ARMAZENAMENTO NO SESSIONSTORAGE</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>10</td>
    <td>OS USUÁRIOS INTERAGEM COM O SISTEMA E SE CONSEGUEM COMPREENDER FACILMENTE COMO INSERIR SUAS CREDENCIAIS?</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>11</td>
    <td>O SISTEMA DE LOGIN SE COMPORTA BEM SOB CARGAS DE TRABALHO VARIADAS?</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>12</td>
    <td>ESTÁ VALIDANDO CORRETAMENTE AS CREDENCIAIS DE LOGIN?</td>
    <td>SIM</td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>

#### Testes não funcionais
<table>
<thead>
  <tr>
    <th>ID</th>
    <th>TÍTULO</th>
    <th>EXECUÇÃO</th>
    <th>RESULTADOS</th>
    <th>STATUS</th>
    <th>OBSERVAÇÕES E SEGUESTÕES</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>TESTE DE CARGA</td>
    <td>ABRIR VÁRIAS ABAS AO MESMO TEMPO</td>
    <td>SUPORTE DO SISTEMA</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>TESTE TEMPO DE RESPOSTA </td>
    <td>IMPLEMENTAÇÃO DE INFORMAÇÕES AO SISTEMA</td>
    <td>RÁPIDO TEMPO DE RESPOSTA - INCLUSÃO DO ITEM</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>TESTE DE VOLUME</td>
    <td>IMPLEMENTAÇÃO CONTINUA DE MUITAS INFORMAÇÕES</td>
    <td>SUPORTOU A GRANDE QUANTIDADE DE DADOS</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>4</td>
    <td>TESTE DE NAVEGAÇÃO</td>
    <td>NAVEGAÇÃO, BUSCAR INFORMAÇÕES, ACESSAR RECURSOS E CONCLUIR TAREFAS</td>
    <td>FÁCIL NAVEGAÇÃO E ACESSIBILIDADE</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>5</td>
    <td>TESTE DE LAYOUT E DESIGN</td>
    <td>NAVEGAÇÃO NO LAYOUT DO SITE</td>
    <td>DESIGN SIMPLES E OBJETIVO</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>TESTE DE FLUXO DE TAREFAS</td>
    <td>CONCLUIR AS TAREFAS</td>
    <td>TAREFAS CONCLUIDAS COM FACILDADE E EFICIENCIA</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>7</td>
    <td>TESTE DE GERENCIAMENTO DE SESSÃO</td>
    <td>TESTANDO LOGIN COM USUÁRIO E SENHA</td>
    <td>ACESSO CONCEDIDO CORRETAMENTE</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>8</td>
    <td>TESTE DE CRIPTOGRAFIA</td>
    <td>VERIFICAR A SEGURANÇA DOS ALGORITMOS DE CRIPTOGRAFIA IMPLEMENTADOS NO SISTEMA</td>
    <td>OS ALGORITMOS DE CRIPTOGRAFIA FORAM ANALISADOS QUANTO À RESISTÊNCIA A ATAQUES, COMO ATAQUES DE FORÇA BRUTA E CRIPTOANÁLISE. NÃO FORAM ENCONTRADAS VULNERABILIDADES SIGNIFICATIVAS</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>9</td>
    <td>TESTE DE SEGURANÇA MÓVEL</td>
    <td>AVALIAR A SEGURANÇA DA APLICAÇÃO EM DISPOSITIVOS MÓVEIS (SMARTPHONES, TABLETS, ETC.) QUANTO A VULNERABILIDADES E EXPOSIÇÃO A ATAQUES</td>
    <td>FORAM IDENTIFICADAS ALGUMAS VULNERABILIDADES EM RELAÇÃO A COMUNICAÇÕES INSEGURAS E ARMAZENAMENTO DE DADOS EM DISPOSITIVOS MÓVEIS. RECOMENDAÇÕES FORAM FEITAS PARA CORRIGIR ESSAS VULNERABILIDADES</td>
    <td>PENDENTE</td>
    <td></td>
  </tr>
  <tr>
    <td>10</td>
    <td>AVALIAR A FACILIDADE DE INSTALAÇÃO</td>
    <td>TESTAR O PROCESSO DE INSTALAÇÃO DO SOFTWARE EM DIFERENTES AMBIENTES</td>
    <td>A INSTALAÇÃO DO SOFTWARE FOI CONCLUÍDA COM SUCESSO EM DIVERSOS AMBIENTES, E O PROCESSO É CONSIDERADO SIMPLES E AMIGÁVEL</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>11</td>
    <td>TESTAR A ADAPTABILIDADE</td>
    <td>VERIFICAR SE O SOFTWARE É CAPAZ DE OPERAR DE MANEIRA EFICAZ EM DIFERENTES CONFIGURAÇÕES E AMBIENTES</td>
    <td>O SOFTWARE SE ADAPTOU BEM A AMBIENTES VARIADOS, INCLUINDO DIFERENTES SISTEMAS OPERACIONAIS E CONFIGURAÇÕES DE HARDWARE</td>
    <td>OK</td>
    <td></td>
  </tr>
  <tr>
    <td>12</td>
    <td>AVALIAR O DESEMPENHO EM DIFERENTES AMBIENTES</td>
    <td>AVALIAR O DESEMPENHO DO SOFTWARE EM DIFERENTES AMBIENTES, COMO ALTA CARGA DE USUÁRIOS, BAIXA LARGURA DE BANDA, ETC</td>
    <td>O SOFTWARE DEMONSTROU UM DESEMPENHO ROBUSTO EM DIFERENTES CENÁRIOS DE USO, SEM DEGRADAÇÃO SIGNIFICATIVA</td>
    <td>OK</td>
    <td></td>
  </tr>
</tbody>
</table>

## Linguagens, dependencias e libs utilizadas 📚

Navegador de internet da sua escolha 


## Recursos de inseridos 🧰

Se for o caso, liste tarefas/funcionalidades que ainda precisam ser implementadas na sua aplicação, insira fotos da tela do app.

  

### 📝 Tarefa - Tela de login

  ![tela login](./imagens/Capturas%20de%20tela/login.png)
  - Ao inserir Usuario e senha você consegue acesso ao sistema.

### 📝 Tarefa - Tela principal

  ![tela principal](./imagens/Capturas%20de%20tela/principal.png)
  - Nela se encontra dois botões para você ser direcionado a outras telas

### 📝 Tarefa - Tela usuário

  ![tela usuario](./imagens/Capturas%20de%20tela/mostrando%20usuario.png)
  - Nesta tela vocẽ vê os usuários cadastrados e pode fazer ações com ele.
 
### 📝 Tarefa - Tela usuário - deletar

  ![tela usuario deletar](./imagens/Capturas%20de%20tela/deletar%20usuario.png)
  - Como visto nesta tela o usuário foi deletado
 
### 📝 Tarefa - Tela financeiro

  ![tela financeiro](./imagens/Capturas%20de%20tela/financeiro.png)
  - Mostra a tela com os usuários cadastrados com a tabela com menos colunas para fácil visualização
 
 
### 📝 Tarefa - Tela financeiro - editar

  ![tela financeiro - editar](./imagens/Capturas%20de%20tela/financeiro%20editar.png)
  - Aqui você consegue editar informações financeiras do usuário
 
### 📝 Tarefa - Tela financeiro - ordenar

  ![tela financeiro - ordenar](./imagens/Capturas%20de%20tela/financeiro%20ordenar.png)
  - Ao clicar no título da coluna você ordena a tabela

### 📝 Próxima Tarefa - Criar sistema para cadastro de funcionário permitindo usuário e senha
### 📝 Próxima Tarefa - Conectar ao banco de dados
## Desenvolvedores/Contribuintes:

- Renan Felix
- João Candiani
- Luiz Felipe Silva
- Guilherme Vieira
- Douglas Machado
- Alessandro Lemos  

## Copyright ©️ 2023 - GYM MANAGER