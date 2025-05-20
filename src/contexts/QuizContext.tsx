import React, { createContext, useContext, useState } from 'react';
import { quizData } from '../data/quizData';
import { Genre, Question, QuizState } from '../types/quiz';

interface QuizContextType {
  state: QuizState;
  selectedGenre: Genre | null;
  questionCount: number;
  currentQuestionIndex: number;
  score: number;
  questions: Question[];
  userAnswers: (number | null)[];
  timeRemaining: number;
  selectGenre: (genre: Genre) => void;
  setQuestionCount: (count: number) => void;
  startQuiz: () => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  restartQuiz: () => void;
  setTimeRemaining: (time: number) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<QuizState>('welcome');
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(20);

  const selectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
    setState('selectCount');
  };

  const setupQuestionCount = (count: number) => {
    setQuestionCount(count);
  };

  const startQuiz = () => {
    if (!selectedGenre) return;
    
    // Get questions from the selected genre and shuffle them
    const genreQuestions = quizData[selectedGenre].questions;
    const shuffled = [...genreQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, questionCount);
    
    setQuestions(selectedQuestions);
    setUserAnswers(Array(selectedQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeRemaining(20);
    setState('quiz');
  };

  const answerQuestion = (answerIndex: number) => {
    // Record the user's answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newUserAnswers);

    // Update score if answer is correct
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctIndex) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setTimeRemaining(20);
    } else {
      setState('results');
    }
  };

  const restartQuiz = () => {
    setState('welcome');
    setSelectedGenre(null);
    setQuestionCount(10);
  };

  return (
    <QuizContext.Provider
      value={{
        state,
        selectedGenre,
        questionCount,
        currentQuestionIndex,
        score,
        questions,
        userAnswers,
        timeRemaining,
        selectGenre,
        setQuestionCount: setupQuestionCount,
        startQuiz,
        answerQuestion,
        nextQuestion,
        restartQuiz,
        setTimeRemaining
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};