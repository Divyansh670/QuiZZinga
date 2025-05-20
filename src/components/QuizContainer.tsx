import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import Welcome from './Welcome';
import GenreSelection from './GenreSelection';
import QuestionCountSelection from './QuestionCountSelection';
import QuizScreen from './QuizScreen';
import Results from './Results';

const QuizContainer: React.FC = () => {
  const { state } = useQuiz();

  // Render the appropriate component based on the current state
  switch (state) {
    case 'welcome':
      return <Welcome />;
    case 'selectGenre':
      return <GenreSelection />;
    case 'selectCount':
      return <QuestionCountSelection />;
    case 'quiz':
      return <QuizScreen />;
    case 'results':
      return <Results />;
    default:
      return <Welcome />;
  }
};

export default QuizContainer;