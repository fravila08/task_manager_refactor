import { FormEvent, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";


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

export const LogIn: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return(
        <Form onSubmit={(e) => logIn(e, email, password)}>
            <h2>Log In</h2>
            <Form.Control type="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
            <Form.Control type="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
            <Form.Control type="submit" />
        </Form>
    )
}