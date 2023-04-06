import React from 'react';
import "./ExecutiveSummary.css"
import TextBlock from '../TextBlock/TextBlock';

function ExecutiveSummary() {

    return (
    <div className="summaryWrapper">

        <h1>Executive Summary</h1>
        <div className="textImageWrapper">
            <div className="execImageWrapper">
                <img className="imageTest" src="https://norlon.ca/wp-content/uploads/2021/03/engineeringexterior-web.jpg" alt="" />
            </div>
            <TextBlock />
        </div>
    </div>
    );
}

export default ExecutiveSummary;
