import React from 'react';
import "./App.css";
import ExecutiveSummary from './Components/ExecutiveSummary/ExecutiveSummary';
import NavMap from './Components/NavigationalMap/NavMap';
import DesignPrinciples from './Components/DesignPrinciples/DesignPrinciples';
import HeuristicEvaluation from './Components/HeuristicEvaluation/HeuristicEvaluation';
import FinalEvaluation from './Components/FinalEvaluation/FinalEvaluation';

function App() {

    return (
    <div className="App">
        <h1 className="mainTitle">Group 22 - Final Report</h1>
        <ExecutiveSummary />
        <NavMap />
        <DesignPrinciples />
        <HeuristicEvaluation />
        <FinalEvaluation />
    </div>
    );
}

export default App;
