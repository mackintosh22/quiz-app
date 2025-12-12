import React from 'react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <div className="mb-8">
      <div className="bg-cyan-100 rounded-2xl p-6 mb-6">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 text-center">
          {questionNumber}. {question.question}
        </h2>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(option)}
            className={`w-full p-6 rounded-2xl text-lg font-medium transition-all ${
              selectedAnswer === option
                ? 'bg-cyan-200 text-gray-800 shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;