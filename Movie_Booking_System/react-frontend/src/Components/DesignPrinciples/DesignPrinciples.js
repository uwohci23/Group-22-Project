import React from 'react';
import "./DesignPrinciples.css"
import TextBlock from '../TextBlock/TextBlock';

function DesignPrinciples() {
    const data = [
        {
            message: `
            For the login page we used the feedback design pattern when the user inputs an incorrect login they get immediate feedback on why it did not go through. For correct login input boxes turn green for a second which tells the user that it went through.
            `,
            title: "Principle 1 - Login (Feedback)",
            image: process.env.PUBLIC_URL + "/login-1.jpg"
        },
        {
            message: `
            Another design pattern we used for login is visibility. We used this design pattern by adding a blue shade that appears on the input box when the user hovers over it with the mouse. This is helpful because it tells the user they can clearly input something in there.
            `,
            title: "Principle 2 - Login (Visibility)",
            image: process.env.PUBLIC_URL + "/login-3.jpg"
        },
        {
            message: `
            We used affordance in the login page by adding a big blue button that says login on it. This provides a clear visual cue to the user that clicking the button will initiate the login process.
            `,
            title: "Principle 3 - Login (Affordance)",
            image: process.env.PUBLIC_URL + "/login-4.jpg"
        },
        {
            message: `
            The login page also uses the consistency design pattern because it has the same style and appearance as the internal elements within the system. For example the blue buttons,black border,and white background.
            `,
            title: "Principle 4 - Login (Consistency)",
            image: process.env.PUBLIC_URL + "/login-5.jpg"
        },
        {
            message: `
            Another design pattern that was used for the login page is visual representation. This design pattern was used by making the user and password input boxes right on top of eachother which tells the user that these two fields are meant to be written together.
            `,
            title: "Principle 5 (Representation)",
            image: process.env.PUBLIC_URL + "/login-6.png"
        },
        {
            message: `
            The bookmark symbol used here is a physical metaphor of bookmarks from physical books, 
            a straightforward mapping from a real life object to an object on the artifact. 
            This physical metaphor helps users understand the function of the bookmark symbol and how to use it intuitively, 
            as it leverages their prior experience with physical books. As a result, users can easily infer that clicking on the 
            bookmark symbol will save their place in the digital content, just as a physical bookmark would do in a book. 
            This helps to enhance the usability and user experience of the digital artifact, by reducing the cognitive load 
            required to learn and understand its features.
            `,
            title: "Principle 6 - Main Page (Physical Metaphor)",
            image: process.env.PUBLIC_URL + "/Abbas-1.png"
        },
        {
            message: `
            The bookmark symbol used here can be considered an "iconic sign" because it represents the concept of 
            bookmarking in a visual, easily recognizable way. Even before interacting with it, 
            the whited out bookmark symbol with a little plus on it provides users with a visual cue that they can use to 
            save their place in the digital content. This cue is iconic because it resembles the physical object of a bookmark, 
            which users can easily associate with the action of saving their place in a book.
            `,
            title: "Principle 7 - Main Page (Iconic Sign)",
            image: process.env.PUBLIC_URL + "/Abbas-2.png"
        },
        {
            message: `
            The addition of the word "List" to the bookmark symbol in the nav bar provides users with an explicit 
            label that indicates the function of the symbol. This label serves as a "affordance" in HCI terminology, 
            as it suggests to users what action they can take with the symbol.
            `,
            title: "Principle 8 - Main Page (Affordance)",
            image: process.env.PUBLIC_URL + "/Abbas-3.png"
        },
        {
            message: `
            The consistency of the bookmark symbol across different parts of the digital artefact (i.e., the main page and the nav bar) 
            helps to create a sense of familiarity and predictability for users. This allows them to transfer their knowledge and 
            understanding of the symbol from one context to another, which can improve their efficiency and usability of the digital 
            artefact.
            `,
            title: "Principle 9 - Main Page (Aesthetic, Internal Consistency)",
            image: process.env.PUBLIC_URL + "/Abbas-3.png"
        },
        {
            message: `
            If a user were to accidentally click the unbookmark button, 
            and the movie were to disappear automatically, it could be frustrating and confusing for the user. 
            They may wonder where the movie went or if they mistakenly deleted it from their bookmark list. 
            We chose not to remove the movie automatically, to reduce the likelihood of user slips and improve the user 
            experience by allowing users to easily correct any mistakes they may have made to prevent what is known as a 
            "user slip”.
            `,
            title: "Principle 10 - Main Page (Mitigating User Slips)",
            image: process.env.PUBLIC_URL + "/Abbas-4.png"
        },
        {
            message: `
            The affordance of the search bar is provided by the textbox itself, 
            which indicates that users can enter search terms. The light text that says "search movies..." 
            also provides a hint about the purpose of the textbox, serving as a placeholder or prompt for users to 
            enter their search terms. Just as a keyboard or a typewriter has a surface where users can input characters 
            and symbols, the search box provides a digital surface where users can input search terms.
            `,
            title: "Principle 11 - Main Page (Affordance)",
            image: process.env.PUBLIC_URL + "/Abbas-5.png"
        },
        {
            message: `
            The real-time matching of search terms to relevant movies is an example of the design principle of progressive disclosure, 
            which can help reduce the user's memory load. As the user types in search terms, the results are updated in real-time, 
            gradually revealing the matching movies based on the user's input. By revealing the matching movies in real-time, 
            the user is spared the effort of having to recall the search terms they entered, which can reduce the cognitive load on the 
            user's working memory.
            `,
            title: "Principle 12 - Main Page (Progressive Disclosure)",
            image: process.env.PUBLIC_URL + "/Abbas-6.png"
        },
        {
            message: `
            The Constraint design pattern was utilized in the Staff page as a way to make sure the input given by the user 
            in the staff page follows the pattern of the movie cards in the main page. With this, we can make sure that all 
            invalid inputs are filtered through before any movie is published
            `,
            title: "Principle 13 - Staff Page (Constraint)",
            image: process.env.PUBLIC_URL + "/Gabriel-1.png"
        },
        {
            message: `
            In the staff page, whenever a staff member submits a movie, a “loading” icon is utilized as a way to signify to the 
            user that their request is being processed. This is a transfer of knowledge from other apps, 
            as a multitude of other artifacts on the internet utilize the same (or extremely similar) icon to display “loadings”
            `,
            title: "Principle 14 - Staff Page (Transfer)",
            image: process.env.PUBLIC_URL + "/Gabriel-2.png"
        },
        {
            message: `
            In order to minimize the time taken by the user to move their mouse to the main component of the page 
            (the form to input movie information), the form was placed in the centre of the screen, while also 
            having a considerable size when compared to other elements on the screen
            `,
            title: "Principle 15 - Staff Page (Fitt's Law)",
            image: process.env.PUBLIC_URL + "/Gabriel-3.png"
        },
        {
            message: `
            22222222222222222222
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            22222222222222222222
            `,
            title: "Principle 16",
            image: process.env.PUBLIC_URL + "/login-1.jpg"
        },
        {
            message: `
            22222222222222222222
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            22222222222222222222
            `,
            title: "Principle 17",
            image: process.env.PUBLIC_URL + "/login-1.jpg"
        },
        {
            message: `
            22222222222222222222
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            22222222222222222222
            `,
            title: "Principle 18",
            image: process.env.PUBLIC_URL + "/login-1.jpg"
        },
        {
            message: `
            22222222222222222222
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            22222222222222222222
            `,
            title: "Principle 19",
            image: process.env.PUBLIC_URL + "/login-1.jpg"
        },
        {
            message: `
            22222222222222222222
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            22222222222222222222
            `,
            title: "Principle 20",
            image: process.env.PUBLIC_URL + "/login-1.jpg"
        },
    ]
    return (
    <div className="principlesWrapper">
        <div className="titleWrapper">
            <h1>Utilized Design Principles</h1>
        </div>
        <div className="principlesListWrapper">
            {/* <h2>Principle 1</h2>
            <TextBlock message={message}/> */}
            {data.map((principle) => {
                    return <div className="singlePrincipleWrapper" key={principle.title}>
                        <h1>{principle.title}</h1>
                        <div className="principleContent">
                            <TextBlock message={principle.message} bigText={false}/>
                            <div className="principleImageWrapper">
                                <img className="imageTest" src={principle.image} alt="" />
                            </div>
                        </div>
                    </div>
                })}
        </div>
    </div>
    );
}

export default DesignPrinciples;
