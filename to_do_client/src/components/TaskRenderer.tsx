import { Task } from "./Task"
import { IUser } from "../App";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";

export interface ITask{
    title : string;
    description : string;
    complete : boolean;
    id : number;
    user : number;
  }

export interface TaskRendererProps{
    user : IUser;
}

export const getTasks = async():Promise<ITask[]> => {
    let response = await axios.get('tasks/')
    console.log(response.data.tasks)
    return response.data.tasks
}

export const TaskRenderer: React.FC<TaskRendererProps>= ({user}) => {
    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(()=>{
        const getMyTasks = async() => {
            setTasks(await getTasks())
        }
        getMyTasks()
    },[user])

    return(
        <Row>
            {tasks.map((task)=>(
                <Task task={task} />
            ))}
        </Row>
    )
}
