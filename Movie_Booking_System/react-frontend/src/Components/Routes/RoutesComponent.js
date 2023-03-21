import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom"
import LoginComponent from "../LoginPage/LoginPage";
// import MainPageComponent from "../MainPage/MainPageComponent/MainPageComponent";

import { AnimatePresence } from "framer-motion";
import RegisterUser from "../RegisterUserComponent/RegisterUser";
import StaffPage from "../StaffPage/StaffPage";

function AnimatedRoutes() {
    const location = useLocation();
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            {/* <Route path="/" element={<MainPageComponent />}/> */}
            <Route path="/register" element={<RegisterUser />}/>
            {/* <Route path="/login" element={<LoginComponent />}/> */}
            <Route path="/" element={<LoginComponent />}/>
            <Route path="/admin" element={<StaffPage />}/>
        </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes;