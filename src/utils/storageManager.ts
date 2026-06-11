// utils/storageManager.ts
import { QuizState } from "@/types/quizInterfaceAndType";

export class StorageManager {
  // Save quiz state to sessionStorage
  static saveQuizState(storageKey: string, state: QuizState) {
    if (typeof window !== "undefined") {
      try {
        // إضافة timestamp للحفظ
        const stateWithTimestamp = {
          ...state,
          lastSavedAt: Date.now()
        };
        sessionStorage.setItem(storageKey, JSON.stringify(stateWithTimestamp));
      } catch (error) {
        console.error("Error saving quiz state:", error);
      }
    }
  }

  // Load quiz state from sessionStorage
  static loadQuizState(storageKey: string): QuizState | null {
    if (typeof window !== "undefined") {
      try {
        const savedState = sessionStorage.getItem(storageKey);
        if (savedState) {
          const parsedState = JSON.parse(savedState);
          return parsedState;
        }
      } catch (error) {
        console.error("Error loading quiz state:", error);
      }
    }
    return null;
  }

  // Clear quiz state from sessionStorage
  static clearQuizState(storageKey: string) {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.removeItem(storageKey);
      } catch (error) {
        console.error("Error clearing quiz state:", error);
      }
    }
  }

  // Check if saved state is valid (not expired or completed)
  static isValidSavedState(savedState: QuizState & { lastSavedAt?: number }): boolean {
    const currentTime = Date.now();
    const timeSinceStart = currentTime - savedState.quizStartTime;
    const maxSessionTime = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
    
    // التحقق من عدم انتهاء صلاحية الجلسة
    const isNotExpired = timeSinceStart <= maxSessionTime;
    
    // التحقق من عدم إرسال الكويز
    const isNotSubmitted = !savedState.isSubmitted;
    
    // التحقق من أن الوقت المتبقي أكبر من صفر
    const hasTimeLeft = (savedState.timeLeft || 0) > 0;
    
    // التحقق من أن آخر حفظ كان خلال فترة زمنية معقولة (اختياري)
    const lastSavedAt = savedState.lastSavedAt || savedState.quizStartTime;
    const timeSinceLastSave = currentTime - lastSavedAt;
    const maxIdleTime = 30 * 60 * 1000; // 30 minutes
    const isRecentlySaved = timeSinceLastSave <= maxIdleTime;

    return isNotExpired && isNotSubmitted && hasTimeLeft && isRecentlySaved;
  }

  // دالة جديدة للتحقق من حالة التايمر
  static validateTimerState(savedState: QuizState, totalDuration: number): number {
    const savedTimeLeft = savedState.timeLeft || 0;
    
    // التأكد من أن الوقت المحفوظ ضمن النطاق المسموح
    const validTimeLeft = Math.max(0, Math.min(savedTimeLeft, totalDuration));
    
    // إذا كان الوقت المحفوظ غير منطقي، احسب الوقت بناءً على وقت البداية
    if (validTimeLeft === 0 && savedState.quizStartTime) {
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - savedState.quizStartTime) / 1000);
      const calculatedTimeLeft = Math.max(0, totalDuration - elapsedTime);
      return Math.min(calculatedTimeLeft, totalDuration);
    }
    
    return validTimeLeft;
  }
}