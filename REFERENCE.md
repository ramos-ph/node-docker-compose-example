# API Reference

## Table of contents

- [Users](#users)
  - [Create an user](#create-an-user)
  - [Get user by id](#get-user-by-id)
- [To-dos](#to-dos)
  - [List to-dos](#list-to-dos)
  - [Create to-do](#create-to-do)
  - [Mark to-do as completed](#mark-to-do-as-completed)
  - [Update to-do](#update-to-do)
  - [Delete to-do](#delete-to-do)

## Users

### Create an user

#### Request params

| Param    | Data type | Param type | Required |
| -------- | --------- | ---------- | -------- |
| username | String    | Body       | **Yes**  |

#### Request example

```sh
curl --request POST \
  --url http://localhost:8080/users \
  --header 'Content-Type: application/json' \
  --data '{ "username": "<username>" }'
```

#### Response example

```json
{
  "username": "<your username>"
}
```

### Get user by id

#### Request params

| Param | Data type | Param type | Required |
| ----- | --------- | ---------- | -------- |
| id    | number    | Path       | **Yes**  |

#### Request example

```sh
curl --request GET \
  --url http://localhost:8080/users/:id
```

#### Response example

```json
{
  "id": 1,
  "username": "<username>",
  "created_at": "<date>",
  "updated_at": "<date>"
}
```

## To-dos

### List to-dos

#### Request params

| Param   | Data type | Param type | Required |
| ------- | --------- | ---------- | -------- |
| user_id | number    | Query      | **Yes**  |
| status  | String    | Query      | **No**   |

`status` can be `COMPLETED` or `PENDING`.

#### Request example

```sh
curl --request GET \
  --url 'http://localhost:8080/todos?user_id=1'
```

#### Response example

```json
[
  {
    "id": 1,
    "title": "<title>",
    "description": "<description>",
    "status": "COMPLETED | PENDING",
    "user_id": 1,
    "created_at": "<date>",
    "updated_at": "<date>"
  }
]
```

### Create to-do

#### Request params

| Param       | Data type | Param type | Required |
| ----------- | --------- | ---------- | -------- |
| title       | String    | Body       | **Yes**  |
| description | String    | Body       | **No**   |
| user_id     | number    | Body       | **Yes**  |

#### Request example

```sh
curl --request POST \
  --url http://localhost:8080/todos \
  --header 'Content-Type: application/json' \
  --data '{ "title": "<titile>", "description": "<description>", "user_id": 1 }'
```

#### Response example

```json
{
  "title": "<title>"
}
```

### Update to-do

#### Request params

| Param       | Data type | Param type | Required |
| ----------- | --------- | ---------- | -------- |
| title       | String    | Body       | **Yes**  |
| description | String    | Body       | **No**   |
| id          | number    | Path       | **Yes**  |

#### Request example

```sh
curl --request PUT \
  --url http://localhost:8080/todos/1 \
  --header 'Content-Type: application/json' \
  --data '{ "title": "Todo 1", "description": "description" }'
```

#### Response example

```json
{
  "title": "<title>",
  "description": "<description>"
}
```

### Mark to-do as completed

#### Request params

| Param | Data type | Param type | Required |
| ----- | --------- | ---------- | -------- |
| id    | number    | Path       | **Yes**  |

#### Request example

```sh
curl --request PUT \
  --url http://localhost:8080/todos/1/complete
```

#### Response example

This endpoint returns no response.

### Delete to-do

#### Request params

| Param | Data type | Param type | Required |
| ----- | --------- | ---------- | -------- |
| id    | number    | Path       | **Yes**  |

#### Request example

```sh
curl --request DELETE \
  --url http://localhost:8080/todos/8
```

#### Response example

This endpoint returns no response.
