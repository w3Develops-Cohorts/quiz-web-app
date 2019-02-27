import React from 'react';

function SingleAnswer(props) {
    return (
        <li className="option">
        <input type="radio" 
            name={props.name}
            value={props.value}
            onChange={props.onSelectedAns} />
        <label>{props.optionText}</label>
        </li>
    );
}

export default SingleAnswer;