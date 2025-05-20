import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { useTheme } from '../contexts/ThemeContext';
import { FlaskRound as Flask, Landmark, Globe, Film, Trophy } from 'lucide-react';

const GenreSelection: React.FC = () => {
  const { selectGenre } = useQuiz();
  const { theme } = useTheme();

  const genres = [
    { id: 'science', title: 'Science', description: 'Test your knowledge of scientific facts and discoveries', icon: <Flask size={32} /> },
    { id: 'history', title: 'History', description: 'Explore historical events and figures throughout time', icon: <Landmark size={32} /> },
    { id: 'geography', title: 'Geography', description: 'Test your knowledge of world locations and landmarks', icon: <Globe size={32} /> },
    { id: 'entertainment', title: 'Entertainment', description: 'Challenge yourself with questions about movies, music, and pop culture', icon: <Film size={32} /> },
    { id: 'sports', title: 'Sports', description: 'Test your knowledge of athletes, teams, and sporting events', icon: <Trophy size={32} /> }
  ];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-center">Select a Genre</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => selectGenre(genre.id as any)}
            className={`p-6 rounded-xl transition transform hover:scale-105 active:scale-95 text-left ${
              theme === 'light' 
                ? 'bg-[#E8D8C4] text-[#5D4037] hover:bg-[#D2B48C] shadow-md' 
                : 'bg-[#3D2B1F] text-[#E8E4C9] hover:bg-[#4D3B2F] shadow-md'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                theme === 'light' 
                  ? 'bg-[#A0522D] text-[#F5F5DC]' 
                  : 'bg-[#A0522D] text-[#E8E4C9]'
              }`}>
                {genre.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{genre.title}</h3>
                <p className={theme === 'light' ? 'text-[#6D4C41]' : 'text-[#D2C8B6]'}>
                  {genre.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;