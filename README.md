# Boas vindas ao repositório do Delivery App

Nessa aplicação, o grupo foi responsável por criar e integrar tanto o back-end quanto o front-end, sendo o principal objetivo desenvolver um app de delivery para uma distribuidora de bebidas.<br>

# Detalhes do projeto!

Ter acesso via login: tanto clientes como pessoas vendedoras, assim como o administrador do sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo.</br>
Em resumo sera feito a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos.

# Como foi desenvolvimento

- Esse projeto foi feito em equipe dentro da organização da trybe.

# Construído com

- <a href="https://nodejs.org/en/" target="blanck" >Node.js</a> - Tecnologia utilizada.
- <a href="https://www.mysql.com/" target="blanck" >MySql</a> - Sistema de gerenciamento de banco de dados.
- <a href="https://www.devmedia.com.br/arquitetura-de-software-desenvolvimento-orientado-para-arquitetura/8033" target="blanck" >MSC</a> - Sistema de arquitetura de software.
- <a href="https://sequelize.org/" target="blanck" >Sequelize</a> - Interface da aplicação com o banco de dados.
- <a href="https://www.typescriptlang.org/" target="blanck" >Java Script</a> - Linguagem de programação utilizada.
- <a href="https://expressjs.com/pt-br/" target="blanck" >Express</a> - Framework para Node.js que fornece recursos mínimos para construção de servidores
- <a href="https://pt-br.reactjs.org/" target="blanck" >React</a> - O framework utilizado.
- <a href="https://v5.reactrouter.com/web/guides/quick-start" target="blanck" >React router dom</a> - Biblioteca para utilização de rotas.
- <a href="https://eslint.org/" target="blanck" >ESlint</a> - Biblioteca para corrigir problemas.

## Rodando o projeto localmente

<details>
  <summary>
    <strong>Instruções</strong>
  </summary><br>
<h3>1. Faça o git clone na sua máquina e entre no diretório:</h3><br>

 - Lembre-se de clonar o repositório no diretório desejado na sua máquina!<br>
 `git clone https://github.com/LucasOAssuncao/Project-Delivery-app.git`<br>
 `cd delivery_app`<br>

 - Após isso rode o seguinte comando para iniciar um container MySql!<br>
 `docker run --name mysql-docker -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql`
 - Executar um `npm install` na raiz do projeto, e por fim os seguintes comandos para iniciar o projeto!<br>
 `cd back-end`<br>
 `npm run dev`<br>
 `cd front-end`<br>
 `npm start`<br>
 </details>
