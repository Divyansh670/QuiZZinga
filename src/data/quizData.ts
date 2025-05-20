import { QuizData } from '../types/quiz';

export const quizData: QuizData = {
  science: {
    title: 'Science',
    description: 'Test your knowledge of scientific facts and discoveries',
    icon: 'flask',
    questions: [
      {
        text: 'What is the chemical symbol for gold?',
        options: ['Go', 'Au', 'Ag', 'Gd'],
        correctIndex: 1
      },
      {
        text: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
        correctIndex: 2
      },
      {
        text: 'What is the hardest natural substance on Earth?',
        options: ['Platinum', 'Diamond', 'Quartz', 'Titanium'],
        correctIndex: 1
      },
      {
        text: 'Which of these is NOT a state of matter?',
        options: ['Solid', 'Liquid', 'Gas', 'Molecule'],
        correctIndex: 3
      },
      {
        text: 'What is the largest organ in the human body?',
        options: ['Heart', 'Liver', 'Skin', 'Brain'],
        correctIndex: 2
      },
      {
        text: 'Which gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctIndex: 1
      },
      {
        text: 'What is the smallest unit of matter?',
        options: ['Atom', 'Molecule', 'Cell', 'Electron'],
        correctIndex: 0
      },
      {
        text: 'What is the speed of light in a vacuum?',
        options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '200,000 km/s'],
        correctIndex: 0
      },
      {
        text: 'Who developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
        correctIndex: 1
      },
      {
        text: 'What is the process called when a solid changes directly to a gas?',
        options: ['Evaporation', 'Condensation', 'Sublimation', 'Deposition'],
        correctIndex: 2
      }
    ]
  },
  history: {
    title: 'History',
    description: 'Explore historical events and figures throughout time',
    icon: 'landmark',
    questions: [
      {
        text: 'In which year did World War II end?',
        options: ['1943', '1945', '1947', '1950'],
        correctIndex: 1
      },
      {
        text: 'Who was the first President of the United States?',
        options: ['Thomas Jefferson', 'John Adams', 'George Washington', 'Benjamin Franklin'],
        correctIndex: 2
      },
      {
        text: 'Which ancient civilization built the pyramids at Giza?',
        options: ['Romans', 'Greeks', 'Mayans', 'Egyptians'],
        correctIndex: 3
      },
      {
        text: 'The Renaissance period began in which country?',
        options: ['France', 'England', 'Italy', 'Germany'],
        correctIndex: 2
      },
      {
        text: 'Who wrote the Communist Manifesto?',
        options: ['Lenin', 'Stalin', 'Marx and Engels', 'Mao Zedong'],
        correctIndex: 2
      },
      {
        text: 'When did the French Revolution begin?',
        options: ['1789', '1776', '1804', '1812'],
        correctIndex: 0
      },
      {
        text: 'Which empire was ruled by Genghis Khan?',
        options: ['Ottoman Empire', 'Mongol Empire', 'Roman Empire', 'Byzantine Empire'],
        correctIndex: 1
      },
      {
        text: 'Who discovered America in 1492?',
        options: ['Vasco da Gama', 'Ferdinand Magellan', 'Christopher Columbus', 'Amerigo Vespucci'],
        correctIndex: 2
      },
      {
        text: 'Which war is also known as "The Great War"?',
        options: ['Crimean War', 'World War I', 'World War II', 'Cold War'],
        correctIndex: 1
      },
      {
        text: 'In which year did the Berlin Wall fall?',
        options: ['1987', '1989', '1991', '1993'],
        correctIndex: 1
      }
    ]
  },
  geography: {
    title: 'Geography',
    description: 'Test your knowledge of world locations and landmarks',
    icon: 'globe',
    questions: [
      {
        text: 'What is the capital of Australia?',
        options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
        correctIndex: 2
      },
      {
        text: 'Which is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctIndex: 3
      },
      {
        text: 'Which country has the largest population?',
        options: ['India', 'United States', 'China', 'Russia'],
        correctIndex: 2
      },
      {
        text: 'Which desert is the largest in the world?',
        options: ['Gobi', 'Kalahari', 'Sahara', 'Antarctic'],
        correctIndex: 3
      },
      {
        text: 'Which mountain is the tallest in the world?',
        options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
        correctIndex: 1
      },
      {
        text: 'Which of these countries is NOT in Europe?',
        options: ['Portugal', 'Turkey', 'Morocco', 'Croatia'],
        correctIndex: 2
      },
      {
        text: 'What is the longest river in the world?',
        options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
        correctIndex: 1
      },
      {
        text: 'Which country is home to the Great Barrier Reef?',
        options: ['Japan', 'Mexico', 'Australia', 'Thailand'],
        correctIndex: 2
      },
      {
        text: 'What is the capital of Canada?',
        options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
        correctIndex: 3
      },
      {
        text: 'Which of these is NOT one of the Great Lakes?',
        options: ['Lake Michigan', 'Lake Ontario', 'Lake Champlain', 'Lake Erie'],
        correctIndex: 2
      }
    ]
  },
  entertainment: {
    title: 'Entertainment',
    description: 'Challenge yourself with questions about movies, music, and pop culture',
    icon: 'film',
    questions: [
      {
        text: 'Who played Jack in the movie "Titanic"?',
        options: ['Brad Pitt', 'Leonardo DiCaprio', 'Johnny Depp', 'Matt Damon'],
        correctIndex: 1
      },
      {
        text: 'Which band performed the song "Bohemian Rhapsody"?',
        options: ['The Beatles', 'Led Zeppelin', 'Queen', 'The Rolling Stones'],
        correctIndex: 2
      },
      {
        text: 'What was the first feature-length animated movie ever released?',
        options: ['Snow White and the Seven Dwarfs', 'Pinocchio', 'Fantasia', 'Bambi'],
        correctIndex: 0
      },
      {
        text: 'Who is the author of the Harry Potter book series?',
        options: ['J.R.R. Tolkien', 'J.K. Rowling', 'Stephen King', 'C.S. Lewis'],
        correctIndex: 1
      },
      {
        text: 'Which TV show features characters named Ross, Rachel, and Joey?',
        options: ['How I Met Your Mother', 'The Big Bang Theory', 'Friends', 'Seinfeld'],
        correctIndex: 2
      },
      {
        text: 'Who played Iron Man in the Marvel Cinematic Universe?',
        options: ['Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo', 'Robert Downey Jr.'],
        correctIndex: 3
      },
      {
        text: 'Which film won the Academy Award for Best Picture in 2020?',
        options: ['1917', 'Joker', 'Parasite', 'Once Upon a Time in Hollywood'],
        correctIndex: 2
      },
      {
        text: 'Who is known as the "King of Pop"?',
        options: ['Elvis Presley', 'Michael Jackson', 'Prince', 'David Bowie'],
        correctIndex: 1
      },
      {
        text: 'Which of these is NOT a Disney princess?',
        options: ['Ariel', 'Belle', 'Elsa', 'Moana'],
        correctIndex: 2
      },
      {
        text: 'Which TV series is set in the fictional continents of Westeros and Essos?',
        options: ['The Witcher', 'Game of Thrones', 'Lord of the Rings', 'The Wheel of Time'],
        correctIndex: 1
      }
    ]
  },
  sports: {
    title: 'Sports',
    description: 'Test your knowledge of athletes, teams, and sporting events',
    icon: 'trophy',
    questions: [
      {
        text: 'In which sport would you perform a slam dunk?',
        options: ['Volleyball', 'Basketball', 'Tennis', 'Football'],
        correctIndex: 1
      },
      {
        text: 'How many players are there in a standard soccer team on the field?',
        options: ['9', '10', '11', '12'],
        correctIndex: 2
      },
      {
        text: 'Which country has won the most FIFA World Cups?',
        options: ['Germany', 'Italy', 'Argentina', 'Brazil'],
        correctIndex: 3
      },
      {
        text: 'In which Olympic sport would you perform a vault?',
        options: ['Swimming', 'Gymnastics', 'Athletics', 'Diving'],
        correctIndex: 1
      },
      {
        text: 'Which Grand Slam tennis tournament is played on clay courts?',
        options: ['Wimbledon', 'US Open', 'French Open', 'Australian Open'],
        correctIndex: 2
      },
      {
        text: 'How many points is a touchdown worth in American football?',
        options: ['3', '6', '7', '2'],
        correctIndex: 1
      },
      {
        text: 'Which sport uses a shuttlecock?',
        options: ['Table Tennis', 'Badminton', 'Tennis', 'Squash'],
        correctIndex: 1
      },
      {
        text: 'In which sport would you perform a "hole in one"?',
        options: ['Bowling', 'Pool', 'Golf', 'Cricket'],
        correctIndex: 2
      },
      {
        text: 'Which NBA team has won the most championships?',
        options: ['Los Angeles Lakers', 'Chicago Bulls', 'Boston Celtics', 'Golden State Warriors'],
        correctIndex: 2
      },
      {
        text: 'How many rings are on the Olympic flag?',
        options: ['4', '5', '6', '7'],
        correctIndex: 1
      }
    ]
  }
};