import { Row, Col } from "react-bootstrap";
import { HeaderProps } from "../interfaces";


export const Header : React.FC<HeaderProps> = ({user, setShowLogIn, logMeOut}) => {

    return(
        <Row id='header'>
            <Col className="headerCol" xs={3}>
                {user === null ? 
                    <button 
                    onClick={()=> setShowLogIn(false)} 
                    className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-3 py-1 text-sm font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                        Sign Up
                    </button>
                    :
                    <button 
                    onClick={()=>logMeOut()}
                    className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-3 py-1 text-sm font-small text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                        Logout
                    </button>
                }
            </Col>
            <Col className="headerCol" xs={6}>
                <h1>TASK MANAGER</h1>
            </Col>
            <Col className="headerCol" xs={3}>
                {user === null ? 
                    <button 
                    onClick={()=>setShowLogIn(true)}
                    className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-3 py-1 text-sm font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                        Log In
                    </button>
                    : 
                    <img src={`https://robohash.org/${user.email}.png`}/>
                }
            </Col>
        </Row>
    )

}