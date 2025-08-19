# 🚀 ByteBank - Gerenciamento Financeiro (Projeto Host)

## 🎯 Sobre o Projeto

Este repositório apresenta o **Projeto Host** de uma aplicação de gerenciamento financeiro, desenvolvido como parte de um Tech Challenge. Nosso principal objetivo é criar uma interface unificada que integre diversos **Micro Frontends (MFEs)**, proporcionando uma experiência de usuário coesa e eficiente. O projeto host atua como o ponto de entrada central, gerenciando rotas, autenticação e a navegação fluida entre os módulos.

### Responsabilidades Chave do Projeto Host:

*   **Estrutura da Interface:** Responsável por exibir elementos fixos como cabeçalho e rodapé, além de gerenciar a área onde o conteúdo dinâmico dos microfrontends e rotas internas é renderizado.
*   **Autenticação de Usuário:** Interage diretamente com a API de back-end para facilitar o processo de login e registro de usuários, garantindo acesso seguro.
*   **Gerenciamento de Estado:** Utiliza a biblioteca **NgRx** para um gerenciamento de estado robusto, armazenando informações cruciais do usuário, como status de autenticação e dados de transações.
*   **Navegação e Roteamento:** Define e gerencia as rotas da aplicação, incluindo rotas protegidas que exigem autenticação e que carregam os microfrontends de forma assíncrona, otimizando o desempenho.

## 🏛️ Arquitetura e Tecnologias

A arquitetura do projeto é fundamentada no conceito de **Micro Frontends (MFEs)**, utilizando a poderosa biblioteca `@angular-architects/native-federation` para a orquestração eficiente dos módulos, permitindo um desenvolvimento escalável e independente.

### Tecnologias Principais Utilizadas:

*   **Angular v19.2.0:** Framework de desenvolvimento front-end robusto e amplamente utilizado, garantindo alta performance e manutenibilidade.
*   **Micro Frontends (MFEs):** Abordagem arquitetural que permite o desenvolvimento, deploy e gerenciamento de partes da aplicação de forma independente, com o projeto host orquestrando a integração.
*   **NgRx Store:** Uma biblioteca de gerenciamento de estado para aplicações Angular, que implementa o padrão Redux. Proporciona um fluxo de dados previsível e centralizado, sendo utilizado para gerenciar o estado de transações (ações, reducers e selectors).
*   **TypeScript:** Um superset do JavaScript que adiciona tipagem estática, resultando em um código mais robusto, legível e com maior capacidade de manutenção.
*   **Angular CLI:** Ferramenta de linha de comando essencial para inicializar, desenvolver, testar e manter aplicações Angular de forma eficiente.
*   **Docker:** Utilizado para a containerização da aplicação, o Docker facilita a implantação e execução em diferentes ambientes, garantindo consistência e isolamento.
*   **HTTP Interceptor:** Implementado para gerenciar a autenticação de forma transparente, adicionando automaticamente o token JWT (JSON Web Token) a todas as requisições para rotas protegidas, reforçando a segurança.

### Configuração do Micro Frontend

O projeto Host é configurado para carregar um Micro Frontend específico, denominado `mfe1`, a partir de um repositório remoto. Este MFE é acessível através da rota `/projetoFinanceiro`. É importante notar que o acesso a esta rota é protegido por um `AuthGuard`, que verifica a autenticação do usuário antes de permitir o carregamento. O arquivo `federation.manifest.json` é o responsável por definir o endereço e as configurações de carregamento do MFE.

## 📁 Estrutura de Arquivos

A seguir, uma visão geral da estrutura de arquivos e diretórios mais importantes do projeto, que reflete a organização e modularidade da aplicação:

```
. 
├── package.json
├── federation.config.js
└── src/
    └── app/
        ├── app.component.ts
        ├── app.routes.ts
        ├── core/
        │   ├── auth-guard/auth-guard.guard.ts
        │   └── auth-interceptor/auth.interceptor.ts
        ├── services/
        │   └── auth/auth.service.ts
        ├── shared/
        │   ├── components/
        │   │   ├── login-modal/
        │   │   └── register-modal/
        │   └── store/
        │       ├── transaction.actions.ts
        │       ├── transaction.reducer.ts
        │       └── transaction.selectors.ts
        └── ...
```

### Detalhamento dos Arquivos e Diretórios:

*   `package.json`: Contém as dependências do projeto (como `native-federation` e `ngrx`) e os scripts para executar e construir a aplicação.
*   `federation.config.js`: O coração da arquitetura de Micro Frontends. Este arquivo configura como os módulos remotos são carregados, quais dependências são compartilhadas e quais não são, otimizando o carregamento e a performance.
*   `src/app/`: O diretório principal da aplicação, onde a lógica e os componentes são organizados.
    *   `app.component.ts`: O componente raiz da aplicação, responsável pela exibição de componentes comuns (cabeçalho, rodapé) e pela lógica principal.
    *   `app.routes.ts`: Define as rotas principais da aplicação. A rota `'projetoFinanceiro'` é um exemplo de como o `mfe1` é carregado dinamicamente.
*   `src/app/core/`: Contém os serviços e guards essenciais para o funcionamento da aplicação.
    *   `auth-guard/auth-guard.guard.ts`: Um `CanActivate` guard que protege rotas, verificando se o usuário está autenticado antes de permitir o acesso.
    *   `auth-interceptor/auth.interceptor.ts`: Um interceptor HTTP que adiciona o token JWT ao cabeçalho `Authorization` de todas as requisições para a API, garantindo a segurança.
*   `src/app/services/`: Contém os serviços responsáveis pela interação com a API.
    *   `auth/auth.service.ts`: Serviço que encapsula as requisições para os endpoints de login e registro na API.
*   `src/app/shared/components/`: Componentes reutilizáveis que promovem a consistência da interface.
    *   `login-modal/`: Contém a lógica e o template para o modal de login.
    *   `register-modal/`: Contém a lógica e o template para o modal de registro.
*   `src/app/shared/store/`: O diretório dedicado ao gerenciamento de estado com NgRx.
    *   `transaction.actions.ts`: Define as ações que podem ser disparadas para interagir com o estado das transações.
    *   `transaction.reducer.ts`: Define como o estado das transações é alterado em resposta às ações.
    *   `transaction.selectors.ts`: Define funções para selecionar partes específicas do estado global, facilitando o acesso aos dados.

## ✨ Funcionalidades do Projeto Host

O projeto host oferece um conjunto robusto de funcionalidades, projetadas para proporcionar uma experiência de usuário completa e segura:

*   **Homepage Intuitiva:** Uma página de boas-vindas que destaca os benefícios e vantagens de abrir uma conta no ByteBank, convidando o usuário a explorar a aplicação.
*   **Modais de Autenticação:** A página inicial apresenta botões claros para "Login" e "Registrar", que abrem modais dedicados para que o usuário insira suas credenciais de forma segura e intuitiva.
*   **Roteamento Dinâmico e Protegido:** Após o login bem-sucedido, o usuário é automaticamente redirecionado para a rota `/projetoFinanceiro`. Esta rota é responsável por carregar dinamicamente o microfrontend `mfe1`, e é protegida por um `AuthGuard`, garantindo que apenas usuários autenticados possam acessá-la.
*   **Integração Segura com a API:** O `AuthService` e o `AuthInterceptor` trabalham em conjunto para garantir uma comunicação segura e eficiente com a API de back-end, lidando com o login e outras operações que exigem autenticação.
*   **Estado Compartilhado com NgRx:** A utilização do NgRx permite o gerenciamento centralizado do estado do usuário, incluindo o token de autenticação e a lista de transações. Isso torna essas informações acessíveis a todos os componentes da aplicação de forma consistente.
*   **Componentes Reutilizáveis:** O projeto faz uso de componentes de interface comuns, como `Header` e `Footer`, que garantem uma identidade visual consistente. Além disso, modais específicos para login (`LoginModalComponent`) e registro (`RegisterModalComponent`) são reutilizados, otimizando o desenvolvimento e a manutenção.

## 💻 Como Rodar o Projeto

Para colocar o projeto ByteBank em funcionamento, siga as instruções abaixo. Certifique-se de ter os pré-requisitos instalados.

### Pré-requisitos

Certifique-se de ter o **Docker** e/ou **Node.js** instalados em seu ambiente de desenvolvimento.

### Com Docker

Para uma configuração rápida e isolada, utilize o Docker:

1.  **Construir a imagem Docker:**

    ```bash
    docker build -t host-app .
    ```

2.  **Executar o container:**

    ```bash
    docker run -p 4200:4200 host-app
    ```

    A aplicação estará acessível em seu navegador através do endereço: `http://localhost:4200`.

### Sem Docker

Caso prefira rodar o projeto diretamente em seu ambiente local:

1.  **Instalar as Dependências:** Navegue até o diretório raiz do projeto e execute o seguinte comando para instalar todas as dependências necessárias:

    ```bash
    npm install
    ```

2.  **Iniciar o Projeto Host:** Inicie o servidor de desenvolvimento do Angular:

    ```bash
    npm start
    ```

    O projeto estará acessível em seu navegador através do endereço: `http://localhost:4200`.

3.  **Iniciar o Microfrontend (MFE1):** Para que a rota `/projetoFinanceiro` funcione corretamente e o microfrontend seja carregado, é **essencial** que o projeto [mfe1](https://github.com/jhonsoad/projeto-financeiro-app) esteja em execução. Certifique-se de iniciar o servidor dele em seu respectivo repositório. O projeto host irá carregá-lo dinamicamente a partir de `http://localhost:4201`.

## ⚙️ API (Back-end)

Este projeto host interage com uma **API REST** para diversas operações, incluindo autenticação e gerenciamento de dados. As rotas e detalhes de integração com esta API serão fornecidos separadamente ou podem ser encontrados na documentação específica do back-end.

