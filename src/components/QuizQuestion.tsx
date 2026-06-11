// components/QuizQuestion.tsx
"use client";

import type { QuizQuestion } from "@/types/quizz";

interface QuizQuestionProps {
  question: QuizQuestion;
  selectedAnswer?: string;
  onAnswerSelect: (questionId: string, answerId: string) => void;
  isSubmitted: boolean;
  showCorrectAnswer: boolean;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  onAnswerSelect,
  isSubmitted,
  showCorrectAnswer,
}: QuizQuestionProps) {
  const getOptionClasses = (optionId: string) => {
    let classes = "block w-full p-3 sm:p-4 mb-2 sm:mb-3 border-2 rounded-lg cursor-pointer transition-all duration-200 text-left ";
    
    if (isSubmitted && showCorrectAnswer) {
      if (optionId === question.correctAnswerId) {
        classes += "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-300";
      } else if (optionId === selectedAnswer) {
        classes += "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-300";
      } else {
        classes += "bg-muted border-border text-muted-foreground";
      }
    } else if (optionId === selectedAnswer) {
      classes += "bg-primary/10 border-primary text-primary shadow-md";
    } else {
      classes += "hover:bg-muted/50 border-border hover:border-border/80";
    }

    if (isSubmitted) {
      classes += " cursor-not-allowed";
    }

    return classes;
  };

  const getOptionIcon = (optionId: string) => {
    if (!isSubmitted || !showCorrectAnswer) {
      return selectedAnswer === optionId ? "🔘" : "⚪";
    }
    
    if (optionId === question.correctAnswerId) {
      return "✅";
    } else if (optionId === selectedAnswer) {
      return "❌";
    }
    return "⚪";
  };

  return (
    <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border transition-colors duration-300">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-card-foreground leading-relaxed">
        {question.question}
      </h3>
      
      <div className="space-y-2 sm:space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={getOptionClasses(option.id)}
            onClick={() => !isSubmitted && onAnswerSelect(question.id, option.id)}
            disabled={isSubmitted}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-base sm:text-lg flex-shrink-0">{getOptionIcon(option.id)}</span>
              <span className="flex-1 text-sm sm:text-base text-left">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {isSubmitted && showCorrectAnswer && question.explanation && (
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
          <div className="flex items-start gap-2">
            <span className="text-primary text-lg flex-shrink-0">💡</span>
            <div>
              <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">Explanation:</h4>
              <p className="text-primary/80 text-xs sm:text-sm leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {!selectedAnswer && !isSubmitted && (
        <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <p className="text-yellow-800 dark:text-yellow-300 text-xs sm:text-sm flex items-center gap-2">
            <span>⚠️</span>
            Please select an answer before proceeding.
          </p>
        </div>
      )}
    </div>
  );
}