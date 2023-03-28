# User Authentication API

```http
  POST user/
```
This request will handle both our user `Sign Up` and our user `Log Out` functions and will differentiate between the two actions by assessing if the user is currently authenticated. If user is authenticated then we will run our `Log Out` function otherwise we will run a `Sign Up` function.

#### Sign Up

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. user email address must have `@` |
| `password` | `string` | **Required**. user password |

#### Log Out

| Request Headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `X-CSRFToken` | `string` | **Required**. Given by Django uppon request |
| `sessionid` | `string` | **Required**. Given to each User upon sign in |


```http
  PUT user/
```
This request will handle user `Log In` capabilities by authenticating both email and password.

#### Log In

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. user email address must have `@` |
| `password` | `string` | **Required**. user password |


```http
  GET user/
```
This request will return the current authenticated users email and id.

#### Current User

| Request Headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `X-CSRFToken` | `string` | **Optional**. Given by Django uppon request |
| `sessionid` | `string` | **Optional**. Given to each User upon sign in |


