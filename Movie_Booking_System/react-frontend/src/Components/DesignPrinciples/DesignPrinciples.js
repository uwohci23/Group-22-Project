import React from 'react';
import "./DesignPrinciples.css"
import TextBlock from '../TextBlock/TextBlock';

function DesignPrinciples() {
    const data = [
        {
            message: `
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            `,
            title: "Principle 1"
        },
        {
            message: `
            22222222222222222222
            22222222222222222222
            22222222222222222222
            22222222222222222222
            22222222222222222222
            22222222222222222222
            22222222222222222222
            `,
            title: "Principle 2"
        },
        {
            message: `
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            oooooooooooooooooooo
            22222222222222222222
            oooooooooooooooooooo
            oooooooooooooooooooo
            `,
            title: "Principle 3"
        },
        {
            message: `
            oooooooooooooooooooo
            22222222222222222222
            22222222222222222222
            22222222222222222222
            22222222222222222222
            22222222222222222222
            oooooooooooooooooooo
            `,
            title: "Principle 4"
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
            title: "Principle 5"
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
            title: "Principle 6"
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
            title: "Principle 7"
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
            title: "Principle 8"
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
            title: "Principle 9"
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
            title: "Principle 10"
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
            title: "Principle 11"
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
            title: "Principle 12"
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
            title: "Principle 13"
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
            title: "Principle 14"
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
            title: "Principle 15"
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
            title: "Principle 16"
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
            title: "Principle 17"
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
            title: "Principle 18"
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
            title: "Principle 19"
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
            title: "Principle 20"
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
                                <img className="imageTest" src="https://norlon.ca/wp-content/uploads/2021/03/engineeringexterior-web.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                })}
        </div>
    </div>
    );
}

export default DesignPrinciples;
