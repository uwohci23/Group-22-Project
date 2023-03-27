import React from "react";
import "./NavBar.css";
import { useNavigate  } from "react-router-dom";

const NavBar = ({setShowLogin, navBarUsername,setSearchQuery}) => {
    const navigate = useNavigate();

    const handleLogout = (state) => {
        navigate("/");
    }
    return (
        <div className="NavBarCover">
            <nav className="nav">
                <div className="siteTitle">Book-a-Movie</div>
                <ul className="itemsList">
                <li className="listItem"> 

                <input
                    type="text"
                    placeholder="Search movies..."
                    onChange={(event) => setSearchQuery(event.target.value)}
                    >
                    </input>
                    </li>

                    <li className="listItem">{navBarUsername}</li>
                    <li className="listItem" onClick = {() => {handleLogout(true)}}>Logout</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;