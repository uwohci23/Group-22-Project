import React from 'react';
import "./TextBlock.css"

function TextBlock({message}) {

    return (
    <div className="textBlockWrapper">
        <div className="messageWrapper">
            <p>{message}</p>
        </div>
    </div>
    );
}

export default TextBlock;
