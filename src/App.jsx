import { useState } from 'react';
import './App.css'

function App() {

  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [lastAnsweredQuestionIndex, setLastAnsweredQuestionIndex] = useState(0);
  let [score, setScore] = useState(0);
  let [selectedOption, setSelectedOption] = useState(0);



  const quizQuestions = [
    {
      question: "What is the complexity of binary search ?",
      options: [
        { answer: 'O(n)', isCorrect: false},
        { answer: 'O(logn)', isCorrect: true},
        { answer: 'O(nlog)', isCorrect: false},
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
        { answer: 'O(nlogn)', isCorrect: true},
        { answer: 'O(1)', isCorrect: false}
      ]
    },
  ];

  function onNextClick() {

    if(currentQuestion == quizQuestions.length - 1) {
      alert(`quiz finished. Your score is ${score}`);
      return;
    }
    setCurrentQuestion(currentQuestion+1);
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(0);
  }

  function checkAnswer(selectedOption, idx) {

    if(currentQuestion == lastAnsweredQuestionIndex) {
      if (selectedOption.isCorrect) {
        console.log("Correct answer selected!");
        setScore(score+1);
      } else {
          console.log("Incorrect answer selected.");
        }
        //mark that the option was selected
        setLastAnsweredQuestionIndex(lastAnsweredQuestionIndex+1);
        setSelectedOption(idx+1);

    }
    else {
      alert("You have already attempted this question!");
    }

  }

  return (
    <div className="card-wrapper">
      <div className="app">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span> / {quizQuestions.length}
          </div>
          <div className="question-text">
            {quizQuestions[currentQuestion].question}
          </div>
        </div>
        <div className="answer-section">
          {quizQuestions[currentQuestion].options.map((option,idx) => (
            <button onClick={() => checkAnswer(option,idx)} 
            className= {
              selectedOption==idx+1 ? 
                lastAnsweredQuestionIndex==currentQuestion+1? 
                  option.isCorrect ? "correct" : "incorrect" 
                  : "": 
                  ""
              }
            >
              {option.answer}
            </button>
          ))}
        </div>
      </div>
      {/* Button to show next question */}
      {/* onClick is a HOF, onNextClick is a callback function */}
      <button onClick={onNextClick}>Next</button>
    </div>
    
  );
  
}

export default App