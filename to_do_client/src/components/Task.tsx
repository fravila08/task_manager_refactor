import { ITask } from "./TaskRenderer";
import { Row, Col } from "react-bootstrap";

export interface TaskProps{
    task: ITask;
}

export const Task: React.FC<TaskProps> = ({
    task
  }) => {

    return (
        <Row>
            <Col>
                {task.title}
            </Col>
            <Col>
                {task.description}
            </Col>
            <Col>
                {task.complete ? 'comp' : 'pending'}
            </Col>
        </Row>
    )
}