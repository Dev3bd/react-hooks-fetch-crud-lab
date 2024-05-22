import React, { useState, useEffect } from 'react';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  return (
    <div>
      {questions.map(question => (
        <div key={question.id}>
          <h3>{question.prompt}</h3>
          <ul>
            {question.answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
          <p>Correct Index: {question.correctIndex}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
