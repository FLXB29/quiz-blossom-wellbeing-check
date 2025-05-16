
import React from 'react';
import { Question } from '../data/quizData';
import AnswerOption from './AnswerOption';
import ProgressBar from './ProgressBar';
import { ArrowRight } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  onNextQuestion: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onNextQuestion
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-quiz-blue font-medium">
          Câu hỏi {currentQuestion} / {totalQuestions}
        </h3>
        <div className="flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#1E88E5" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span className="ml-1 text-quiz-blue">2:00</span>
        </div>
      </div>
      
      <ProgressBar 
        currentQuestion={currentQuestion} 
        totalQuestions={totalQuestions} 
      />
      
      <div className="mb-6">
        <h2 className="text-xl font-medium mb-6">{question.text}</h2>
        
        <div className="answer-grid">
          {question.options.map((option, index) => (
            <AnswerOption
              key={index}
              option={option}
              isSelected={selectedOption === index}
              onSelect={() => onSelectOption(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <button
          onClick={onNextQuestion}
          disabled={selectedOption === null}
          className="w-full bg-quiz-blue text-white py-4 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="mr-2">Tiếp theo</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
