"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-background text-foreground transition-bg overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Aurora Effect - مجموعة الخطوط المائلة الأولى */}
        <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-40rem] right-[-30rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
          <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-[#3AB0FF] to-[#5271FF] dark:from-[#5271FF] dark:to-[#3AB0FF] animate-[aurora-float_8s_ease-in-out_infinite]"></div>
          <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-[#3AB0FF] to-[#5271FF] dark:from-[#5271FF] dark:to-[#3AB0FF] animate-[aurora-float_8s_ease-in-out_infinite_0.5s]"></div>
          <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-[#3AB0FF] to-[#5271FF] dark:from-[#5271FF] dark:to-[#3AB0FF] animate-[aurora-float_8s_ease-in-out_infinite_1s]"></div>
        </div>

        {/* Aurora Effect - مجموعة الخطوط المائلة الثانية */}
        <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-50rem] right-[-50rem] z-[0] blur-[4rem] skew-[-40deg] opacity-40">
          <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-[#5271FF] to-[#3AB0FF] dark:from-[#3AB0FF] dark:to-[#5271FF] animate-[aurora-float_10s_ease-in-out_infinite]"></div>
          <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-[#5271FF] to-[#3AB0FF] dark:from-[#3AB0FF] dark:to-[#5271FF] animate-[aurora-float_10s_ease-in-out_infinite_0.7s]"></div>
          <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-[#5271FF] to-[#3AB0FF] dark:from-[#3AB0FF] dark:to-[#5271FF] animate-[aurora-float_10s_ease-in-out_infinite_1.4s]"></div>
        </div>

        {/* Aurora Effect - مجموعة الخطوط المائلة الثالثة */}
        <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-60rem] right-[-60rem] z-[0] blur-[4rem] skew-[-40deg] opacity-30">
          <div className="w-[10rem] h-[30rem] bg-gradient-to-b from-[#3AB0FF] via-[#5271FF] to-[#3AB0FF] dark:from-[#5271FF] dark:via-[#3AB0FF] dark:to-[#5271FF] animate-[aurora-float_12s_ease-in-out_infinite]"></div>
          <div className="w-[10rem] h-[30rem] bg-gradient-to-b from-[#3AB0FF] via-[#5271FF] to-[#3AB0FF] dark:from-[#5271FF] dark:via-[#3AB0FF] dark:to-[#5271FF] animate-[aurora-float_12s_ease-in-out_infinite_0.8s]"></div>
          <div className="w-[10rem] h-[30rem] bg-gradient-to-b from-[#3AB0FF] via-[#5271FF] to-[#3AB0FF] dark:from-[#5271FF] dark:via-[#3AB0FF] dark:to-[#5271FF] animate-[aurora-float_12s_ease-in-out_infinite_1.6s]"></div>
        </div>

        {/* Aurora Effect - مجموعة إضافية في الجهة اليسرى */}
        <div className="flex gap-[8rem] rotate-[15deg] absolute top-[-35rem] left-[-40rem] z-[0] blur-[3rem] skew-[30deg] opacity-25">
          <div className="w-[8rem] h-[25rem] bg-gradient-to-t from-[#5271FF] to-[#3AB0FF] dark:from-[#3AB0FF] dark:to-[#5271FF] animate-[aurora-float-reverse_9s_ease-in-out_infinite]"></div>
          <div className="w-[8rem] h-[25rem] bg-gradient-to-t from-[#5271FF] to-[#3AB0FF] dark:from-[#3AB0FF] dark:to-[#5271FF] animate-[aurora-float-reverse_9s_ease-in-out_infinite_0.6s]"></div>
          <div className="w-[8rem] h-[25rem] bg-gradient-to-t from-[#5271FF] to-[#3AB0FF] dark:from-[#3AB0FF] dark:to-[#5271FF] animate-[aurora-float-reverse_9s_ease-in-out_infinite_1.2s]"></div>
        </div>

        {/* Aurora Effect - مجموعة في الأسفل */}
        <div className="flex gap-[12rem] rotate-[-10deg] absolute bottom-[-45rem] left-[-20rem] z-[0] blur-[5rem] skew-[-25deg] opacity-20">
          <div className="w-[12rem] h-[35rem] bg-gradient-to-b from-[#3AB0FF] to-transparent dark:from-[#5271FF] dark:to-transparent animate-[aurora-float_14s_ease-in-out_infinite]"></div>
          <div className="w-[12rem] h-[35rem] bg-gradient-to-b from-[#5271FF] to-transparent dark:from-[#3AB0FF] dark:to-transparent animate-[aurora-float_14s_ease-in-out_infinite_1s]"></div>
        </div>

        {/* Radial Gradient Overlay */}
        {showRadialGradient && (
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background opacity-60 z-[1]"></div>
        )}

        {/* Content */}
        <div className="relative z-[2]">
          {children}
        </div>
      </div>

      {/* تعريف الأنيميشن */}
      <style jsx>{`
        @keyframes aurora-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-10px) translateX(-5px) scale(0.95);
            opacity: 0.7;
          }
          75% {
            transform: translateY(15px) translateX(8px) scale(1.02);
            opacity: 0.4;
          }
        }

        @keyframes aurora-float-reverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
          }
          25% {
            transform: translateY(25px) translateX(-15px) scale(0.9);
            opacity: 0.4;
          }
          50% {
            transform: translateY(10px) translateX(10px) scale(1.1);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-18px) translateX(-8px) scale(0.95);
            opacity: 0.3;
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }
      `}</style>
    </main>
  );
};