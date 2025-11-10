## Projeto de Automação - Desafio QA Nexdom

### Sobre o Projeto

Este repositório contém a solução do desafio técnico para a vaga de QA.

O projeto utiliza o **Cypress** para cobrir:

  * **Testes End-to-End (E2E)** da aplicação Nexdom.
  * **Testes de API** para operações CRUD (Create, Read, Update, Delete) utilizando a API pública do GitHub.

-----

### Framework Escolhido: Cypress

O **Cypress** foi selecionado por ser um *framework* moderno e completo, ideal para QAs que buscam:

  * **Experiência de Desenvolvimento:** Execução simples e interativa com *debugging* em tempo real.
  * **Suporte Integrado:** Capacidade de testar UI e API dentro da mesma estrutura.
  * **Adoção de Padrões:** Fácil integração com **BDD (Gherkin)** e **Page Object**.

-----

### Estrutura do Repositório

O projeto segue uma estrutura organizada para testes com Cypress:

```
desafio-qa-nexdom/
├── cypress/
│   ├── e2e/
│   │   ├── features/               → Testes de UI escritos em Gherkin (BDD)
│   │   ├── api/                    → Testes de API (GitHub)
│   ├── support/                    → Comandos customizados e configurações de ambiente.
├── .env                            → Variáveis de ambiente secretas.
├── cypress.config.js               → Configuração principal do Cypress.
├── package.json                    → Dependências e scripts de execução.
└── README.md                       → Este arquivo.
```

-----

### Instalação e Configuração

#### Pré-requisitos

Certifique-se de ter instalado:

  * **Node.js** (v18+)
  * **Git**

#### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/lindonjonsonf/desafio-qa-nexdom.git
cd desafio-qa-nexdom
```

#### 2️⃣ Instalar dependências

```bash
npm install
```

#### 3️⃣ Configurar Variáveis de Ambiente

Crie um arquivo chamado **`.env`** na raiz do projeto com as suas credenciais do GitHub (necessárias para os testes de API):

```
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_USER=seuUsuarioGitHub
```

> ⚠️ **Atenção:** O `GITHUB_TOKEN` deve ser um token do tipo **Classic** com permissão `repo`.

-----

### ▶️ Como Executar os Testes

Utilize os *scripts* abaixo, definidos no `package.json`:

| Comando | Descrição |
| :--- | :--- |
| `npm run cypress:open` | Abre o **Test Runner do Cypress** no modo interativo. |
| `npm run test:ui` | Executa **apenas os testes de UI** (arquivos `.feature` - Gherkin) em modo *headless*. |
| `npm run test:api` | Executa **apenas os testes de API** (GitHub) em modo *headless*. |
| `npm run test:all` | Executa **todos os testes** (UI + API) em modo *headless*. |

-----

### Detalhes dos Testes

#### Testes de UI (Gherkin/BDD)

  * **Foco:** Validação de fluxos End-to-End na aplicação Nexdom.
  * **Páginas Cobertas:** Home, Sobre Nós e Contato (incluindo validação de formulário).

#### Testes de API (GitHub)

  * **Foco:** Garantir a integridade das operações de recurso.
  * **Fluxo Validado (CRUD):** Criação de Repositório $\rightarrow$ Consulta $\rightarrow$ Criação de Issue $\rightarrow$ Consulta de Issue $\rightarrow$ Deleção de Repositório $\rightarrow$ Confirmação de Deleção.
