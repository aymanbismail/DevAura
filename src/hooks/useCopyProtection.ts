// hooks/useCopyProtection.ts
import { useEffect, useState, useCallback } from "react";

// تعريف الأنواع المطلوبة
interface CopyProtectionReturn {
  devToolsOpen: boolean;
}

interface CopyProtectionConfig {
  isSubmitted: boolean;
  selectedAnswers: Record<string, string>;
}

// تعريف نوع للـ console methods
type ConsoleMethods = keyof Pick<Console, 
  'log' | 'debug' | 'info' | 'warn' | 'error' | 'trace' | 
  'dir' | 'dirxml' | 'group' | 'groupEnd' | 'time' | 
  'timeEnd' | 'profile' | 'profileEnd' | 'table' | 
  'assert' | 'count' | 'countReset' | 'clear'
>;

// تعريف نوع مخصص للـ console مع خصائص إضافية
interface ExtendedConsole extends Console {
  _commandLineAPI?: unknown;
}

export const useCopyProtection = (
  isSubmitted: boolean,
  selectedAnswers: Record<string, string>
): CopyProtectionReturn => {
  const [devToolsOpen, setDevToolsOpen] = useState<boolean>(false);

  // تعطيل تحديد النص
  const disableTextSelection = useCallback((): HTMLStyleElement => {
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-tap-highlight-color: transparent !important;
      }
      
      /* منع تحديد النص بواسطة إضافات المتصفح */
      *::selection {
        background: transparent !important;
      }
      
      *::-moz-selection {
        background: transparent !important;
      }
      
      /* تعطيل السحب والإفلات */
      * {
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
      }
    `;
    document.head.appendChild(style);
    return style;
  }, []);

  // تعطيل القائمة السياقية
  const disableContextMenu = useCallback((e: MouseEvent): boolean => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, []);

  // تعطيل اختصارات الكيبورد
  const disableKeyboardShortcuts = useCallback((e: KeyboardEvent): boolean | void => {
    // تعطيل تركيبات Ctrl
    if (e.ctrlKey || e.metaKey) {
      // Copy, Cut, Paste, Select All, Save, Print
      if (['a', 'c', 'v', 'x', 's', 'p'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      // اختصارات أدوات المطور
      if (e.shiftKey) {
        if (['i', 'j', 'c'].includes(e.key.toLowerCase())) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
      
      // عرض المصدر
      if (e.key.toLowerCase() === 'u') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
    
    // مفاتيح الوظائف
    if (['F12', 'F1', 'F3', 'F5'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // تركيبات Alt
    if (e.altKey && e.key === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, []);

  // منع أحداث الماوس المتعددة
  const preventMouseEvents = useCallback((e: MouseEvent): boolean | void => {
    if (e.detail > 1) { // النقر المتعدد
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, []);

  // منع أحداث اللمس المتعددة
  const preventTouchEvents = useCallback((e: TouchEvent): boolean | void => {
    if (e.touches.length > 1) { // اللمس المتعدد
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, []);

  // منع أحداث السحب
  const preventDragEvents = useCallback((e: DragEvent): boolean => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, []);

  // كشف أدوات المطور
  const detectDevTools = useCallback((): void => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    setDevToolsOpen(widthThreshold || heightThreshold);
  }, []);

  // تعطيل الكونسول
  const disableConsole = useCallback((): void => {
    const noop = (): void => {};
    const consoleMethods: ConsoleMethods[] = [
      'log', 'debug', 'info', 'warn', 'error', 'trace', 
      'dir', 'dirxml', 'group', 'groupEnd', 'time', 
      'timeEnd', 'profile', 'profileEnd', 'table', 
      'assert', 'count', 'countReset', 'clear'
    ];
    
    consoleMethods.forEach(method => {
      if (method in console) {
        // استخدام type assertion آمن
        (console[method] as () => void) = noop;
      }
    });

    // إضافة خاصية للكشف عن استخدام الكونسول
    try {
      Object.defineProperty(console as ExtendedConsole, '_commandLineAPI', {
        get: function() {
          throw new Error('تم اكتشاف استخدام الكونسول');
        }
      });
    } catch (error) {
      // تجاهل الخطأ إذا لم تنجح العملية
      console.warn('فشل في تعيين خاصية _commandLineAPI');
    }
  }, []);

  // منع تحديد النص عبر JavaScript
  const blockTextSelection = useCallback((): void => {
    if (window.getSelection) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
      }
    }
  }, []);

  // مسح الحافظة باستمرار
  const clearClipboard = useCallback(async (): Promise<void> => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText('');
      } catch (error) {
        // تجاهل الأخطاء إذا لم تكن واجهة الحافظة متاحة
        console.warn('فشل في مسح الحافظة:', error);
      }
    }
  }, []);

  // إعادة تعريف وظائف النسخ
  const overrideCopyFunctions = useCallback((): void => {
    // إعادة تعريف execCommand
    const originalExecCommand = document.execCommand.bind(document);
    document.execCommand = function(
      command: string, 
      showUI?: boolean, 
      value?: string
    ): boolean {
      if (['copy', 'cut', 'selectAll'].includes(command)) {
        return false;
      }
      return originalExecCommand(command, showUI, value);
    };

    // إعادة تعريف واجهة الحافظة
    if (navigator.clipboard) {
      navigator.clipboard.writeText = function(): Promise<void> {
        return Promise.reject(new Error('النسخ معطل'));
      };
    }
  }, []);

  // منع الطباعة
  const preventPrint = useCallback((e: Event): boolean => {
    e.preventDefault();
    return false;
  }, []);

  // منع بداية التحديد
  const preventSelectStart = useCallback((e: Event): void => {
    e.preventDefault();
  }, []);

  // منع اختصارات الإضافات
  const blockExtensionShortcuts = useCallback((e: KeyboardEvent): boolean | void => {
    // منع اختصارات الإضافات
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && 
        ['e', 'i', 'j'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  }, []);

  useEffect(() => {
    // تطبيق كل الحمايات
    const styleElement = disableTextSelection();
    disableConsole();
    overrideCopyFunctions();

    // إضافة مستمعي الأحداث
    document.addEventListener('contextmenu', disableContextMenu, { 
      passive: false, 
      capture: true 
    });
    document.addEventListener('keydown', disableKeyboardShortcuts, { 
      passive: false, 
      capture: true 
    });
    document.addEventListener('mousedown', preventMouseEvents, { 
      passive: false, 
      capture: true 
    });
    document.addEventListener('selectstart', preventSelectStart, { 
      passive: false, 
      capture: true 
    });
    document.addEventListener('dragstart', preventDragEvents, { 
      passive: false, 
      capture: true 
    });
    document.addEventListener('drop', preventDragEvents, { 
      passive: false, 
      capture: true 
    });
    document.addEventListener('touchstart', preventTouchEvents, { 
      passive: false, 
      capture: true 
    });
    document.addEventListener('keydown', blockExtensionShortcuts, { 
      capture: true 
    });
    window.addEventListener('beforeprint', preventPrint);
    window.addEventListener('resize', detectDevTools);

    // مسح التحديد والحافظة بشكل دوري
    const selectionInterval = setInterval(() => {
      blockTextSelection();
      clearClipboard();
    }, 100);

    // كشف أدوات المطور
    const devToolsInterval = setInterval(detectDevTools, 500);

    // دالة التنظيف
    return () => {
      // إزالة عنصر الأنماط
      if (styleElement?.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }

      // مسح المؤقتات
      clearInterval(selectionInterval);
      clearInterval(devToolsInterval);

      // إزالة مستمعي الأحداث
      document.removeEventListener('contextmenu', disableContextMenu, true);
      document.removeEventListener('keydown', disableKeyboardShortcuts, true);
      document.removeEventListener('mousedown', preventMouseEvents, true);
      document.removeEventListener('selectstart', preventSelectStart, true);
      document.removeEventListener('dragstart', preventDragEvents, true);
      document.removeEventListener('drop', preventDragEvents, true);
      document.removeEventListener('touchstart', preventTouchEvents, true);
      document.removeEventListener('keydown', blockExtensionShortcuts, true);
      window.removeEventListener('beforeprint', preventPrint);
      window.removeEventListener('resize', detectDevTools);

      // إعادة تعيين أنماط الجسم  
      if (document.body) {
        document.body.style.userSelect = '';
        document.body.style.removeProperty('-webkit-user-select');
        document.body.style.removeProperty('-moz-user-select');
        document.body.style.removeProperty('-ms-user-select');
        document.body.style.removeProperty('-webkit-touch-callout');
      }
    };
  }, [
    isSubmitted, 
    selectedAnswers,
    disableTextSelection,
    disableConsole,
    overrideCopyFunctions,
    disableContextMenu,
    
    disableKeyboardShortcuts,
    preventMouseEvents,
    preventSelectStart,
    preventDragEvents,
    preventTouchEvents,
    blockExtensionShortcuts,
    preventPrint,
    detectDevTools,
    blockTextSelection,
    clearClipboard
  ]);

  return { devToolsOpen };
};