import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { useTheme } from '../contexts/ThemeContext';
import { Brain } from 'lucide-react';

const Welcome: React.FC = () => {
  const { setState } = useQuiz();
  const { theme } = useTheme();
  
  const startQuiz = () => {
    setState('selectGenre');
  };

  return (
    <div className="flex flex-col items-center justify-center animate-fadeIn">
      <div className={`rounded-xl p-8 mb-8 w-full max-w-2xl shadow-lg ${
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
              <Brain size={48} />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to QuiZZinga!</h1>
          <p className="text-lg mb-6">Challenge yourself with quizzes across different genres. Test your knowledge and have fun!</p>
          
          <div className="space-y-4 mb-8">
            <div className={`p-4 rounded-lg ${
              theme === 'light' 
                ? 'bg-[#D2B48C] text-[#5D4037]' 
                : 'bg-[#4D3B2F] text-[#E8E4C9]'
            }`}>
              <h2 className="font-bold text-lg mb-2">How to Play:</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Select a quiz genre</li>
                <li>Choose the number of questions</li>
                <li>Answer each question within 20 seconds</li>
                <li>See your final score at the end!</li>
              </ol>
            </div>
          </div>
          
          <button
            onClick={startQuiz}
            className={`px-8 py-3 rounded-full font-semibold text-lg transition transform hover:scale-105 active:scale-95 ${
              theme === 'light' 
                ? 'bg-[#A0522D] text-[#F5F5DC] hover:bg-[#8B4513]' 
                : 'bg-[#A0522D] text-[#E8E4C9] hover:bg-[#B25E35]'
            }`}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;