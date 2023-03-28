import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Task } from './components/Task';
import { SignUp } from './components/SignUp';
import { Button } from 'react-bootstrap';
import { LogIn } from './components/LogIn';
import axios from 'axios';
import { TaskRenderer } from './components/TaskRenderer';
import { MyCsrfToken } from './components/CsrfToken';
import { Header } from './components/Header';

export interface IUser{
  email: string;
  id : number;
}

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


function App() {
  const [user, setUser] = useState<IUser | null>(null)
  const [showLogIn, setShowLogIn] = useState<boolean>(false)
  

  useEffect(()=>{
    const getCurrUser = async()=> {
      let user = await currUser()
      setUser(user)
    }
    getCurrUser()
  },[])

  const logMeOut = async() =>{
    if(await logOut()){
      setUser(null)
    }
  }

  MyCsrfToken()

  return (
    <Container className="App">

      <Header user={user} logMeOut={logMeOut} setShowLogIn={setShowLogIn} />
      
      {showLogIn ?
      <LogIn /> :
      user === null ?
      <SignUp setShowLogIn={setShowLogIn} /> :
      <TaskRenderer user={user}/>
      }

      <Row className='footer'>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>

    </Container>
  )
}

export default App
