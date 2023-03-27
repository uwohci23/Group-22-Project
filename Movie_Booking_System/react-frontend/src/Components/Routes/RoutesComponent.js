import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import LoginComponent from "../LoginPage/LoginPage";
import MainPage from "../MainPage/MainPage";
import React from "react";

import { AnimatePresence } from "framer-motion";
import RegisterUser from "../RegisterUserComponent/RegisterUser";
import StaffPage from "../StaffPage/StaffPage";
import StaffDropDownComponent from "../staffDropDownComponent/StaffDropDownComponent"

function AnimatedRoutes() {
    const [userName, setUserName] = React.useState("");
    const location = useLocation();
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/main" element={<MainPage />}/>
            <Route path="/register" element={<RegisterUser />}/>
            {/* <Route path="/login" element={<LoginComponent />}/> */}
            <Route path="/" element={<LoginComponent setUserName={setUserName}/>}/>
            <Route path="/admin" element={<StaffPage navBarUsername={userName}/>}/>
            {/* <Route path="/admin" element={<StaffDropDownComponent />}/> */}
        </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes;