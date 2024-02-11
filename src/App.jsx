/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './App.css'
import AnswerSection from './components/AnswerSection';
import GeolocationContainer from './components/GeoLocation/GeolocationContainer';
import Geolocation from './components/GeoLocation/Geolocation';
import GeolocationNewUi from './components/GeoLocation/GeolocationNewUi';

function App() {

  console.log("Rendered");

  let [currentQuestion, setCurrentQuestion] = useState(0);

  const quizQuestions = [
    {
      question: "What is the complexity of binary search ?",
      options: [
        { answer: 'O(n)', isCorrect: false},
        { answer: 'O(logn)', isCorrect: true},
        { answer: 'O(nlogn)', isCorrect: false},
        { answer: 'O(1)', isCorrect: false}
      ]
    },
    {
      question: "What is the complexity of linear search ?",
      options: [
        { answer: 'O(n)', isCorrect: true},
        { answer: 'O(logn)', isCorrect: false},
        { answer: 'O(nlog)', isCorrect: false},
        { answer: 'O(1)', isCorrect: false}
      ]
    },
    {
      question: "What is the complexity of mergesort ?",
      options: [
        { answer: 'O(n)', isCorrect: false},
        { answer: 'O(logn)', isCorrect: false},
        { answer: 'O(nlog)', isCorrect: true},
        { answer: 'O(1)', isCorrect: false}
      ]
    },
  ];

  function onNextClick() {
    if(currentQuestion == quizQuestions.length - 1) return;
    setCurrentQuestion(currentQuestion + 1);
  }

  function checkAnswer(option) {
    if(option.isCorrect) {
      console.log("Correct answer");
    } else {
      console.log("Wrong answer");
    }
  }

  const NewUiGeolocation = GeolocationContainer(Geolocation);

  return (
    <div className="card-wrapper">
      <NewUiGeolocation />
      <div className="app">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span> / {quizQuestions.length}
          </div>
          <div className="question-text">
            {quizQuestions[currentQuestion].question}
          </div>
        </div>
        {/* <div className="answer-section">
            { quizQuestions[currentQuestion].options.map(option => <button onClick={() => checkAnswer(option)}>{option.answer}</button>) }
        </div> */}

        <AnswerSection question={quizQuestions[currentQuestion]} onAnswerClick={checkAnswer} />

      </div>
      {/* Button to show next question */}
      {/* onClick is a HOF, onNextClick is a callback function */}
      <button onClick={onNextClick}>Next</button>
    </div>
    
  );
  
}

export default App
