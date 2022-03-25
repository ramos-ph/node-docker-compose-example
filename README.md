# To-do API

## Table of contents

- [About](#about)
- [Built with](#built-with)
- [Running](#running)
- [Testing](#testing)
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

To run this project, you'll need to install Node.js, Docker and Docker Compose on your machine.

After that, clone or download the repository and install its dependencies.

```
git clone git@github.com:ramos-ph/todo-api.git
cd todo-api
npm install
```

### Starting the containers

To start a local Postgres instance, run the following command:

```
npm run docker-start
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

## Testing

### Using a DMS

You'll need a Postgres or general DMS installed on your machine.

If you use the provided `docker-compose.yaml`, you'll be able to connect to the docker instances with the following credentials:

| Param    | Value         |
| -------- | ------------- |
| host     | `localhost`   |
| port     | 5432          |
| user     | `docker`      |
| password | `docker`      |
| database | `docker_test` |

### Using `psql`

You'll need `pqsl` installed on your machine.

To connect to your running instance, run the following command:

```sh
# connects on localhost, with the user 'docker' and the default database 'docker_test'
psql -h localhost -U docker -d docker_test
```

It'll prompt for a password, insert the password `docker`.

You can run `\dt` to list the relations of the database:

```
docker_test=# \dt
               List of relations
 Schema |         Name         | Type  | Owner
--------+----------------------+-------+--------
 public | knex_migrations      | table | docker
 public | knex_migrations_lock | table | docker
 public | todos                | table | docker
 public | users                | table | docker
(4 rows)
```

## API Reference

To check for the available endpoints and test the project, please refer to [REFERENCE.md](REFERENCE.md)
