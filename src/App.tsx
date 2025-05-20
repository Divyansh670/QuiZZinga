import React from 'react';
import { QuizProvider } from './contexts/QuizContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import QuizContainer from './components/QuizContainer';

function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <Layout>
          <QuizContainer />
        </Layout>
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;