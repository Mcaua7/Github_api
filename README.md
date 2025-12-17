# Github_api

Aplicativo desenvolvido em **React Native** utilizando **Expo**, que consome a **API do GitHub** para buscar e exibir informações públicas, como usuários e repositórios. O objetivo do projeto é praticar consumo de APIs, desenvolvimento mobile e organização de código.

---

## Sobre o projeto

O **Github_api** foi desenvolvido como um projeto de estudo para compreender a comunicação com **APIs REST** em um ambiente mobile. Utilizando a API oficial do GitHub, o aplicativo realiza requisições HTTP, trata as respostas e exibe os dados de forma organizada na interface.

Este projeto é ideal para quem está aprendendo:

* Consumo de APIs REST
* React Native na prática
* Desenvolvimento mobile com Expo
* Organização de código em projetos reais

---

## Funcionalidades

* Buscar informações de usuários do GitHub
* Listar repositórios públicos
* Exibir dados retornados pela API
* Interface mobile desenvolvida com React Native
* Estrutura organizada em pastas

---

## Tecnologias Utilizadas

* React Native
* Expo
* JavaScript
* Node.js
* npm
* API do GitHub

---

## Estrutura do Projeto

```text
Github_api
 ├── app/                 # Telas e lógica principal do aplicativo
 ├── assets/              # Imagens, ícones e outros recursos
 ├── .gitignore
 ├── app.json             # Configurações do Expo
 ├── babel.config.js
 ├── eslint.config.mjs
 ├── package.json
 └── package-lock.json
```

---

## Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

* Node.js (versão LTS recomendada)
* npm ou yarn
* Git
* Expo Go (no celular) ou emulador configurado

---

## Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/Mcaua7/Github_api.git

# Acesse a pasta do projeto
cd Github_api

# Instale as dependências
npm install

# Inicie o projeto com Expo
npx expo start
```

Após iniciar, você pode:

* Escanear o QR Code com o aplicativo **Expo Go** no celular
* Pressionar `a` para abrir no emulador Android
* Pressionar `i` para abrir no simulador iOS (macOS)

---

## Variáveis de ambiente (opcional)

Se você estiver usando autenticação na API do GitHub, crie um arquivo `.env` na raiz do projeto:

```env
GITHUB_TOKEN=seu_token_do_github
```

---

## Aprendizados

Com este projeto foi possível praticar:

* Requisições HTTP em aplicações mobile
* Consumo de APIs REST
* Tratamento de respostas JSON
* Desenvolvimento mobile com React Native e Expo
* Organização de projetos JavaScript

---

## Autor

Cauã

GitHub: [https://github.com/Mcaua7](https://github.com/Mcaua7)

---

Se este projeto te ajudou de alguma forma, considere deixar uma estrela no repositório.
