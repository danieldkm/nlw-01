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