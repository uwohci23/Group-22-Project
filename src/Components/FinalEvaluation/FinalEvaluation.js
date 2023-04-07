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
            Overall we enjoyed working on the Book-A-Movie application. If given more time, 
            we would like to implement more features. Users appreciate a personalised experience that caters 
            to their individual preferences. The application could use data analytics to understand user preferences 
            and suggest movies that align with their interests.The application can use algorithms to recommend movies 
            based on the user's viewing history, ratings, and reviews. This can help users discover new movies and increase 
            engagement with the platform. Simplifying the checkout process can help reduce abandoned cart rates and increase 
            conversion rates. The application can integrate with popular payment gateways and offer a range of payment options.
             As more users access the internet through mobile devices, optimising the application for mobile devices is crucial. 
             This can include designing a responsive interface that adjusts to different screen sizes and optimising load times 
             for slower mobile networks. Integrating with social media platforms can help increase the application's reach and 
             encourage social sharing. This can include features such as social logins, social sharing, and user-generated 
             content. By incorporating these features, a movie web application can enhance user experience, increase engagement, 
             and ultimately drive growth and revenue.
                            
            `
        } bigText={true}/>
    </div>
    );
}

export default FinalEvaluation;
