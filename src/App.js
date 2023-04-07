import React from 'react';
import "./App.css";
import ExecutiveSummary from './Components/ExecutiveSummary/ExecutiveSummary';
import NavMap from './Components/NavigationalMap/NavMap';
import DesignPrinciples from './Components/DesignPrinciples/DesignPrinciples';
import HeuristicEvaluation from './Components/HeuristicEvaluation/HeuristicEvaluation';
import FinalEvaluation from './Components/FinalEvaluation/FinalEvaluation';
import DropdownComponent from './Components/DropdownComponent/DropdownComponent';

function App() {

    return (
    <div className="App">
        <div className="dropWrapper">
            <DropdownComponent className="dropDown" />
        </div>
        <div className="appCols">
            <div className="reportContent">
                <h1 className="mainTitle">Group 22 - Final Report</h1>
                <div className="buttonWrapper">
                    <button className='goToAppButton'><a className='buttonAnchor' href="">Go to App</a></button>
                </div>
                <ExecutiveSummary />
                <NavMap />
                <DesignPrinciples />
                <HeuristicEvaluation />
                <FinalEvaluation />
            </div>
        </div>
    </div>
    );
}

export default App;
