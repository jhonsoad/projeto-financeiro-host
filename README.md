🚀 ByteBank - Gerenciamento Financeiro (Projeto Host)

🎯 Sobre o Projeto
Este repositório contém o projeto Host de uma aplicação de gerenciamento financeiro, desenvolvida como parte do Tech Challenge. O objetivo deste projeto é atuar como a interface principal que integra diferentes Micro Frontends (MFEs), proporcionando uma experiência de usuário unificada. Ele gerencia as rotas, a autenticação e a navegação entre os módulos, sendo o ponto de entrada para todas as funcionalidades da aplicação.

As responsabilidades do projeto host incluem:

Estrutura da Interface: Exibir o cabeçalho e rodapé fixos, além de gerenciar a área onde o conteúdo dinâmico (microfrontends e rotas internas) é renderizado.

Autenticação de Usuário: Interagir com a API de back-end para permitir o login e o registro de usuários.

Gerenciamento de Estado: Utilizar o NgRx para armazenar informações do usuário, como o status de autenticação e dados de transações.

Navegação e Roteamento: Definir as rotas da aplicação, incluindo rotas protegidas que exigem autenticação e que carregam os microfrontends de forma assíncrona.


🏛️ Arquitetura e Tecnologias
A arquitetura do projeto é baseada em Micro Frontends (MFEs), utilizando a biblioteca @angular-architects/native-federation para a orquestração dos módulos.

Tecnologias Principais:

Angular v19.2.0 

Micro Frontends (MFEs): Arquitetura que permite o desenvolvimento, deploy e gerenciamento de partes da aplicação de forma independente, sendo orquestrada pelo projeto host.

NgRx Store: Biblioteca para gerenciamento de estado da aplicação, utilizando um fluxo de dados previsível. O projeto usa NgRx para gerenciar o estado de transações, incluindo ações, reducers e selectors.

TypeScript: Superset do JavaScript que adiciona tipagem estática, garantindo maior robustez e manutenibilidade ao código.

Angular CLI: Ferramenta de linha de comando para inicializar, desenvolver e manter aplicações Angular.

Docker: Para containerização da aplicação, facilitando a execução em diferentes ambientes.

HTTP Interceptor: Implementado para gerenciar a autenticação e incluir o token JWT em todas as requisições para rotas protegidas.

Configuração do Micro Frontend
O projeto Host é configurado para carregar um Micro Frontend chamado mfe1 de um repositório remoto, utilizando a rota /projetoFinanceiro. Para acessar esta rota, o usuário deve estar autenticado, o que é verificado por um 

AuthGuard. O arquivo 

federation.manifest.json define o endereço do MFE.


📁 Estrutura de Arquivos 
Aqui está uma visão geral dos arquivos e diretórios mais importantes do projeto:

package.json: Define as dependências do projeto, como native-federation e ngrx, e os scripts para executar e construir a aplicação.

federation.config.js: O coração da arquitetura de Microfrontends. Ele configura como os módulos remotos são carregados, quais dependências são compartilhadas e quais não são.

src/app/: O diretório principal da aplicação.

app.component.ts: O componente raiz que lida com a exibição de componentes comuns (cabeçalho, rodapé) e a lógica principal da aplicação.

app.routes.ts: Define as rotas principais. A rota 'projetoFinanceiro' é um exemplo de como carregar o mfe1 dinamicamente.

src/app/core/: Contém os serviços e guards da aplicação.

auth-guard/auth-guard.guard.ts: Um CanActivate guard que protege rotas. Ele verifica se o usuário está autenticado antes de permitir o acesso.

auth-interceptor/auth.interceptor.ts: Um interceptor HTTP que adiciona o token JWT ao cabeçalho Authorization de todas as requisições para a API.

src/app/services/: Contém serviços que interagem com a API.

auth/auth.service.ts: Serviço que faz as requisições para os endpoints de login e register na API.

src/app/shared/components/: Componentes reutilizáveis.

login-modal/: Contém a lógica para o modal de login.

register-modal/: Contém a lógica para o modal de registro.

src/app/shared/store/: O diretório do NgRx.

transaction.actions.ts: Define as ações para interagir com as transações.

transaction.reducer.ts: Define como o estado das transações muda com base nas ações.

transaction.selectors.ts: Define funções para selecionar partes específicas do estado global.


✨ Funcionalidades do Projeto Host
As funcionalidades principais implementadas no projeto host incluem:

Homepage: Uma página de boas-vindas que destaca as vantagens de abrir uma conta.

Modais de Autenticação: A página inicial apresenta botões para "Login" e "Registrar", que abrem modais para que o usuário insira suas credenciais.

Roteamento Dinâmico: Ao fazer login, o usuário é redirecionado para a rota /projetoFinanceiro, que carrega o microfrontend mfe1. Esta rota é protegida pelo AuthGuard.

Integração com a API: O AuthService e o AuthInterceptor garantem a comunicação segura com a API para login e outras operações.

Estado Compartilhado: O NgRx é utilizado para gerenciar o estado do usuário, como o token de autenticação e a lista de transações, tornando-o acessível a todos os componentes.

Componentes Reutilizáveis: Componentes de interface como Header e Footer. Modais para login e registro (LoginModalComponent e RegisterModalComponent).


💻 Como Rodar o Projeto
Pré-requisitos
Certifique-se de ter o Docker e/ou Node.js instalados.

Com Docker
Construir a imagem:

docker build -t host-app .
Executar o container:

docker run -p 4200:4200 host-app
A aplicação estará disponível em http://localhost:4200.

Sem Docker

Instalar as Dependências: Navegue até o diretório raiz do projeto e execute:

npm install

Iniciar o Projeto Host: Inicie o servidor de desenvolvimento do Angular:

npm start

O projeto estará acessível em http://localhost:4200.

Iniciar o Microfrontend (MFE1): Para que a rota /projetoFinanceiro funcione corretamente, é necessário que o projeto mfe1 esteja em execução. Certifique-se de iniciar o servidor dele em seu respectivo repositório. O host irá carregá-lo dinamicamente a partir de http://localhost:4201.

⚙️ API (Back-end)
Este projeto host interage com uma API REST. As rotas para esta API estão detalhadas abaixo.
