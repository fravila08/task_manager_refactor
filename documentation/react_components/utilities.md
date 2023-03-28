# Utilities

This file will cover utility functions used through out our application, their purpose and expected return.

```typescript
export const currUser = async():Promise<IUser | null> => {
    axios.defaults.baseURL="http://localhost:8000/"
    let response = await axios.get('user/')
    console.log(response)
    return response.data.user
}
```
currUser funtion is an asyncronis was created to run upon our page mounting utilizing a useEffect method to consistently send an AXIOS GET request for logged in user information.

```typescript
export const logOut = async():Promise<boolean> => {
    axios.defaults.baseURL="http://localhost:8000/"
    let response = await axios.post('user/')
    return response.data.log_out
}
```
logOut function is an asyncronis function running AXIOS POST request to log out the signed in user.
```typescript
export const logIn = async (event: FormEvent, email:string, password:string)=>{
    event.preventDefault();
    let response = await axios.put('user/', {
        email : email,
        password : password
    })
    if(response.data.login){
        window.location.reload()
    }
}
```
logIn function is an asyncronis function running AXIOS PUT request to authenticate a user, log in said user, and begin the user session.

```typescript
export const signUserUp =async (email:string, password:string):Promise<boolean> => {
    let response = await axios.post('user/',{
        email : email,
        password : password
    })
    return response.data.success
}
```

signUserUp function is an asyncronis function running AXIOS POST request to create a new user on our Django server.

```typescript
export const getTasks = async():Promise<ITask[]> => {
    let response = await axios.get('tasks/')
    console.log(response.data.tasks)
    return response.data.tasks
}
```
getTasks function is an asyncronis function running AXIOS GET request to grab all tasks pertaining to the current authenticated and active user