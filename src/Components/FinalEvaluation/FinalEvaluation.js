import React from 'react';
import "./FinalEvaluation.css"
import TextBlock from '../TextBlock/TextBlock';

function FinalEvaluation() {
    return (
    <div className="finalWrapper" id="finalEval">
        <div className="titleWrapper">
            <h1>Final Evaluation</h1>
        </div>
        <TextBlock className="finalText" message={
            `
            In conclusion, the Book-A-Movie web application is a comprehensive solution that offers users a hassle-free movie 
            experience. In light of the final evaluation, there are improvements to be made in the system, like a machine 
            learning recommendation system for movies. This also reduces cognitive offloading when picking a movie. Also, 
            social media integration, and movie rating systems could be added to give more information about movies, so that 
            people can make better more informed choices. Ranking movies based on hype, ratings etc also allow people to make 
            more informed choices about the movies they want to watch. Lastly, a “sign up with google account” or “sign up 
            with Facebook” or any other existing social media account allows for people to not have to go through the hasty 
            registration page, which is also a feature that could be improved upon.               
            `
        } bigText={true}/>
    </div>
    );
}

export default FinalEvaluation;
