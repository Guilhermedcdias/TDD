
# Sistema de Cálculo de Salário

Este projeto contém uma calculadora de salário para diferentes cargos, além de um sistema de validação de dados de pessoas. Ele utiliza TypeScript para a lógica e testes automatizados com Jest.

## Requisitos

Antes de começar, certifique-se de que você tenha o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/get-npm) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Guilhermedcdias/TDD.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências do projeto:

   Se estiver usando `npm`:

   ```bash
   npm install
   ```

   Se estiver usando `yarn`:

   ```bash
   yarn install
   ```

## Build do Projeto

Para compilar o projeto TypeScript em JavaScript, você pode usar o comando de build.

### Usando `npm`:

```bash
npm run build
```

### Usando `yarn`:

```bash
yarn build
```

Isso irá compilar o código TypeScript para a pasta `dist` conforme definido no `tsconfig.json`.

## Execução dos Testes

Os testes estão escritos utilizando o [Jest](https://jestjs.io/). Para rodar os testes:

### Usando `npm`:

```bash
npm test
```

### Usando `yarn`:

```bash
yarn test
```

Você pode também rodar os testes em modo "watch" (testes automáticos sempre que houver alteração no código):

### Usando `npm`:

```bash
npm run test:watch
```

### Usando `yarn`:

```bash
yarn test:watch
```

## Estrutura do Projeto

- `src/`: Contém os arquivos de código-fonte.
- `__tests__/`: Contém os arquivos de testes unitários.
- `dist/`: Diretório de saída do código compilado após o build.