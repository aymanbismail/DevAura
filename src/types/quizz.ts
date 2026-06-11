// types/quizz.ts
export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswerId: string;
  explanation?: string;
}

export interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string;
  questions: QuizQuestion[];
}

export interface Language {
  id: number;
  name: string;
  slug: string;
  logo: string;
  topicCount: number;
  topics: Topic[];
}
