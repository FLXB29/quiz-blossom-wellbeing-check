
import React from 'react';
import { ResultCategory } from '../data/quizData';

interface ResultCardProps {
  score: number;
  resultCategory: ResultCategory;
  onRestart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ score, resultCategory, onRestart }) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-500';
      case 'yellow': return 'text-yellow-500';
      case 'orange': return 'text-orange-500';
      case 'red': return 'text-red-500';
      default: return 'text-green-500';
    }
  };

  const getBackgroundColorClass = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-100';
      case 'yellow': return 'bg-yellow-100';
      case 'orange': return 'bg-orange-100';
      case 'red': return 'bg-red-100';
      default: return 'bg-green-100';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Kết quả của bạn</h2>
      
      <div className={`${getBackgroundColorClass(resultCategory.color)} p-6 rounded-xl mb-6`}>
        <div className="flex items-center justify-center mb-4">
          <span className="text-4xl mr-3">{resultCategory.emoji}</span>
          <span className={`text-2xl font-bold ${getColorClass(resultCategory.color)}`}>
            {resultCategory.title}
          </span>
        </div>
        
        <div className="text-center mb-4">
          <span className="text-4xl font-bold">{score} / 30</span>
          <p className="mt-2 font-medium">{resultCategory.description}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-bold mb-2">Gợi ý hành động:</h3>
          <p>{resultCategory.advice}</p>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={onRestart}
          className="w-full bg-quiz-purple text-white py-4 rounded-lg"
        >
          Làm lại bài kiểm tra
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
