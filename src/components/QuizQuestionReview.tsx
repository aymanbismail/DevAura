"use client";

import { QuizQuestion } from "@/types/quizz";

interface QuizQuestionReviewProps {
  question: QuizQuestion;
  selectedAnswer?: string;
  correctAnswerId: string;
}

export default function QuizQuestionReview({
  question,
  selectedAnswer,
  correctAnswerId
}: QuizQuestionReviewProps) {
  const isCorrect = selectedAnswer === correctAnswerId;
  const wasAnswered = selectedAnswer !== undefined;

  const getResultIcon = () => {
    if (!wasAnswered) return "❓";
    return isCorrect ? "✅" : "❌";
  };

  const getResultText = () => {
    if (!wasAnswered) return "Not answered";
    return isCorrect ? "Correct" : "Incorrect";
  };

  const getResultColor = () => {
    if (!wasAnswered) return "text-muted-foreground";
    return isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400";
  };

  const getBorderColor = () => {
    if (!wasAnswered) return "border-l-muted-foreground";
    return isCorrect ? "border-l-green-400" : "border-l-red-400";
  };

  return (
    <div className={`bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border ${getBorderColor()} border-l-4 transition-colors duration-300`}>
      {/* العنوان والنتيجة */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">
          {question.question}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">{getResultIcon()}</span>
          <span className={`font-semibold text-sm sm:text-base ${getResultColor()}`}>
            {getResultText()}
          </span>
        </div>
      </div>

      {/* الخيارات */}
      <div className="space-y-3">
        {question.options.map(option => {
          let optionClasses = "p-3 sm:p-4 border-2 rounded-lg transition-colors duration-200 ";
          let icon = "⚪";

          if (option.id === correctAnswerId) {
            optionClasses += "bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-600 text-green-800 dark:text-green-300";
            icon = "✅";
          } else if (option.id === selectedAnswer && !isCorrect) {
            optionClasses += "bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-600 text-red-800 dark:text-red-300";
            icon = "❌";
          } else {
            optionClasses += "bg-muted border-border text-muted-foreground";
          }

          return (
            <div key={option.id} className={optionClasses}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <span className="text-lg">{icon}</span>
                <span className="flex-1">{option.text}</span>

                {/* الوسوم */}
                <div className="flex gap-2 flex-wrap mt-1 sm:mt-0">
                  {option.id === correctAnswerId && (
                    <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm font-medium px-2 py-1 bg-green-100 dark:bg-green-900/50 rounded">
                      Correct Answer
                    </span>
                  )}
                  {option.id === selectedAnswer && !isCorrect && (
                    <span className="text-red-600 dark:text-red-400 text-xs sm:text-sm font-medium px-2 py-1 bg-red-100 dark:bg-red-900/50 rounded">
                      Your Answer
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* التفسير */}
      {!isCorrect && question.explanation && (
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
          <div className="flex items-start gap-2">
            <span className="text-primary text-lg">💡</span>
            <div>
              <h4 className="font-semibold text-primary mb-1">Explanation:</h4>
              <p className="text-primary/80 text-sm leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* لم تتم الإجابة */}
      {!wasAnswered && (
        <div className="mt-4 p-3 bg-muted rounded-lg border border-border">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <span>⚠️</span>
            You didn&apos;t answer this question.
          </p>
        </div>
      )}
    </div>
  );
}
