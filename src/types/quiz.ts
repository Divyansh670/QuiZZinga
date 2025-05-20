export type Genre = 'science' | 'history' | 'geography' | 'entertainment' | 'sports';

export interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

export interface GenreData {
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export type QuizData = Record<Genre, GenreData>;

export type QuizState = 'welcome' | 'selectGenre' | 'selectCount' | 'quiz' | 'results';