# To-do API

## Table of contents

- [About](#about)
- [Built with](#built-with)
- [Running](#running)
- [API Reference](#api-reference)

## About

This project is a simple implementation of a To-do list app to demonstrate how we can use docker-compose to start local instances of databases.

## Built with

- Node.js (v16+)
- Express (v4+)
- Knex (v1+)
- Postgres

## Building

### Prerequisites

To run this project, you'll need to install Node.js on your machine.

After that, clone or download the repository and install its dependencies.

```
git clone git@github.com:ramos-ph/todo-api.git
cd todo-api
npm install
```

### Running the migrations

```
npm run migrate
```

### Starting API

```
npm start
```

A server will start on `http://localhost:8080`

## API Reference

To check for the available endpoints and test the project, please refer to [REFERENCE.md](REFERENCE.md)
