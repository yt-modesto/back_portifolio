![Logo](https://github.com/yt-modesto/back_portifolio/blob/main/documents/imgs/logo.png)

## :label: About

This repository is intended for the back-end api structure that will serve for our web portfolio project [font-end](https://github.com/yt-modesto/front_portifolio)

## technologies used

docker, nestjs , typeOrm ,postgres

## API documentation

### Auth

#### Return jwt with user logged in

```http
   POST /auth/login
```

### Users

#### Returns all users

```http
   GET /api/users
```

#### Returns an user

```http
   GET /api/users/${id}
```

| Parameter         | Type                                        | Description                                |
| :---------------- | :------------------------------------------ | :----------------------------------------- |
| `id`              | `string`                                    | **Mandatory**. The ID of the item you want |
| **Prerequisites** | **send**: valid jwt token by request header |

#### Create an user

```http
   POST /api/users
```

| Prerequisites | **send**                                                                   |
| :------------ | :------------------------------------------------------------------------- |
| **Body**      | valid user in json containing the creation information in the request body |

```
    {
        "email": "algumacoisa.gmail.com",
        "password": "Umasenha934893895#@fd",
        "isAdmin": true,
        "isVisitant": false
    }
```

#### Update an user

```http
   PATCH /api/users/${id}
```

| Prerequisites | **send**                                                                 |
| :------------ | :----------------------------------------------------------------------- |
| **Body**      | valid user in json containing the update information in the request body |

```
    {
        "email": "algumacoisa.gmail.com",
        "password": "Umasenha934893895#@fd",
        "isAdmin": true,
        "isVisitant": false
    }
```

#### Delete an user

```http
   DELETE /api/users/${id}
```

## pre-requisites to run API

- have docker and docker-compose on your machine

## running the application

- enter the backend folder

```
    cd backend
```

- run code in terminal

```
    chmod +x .docker/entrypoint.sh && docker-compose up
```
