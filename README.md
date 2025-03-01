# Teste Técnico: Lista de Funcionários

Este repositório consiste em uma aplicação web de uma lista de usuários (funcionários), sendo possível filtra-los por nome, cargo ou telefone.

## Pré-requisitos

- Node.js na versão **20.9.0** ou superior

## Demonstração

Veja a demonstração da aplicação <a href='https://betalent-react-lista-funcionarios.vercel.app/'>Aqui</a>

## Instalação

Para instalar e executar a aplicação localmente, siga o seguinte procedimento:

1. Clone o projeto (nesse exemplo, foi via Git Bash) e entre na pasta recém criada:
```bash
git clone https://github.com/RodrigoDGoulart/react-lista-funcionarios.git
cd react-lista-funcionarios
```

2. Via npm ou yarn, instale as dependências do projeto
```cmd
yarn install
```

3. Após a instalação das dependências, primeiro execute a API com o seguinte comando:
```cmd
yarn start:api
```

4. Na pasta raíz do diretório, existe o arquivo **.env.example**, duplique o arquivo e renomeie um deles para **.env**

5. No arquivo **.env**, deve-se colocar a url na qual está rodando a API que acabou de inicializar (no 3° passo). A URL padrão é `http://localhost:3001`

6. Para inicializar a aplicação web, execute um dos comandos
```cmd
yarn dev
```