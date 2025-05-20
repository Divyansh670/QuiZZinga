import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { useTheme } from '../contexts/ThemeContext';
import { Award, RotateCcw, Crown, Frown, Smile } from 'lucide-react';

const Results: React.FC = () => {
  const { score, questions, restartQuiz, userAnswers } = useQuiz();
  const { theme } = useTheme();
  
  const percentage = Math.round((score / questions.length) * 100);
  
  const getFeedbackIcon = () => {
    if (percentage >= 80) return <Crown size={48} />;
    if (percentage >= 50) return <Smile size={48} />;
    return <Frown size={48} />;
  };
  
  const getFeedbackMessage = () => {
    if (percentage >= 80) return "Outstanding! You're a quiz master!";
    if (percentage >= 50) return "Good job! You've got solid knowledge!";
    return "Keep learning! You'll do better next time!";
  };

  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <div className={`rounded-xl p-8 mb-8 shadow-lg ${
        theme === 'light' 
          ? 'bg-[#E8D8C4] text-[#5D4037]' 
          : 'bg-[#3D2B1F] text-[#E8E4C9]'
      }`}>
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className={`rounded-full p-6 ${
              theme === 'light' 
                ? 'bg-[#8B4513] text-[#F5F5DC]' 
                : 'bg-[#A0522D] text-[#E8E4C9]'
            }`}>
              <Award size={48} />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-2">Quiz Results</h2>
          <p className="text-lg mb-6">You scored:</p>
          
          <div className="relative w-40 h-40 mx-auto mb-4">
            <div className={`absolute inset-0 rounded-full border-8 ${
              theme === 'light' 
                ? 'border-[#D2B48C]' 
                : 'border-[#4D3B2F]'
            }`}></div>
            <div 
              className="absolute inset-0 rounded-full border-8 border-[#A0522D] transition-all duration-1000 ease-out"
              style={{ 
                clipPath: `polygon(50% 50%, 50% 0%, ${percentage >= 25 ? '100% 0%' : `${50 + 50 * percentage / 25}% 0%`}, ${percentage >= 50 ? '100% 100%' : `100% ${percentage / 50 * 100}%`}, ${percentage >= 75 ? '0% 100%' : `${100 - 100 * (percentage - 50) / 25}% 100%`}, ${percentage >= 100 ? '0% 0%' : `0% ${100 - (percentage - 75) / 25 * 100}%`}, ${percentage >= 25 ? '' : `${50 - 50 * (25 - percentage) / 25}% 0%`})` 
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{percentage}%</span>
            </div>
          </div>
          
          <p className="text-xl font-bold mb-2">
            {score} out of {questions.length} correct
          </p>
          
          <div className="flex justify-center mb-6">
            {getFeedbackIcon()}
          </div>
          
          <p className="text-lg mb-8">{getFeedbackMessage()}</p>
          
          <button
            onClick={restartQuiz}
            className={`px-8 py-3 rounded-full font-semibold text-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center mx-auto ${
              theme === 'light' 
                ? 'bg-[#A0522D] text-[#F5F5DC] hover:bg-[#8B4513]' 
                : 'bg-[#A0522D] text-[#E8E4C9] hover:bg-[#B25E35]'
            }`}
          >
            <RotateCcw size={20} className="mr-2" />
            Try Another Quiz
          </button>
        </div>
        
        {/* Answer review section */}
        <div className={`mt-8 p-4 rounded-lg ${
          theme === 'light' 
            ? 'bg-[#D2B48C]' 
            : 'bg-[#4D3B2F]'
        }`}>
          <h3 className="font-bold text-lg mb-4">Review Your Answers:</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {questions.map((question, index) => {
              const isCorrect = userAnswers[index] === question.correctIndex;
              
              return (
                <div 
                  key={index}
                  className={`p-4 rounded-lg ${
                    theme === 'light' 
                      ? isCorrect ? 'bg-green-100 border-l-4 border-green-500' : 'bg-red-100 border-l-4 border-red-500'
                      : isCorrect ? 'bg-green-900 border-l-4 border-green-500' : 'bg-red-900 border-l-4 border-red-500'
                  }`}
                >
                  <p className="font-medium mb-2">{index + 1}. {question.text}</p>
                  <p className="mb-1">
                    <span className="font-semibold">Your answer:</span> {userAnswers[index] !== null ? question.options[userAnswers[index]] : 'No answer'}
                  </p>
                  {!isCorrect && (
                    <p>
                      <span className="font-semibold">Correct answer:</span> {question.options[question.correctIndex]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;