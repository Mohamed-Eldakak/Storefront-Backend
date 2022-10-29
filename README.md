# Image-Processing-API

## Requirements
Dependecies used :
#### 1. TypeScript
`npm install typescript --save-dev ts-node`

#### 2. express and type express
```
npm i  express
npm i -D @types/express
```

#### 3. nodemon
`npm i -D nodemon`

#### 4. jasmine
`npm install jasmine-spec-reporter jasmine`

#### 5. eslint
`npx eslint --init`

#### 6. prettier 
`npm install --save-dev prettier`

#### 7. set up prettier and eslint
`npm install --save-dev eslint-config-prettier eslint-plugin-prettier`

#### 8. SuperTest with type definition
`npm i  supertest @types/supertest`

#### 9. pg , db-migrate and db-migrate-pg
`npm i  pg db-migrate db-migrate-pg`

#### 10. bcrypt and jsonwebtoken
`npm i  bycrypt jsonwebtoken`

#### 10. types of (jsonwebtoken and pg)
`npm i @types/bcrypt @types/pg --save-dev `

## Documentations
### Dependecies
1. [TypeScript](https://www.typescriptlang.org/docs/)
2. [Node.JS](https://nodejs.org/dist/latest-v16.x/docs/api/)
3. [Express](https://expressjs.com/)

### Managing Environment Variables

1. [dotenv](https://www.npmjs.com/package/dotenv)

### Database and Migration

1. [pg](https://node-postgres.com/)
2. [db-migrate](https://db-migrate.readthedocs.io/en/latest/)
3. [db-migrate-pg](https://www.npmjs.com/package/db-migrate-pg)

### Authentication and Security

1. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
2. [bcrypt](https://www.npmjs.com/package/bcrypt)
3. [morgan](https://www.npmjs.com/package/morgan)

### Fixing and Formatting Code

1. [ESLint](https://eslint.org/docs/user-guide/getting-started)
2. [Prettier](https://prettier.io/docs/en/index.html)

### Unit testing

1. [Jasmine](https://jasmine.github.io/)
2. [supertest](https://www.npmjs.com/package/supertest)

### Create Databases

We need to create the dev and test database.

- connect to the default postgres database as the server's root user `psql -U postgres`
- In psql run the following to create a user
  - `CREATE USER store_user WITH PASSWORD '123';`
- In psql run the following to create the dev and test database
  - `CREATE DATABASE store;`
  - `CREATE DATABASE store_test;`
- Connect to the databases
  - Dev Database : `\c store`
  - Test Database : `\c store_test`

### Migrate Database

Navigate to the root directory and run the command below to migrate the database

`npm run migrateUp`

### Enviromental Variables Set up

Bellow are the environmental variables that needs to be set in a `.env` file.

```
PORT= 3000
NODE_ENV=dev
POSTGRES_DATABASE=store
POSTGRES_TEST_DATABASE=store_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
BCRYPT_PASSWORD=more-safe
SALT_ROUNDS=10
SECRET_TOKEN=more-security
```

## Setting Up The Project

1. Install all dependencies
   `npm install`

2. Build the project from TypeScript to JavaScript
   `npm run build`

3. Start the Server
   `npm start`

4. Run the Tests
   `npm run test`

5. Run Prettier and ESLint
   `npm run prettier`
   `npm run lint`