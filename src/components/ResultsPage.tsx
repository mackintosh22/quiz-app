import React from 'react';

interface ResultsPageProps {
  score: number;
  onRestart: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ score, onRestart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-50 rounded-3xl shadow-2xl p-12 text-center">
        <p className="text-gray-700 text-lg mb-4">Keep Learning!</p>
        <h1 className="text-5xl md:text-6xl font-serif italic text-teal-700 mb-4">
          Your Final score is
        </h1>
        <div className="text-9xl font-bold text-teal-700 mb-2">
          {score}
          <span className="text-6xl">%</span>
        </div>
        <button
          onClick={onRestart}
          className="mt-8 px-8 py-3 bg-cyan-200 hover:bg-cyan-300 text-gray-800 rounded-lg transition-all font-medium"
        >
          Start Again
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;