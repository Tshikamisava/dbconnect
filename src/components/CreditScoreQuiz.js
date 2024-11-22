import React, { useState } from "react";

const CreditScoreQuiz = () => {
  const questions = [
    {
      questionText: "What is considered a good credit score?",
      answerOptions: [
        { answerText: "300-500", isCorrect: false },
        { answerText: "500-700", isCorrect: false },
        { answerText: "700-850", isCorrect: true },
        { answerText: "850-1000", isCorrect: false },
      ],
    },
    {
      questionText: "Which factor affects your credit score the most?",
      answerOptions: [
        { answerText: "Credit Utilization", isCorrect: true },
        { answerText: "Income", isCorrect: false },
        { answerText: "Gender", isCorrect: false },
        { answerText: "Marital Status", isCorrect: false },
      ],
    },
    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditScoreQuiz;
