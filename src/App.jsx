import { useState } from 'react';
import './App.css';

function App() {
  // State variables to track current question index, user's score, and selected answer
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);
  let [answerSelected, setAnswerSelected] = useState(null);

  // Array containing quiz questions with options and correct answers
  const quizQuestions = [
    {
      question: "What is the complexity of binary search ?",
      options: [
        { answer: 'O(n)', isCorrect: false },
        { answer: 'O(logn)', isCorrect: true },
        { answer: 'O(nlog)', isCorrect: false },
        { answer: 'O(1)', isCorrect: false }
      ]
    },
    {
      question: "What is the complexity of linear search ?",
      options: [
        { answer: 'O(n)', isCorrect: true },
        { answer: 'O(logn)', isCorrect: false },
        { answer: 'O(nlog)', isCorrect: false },
        { answer: 'O(1)', isCorrect: false }
      ]
    },
    {
      question: "What is the complexity of mergesort ?",
      options: [
        { answer: 'O(n)', isCorrect: false },
        { answer: 'O(logn)', isCorrect: false },
        { answer: 'O(nlog)', isCorrect: true },
        { answer: 'O(1)', isCorrect: false }
      ]
    },
  ];

  // Function to handle click on the "Next" button
  function onNextClick() {
    if (currentQuestion === quizQuestions.length - 1) return;
    setCurrentQuestion(currentQuestion + 1);
    setAnswerSelected(null); // Reset selected answer when moving to the next question
  }

  // Function to check the selected answer when a user clicks on an option
  function checkAnswer(isCorrect) {
    if (answerSelected !== null) {
      // User has already selected an answer, do nothing
      return;
    }

    if (isCorrect) {
      setScore(score + 1); // Update score if the selected answer is correct
    }

    setAnswerSelected(isCorrect); // Mark the selected answer
  }

  return (
    <div className="card-wrapper">
      <div className="app">
        {/* Section to display the current question */}
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span> / {quizQuestions.length}
          </div>
          <div className="question-text">
            {quizQuestions[currentQuestion].question}
          </div>
        </div>
        {/* Section to display answer options as buttons */}
        <div className="answer-section">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => checkAnswer(option.isCorrect)}
              className={answerSelected !== null ? (option.isCorrect ? 'correct' : 'incorrect') : ''}
              disabled={answerSelected !== null} // Disable further clicks after selecting an answer
            >
              {option.answer}
            </button>
          ))}
        </div>
      </div>
      {/* Section to display the user's current score */}
      <div className="score-section">
        <span>Score: {score}</span>
      </div>
      {/* Button to navigate to the next question */}
      <button onClick={onNextClick}>Next</button>
    </div>
  );
}

export default App;
