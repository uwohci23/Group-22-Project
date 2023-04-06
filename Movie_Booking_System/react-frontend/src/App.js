import {BrowserRouter as Router} from "react-router-dom";
import React from 'react';
import AnimatedRoutes from './Components/Routes/RoutesComponent';

function App() {

    const [showLogin, setShowLogin] = React.useState(true);
    const [pageToShow, setPageToShow] = React.useState(null); // pageToShow = [typeOfPage, UsernameForNavBar]

    return (
    <div className="App">
        {/* {showLogin ? <LoginPage setShowLogin={setShowLogin} setPageToShow={setPageToShow}/>
            : <MainPages setShowLogin={setShowLogin} pageToShow={pageToShow}/>} */}
        <Router>
            <AnimatedRoutes />
        </Router>
        {/* idyll here */}
    </div>
    );
}

export default App;
