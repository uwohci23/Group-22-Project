import "./LoginPage.css";
import { useNavigate  } from "react-router-dom";
import React from "react";

const LoginComponent = ({setShowRegister, setShowLogin, setPageToShow}) => {
    const navigate = useNavigate();

    const handleLogin = (successful) => {
        console.log("preliminary");
    }
    return ( 
        <div className="loginCover">
            <form action="" method="post">
                <div className="loginPage">
                    <h1>Firestone Project</h1>
                    <input className="loginInput" id="username" type="text" placeholder="username" />
                    <input className="loginInput" id ="password" type="password" placeholder="password" />

                    <div className="login-btn" onClick= {() => {handleLogin(false);}}>Login</div>
                    <div className="alt-login">
                        <div className="login-btn" id="register" onClick={() => {
                            navigate("/register");
                        }}>Register New User</div>
                    </div>
                    {/* {requestError ? <OperationFailedComponent error={"Username or password invalid"} /> : null} */}
                </div>
            </form>
        </div>
     );
}
 
export default LoginComponent;