
# Tasks CRUD API

#### Get all tasks

```http
  GET tasks/
```

We will use this endpoint to grab all tasks belonging to an Authenticated & Logged In user.

| Request Headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `X-CSRFToken` | `string` | **Required**. Given by Django uppon request |
| `sessionid` | `string` | **Required**. Given to each User upon sign in |

#### Task [Read | Update | Delete]

```http
  GET | PUT | DELETE /tasks/${id}/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `interger` | **Required**. Id of task to fetch |

**GET**

  Will return an individiual task belonging to the `authenticated`user with the matching id.

**PUT**

*Body*

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Optional**. New title for selected Task|
| `description`      | `string` | **Optional**. New description for selected task |
| `complete`      | `boolean` | **Optional**. If true it will change tasks status |

Updates selected tasks properties and saves updates to database.

**DELETE**

Will delete the selected tast from database.


#### Task [Create]

*Headers*

| Request Headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `X-CSRFToken` | `string` | **Required**. Given by Django uppon request |
| `sessionid` | `string` | **Required**. Given to each User upon sign in |

*Body*

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. New title for selected Task|
| `description`      | `string` | **Required**. New description for selected task |

Will create an uncompleted task.