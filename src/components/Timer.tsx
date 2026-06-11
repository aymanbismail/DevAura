// components/Timer.tsx
"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface TimerProps {
  timeLeft: number; // Current time left in seconds
  totalDuration: number; // Total original duration for progress calculation
  onTimeUp: () => void;
  onTimeUpdate: (newTimeLeft: number) => void; // Callback to update parent state
}

export default function Timer({ timeLeft, totalDuration, onTimeUp, onTimeUpdate }: TimerProps) {
  const [currentTime, setCurrentTime] = useState(timeLeft);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onTimeUpRef = useRef(onTimeUp);
  const onTimeUpdateRef = useRef(onTimeUpdate);
  const lastUpdateRef = useRef<number>(timeLeft);

  // Update references when props change
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
    onTimeUpdateRef.current = onTimeUpdate;
  }, [onTimeUp, onTimeUpdate]);

  // Sync current time with prop when it changes (e.g., after page refresh)
  useEffect(() => {
    if (timeLeft !== lastUpdateRef.current) {
      setCurrentTime(timeLeft);
      lastUpdateRef.current = timeLeft;
    }
  }, [timeLeft]);

  // Use callback to prevent unnecessary re-renders
  const handleTimeUpdate = useCallback((newTime: number) => {
    // Use setTimeout to defer the state update to avoid render conflicts
    setTimeout(() => {
      onTimeUpdateRef.current(newTime);
    }, 0);
  }, []);

  const handleTimeUp = useCallback(() => {
    // Use setTimeout to defer the callback to avoid render conflicts
    setTimeout(() => {
      onTimeUpRef.current();
    }, 0);
  }, []);

  // Start timer
  useEffect(() => {
    if (currentTime <= 0) return;

    // Stop previous timer if exists
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentTime(prev => {
        const newTime = prev - 1;
        
        if (newTime <= 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          
          // Defer callbacks to next tick to avoid render conflicts
          handleTimeUp();
          handleTimeUpdate(0);
          return 0;
        }
        
        // Update parent component's timeLeft state (deferred)
        if (newTime !== lastUpdateRef.current) {
          lastUpdateRef.current = newTime;
          handleTimeUpdate(newTime);
        }
        
        return newTime;
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [currentTime > 0, handleTimeUpdate, handleTimeUp]); // Include callbacks in dependencies

  // Don't show timer if no time left
  if (currentTime <= 0) {
    return null;
  }

  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  
  // Calculate based on original total duration, not current timeLeft prop
  const isLastQuarter = currentTime <= (totalDuration * 0.25);
  const isLowTime = currentTime <= 60; // Last minute
  
  // Calculate progress percentage based on original total duration
  const progressPercentage = (currentTime / totalDuration) * 100;

  // Colors for the circular progress
  const progressColor = isLastQuarter ? '#ef4444' : '#3b82f6'; // red-500 : blue-500
  
  // Calculate angle with minimum threshold to prevent visual glitches
  const progressAngle = Math.max(progressPercentage * 3.6, 0.1); // Minimum 0.1 degree
  
  // Create the conic gradient for the circular border progress
  const conicGradient = progressPercentage > 0 
    ? `conic-gradient(from -90deg, ${progressColor} 0deg, ${progressColor} ${progressAngle}deg, transparent ${progressAngle}deg, transparent 360deg)`
    : `conic-gradient(from -90deg, transparent 0deg, transparent 360deg)`;

  return (
    <div 
      className={`
        relative p-1 rounded-lg transition-all duration-300 
        ${isLowTime ? 'animate-pulse' : ''}
      `}
      style={{
        background: conicGradient,
        transition: 'background 1s ease-linear'
      }}
    >
      {/* Inner container to create border effect */}
      <div className={`
        bg-card p-2 sm:p-4 rounded-md shadow-lg transition-all duration-300
      `}>
        <div className="text-center">
          <div className={`
            font-mono text-sm md:text-md xl:text-lg font-bold transition-colors duration-300
            ${isLastQuarter ? 'text-red-600 dark:text-red-400' : 'text-card-foreground'}
          `}>
            {minutes.toString().padStart(2,'0')}:
            {seconds.toString().padStart(2,'0')}
          </div>
        </div>
      </div>
    </div>
  );
}