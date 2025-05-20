import React, { useEffect, useState } from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { useTheme } from '../contexts/ThemeContext';
import Timer from './Timer';
import { AlertTriangle } from 'lucide-react';

const QuizScreen: React.FC = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    answerQuestion, 
    nextQuestion, 
    userAnswers,
    timeRemaining,
    setTimeRemaining
  } = useQuiz();
  const { theme } = useTheme();
  const [answered, setAnswered] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [animation, setAnimation] = useState('');

  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    setAnswered(userAnswer !== null);
    setTimeUp(false);
    setAnimation('animate-fadeIn');
    
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeUp(true);
          setAnswered(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, setTimeRemaining]);

  const handleAnswerClick = (index: number) => {
    if (answered || timeUp) return;
    
    setAnswered(true);
    answerQuestion(index);
  };

  const handleNextQuestion = () => {
    setAnimation('animate-fadeOut');
    setTimeout(() => {
      nextQuestion();
    }, 300);
  };

  const getOptionClass = (index: number) => {
    if (!answered && !timeUp) {
      return theme === 'light' 
        ? 'bg-[#E8D8C4] hover:bg-[#D2B48C]' 
        : 'bg-[#3D2B1F] hover:bg-[#4D3B2F]';
    }

    if (index === currentQuestion.correctIndex) {
      return 'bg-green-600 text-white';
    }

    if (userAnswer === index) {
      return 'bg-red-600 text-white';
    }

    return theme === 'light' 
      ? 'bg-[#E8D8C4] opacity-70' 
      : 'bg-[#3D2B1F] opacity-70';
  };

  return (
    <div className={`max-w-2xl mx-auto ${animation}`}>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>Progress: {Math.round(progress)}%</span>
        </div>
        <div className={`w-full h-2 rounded-full ${theme === 'light' ? 'bg-[#D2B48C]' : 'bg-[#4D3B2F]'}`}>
          <div 
            className="h-full rounded-full bg-[#A0522D] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className={`rounded-xl p-6 mb-6 shadow-lg ${
        theme === 'light' 
          ? 'bg-[#E8D8C4] text-[#5D4037]' 
          : 'bg-[#3D2B1F] text-[#E8E4C9]'
      }`}>
        <div className="flex justify-between items-center mb-4">
          <Timer seconds={timeRemaining} total={20} />
          
          {timeUp && (
            <div className="flex items-center text-red-500">
              <AlertTriangle size={20} className="mr-2" />
              <span>Time's up!</span>
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-6">{currentQuestion.text}</h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={answered || timeUp}
              className={`w-full text-left p-4 rounded-lg transition transform hover:translate-x-1 ${getOptionClass(index)} ${
                (answered || timeUp) && index === currentQuestion.correctIndex ? 'animate-pulse' : ''
              }`}
            >
              <span className="font-medium">{['A', 'B', 'C', 'D'][index]}.</span> {option}
            </button>
          ))}
        </div>
      </div>

      {(answered || timeUp) && (
        <div className="flex justify-center">
          <button
            onClick={handleNextQuestion}
            className={`px-8 py-3 rounded-full font-semibold text-lg transition transform hover:scale-105 active:scale-95 ${
              theme === 'light' 
                ? 'bg-[#A0522D] text-[#F5F5DC] hover:bg-[#8B4513]' 
                : 'bg-[#A0522D] text-[#E8E4C9] hover:bg-[#B25E35]'
            }`}
          >
            {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizScreen;