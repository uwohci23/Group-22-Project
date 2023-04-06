import React from 'react';
import "./App.css";
import ExecutiveSummary from './Components/ExecutiveSummary/ExecutiveSummary';
import NavMap from './Components/NavigationalMap/NavMap';
import DesignPrinciples from './Components/DesignPrinciples/DesignPrinciples';

function App() {

    return (
    <div className="App">
        <h1>Hello there</h1>
        <ExecutiveSummary />
        <NavMap />
        <DesignPrinciples />
    </div>
    );
}

export default App;
