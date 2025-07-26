<div align="center">
  <img src="src/assets/logo.svg" alt="Coffee Delivery" width="200"/>
</div>

<h1 align="center">☕ Coffee Delivery</h1>

<p align="center">
  Uma aplicação web para delivery de café desenvolvida em React com TypeScript
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/elenmagalhaes/coffee-delivery-web?color=8047F8">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/elenmagalhaes/coffee-delivery-web?color=8047F8">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/elenmagalhaes/coffee-delivery-web?color=8047F8">
</p>

<p align="center">
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## 💻 Sobre

O **Coffee Delivery** é uma aplicação de delivery de café desenvolvida com React e TypeScript, onde você pode navegar pelo catálogo de cafés, filtrar por categorias e selecionar seus cafés favoritos. O projeto está sendo desenvolvido como parte do desafio do **Ignite 2022** da Rocketseat.

**Status atual:** Em desenvolvimento - Funcionalidades básicas de navegação e seleção de produtos implementadas.

### 📈 Últimas atualizações

- ✅ **Sistema de seleção de cafés** - Implementado catálogo completo com 14 tipos de café
- ✅ **Funcionalidade de carrinho** - Lógica básica de adicionar produtos e controlar quantidades
- ✅ **Componente Tag** - Sistema de filtros por categorias funcionais
- ✅ **Configuração de código** - ESLint e Prettier configurados para manter qualidade do código

## 🎨 Layout

O layout da aplicação foi baseado no design disponível no Figma:

<a href="https://www.figma.com/design/ugJYXnI5DmvsVj8UfVUKpa/Coffee-Delivery--Copy-?node-id=2-1550&t=dYMtvGk839EiJW4a-0">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361?color=8047F8">
</a>

### 📱 Preview
---

<div align="center">
  <img alt="Preview Desktop" src=".github/preview.png" width="800" />
</div>

## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React](https://reactjs.org)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem com tipagem estática
- **[Styled Components](https://styled-components.com/)** - CSS-in-JS para estilização
- **[Phosphor Icons](https://phosphoricons.com/)** - Biblioteca de ícones
- **[React Router DOM](https://reactrouter.com/)** - Roteamento da aplicação
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[ESLint](https://eslint.org/)** - Ferramenta de linting para código
- **[Prettier](https://prettier.io/)** - Formatador de código

---

## 📁 Estrutura do Projeto

```
src/
├── @types/           # Tipos TypeScript customizados
├── assets/           # Imagens e ícones
│   └── coffees/      # Imagens dos produtos
├── components/       # Componentes reutilizáveis
│   ├── Button/       # Botões (Cart, Primary, etc.)
│   ├── Header/       # Cabeçalho da aplicação
│   ├── Select/       # Componente de seleção de quantidade
│   ├── Tag/          # Tags de categorias
│   └── Wrapper/      # Layout wrapper
├── pages/            # Páginas da aplicação
│   ├── Home/         # Página principal com catálogo
│   ├── Checkout/     # Página de checkout (em desenvolvimento)
│   └── CheckoutFilled/ # Página de confirmação (em desenvolvimento)
├── theme/            # Sistema de temas e cores
├── utils/            # Utilitários (máscaras, formatadores)
└── constants.ts      # Constantes da aplicação (lista de cafés, filtros)
```

---

## ⚡ Funcionalidades

### ✅ Implementadas

- [x] **Catálogo de cafés** - Visualização de 14 tipos diferentes de café com imagens, descrições e preços
- [x] **Sistema de filtros** - Filtragem por tags (tradicional, especial, gelado, com leite, alcoólico)
- [x] **Seleção de quantidade** - Controle de quantidade para cada produto com incremento/decremento
- [x] **Interface responsiva** - Design adaptativo usando Styled Components
- [x] **Sistema de temas** - Paleta de cores consistente com o design system
- [x] **Navegação** - Roteamento entre páginas (Home, Checkout, CheckoutFilled)
- [x] **Header interativo** - Exibição da localização e acesso ao carrinho
- [x] **Componentes reutilizáveis** - Tags, botões, seletores e outros componentes modulares
- [x] **Formatação de valores** - Máscaras para exibição de preços em formato brasileiro (R$)

### 🚧 Em desenvolvimento

- [ ] **Carrinho de compras** - Funcionalidade completa de adicionar/remover produtos
- [ ] **Formulário de endereço** - Preenchimento e validação dos dados de entrega
- [ ] **Cálculo de preços** - Total do pedido com taxas de entrega
- [ ] **Finalização do pedido** - Confirmação e resumo da compra
- [ ] **Gerenciamento de estado** - Context API ou Redux para estado global

### 🧩 Componentes Principais

- **Header** - Navegação com logo, localização e acesso ao carrinho
- **Tag** - Sistema de tags para categorização dos produtos (tradicional, especial, etc.)
- **Select** - Seletor de quantidade com botões de incremento/decremento
- **CartButton** - Botão para adicionar produtos ao carrinho com badge de quantidade
- **CoffeeCard** - Card de produto com imagem, descrição, preço e controles

### 💡 Pontos de melhoria

- [ ] **Geolocalização** - Implementar detecção automática da localização do usuário (atualmente estático: "São Bernardo do Campo, SP")
- [ ] **Persistência de dados** - Armazenamento do carrinho no localStorage
- [ ] **Animações** - Transições suaves entre estados e páginas
- [ ] **Acessibilidade** - Melhorias para screen readers e navegação por teclado
- [ ] **Testes** - Implementação de testes unitários e de integração

---

## 🔧 Como executar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/elenmagalhaes/coffee-delivery-web.git

# Acesse a pasta do projeto no terminal/cmd
$ cd coffee-delivery-web

# Instale as dependências
$ npm install
# ou
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# ou
$ yarn dev

# O servidor inciará na porta:5173 - acesse http://localhost:5173
```

### 🏗️ Build para produção

```bash
# Gerar build otimizado
$ npm run build
# ou
$ yarn build

# Visualizar build localmente
$ npm run preview
# ou
$ yarn preview
```

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ por <strong>Elen Magalhães</strong></p>
  <p>
    <a href="https://www.linkedin.com/in/ecmrodrigues">
      <img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white">
    </a>
    <a href="https://github.com/elenmagalhaes">
      <img alt="GitHub" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github">
    </a>
  </p>
</div>

---

<p align="center">
  Feito com 💜 no desafio <strong>Ignite</strong> da <a href="https://rocketseat.com.br/">Rocketseat</a> 🚀
</p>