import axios from "axios";
import { FormEvent, useState } from "react";
import { Form } from "react-bootstrap";

export interface SignUpProps{
    setShowLogIn:(showLogIn: boolean) => void;
}


export const signUserUp =async (email:string, password:string):Promise<boolean> => {
    let response = await axios.post('user/',{
        email : email,
        password : password
    })
    return response.data.success
}


export const SignUp: React.FC<SignUpProps> = ({setShowLogIn}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const signMeUp =async (event:FormEvent) => {
        event.preventDefault();
        setShowLogIn(await signUserUp(email, password))
    }

    return(
        <Form onSubmit={(e)=>signMeUp(e)}>
            <h2>Sign Up</h2>
            <Form.Control type="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
            <Form.Control type="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
            <Form.Control type="submit" />
        </Form>
    )
}