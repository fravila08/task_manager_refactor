# Interfaces
This file will thoroughly explain and document each individual interface.

### User
```typescript
export interface IUser{
    email: string;
    id : number;
} 
```
The `IUser` interface was created to specify the user data that will be available in our application.

```typescript
export interface HeaderProps{
    user : IUser | null;
    setShowLogIn : (showLogIn:boolean) => void;
    logMeOut :()=>void;
}
```
The HeaderProps interface specifies the props that will be passed in to the Header component.
- user{useState}: will utilize the IUser interface if a user is returned from our user API request or set it as a null object if there is no user currently logged in.

- setShowLogIn{setState} : this is a boolean state that we utilize as a conditional logic to display our Log In page.

- logMeOut {Function : Promise} : this function allows each user to log out from our application and ends with our applicaiton refreshing if log out was successful

```typescript
export interface SignUpProps{
    setShowLogIn:(showLogIn: boolean) => void;
}
```
SignUpProps interface will specify the props being passed into the SignUp Component.

- setShowLogIn{setState} : this is a boolean state that we utilize as a conditional logic to display our Log In page.

```typescript
export interface ITask{
    title : string;
    description : string;
    complete : boolean;
    id : number;
    user : number;
}
```
ITask interface will be utilized to identify each field for each individual user task.
- title : The title of said task
- description : The description of said task
- complete : boolean field describing whether a task is completed `true` or not `false`
- user : in this case the user will only be the user id and that's why it is passed back as a number

```typescript
export interface TaskRendererProps{
    user : IUser;
}
```
TaskRendereProps interface was created to specify what props would be passed into the TaskRenderer Component.

```typescript
export interface TaskProps{
    task: ITask;
}
```
TaskProps interface was created to specify what props would be passed into the Task Component.