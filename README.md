<h1 align="center">Next Level Week #1</h1>

# Dia 1

## Por que criaremos uma API?
<p align="center">
  <img src="./diagrama-api-restful.png">
</p>

## Conceitos de Typescript
### Por que TypeScript?
`javascript`
```javascript
/**
 * Função que exibe dados do usuário
 */
function displayUserInformation(user) {
  return `${user.name} - ${user.email}`;
}

export default displayUserInformation;
```
Novo dev, **Desafio**: incluir a informação da cidade e UF do usuário nesse retorno.
  - Qual o formato do objeto de usuário
  - Utilizo `user.city` ou `user.address.city`?
  - Será que a cidade e UF são obrigatórias?

### IntelliSense
- Inteligencia da IDE
- O editor não conhece o formato da variável user e, por isso, não consegue determinar suas propriedades.
<p align="center">
  <img src="./intellisense.png">
</p>
- Nesse caso, o editor consegue saber exatamente os dados que um usuário pode ter e oferecer inteligência de IDE.
<p align="center">
  <img src="./intellisense-2.png">
</p>

### Mitos e verdades
- ✔ TypeScript diminui a produtividade
- ❌ TypeScript é transformar JavaScript em Java ou C#
- ❌ O mercado não usa TypeScript
- ❌ TypeScript substitui o JavaScript por completo
- ✔❌ TypeScript atrapalha quem é iniciante


## 💙 Sobre React
- Biblioteca para construção de interfaces;
- Utilizado para construção de Single-Page-Applications (SPA);
- Podemos chamar de framework? sim e Não
- Tudo fica dentro do JavaScript;
- React / ReactJS / React Native;

### Vantagens
- Organização do código;
  - Componentização;

<p align="center">
  <img src="./componentizacao.png">
</p>

- Divisão de responsabilidades;
  - Back-end: Regra de negócio
  - Front-end: Interface

- Uma API, múltiplos clientes;

<p align="center">
  <img src="./divisao-responsabilidades.png">
</p>

## 💙 Entendendo o React Native

- Abordagem tradicional

<p align="center">
  <img src="./abordagem-tradicional.png">
</p>

- Abordagem do React Native

<p align="center">
  <img src="./abordagem-react-native.png">
</p>

## Por que utilizaremos o Expo?

<p align="center">
  <img src="./expo-1.png">
</p>

## Arquitetura do Expo

<p align="center">
  <img src="./expo-2.png">
</p>

## 🚀 Iniciando back-end
```sh
mkdir server
cd server
npm init -y
npm install express
npm install typescript -D
# como o projeto irá ser em typescript
# devemos instalar caso necessário as definições de tipos
npm install @types/express -D
# como o node não compreende o typescript
# devemos instalar o pacote que realiza essa conversão
npm install ts-node -D
# npx execute um pacote que foi instalado no projeto
npx ts-node src/server.ts
# deve existir o arquivo de configuração do typescript, caso nao execute o comando abaixo
npx tsc --init
# pacote do ts para hot reload
npm install ts-node-dev -D
npx ts-node-dev src/server.ts
```

## 🚀 Iniciando front-end

```sh
npx create-react-app web --template=typescript
```

# Dia 2

## Explicando conceitos

### Rotas e recursos

  - Rota: Endereço completo da requisição.
  - Recurso: Qual entidade estamos acessando do sistema.

### Métodos HTTP

- GET: Buscar uma ou mais informações do back-end
- POST: Criar uma nova informação no back-end
- PUT: Atualizar uma informação existente no back-end
- DELETE: Remover uma informação do back-end

- exemplos
  - POST http://localhost:3333/users = Criar um usuário
  - GET http://localhost:3333/users = Listar usuários
  - GET http://localhost:333/users/5 = Buscar dados do usuário com ID 5

### Tipos de parâmetros
- Request params: Parâmetros que vem na própria rota que identificam um recurso
- Query params: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
- Query body: Parâmetros para criação/atualização de informações.

## Utilizando o Insomnia
- Ferramenta para realizar requisições no back-end

## Qual banco de dados vamos utilizar?
- SQL: Postgres, MySQL, SQLite, SQL Server
- NoSQL: MongoDB, CouchDB

- será utilizado SQLite

```sh
SELECT * FROM users WHERE name = 'Diego'
knex('users').where('name', 'diego').select('*')
# o bom de utilizar query build é que podemos manter o codigo em javascript com suas intelisenses
```

## Configurando conexão com o banco
```javascript
// connection.js
import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  }
});

export default connection;
```

- Migrations = Histórico do banco de dados
```sh
npx knex migrate:latest --knexfile knexfile.ts migrate:latest
```

## Identificando entidades da aplicação
- points (pontos de colete)
  - image
  - name
  - email
  - whatsapp
  - latitude
  - longitude
  - city
  - uf
- items (itens para coleta)
  - title
  - image
- point_items (Relacionamentos dos itens que o ponto coleta)
  - point_id
  - item_id
- muitos para muitos (N-N) (Pivot)

## Funcionalidades da aplicação
- Cadastro de ponto de coleta
- Listar os itens da coleta
- Lista pontos (filtro por estado/cidade/itens)
- Listar um ponto de coleta especifico

## Construção do app
- index, show, create, update, delete
- Service pattern
- repository patter (Data Mapper)
## Adicionando CORS
```sh
npm install cors
npm install @types/cors -D
```


# Dia 3: Front-end web do app

## Limpando estrutura da aplicação
- na pasta public manter so o index.html
- na pasta src, remover 
  - App.test.tsx
  - index.css
  - logo.svg
  - serviceWorker.ts
  - setupTests.ts
## Explicando conceitos
### `index.html` e `div#root`
### JSX
- Sintaxe de XML dentro do JavaScript
- possibilidade de escrver html "dentro" do javascript
### Componente (Header)
- Separar em pequenos bloco que podem ser reutilizados
### Propriedade
### Estado e imutabilidade

## Arquivos para Download (Layout, imagens e CSS)
## Construção do HTML da primeira página
## Configuração da navegação
## Construção do HTML do formulário
## Integrando mapa no formulário
## Buscando itens de coleta da API
## Buscando estados e cidades do IBGE
## Cadastro de ponto de coleta na API
## Mensagem de sucesso