# Users

## Create User

**URL** : `/user`

**Method** : `POST`

**Auth required** : `id=[number]`

**Permissions required** : None

### Success Response

**Code** : `201 OK`

**Content example**

```json
{
  "user": [
    {
      "id": 1,
      "email": "email",
      "username": "admin",
      "password": "passwordHash"
    }
  ]
}
```

### Error Response

**Code** : `400 BAD REQUEST`

**Code** : `403 USER EXISTS`

**Code** : `500 INTERNAL SERVER ERROR`

## Sign in User

**URL** : `/signin`

**Method** : `POST`

**Auth required** : `id=[number]`

**Permissions required** : None

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "user": [
    {
      "id": 1,
      "username": "admin",
      "password": "passwordHash"
    }
  ]
}
```

### Error Response

**Code** : `401 UNAUTHORIZED`

**Code** : `500 INTERNAL SERVER ERROR`