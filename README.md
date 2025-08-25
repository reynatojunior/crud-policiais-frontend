# Sistema de Policiais

Este projeto é composto por um **backend** em NestJS + TypeORM + MySQL e um **frontend** em Angular. O sistema permite o cadastro, listagem, edição e exclusão de policiais.

## Estrutura de Pastas

```
readme.md
backend/
  .env
  .gitignore
  .prettierrc
  eslint.config.mjs
  nest-cli.json
  package.json
  README.md
  tsconfig.build.json
  tsconfig.json
  src/
    app.controller.spec.ts
    app.controller.ts
    app.module.ts
    app.service.ts
    main.ts
    policiais.http
    policiais/
      dto/
        create-policiais.dto.ts
        update-policiais.dto.ts
      entities/
        policiais.entity.ts
      policiais.controller.spec.ts
      policiais.controller.ts
      policiais.module.ts
      policiais.service.spec.ts
      policiais.service.ts
  test/
    app.e2e-spec.ts
    jest-e2e.json
frontend/
  .editorconfig
  .gitignore
  angular.json
  package.json
  README.md
  tsconfig.app.json
  tsconfig.json
  tsconfig.spec.json
  .angular/
    cache/
  .vscode/
    tasks.json
    launch.json
    extensions.json
  public/
    ...
  src/
    index.html
    styles.css
    main.ts
    main.server.ts
    server.ts
    app/
      app.component.ts
      app.component.html
      app.component.css
      app.component.spec.ts
      app.config.ts
      app.config.server.ts
      app.routes.ts
      app.routes.server.ts
      models/
        policial.interface.ts
      services/
        crud-policial.service.ts
        crud-policial.service.spec.ts
      components/
        home/
          home.component.ts
          home.component.html
          home.component.css
          home.component.spec.ts
        cadastrar/
          cadastrar.component.ts
          cadastrar.component.html
          cadastrar.component.css
          cadastrar.component.spec.ts
        listar/
          listar.component.ts
          listar.component.html
          listar.component.css
          listar.component.spec.ts
```

## Tecnologias Utilizadas

- **Backend:** NestJS, TypeORM, MySQL, class-validator
- **Frontend:** Angular 19, RxJS, Express (SSR)
- **Testes:** Jest (backend), Karma/Jasmine (frontend)

## Como Executar

### Backend

1. Instale as dependências:
   ```bash
   cd backend
   npm install
   ```
2. Configure o arquivo `.env` com suas credenciais do banco de dados MySQL.
3. Inicie o servidor:
   ```bash
   npm run start:dev
   ```
   O backend estará disponível em `http://localhost:3000`.

### Frontend

1. Instale as dependências:
   ```bash
   cd frontend
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
   O frontend estará disponível em `http://localhost:4200`.

## Funcionalidades

- Cadastro de policiais
- Listagem de policiais
- Edição de dados de policiais
- Exclusão de policiais

## Testes

- **Backend:**  
  Execute os testes com:
  ```bash
  npm run test
  ```
- **Frontend:**  
  Execute os testes com:
  ```bash
  npm run test
  ```

## Observações

- Certifique-se de que o backend esteja rodando antes de utilizar o frontend.
- O frontend consome a API REST do backend
