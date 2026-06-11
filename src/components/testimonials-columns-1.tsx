import Image from "next/image";
import React, { useEffect } from "react";

// 👇 تعريف نوع بيانات التوصية
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// 👇 تعريف نوع الخصائص المستقبلة
interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = ({
  className = "",
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      // placeholder logic (يمكنك إزالة الـ useEffect بالكامل إن لم تستخدمه)
    }, duration * 10);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>

      <div className={`overflow-hidden ${className}`}>
        <div
          className="flex flex-col gap-6 pb-6 transition-transform duration-100 ease-linear"
          style={{
            animation: `scroll ${duration}s linear infinite`,
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-muted"
            >
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                {testimonial.text}
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5 text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="leading-5 tracking-tight text-gray-800 dark:text-gray-100 opacity-80">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
