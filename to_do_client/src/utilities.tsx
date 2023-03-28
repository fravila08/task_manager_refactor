import axios from "axios";
import { IUser, ITask } from "./interfaces";
import { FormEvent } from "react";

export const currUser = async():Promise<IUser | null> => {
    axios.defaults.baseURL="http://localhost:8000/"
    let response = await axios.get('user/')
    console.log(response)
    return response.data.user
}
  
export const logOut = async():Promise<boolean> => {
    axios.defaults.baseURL="http://localhost:8000/"
    let response = await axios.post('user/')
    return response.data.log_out
}

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

export const signUserUp =async (email:string, password:string):Promise<boolean> => {
    let response = await axios.post('user/',{
        email : email,
        password : password
    })
    return response.data.success
}

export const getTasks = async():Promise<ITask[]> => {
    let response = await axios.get('tasks/')
    console.log(response.data.tasks)
    return response.data.tasks
}