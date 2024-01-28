/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./App.css";

function App() {
  console.log("Rendered");
  const [optionSelected, setOptionSelected] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  function updateScore() {
    setScore(score + 1);
  }
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
        { answer: "O(nlog)", isCorrect: true },
        { answer: "O(1)", isCorrect: false },
      ],
    },
  ];

  function onNextClick() {
    if (currentQuestion == quizQuestions.length - 1) return;
    setCurrentQuestion(currentQuestion + 1);
    setOptionSelected(0);
  }

  function checkAnswer(option, optno) {
    if (optionSelected) return;
    if (option.isCorrect) {
      console.log("Correct answer");
      updateScore();
      setOptionSelected(optno);
    } else {
      console.log("Wrong answer");
      setOptionSelected(optno);
    }
  }

  return (
    <div className="card-wrapper">
      <div>Score = {score}</div>
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
          {quizQuestions[currentQuestion].options.map((option, idx) => (
            <button
              onClick={() => checkAnswer(option, idx + 1)}
              key={idx}
              className={
                optionSelected
                  ? optionSelected === idx + 1
                    ? option.isCorrect
                      ? "correct"
                      : "incorrect"
                    : ""
                  : ""
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

export default App;
