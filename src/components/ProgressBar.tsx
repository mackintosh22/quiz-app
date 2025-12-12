import React from 'react';

interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ totalQuestions, currentQuestion }) => {
  return (
    <div className="flex gap-2 mb-8 max-w-2xl mx-auto">
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 rounded-full transition-all ${
            index <= currentQuestion ? 'bg-teal-700' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;