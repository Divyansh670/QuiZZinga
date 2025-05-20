import React, { useState } from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { useTheme } from '../contexts/ThemeContext';
import { ListChecks } from 'lucide-react';

const QuestionCountSelection: React.FC = () => {
  const { questionCount, setQuestionCount, startQuiz, selectedGenre } = useQuiz();
  const { theme } = useTheme();
  const [count, setCount] = useState(questionCount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setCount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuestionCount(count);
    startQuiz();
  };

  return (
    <div className="max-w-lg mx-auto animate-fadeIn">
      <div className={`rounded-xl p-8 shadow-lg ${
        theme === 'light' 
          ? 'bg-[#E8D8C4] text-[#5D4037]' 
          : 'bg-[#3D2B1F] text-[#E8E4C9]'
      }`}>
        <div className="flex justify-center mb-6">
          <div className={`rounded-full p-4 ${
            theme === 'light' 
              ? 'bg-[#8B4513] text-[#F5F5DC]' 
              : 'bg-[#A0522D] text-[#E8E4C9]'
          }`}>
            <ListChecks size={32} />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          How many questions would you like?
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="count" className="font-medium">
                Question Count:
              </label>
              <span className={`font-bold text-lg ${
                theme === 'light' 
                  ? 'text-[#8B4513]' 
                  : 'text-[#E8D8C4]'
              }`}>
                {count}
              </span>
            </div>
            
            <input
              type="range"
              id="count"
              min="5"
              max="20"
              step="1"
              value={count}
              onChange={handleChange}
              className="w-full h-2 appearance-none rounded-full accent-[#A0522D]"
              style={{
                background: `linear-gradient(to right, ${theme === 'light' ? '#A0522D' : '#A0522D'} 0%, ${theme === 'light' ? '#A0522D' : '#A0522D'} ${(count - 5) / 15 * 100}%, ${theme === 'light' ? '#D2B48C' : '#4D3B2F'} ${(count - 5) / 15 * 100}%, ${theme === 'light' ? '#D2B48C' : '#4D3B2F'} 100%)`
              }}
            />
            
            <div className="flex justify-between text-sm">
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className={`px-8 py-3 rounded-full font-semibold text-lg transition transform hover:scale-105 active:scale-95 ${
                theme === 'light' 
                  ? 'bg-[#A0522D] text-[#F5F5DC] hover:bg-[#8B4513]' 
                  : 'bg-[#A0522D] text-[#E8E4C9] hover:bg-[#B25E35]'
              }`}
            >
              Start {selectedGenre?.charAt(0).toUpperCase() + selectedGenre?.slice(1)} Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionCountSelection;