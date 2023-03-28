import { Task } from "./Task"
import { ITask, TaskRendererProps } from "../interfaces";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { getTasks } from "../utilities";


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
