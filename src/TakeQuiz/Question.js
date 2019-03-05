import React from 'react';

function Question(props) {
    return (
        <div>
            <h2 className="number">{props.number}</h2>
            <h2 className="question">{props.content}</h2>
        </div>
    );
}

export default Question;