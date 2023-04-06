import React from "react";
import "./NavBar.css";
import { useNavigate  } from "react-router-dom";
import {  FaBookmark } from 'react-icons/fa'

const NavBar = ({setSearchQuery}) => {

    const [displayUserName, setDisplayUserName] = React.useState(null);

    React.useEffect(() => {
        console.log("function call");
        const data = window.localStorage.getItem("MAIN_USERNAME");
        if (data !== null) {
            console.log("good username");
            setDisplayUserName(JSON.parse(data));
        }
    }, []);
    
    const navigate = useNavigate();

    const handleLogout = (state) => {
        navigate("/");
    }
    const handleBookmarkedPage = (state) => {
        navigate("/bookmarks")
    }
    const handleMainPage = (state) => {
        navigate("/main")
    }
    return (
        <div className="NavBarCover">
            <nav className="nav">
                <div className="siteTitle"  onClick = {() => {handleMainPage(true)}}>Book-a-Movie</div>
                <ul className="itemsList">
                <li className="listItem bookmark"  onClick = {() => {handleBookmarkedPage(true)}}> 
                <FaBookmark /> 
                List
                </li>
                
                <li className="listItem"> 

                <input 
                    className="inputFieldSearch"
                    type="text"
                    placeholder="Search movies..."
                    onChange={(event) => setSearchQuery(event.target.value)}
                    >
                    </input>
                    </li>

                    <li className="listItem">{displayUserName}</li>
                    <li className="listItem" onClick = {() => {handleLogout(true)}}>Logout</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;