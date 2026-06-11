// components/ui/container.tsx
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`container px-4 mx-auto sm:px-8 md:px-16 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}
