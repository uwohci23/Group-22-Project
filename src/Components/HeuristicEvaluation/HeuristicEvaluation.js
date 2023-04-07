import React from 'react';
import "./HeuristicEvaluation.css"
import TextBlock from '../TextBlock/TextBlock';

function HeuristicEvaluation() {
    return (
    <div className="heuristicsWrapper" id="heuristic">
        <div className="titleWrapper">
            <h1>Heuristic Evaluation</h1>
        </div>
        <h3>Visibility of Status</h3>
        <TextBlock className="heuristicsText" message={
            ` 
            When a user selects a movie, they can see the current availability of seats and any other relevant information 
            about the screening.                  
            `
        } bigText={false}/>
        <h3>Match Between the System and the Real World and Consistency/ Standards</h3>
        <TextBlock className="heuristicsText" message={
            `
            The design language is highly transferable to real life movie booking procedures   
            `
        } bigText={false}/>
        <h3>User Control & Freedom</h3>
        <TextBlock className="heuristicsText" message={
            `
            The system allows users to unbookmark, cancel movie without any unnecessary restrictions  
            `
        } bigText={false}/>

        <h3>Error Prevention, Error Recognition</h3>
        <TextBlock className="heuristicsText" message={
            `
            We ensured that accidental bookmarks, incorrect signup procedures errors are prevented and recognition. 
            `
        } bigText={false}/>

        <h3>Recognition vs. Recall in User Interfaces</h3>
        <TextBlock className="heuristicsText" message={
            `
            Users can easily access their bookmarks or previous bookings without having to search through multiple menus.
            `
        } bigText={false}/>

        <h3>Flexibility and Efficiency of Use</h3>
        <TextBlock className="heuristicsText" message={
            `
            We allow users to easily search movie listings by name.
            `
        } bigText={false}/>

        <h3>Aesthetic and Minimalist Design</h3>
        <TextBlock className="heuristicsText" message={
            `
            We used the latest modern design technologies to ensure a visually appealing and simplistic design.
            `
        } bigText={false}/>
    </div>
    );
}

export default HeuristicEvaluation;
