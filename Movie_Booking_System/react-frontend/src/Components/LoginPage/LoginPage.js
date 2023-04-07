import "./LoginPage.css";
import Axios from "axios";
import { useNavigate  } from "react-router-dom";
import OperationFailedComponent from "../OperationFailedComponent/OperationFailedComponent";
import React, { useState } from 'react';

const LoginComponent = ({userName,setUserName,setUserid}) => {
    const navigate = useNavigate();

    const [requestError, setRequestError] = React.useState(false);
    const [pageToShow, setPageToShow] = React.useState(false);
    const [loginStatus, setLoginStatus] = useState(null);
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
        
        const result = Axios.post("http://13.58.139.97:5000/user/login", request).then(
            async (response) => {
                if (response.data.status) {
                    // login is successful, check for admin
                    if (response.data.admin_status > 0) {

                        setUserName(username);
                        // if successful, populate local storage with user name
                        window.localStorage.setItem("MAIN_USERNAME", JSON.stringify(username));
                        setUserid(response.data.userid)
                        navigate("/admin");
                    } else {
                        setLoginStatus('success');
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        setPageToShow(["normal", username]);
                        setUserName(username);
                        
                        // if successful, populate local storage with user name
                        window.localStorage.setItem("MAIN_USERNAME", JSON.stringify(username));
                        console.log("in login component",response.data.userid)
                        setUserid(response.data.userid)
                        navigate("/main");
                    }

                }
        }).catch((error) => {
            setRequestError(true);
            setLoginStatus('failure');
        });
    }

    return ( 
        <div className="loginCover">
            <form action="" method="post">
                <div className="loginPage">
                    <h1>Book-A-Movie</h1>
                    <input placeholder = "username" id="username" type="text" className={`loginInput ${loginStatus === 'failure' ? 'failure' : (loginStatus === 'success' ? 'success' : '')}`} />
                    <input placeholder = "password" id="password" type="password" className={`loginInput ${loginStatus === 'failure' ? 'failure' : (loginStatus === 'success' ? 'success' : '')}`} />

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