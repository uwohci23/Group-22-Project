import "./LoginPage.css";
import Axios from "axios";
import { useNavigate  } from "react-router-dom";
import OperationFailedComponent from "../OperationFailedComponent/OperationFailedComponent";
import React from "react";

const LoginComponent = ({setUserName,setUserid}) => {
    const navigate = useNavigate();

    const [requestError, setRequestError] = React.useState(false);
    const [pageToShow, setPageToShow] = React.useState(false);

    // Get username from input field
    const getUsername = () => {
        const username = document.getElementById("username");
        return username.value;
    }


    // get password given in the input field
    const getPassword = () => {
        const password = document.getElementById("password");
        return password.value;
    }


    const handleLoginRequest = (successful) => {
        const username = getUsername();
        const password = getPassword();
        
        const request = {username: username, password: password};
        
        const result = Axios.post("http://127.0.0.1:5000/user/login", request).then(
            (response) => {
                if (response.data.status) {
                    // login is successful, check for admin
                    if (response.data.admin_status > 0) {

                        setUserName(username);
                        setUserid(response.data.userid)
                        navigate("/admin");
                    } else {
                        setPageToShow(["normal", username]);
                        setUserName(username);
                        setUserid(response.data.userid)
                        navigate("/main");
                    }

                }
        }).catch((error) => {setRequestError(true);});
    }

    return ( 
        <div className="loginCover">
            <form action="" method="post">
                <div className="loginPage">
                    <h1>Firestone Project</h1>
                    <input className="loginInput" id="username" type="text" placeholder="username" />
                    <input className="loginInput" id ="password" type="password" placeholder="password" />

                    <div className="login-btn" onClick= {() => {handleLoginRequest(true);}}>Login</div>
                    <div className="alt-login">
                        <div className="login-btn" id="register" onClick={() => {
                            navigate("/register");
                        }}>Register New User</div>
                    </div>
                    {requestError ? <OperationFailedComponent error={"Username or password invalid"} /> : null}
                </div>
            </form>
        </div>
     );
}
 
export default LoginComponent;