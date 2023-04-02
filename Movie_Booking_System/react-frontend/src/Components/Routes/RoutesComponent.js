import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import LoginComponent from "../LoginPage/LoginPage";
import MainPage from "../MainPage/MainPage";
import React from "react";

import { AnimatePresence } from "framer-motion";
import RegisterUser from "../RegisterUserComponent/RegisterUser";
import StaffPage from "../StaffPage/StaffPage";
//import StaffDropDownComponent from "../StaffDropDownComponent/StaffDropDownComponent";
import BookmarkedMoviesPage from "../BookmarkedMoviesPage/BookmarkedMoviesPage";

function AnimatedRoutes() {
    const [userName, setUserName] = React.useState("");
    const [userid,setUserid] = React.useState("");
    const location = useLocation();
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginComponent userName={userName} setUserName={setUserName} setUserid={setUserid} />}/>

            <Route path="/main" element={<MainPage navBarUsername={userName} navBarUserid = {userid}/>}/>
            <Route path="/bookmarks" element={<BookmarkedMoviesPage navBarUserid={userid} />}/>

            <Route path="/register" element={<RegisterUser />}/>
            {/* <Route path="/login" element={<LoginComponent />}/> */}
=            <Route path="/admin" element={<StaffPage setUserName={setUserName} navBarUsername={userName}/>}/>
            {/* <Route path="/admin" element={<StaffDropDownComponent />}/> */}
        </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes;