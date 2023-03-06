![Logo](https://github.com/yt-modesto/back_portifolio/documents/imgs/logo.png)

## :label: About
This repository is intended for the back-end api structure that will serve for our web portfolio project [font-end](https://github.com/yt-modesto/front_portifolio)

## technologies used


## API documentation

### Users

#### Returns all users

```http
   GET /api/users
```

| Parameter | Type | Description |
| :---------- | :-------- | :--------------------------------- |
| `api_key` | `string` | **Mandatory**. Your API key |

#### Returns an user

```http
   GET /api/user/${id}
```

| Parameter | Type | Description |
| :---------- | :-------- | :------------------------------------------ |
| `id` | `string` | **Mandatory**. The ID of the item you want |

## pre-requisites to run API
- have docker and docker-compose on your machine
## running the application
- enter the backend folder
```
    cd backend
```
- run code in terminal
```
    chmod +x entrypoint.sh && docker-compose up
```

