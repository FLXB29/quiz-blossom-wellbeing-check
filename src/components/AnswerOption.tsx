
import React from 'react';
import { Option } from '../data/quizData';
import { cn } from '../lib/utils';

interface AnswerOptionProps {
  option: Option;
  isSelected: boolean;
  onSelect: () => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ option, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "w-full py-4 px-6 rounded-full flex justify-between items-center border transition-all",
        isSelected 
          ? "bg-quiz-light-blue border-quiz-blue" 
          : "bg-white border-gray-200 hover:border-quiz-blue"
      )}
    >
      <span className="text-left">{option.text}</span>
      <div className={cn(
        "w-6 h-6 rounded-full border flex items-center justify-center transition-all",
        isSelected 
          ? "bg-quiz-selected border-quiz-selected" 
          : "bg-white border-gray-300"
      )}>
        {isSelected && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
    </button>
  );
};

export default AnswerOption;
