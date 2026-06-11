// types/quizInterfaceAndType.ts
import type { QuizQuestion as QuizQuestionType } from "@/types/quizz";

export interface EnhancedQuizQuestion extends QuizQuestionType {
  topicName?: string;
  topicSlug?: string;
}

export interface Topic {
  name: string;
  slug: string;
  questions: QuizQuestionType[];
}

export interface Language {
  topics: Topic[];
}

export interface QuizState {
  selectedAnswers: Record<string, string>;
  isSubmitted: boolean;
  showReview: boolean;
  timeLeft: number;
  isTimeUp: boolean;
  quizStartTime: number;
  totalDuration: number;
  shuffledQuestions?: EnhancedQuizQuestion[];
  isAllTopics?: boolean;
  quizTitle?: string;
}

export interface QuizPageProps {
  params: Promise<{
    slug: string;
    topicSlug: string;
  }>;
  searchParams: Promise<{
    questionsCount: string;
  }>;
}