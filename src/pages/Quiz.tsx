
import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import ResultCard from '../components/ResultCard';
import { quizQuestions, getResultCategory } from '../data/quizData';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  
  const handleSelectOption = (optionIndex: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate total score
      let score = 0;
      selectedOptions.forEach((optionIndex, questionIndex) => {
        if (optionIndex !== null) {
          score += quizQuestions[questionIndex].options[optionIndex].points;
        }
      });
      setTotalScore(score);
      setQuizCompleted(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions(Array(quizQuestions.length).fill(null));
    setQuizCompleted(false);
    setTotalScore(0);
  };
  
  return (
    <div className="min-h-screen py-8">
      <div className="quiz-container">
        <div className="flex items-center mb-6">
          <Link to="/" className="flex items-center text-gray-700">
            <ArrowLeft size={20} className="mr-2" />
            <span>{quizCompleted ? 'Quay lại' : 'Đánh giá sức khỏe tinh thần'}</span>
          </Link>
        </div>
        
        {!quizCompleted ? (
          <QuestionCard
            question={quizQuestions[currentQuestionIndex]}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={quizQuestions.length}
            selectedOption={selectedOptions[currentQuestionIndex]}
            onSelectOption={handleSelectOption}
            onNextQuestion={handleNextQuestion}
          />
        ) : (
          <ResultCard
            score={totalScore}
            resultCategory={getResultCategory(totalScore)}
            onRestart={handleRestartQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
