/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './App.css'

function App() {

  console.log("Rendered");

  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [response,setResponse]=useState(false);
  const [count,setCount]=useState(0);

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

  // function onNextClick() {
  //   if(currentQuestion == quizQuestions.length - 1) return;
  //   setCurrentQuestion(currentQuestion + 1);
  // }


  function checkAnswer(res) {
    if(res){
      setCount(count+1);
      setResponse(true);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div className="card-wrapper">
      <div className="app">
      <div className={currentQuestion === quizQuestions.length - 1 ? 'hide' : ''}>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span> / {quizQuestions.length}
          </div>
          <div className="question-text">
            {quizQuestions[currentQuestion].question}
          </div>
        </div>
        <div className="answer-section">

        { quizQuestions[currentQuestion].options.map((option,index) => <button key={index} className={option.isCorrect ? "correct" : "incorrect"} onClick={checkAnswer(option.isCorrect)}>{option.answer}</button>) }
        </div>
        {response? <p>Correct Answer</p> : <p>Incorrect Answer</p>}

        </div>
       <h1>{`Your fianl score is ${currentQuestion==quizQuestions.length-1 ? count : 0} / ${quizQuestions.length-1} `}</h1> 
      </div>
      {/* <button onClick={onNextClick}>Next</button> */}
    </div>
    
  );
  
}

export default App
