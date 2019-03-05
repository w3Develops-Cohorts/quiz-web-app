import React from 'react';
import Question from './Question';
import SingleAnswer from './SingleAnswer';

function Quiz(props) {
    function renderOptions(key, questionNumber) {
        return (
            <SingleAnswer optionText={key.text}
            onSelectedAns={props.onSelectedAns}
            value={key.type}
            name={questionNumber}/>
        );
    }

    function renderQuestion(key){
        return (
            <div className="questionAndOptions">
                <Question className="question" content={key.question} number={key.questionNumber}/>
                <ul className="options">
                    {key.options.map(option => renderOptions(option, key.questionNumber))}
                </ul>
            </div>
        );
    }

    return (
        <div className="quiz">
        {props.allQuestions.map(questionObj => renderQuestion(questionObj))}
        </div>
    );
}

export default Quiz;