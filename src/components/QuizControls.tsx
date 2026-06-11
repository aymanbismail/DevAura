// components/quiz/QuizControls.tsx
"use client";

interface QuizControlsProps {
  currentQuestionIndex: number; // الفهرس الحالي للسؤال
  totalQuestions: number; // إجمالي عدد الأسئلة
  onNext: () => void; // دالة للانتقال إلى السؤال التالي
  onPrev: () => void; // دالة للانتقال إلى السؤال السابق
  onSubmit: () => void; // دالة لتقديم الاختبار
  isSubmitted: boolean; // حالة ما إذا تم تقديم الاختبار
}

export default function QuizControls({
  currentQuestionIndex,
  totalQuestions,
  onNext,
  onPrev,
  onSubmit,
  isSubmitted,
}: QuizControlsProps) {
  return (
    <div className="flex justify-between gap-2 mt-6">
      {/* زر الانتقال إلى السؤال السابق */}
      <button
        onClick={onPrev}
        disabled={currentQuestionIndex === 0 || isSubmitted} // تعطيل الزر إذا كان في أول سؤال أو تم تقديم الاختبار
        className="flex-1 md:flex-none px-3 md:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg disabled:opacity-50"
      >
        <span className="hidden md:inline">Previous</span>
        <span className="md:hidden">←</span>
      </button>

      {/* زر الانتقال إلى السؤال التالي أو زر تقديم الاختبار */}
      {currentQuestionIndex < totalQuestions - 1 ? (
        <button
          onClick={onNext}
          disabled={isSubmitted} // تعطيل الزر إذا تم تقديم الاختبار
          className="flex-1 md:flex-none px-3 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          <span className="hidden md:inline">Next</span>
          <span className="md:hidden">→</span>
        </button>
      ) : (
        !isSubmitted && ( // إذا كان في آخر سؤال ولم يتم تقديم الاختبار
          <button
            onClick={onSubmit}
            className="flex-1 md:flex-none px-3 md:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <span className="hidden md:inline">Submit Quiz</span>
            <span className="md:hidden">✓</span>
          </button>
        )
      )}
    </div>
  );
}
