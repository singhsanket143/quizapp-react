/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [score, setScore] = useState(0);

  const quizQuestions = [
    {
      question: "What is the complexity of binary search ?",
      options: [
        { answer: "O(n)", isCorrect: false },
        { answer: "O(logn)", isCorrect: true },
        { answer: "O(nlogn)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      question: "What is the complexity of linear search ?",
      options: [
        { answer: "O(n)", isCorrect: true },
        { answer: "O(logn)", isCorrect: false },
        { answer: "O(nlog)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      question: "What is the complexity of mergesort ?",
      options: [
        { answer: "O(n)", isCorrect: false },
        { answer: "O(logn)", isCorrect: false },
        { answer: "O(nlogn)", isCorrect: true },
        { answer: "O(1)", isCorrect: false },
      ],
    },
  ];

  function onNextClick() {
    if (currentQuestion == quizQuestions.length - 1) return;
    setCurrentQuestion(currentQuestion + 1);
    setIsCorrect(false);
    setClickedIndex(-1);
  }

  function checkAnswer(option, index) {
    if (option.isCorrect) {
      setIsCorrect(true);
      setScore((score) => score + 1);
      setClickedIndex(index);
    } else {
      setIsCorrect(false);
      setClickedIndex(index);
    }
  }

  return (
    <div className="card-wrapper">
      <div>Your score is: {score}</div>
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
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              className={`${
                isCorrect && clickedIndex === index
                  ? "correct"
                  : !isCorrect && clickedIndex === index
                  ? "incorrect"
                  : ""
              }`}
              key={index}
              disabled={clickedIndex > -1}
              onClick={() => checkAnswer(option, index)}
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

export default App;
