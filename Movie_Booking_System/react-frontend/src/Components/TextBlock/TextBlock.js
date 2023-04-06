import React from 'react';
import "./TextBlock.css"

function TextBlock({message, bigText}) {

    return (
    <div className="textBlockWrapper">
        {bigText ?
            <div className="messageWrapper">
                <p>{message}</p>
            </div>
        :
            <div className="smallMessageWrapper">
                <p>{message}</p>
            </div>
        }
    </div>
    );
}

export default TextBlock;
