// utils/quizUtils.ts
import { EnhancedQuizQuestion, Language, Topic } from "@/types/quizInterfaceAndType";
import type { QuizQuestion as QuizQuestionType } from "@/types/quizz";

// Utility function to shuffle array using Fisher-Yates algorithm
export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to get random subset of questions without repetition
export const getRandomQuestions = (
  questions: EnhancedQuizQuestion[],
  count: number
): EnhancedQuizQuestion[] => {
  if (questions.length <= count) {
    return shuffleArray(questions);
  }

  const shuffledIndices = shuffleArray([...Array(questions.length).keys()]);
  const selectedIndices = shuffledIndices.slice(0, count);
  const selectedQuestions = selectedIndices.map((index) => questions[index]);
  return shuffleArray(selectedQuestions);
};

// Function to get questions from all topics
export const getAllTopicsQuestions = (language: Language): EnhancedQuizQuestion[] => {
  const allQuestions: EnhancedQuizQuestion[] = [];

  language.topics.forEach((topic: Topic) => {
    topic.questions.forEach((question: QuizQuestionType) => {
      allQuestions.push({
        ...question,
        topicName: topic.name,
        topicSlug: topic.slug,
      });
    });
  });

  return allQuestions;
};

// Generate storage key for this quiz session
export const generateStorageKey = (
  slug: string,
  topicSlug: string,
  questionsCount: string
) => {
  return `quiz_${slug}_${topicSlug}_${questionsCount}`;
};

// Calculate quiz score
export const calculateScore = (
  questions: EnhancedQuizQuestion[],
  selectedAnswers: Record<string, string>
) => {
  let correct = 0;
  questions.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctAnswerId) {
      correct++;
    }
  });
  return correct;
};

// Get motivational message based on score
export const getMotivationalMessage = (score: number, total: number) => {
  const percentage = (score / total) * 100;

  if (percentage === 100) {
    return "🎉 Perfect! Outstanding performance!";
  } else if (percentage >= 80) {
    return "🌟 Excellent work! You're doing great!";
  } else if (percentage >= 60) {
    return "👍 Good job! Keep practicing to improve!";
  } else if (percentage >= 40) {
    return "📚 Not bad! Review the topics and try again!";
  } else {
    return "💪 Don't give up! Practice makes perfect!";
  }
};

// Get topic statistics for mixed quizzes
export const getTopicStats = (
  questions: EnhancedQuizQuestion[],
  isAllTopics: boolean
) => {
  if (!isAllTopics) return null;

  const topicCounts: Record<string, number> = {};
  questions.forEach((q) => {
    if (q.topicName) {
      topicCounts[q.topicName] = (topicCounts[q.topicName] || 0) + 1;
    }
  });

  return topicCounts;
};