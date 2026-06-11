// app/quizzes/[slug]/[topicSlug]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { languages } from "@/data/quizzes";
import Timer from "@/components/Timer";
import Swal from "sweetalert2";

import { QuizPageProps, EnhancedQuizQuestion, QuizState } from "@/types/quizInterfaceAndType";
import { 
  shuffleArray, 
  getRandomQuestions, 
  getAllTopicsQuestions,
  generateStorageKey,
  calculateScore,
  getTopicStats
} from "@/utils/quizUtils";
import { StorageManager } from "@/utils/storageManager";
import { useCopyProtection } from "@/hooks/useCopyProtection";
import { DevToolsOverlay } from "@/components/DevToolsOverlay";
import { QuizHeader } from "@/components/QuizHeader";
import { QuizInstructions } from "@/components/QuizInstructions";
import { QuizQuestionsList } from "@/components/QuizQuestionsList";
import { QuizResults } from "@/components/QuizResults";
import { QuizReview } from "@/components/QuizReview";
import { QuizLoading } from "@/components/QuizLoading";

export default function QuizPage({ params, searchParams }: QuizPageProps) {
  const router = useRouter();
  
  // State management
  const [questions, setQuestions] = useState<EnhancedQuizQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [quizId, setQuizId] = useState<string>("");
  const [isAllTopics, setIsAllTopics] = useState(false);
  const [quizTitle, setQuizTitle] = useState("");

  // Use enhanced copy protection hook
  const { devToolsOpen } = useCopyProtection(isSubmitted, selectedAnswers);

  // Handle time updates from Timer component
  const handleTimeUpdate = (newTimeLeft: number) => {
    setTimeLeft(newTimeLeft);
  };

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Load questions and setup timer
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const resolvedParams = await params;
        const resolvedSearchParams = await searchParams;

        const { slug, topicSlug } = resolvedParams;
        const { questionsCount } = resolvedSearchParams;

        const language = languages.find((l) => l.slug === slug);
        const count = parseInt(questionsCount) || 5;

        if (!language) {
          console.error("Language not found");
          setIsLoading(false);
          return;
        }

        // Check if this is "all topics" mode
        const isAllTopicsMode = topicSlug === "all";
        setIsAllTopics(isAllTopicsMode);

        let questionsPool: EnhancedQuizQuestion[] = [];
        let title = "";

        if (isAllTopicsMode) {
          questionsPool = getAllTopicsQuestions(language);
          title = `Mixed Quiz - All Topics`;
        } else {
          // Single topic mode
          const topic = language.topics.find((t) => t.slug === topicSlug);
          if (!topic || !topic.questions.length) {
            setIsLoading(false);
            return;
          }

          questionsPool = topic.questions.map((q) => ({
            ...q,
            topicName: topic.name,
            topicSlug: topic.slug,
          }));
          title = `${topic.name} Quiz`;
        }

        setQuizTitle(title);

        // Generate storage key
        const storageKey = generateStorageKey(slug, topicSlug, questionsCount);
        setQuizId(storageKey);

        // Try to load saved state
        const savedState = StorageManager.loadQuizState(storageKey);

        if (
          savedState &&
          savedState.shuffledQuestions &&
          savedState.isAllTopics === isAllTopicsMode
        ) {
          if (StorageManager.isValidSavedState(savedState)) {
            // Use saved time directly instead of recalculating
            const savedTimeLeft = savedState.timeLeft || 0;
            
            // Verify that saved time is logical
            const totalTime = count * 20;
            const validTimeLeft = Math.max(0, Math.min(savedTimeLeft, totalTime));

            setQuestions(savedState.shuffledQuestions);
            setSelectedAnswers(savedState.selectedAnswers || {});
            setIsSubmitted(savedState.isSubmitted || false);
            setShowReview(savedState.showReview || false);
            setTimeLeft(validTimeLeft);
            setTotalDuration(savedState.totalDuration || totalTime);
            setIsTimeUp(savedState.isTimeUp || validTimeLeft === 0);
          } else {
            // Clear expired or completed quiz data and start fresh
            StorageManager.clearQuizState(storageKey);
            startNewQuiz(questionsPool, count, storageKey, title, isAllTopicsMode);
          }
        } else {
          // New quiz session
          startNewQuiz(questionsPool, count, storageKey, title, isAllTopicsMode);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading questions:", error);
        setIsLoading(false);
      }
    };

    const startNewQuiz = (
      questionsPool: EnhancedQuizQuestion[],
      count: number,
      storageKey: string,
      title: string,
      isAllTopicsMode: boolean
    ) => {
      // Create new randomly selected questions with shuffled options
      const randomlySelectedQuestions = getRandomQuestions(questionsPool, count);
      const questionsWithShuffledOptions = randomlySelectedQuestions.map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));

      setQuestions(questionsWithShuffledOptions);

      // Set timer - 20 seconds per question
      const totalTime = count * 20;
      setTotalDuration(totalTime);
      setTimeLeft(totalTime);

      // Save initial state
      const initialState: QuizState = {
        selectedAnswers: {},
        isSubmitted: false,
        showReview: false,
        timeLeft: totalTime,
        isTimeUp: false,
        quizStartTime: Date.now(),
        totalDuration: totalTime,
        shuffledQuestions: questionsWithShuffledOptions,
        isAllTopics: isAllTopicsMode,
        quizTitle: title,
      };
      StorageManager.saveQuizState(storageKey, initialState);
    };

    loadQuestions();
  }, [params, searchParams]);

  // Clean up when component unmounts if quiz is not completed
  useEffect(() => {
    return () => {
      // Clean data only if quiz wasn't submitted and not in review mode
      if (!isSubmitted && !showReview && Object.keys(selectedAnswers).length > 0 && quizId) {
        StorageManager.clearQuizState(quizId);
      }
    };
  }, [isSubmitted, selectedAnswers, showReview, quizId]);

  // Save state on changes - with current time saving
  useEffect(() => {
    if (!isLoading && quizId && !isSubmitted) {
      const savedState = StorageManager.loadQuizState(quizId);
      const quizStartTime = savedState?.quizStartTime || Date.now();

      const currentState: QuizState = {
        selectedAnswers,
        isSubmitted,
        showReview,
        timeLeft, // Save current time as is
        isTimeUp,
        quizStartTime,
        totalDuration,
        shuffledQuestions: questions,
        isAllTopics,
        quizTitle,
      };

      StorageManager.saveQuizState(quizId, currentState);
    }
  }, [
    selectedAnswers,
    isSubmitted,
    showReview,
    timeLeft,
    isTimeUp,
    isLoading,
    quizId,
    questions,
    isAllTopics,
    quizTitle,
    totalDuration,
  ]);

  // Handle time up event
  const handleTimeUp = () => {
    setIsTimeUp(true);
    handleSubmit(true);
  };

  // Handle quiz submission
  const handleSubmit = async (autoSubmit = false) => {
    if (!autoSubmit) {
      const result = await Swal.fire({
        title: "Submit Quiz?",
        text: "Are you sure you want to submit your answers? You won't be able to change them after submission.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3b82f6",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Yes, Submit",
        cancelButtonText: "Cancel",
        background: document.documentElement.classList.contains("dark") ? "#1f2937" : "#ffffff",
        color: document.documentElement.classList.contains("dark") ? "#f8fafc" : "#0f172a",
      });

      if (!result.isConfirmed) return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      scrollToTop();
    }, 200);
  };

  // Handle answer selection
  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerId }));
  };

  // Handle review mode
  const handleReview = () => {
    setShowReview(true);
    setTimeout(() => {
      scrollToTop();
    }, 200);
  };

  // Handle end review
  const handleEndReview = async () => {
    const result = await Swal.fire({
      title: "Quiz Review Complete!",
      text: "Great job completing the quiz! Keep practicing to improve your skills.",
      icon: "success",
      confirmButtonColor: "#10b981",
      confirmButtonText: "Continue",
      background: document.documentElement.classList.contains("dark") ? "#1f2937" : "#ffffff",
      color: document.documentElement.classList.contains("dark") ? "#f8fafc" : "#0f172a",
    });

    if (result.isConfirmed) {
      StorageManager.clearQuizState(quizId);
      router.push(`/quizzes`);
    }
  };

  // Handle skip review
  const handleSkipReview = async () => {
    const result = await Swal.fire({
      title: "Skip Review?",
      text: "Are you sure you want to skip reviewing your answers? You can still see your score.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#5271FF",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Skip Review",
      cancelButtonText: "Cancel",
      background: document.documentElement.classList.contains("dark") ? "#1f2937" : "#ffffff",
      color: document.documentElement.classList.contains("dark") ? "#f8fafc" : "#0f172a",
    });

    if (result.isConfirmed) {
      StorageManager.clearQuizState(quizId);
      
      await Swal.fire({
        title: "Quiz Completed!",
        text: "Thank you for taking the quiz. Keep practicing to improve your skills!",
        icon: "success",
        confirmButtonColor: "#10b981",
        confirmButtonText: "Continue",
        background: document.documentElement.classList.contains("dark") ? "#1f2937" : "#ffffff",
        color: document.documentElement.classList.contains("dark") ? "#f8fafc" : "#0f172a",
      });

      router.push(`/quizzes`);
    }
  };

  // Loading screen
  if (isLoading) {
    return <QuizLoading />;
  }

  // Calculate current score and stats
  const score = calculateScore(questions, selectedAnswers);
  const topicStats = getTopicStats(questions, isAllTopics);

  return (
    <>
      {/* DevTools Detection Overlay */}
      <DevToolsOverlay isVisible={devToolsOpen && !isSubmitted} />
      
      <div
        className="min-h-screen bg-background transition-colors duration-300 py-4 sm:py-8 lg:py-16"
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
          WebkitTapHighlightColor: "transparent",
        } as React.CSSProperties}
      >
        {/* Fixed Timer */}
        {!isSubmitted && timeLeft > 0 && (
          <div className="fixed top-20 right-2 sm:top-25 sm:right-4 md:top-25 md:right-8 lg:top-25 lg:right-14 z-50">
            <Timer
              timeLeft={timeLeft}
              totalDuration={totalDuration}
              onTimeUp={handleTimeUp}
              onTimeUpdate={handleTimeUpdate}
            />
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <QuizHeader
            quizTitle={quizTitle}
            questionCount={questions.length}
            totalDuration={questions.length * 20}
            isAllTopics={isAllTopics}
            topicStats={topicStats}
          />

          {!isSubmitted ? (
            <div className="space-y-4 sm:space-y-6">
              <QuizInstructions isAllTopics={isAllTopics} isTimeUp={isTimeUp} />

              <QuizQuestionsList
                questions={questions}
                selectedAnswers={selectedAnswers}
                onAnswerSelect={handleAnswerSelect}
                isSubmitted={isSubmitted}
                isAllTopics={isAllTopics}
              />

              <div className="flex justify-center pt-4 sm:pt-6">
                <button
                  onClick={() => handleSubmit()}
                  className="bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 cursor-pointer rounded-lg hover:bg-primary/90 font-semibold shadow-lg transition-all duration-200 hover:shadow-xl text-sm sm:text-base w-full sm:w-auto max-w-xs"
                  disabled={questions.length === 0}
                >
                  Submit Answers
                </button>
              </div>
            </div>
          ) : !showReview ? (
            <QuizResults
              score={score}
              totalQuestions={questions.length}
              answeredCount={Object.keys(selectedAnswers).length}
              isAllTopics={isAllTopics}
              isTimeUp={isTimeUp}
              topicStats={topicStats}
              onReview={handleReview}
              onSkipReview={handleSkipReview}
            />
          ) : (
            <QuizReview
              questions={questions}
              selectedAnswers={selectedAnswers}
              score={score}
              isAllTopics={isAllTopics}
              topicStats={topicStats}
              onEndReview={handleEndReview}
            />
          )}
        </div>
      </div>
    </>
  );
}