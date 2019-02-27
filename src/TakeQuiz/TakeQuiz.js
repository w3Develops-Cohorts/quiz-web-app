import React, { Component } from 'react';
import './TakeQuiz.css';
import sampleQuiz from './sampleQuiz';
import Quiz from './Quiz';
import Navigation from './Navigation.js';

class TakeQuiz extends Component {
    constructor (props) {
        super(props);
        this.state = {
            allQuestions: [],
            selectedAns: []
        }
        this.onSelectedAns = this.onSelectedAns.bind(this);
        this.showResults = this.showResults.bind(this);
    }
    componentWillMount() {
        this.setState({
            allQuestions: sampleQuiz.quizQuestions
        });
    }
    onSelectedAns(event) {
      var wasPresent = false;
      for (var i = 0; i < this.state.selectedAns.length; i++){
        var currentAns = this.state.selectedAns[i];
        if(currentAns.questionNum === event.currentTarget.name) {
          var tempArray = this.state.selectedAns;
          tempArray.splice(i,1);
          var newStateArray = tempArray.concat({
            questionNum: event.currentTarget.name,
            answerType: event.currentTarget.value
          });
          this.setState(
            {selectedAns: newStateArray}
          );
          wasPresent = true;
          break;
        }
      }
      if (!wasPresent){
        this.setState({
          selectedAns: this.state.selectedAns.concat({
            questionNum: event.currentTarget.name,
            answerType: event.currentTarget.value
          })
        });
      }
    }
    showResults() {
      var score = 0;
      for (var i = 0; i < this.state.selectedAns.length; i++){
        if (this.state.selectedAns[i].answerType === "correctAns"){
          score = score + 1;
        }
      }
      alert("You got " + score + " questions right out of " + this.state.selectedAns.length + " questions");
    }
  render() {
    return (
      <div>
        <Navigation/>
      	<h1 className="quizName">{sampleQuiz.quizName}</h1>
        <Quiz className="quiz" 
          allQuestions={this.state.allQuestions} 
          onSelectedAns={this.onSelectedAns}/>
        <button className="submitQuizBtn" onClick={this.showResults}>Submit</button>
      </div>
    );
  }
}

export default TakeQuiz;