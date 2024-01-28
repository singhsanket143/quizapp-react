/* eslint-disable react/jsx-key */
import './App.css'

function App() {

  const currentQuestion = 0;

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
        { answer: 'O(nlog)', isCorrect: true},
        { answer: 'O(1)', isCorrect: false}
      ]
    },
  ];

  return (
    <div className="app">
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span> / {quizQuestions.length}
        </div>
        <div className="question-text">
          {quizQuestions[0].question}
        </div>
      </div>
      <div className="answer-section">
          { quizQuestions[0].options.map(option => <button>{option.answer}</button>) }
        </div>
    </div>
  );
  
}

export default App
