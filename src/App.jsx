import { useState } from 'react';
import { questions } from './question';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userCode, setUserCode] = useState(questions[0].initialCode);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setUserCode(questions[nextIndex].initialCode);
      setIsCorrect(false);
      // Show a toast or alert for next question
      alert(`Moving to Question ${nextIndex + 1}!`);
    } else {
      // Quiz completed
      alert('Congratulations! You have completed all questions! 🎉');
    }
  };

  return (
    <div className="App">
      <Quiz
        question={questions[currentQuestionIndex]}
        userCode={userCode}
        setUserCode={setUserCode}
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
        onNext={handleNextQuestion}
      />
    </div>
  );
}

export default App;