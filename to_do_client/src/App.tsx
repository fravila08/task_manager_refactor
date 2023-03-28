import { useEffect, useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { TaskRenderer } from './components/TaskRenderer';
import { MyCsrfToken } from './components/CsrfToken';
import { Header } from './components/Header';
import { IUser } from './interfaces';
import { currUser, logOut } from './utilities';



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
