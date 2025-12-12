export interface Question {
  question: string;
  options: string[];
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>;
  showResults: boolean;
  selectedAnswer: string | null;
}

export interface QuizData {
  questions: Question[];
  correctAnswers: string[];
}