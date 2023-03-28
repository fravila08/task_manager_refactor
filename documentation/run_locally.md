# Run Locally

Clone the project

```bash
  git clone https://github.com/fravila08/task_manager_refactor.git
```
## Environment

Create and activate a Python Virtual Environment

```bash
  python -m venv <name_of_environment>
  source <name_of_environment>/bin/activate
```

Install requirements from `requirements.txt`

```bash
  pip install requirements.txt
```


## .env 

Create a .env file and add your Django Secret Key

```python
  DJANGO_KEY = 'DJANGO SECRET KEY'
```

## Database

Ensure you have PostgreSQL installed and running on port 5432 in your machine. Now create the database

*CLI*
```bash
  createdb to_do_app_db
```

*psql*
```sql
  CREATE DATABASE to_do_app_db;
```

## Running Django

Migrate existing migrations onto your database

```bash
  python manage.py migrate
```

Run your Django server

```bash
  python manage.py runserver
```

## Running React.ts
Open a seperate terminal and `cd` into `to_do_client` to run the following commands.


Install dependencies

```bash
  npm install
```

Run the watcher

```bash
  npm run watch
```


## Up and Running

Go to [localhost](http://127.0.0.1:8000/) and you'll see the home page of our project.

