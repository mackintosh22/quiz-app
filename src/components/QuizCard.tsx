import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { quizData } from '../data/questions';
import { QuizState } from '../types/quiz';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import ResultsPage from './ResultsPage';
import Mascot from './Mascot';

const QuizCard: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    showResults: false,
    selectedAnswer: null,
  });

  const { questions, correctAnswers } = quizData;

  const handleAnswerSelect = (answer: string): void => {
    setState(prev => ({
      ...prev,
      selectedAnswer: answer,
      answers: { ...prev.answers, [prev.currentQuestion]: answer },
    }));
  };

  const handleNext = (): void => {
    if (state.currentQuestion < questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedAnswer: prev.answers[prev.currentQuestion + 1] || null,
      }));
    }
  };

  const handlePrevious = (): void => {
    if (state.currentQuestion > 0) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
        selectedAnswer: prev.answers[prev.currentQuestion - 1] || null,
      }));
    }
  };

  const handleSubmit = (): void => {
    setState(prev => ({ ...prev, showResults: true }));
  };

  const handleRestart = (): void => {
    setState({
      currentQuestion: 0,
      answers: {},
      showResults: false,
      selectedAnswer: null,
    });
  };

  const calculateScore = (): number => {
    const correct = Object.keys(state.answers).filter(
      key => state.answers[Number(key)] === correctAnswers[Number(key)]
    ).length;
    return Math.round((correct / questions.length) * 100);
  };

  if (state.showResults) {
    return <ResultsPage score={calculateScore()} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-blue-300 flex items-center justify-center p-4 relative">
      {state.currentQuestion === 0 && <Mascot />}

      <div className="w-full max-w-4xl bg-gray-50 rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-6xl font-serif italic text-teal-700 text-center mb-2">
          Test Your Knowledge
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Answer all questions to see your results
        </p>

        <ProgressBar 
          totalQuestions={questions.length} 
          currentQuestion={state.currentQuestion} 
        />

        <QuestionCard
          question={questions[state.currentQuestion]}
          questionNumber={state.currentQuestion + 1}
          selectedAnswer={state.selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
        />

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={handlePrevious}
            disabled={state.currentQuestion === 0}
            className={`p-3 rounded-lg transition-all ${
              state.currentQuestion === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-cyan-200 hover:bg-cyan-300 text-gray-800'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          
          {state.currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-lg font-medium transition-all bg-cyan-200 hover:bg-cyan-300 text-gray-800"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="p-3 bg-cyan-200 hover:bg-cyan-300 text-gray-800 rounded-lg transition-all"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>

      <button
        onClick={handleRestart}
        className="fixed bottom-8 right-8 flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all shadow-lg"
      >
        <RotateCcw size={18} />
        Restart
      </button>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 hidden md:flex gap-2 bg-gray-800 rounded-full px-4 py-2">
        <button
          onClick={handlePrevious}
          disabled={state.currentQuestion === 0}
          className={`p-1 rounded ${
            state.currentQuestion === 0 ? 'text-gray-600' : 'text-white hover:text-gray-300'
          }`}
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center px-2 text-white text-sm">
          {state.currentQuestion + 1} / {questions.length}
        </div>
        <button
          onClick={handleNext}
          disabled={state.currentQuestion === questions.length - 1}
          className={`p-1 rounded ${
            state.currentQuestion === questions.length - 1
              ? 'text-gray-600'
              : 'text-white hover:text-gray-300'
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default QuizCard;