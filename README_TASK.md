# Debug in Node.js

## Prerequisites

- Install Postgres (contains pgAdmin4)
- Postgres should work on localhost, on 5433 port
- Create user
- Run pgAdmin4
- Create database with name gamedb
- In file db.js change username and login strings to yours (DO NOT COMMIT THIS)
- Install dependencies (npm i)
- Run application via npm run start
- Install dotenv package (some info) and in .env file (should be in root) set following variables:

*DB_HOST=host
DB=yourdatabasename
DB_USER=yourusername
DB_PASSWORD=yourpassword
db.js file beginning should look like this:
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})*

- Your task is to find at least 5 compilation errors and 5 logic errors using the debugging tools.

- You need fix them and make the broken application workable.

- An additional task is to refactor the repository using modern Javascript syntax and fix codestyle issues.
