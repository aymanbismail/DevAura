"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuizFormProps {
  language: {
    slug: string;
    topics: {
      id: string;
      slug: string;
      name: string;
      questions: {
        id: string;
        question: string;
        options: { id: string; text: string }[];
        correctAnswerId: string;
        explanation?: string;
      }[];
    }[];
  };
}

const QuizForm: React.FC<QuizFormProps> = ({ language }) => {
  const [selectedTopicSlug, setSelectedTopicSlug] = useState<string>("");
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(1);

  // حساب إجمالي الأسئلة في جميع المواضيع
  const totalQuestionsAllTopics = language.topics.reduce(
    (sum, topic) => sum + topic.questions.length, 
    0
  );

  const selectedTopic = selectedTopicSlug === "all" 
    ? null 
    : language.topics.find((topic) => topic.slug === selectedTopicSlug);

  // دالة لإنشاء خيارات عدد الأسئلة
  const getQuestionOptions = (totalQuestions: number, isAllTopics: boolean = false) => {
    if (isAllTopics) {
      // في حالة ALL Topics، استخدم نظام العشرات
      const options = [];
      
      // إضافة الخيارات بنظام العشرات
      for (let i = 10; i <= totalQuestions; i += 10) {
        options.push({
          value: i,
          label: `${i} Questions`
        });
      }
      
      // إضافة العدد الإجمالي إذا لم يكن مضاعف للعشرة
      if (totalQuestions % 10 !== 0) {
        options.push({
          value: totalQuestions,
          label: `${totalQuestions} Questions (All)`
        });
      }
      
      // إضافة خيار 5 في البداية إذا كان المجموع أكبر من 5
      if (totalQuestions >= 5) {
        options.unshift({
          value: 5,
          label: "5 Questions"
        });
      }
      
      return options;
    } else {
      // النظام الأصلي للمواضيع المفردة
      if (totalQuestions <= 10) {
        return Array.from({ length: totalQuestions }, (_, i) => ({
          value: i + 1,
          label: `${i + 1} ${i === 0 ? "Question" : "Questions"}`
        }));
      } else {
        const options = [];
        
        for (let i = 5; i <= totalQuestions; i += 5) {
          options.push({
            value: i,
            label: `${i} Questions`
          });
        }
        
        if (totalQuestions % 5 !== 0) {
          options.push({
            value: totalQuestions,
            label: `${totalQuestions} Questions (All)`
          });
        }
        
        return options;
      }
    }
  };

  const handleStartQuiz = () => {
    if (!selectedTopicSlug) return;
    
    if (selectedTopicSlug === "all") {
      // في حالة ALL، إرسال معرف خاص للإشارة إلى جميع المواضيع
      window.location.href = `/quizzes/${language.slug}/all?questionsCount=${numberOfQuestions}`;
    } else {
      window.location.href = `/quizzes/${language.slug}/${selectedTopicSlug}?questionsCount=${numberOfQuestions}`;
    }
  };

  // حساب العدد الإجمالي للأسئلة المتاحة
  const getCurrentTotalQuestions = () => {
    if (selectedTopicSlug === "all") {
      return totalQuestionsAllTopics;
    } else if (selectedTopic) {
      return selectedTopic.questions.length;
    }
    return 0;
  };

  const isAllTopics = selectedTopicSlug === "all";

  return (
    <div className="mb-16 max-w-md mx-auto p-4 border rounded-xl bg-card shadow-sm">
      <div className="flex flex-col space-y-6">
        {/* اختيار الموضوع */}
        <div>
          <label className="block mb-2 text-sm font-medium text-muted-foreground">
            Select Topic
          </label>
          <Select
            value={selectedTopicSlug}
            onValueChange={(value) => {
              setSelectedTopicSlug(value);
              
              // إعادة تعيين عدد الأسئلة حسب النظام الجديد
              if (value === "all") {
                const options = getQuestionOptions(totalQuestionsAllTopics, true);
                setNumberOfQuestions(options[0].value);
              } else {
                const topic = language.topics.find(t => t.slug === value);
                if (topic) {
                  const options = getQuestionOptions(topic.questions.length, false);
                  setNumberOfQuestions(options[0].value);
                }
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a topic" />
            </SelectTrigger>
            <SelectContent>
              {/* خيار ALL Topics */}
              <SelectItem value="all">
                🎯 All Topics 
              </SelectItem>
              
              {/* المواضيع المفردة */}
              {language.topics.map((topic) => (
                <SelectItem key={topic.id} value={topic.slug}>
                  {topic.name} 
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* عدد الأسئلة */}
        {selectedTopicSlug && (
          <div>
            <label className="block mb-2 text-sm font-medium text-muted-foreground">
              Number of Questions 
              {isAllTopics 
                ? ` (Total: ${totalQuestionsAllTopics} from all topics)` 
                : ` (Total: ${getCurrentTotalQuestions()})`
              }
            </label>
            <Select
              value={numberOfQuestions.toString()}
              onValueChange={(value) => setNumberOfQuestions(Number(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose number" />
              </SelectTrigger>
              <SelectContent>
                {getQuestionOptions(getCurrentTotalQuestions(), isAllTopics).map((option) => (
                  <SelectItem key={option.value} value={option.value.toString()}>
                    {option.label}
                    {isAllTopics && " (Random from all topics)"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <button
          className="bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] text-white p-3 cursor-pointer rounded-lg disabled:opacity-50"
          onClick={handleStartQuiz}
          disabled={!selectedTopicSlug}
        >
          {isAllTopics ? "Start Mixed Quiz" : "Start Quiz"}
        </button>
      </div>
    </div>
  );
};

export default QuizForm;