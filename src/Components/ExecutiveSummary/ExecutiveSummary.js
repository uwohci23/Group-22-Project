import React from 'react';
import "./ExecutiveSummary.css"
import TextBlock from '../TextBlock/TextBlock';
import CarrosselComponent from '../CarrosselComponent/CarrosselComponent';

function ExecutiveSummary() {

    return (
    <div className="summaryWrapper">
        <div className="titleWrapper">
            <h1>Executive Summary</h1>
        </div>
        <div className="textImageWrapper">
            <div className="execImageWrapper">
                <CarrosselComponent />
            </div>
            <TextBlock message = {
                    `
                    The Book-A-Movie web application is designed to provide users with an easy and convenient way to browse, select and purchase movie tickets online. The platform includes a user-friendly login feature that allows users to create an account and securely store their personal and payment information for future purchases.

                    Once logged in, users can browse through a wide range of movies currently showing in local cinemas and select their preferred screening seat. 
                    
                    Users can then select their preferred seating arrangement and purchase tickets securely using their stored payment information. The application also offers the option to purchase combo deals that include soft drinks and popcorn, providing users with an all-in-one solution for their movie experience.
                    
                    Overall, the movie web application offers a convenient and easy-to-use platform for users to browse, select and purchase movie tickets online, with added benefits of combo deals and secure payment options.
                    
                    `
            }
            bigText={true}/>
        </div>
    </div>
    );
}

export default ExecutiveSummary;
