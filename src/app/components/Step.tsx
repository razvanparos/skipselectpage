import React from "react";

interface StepProps {
  children: React.ReactNode;
  text: string;
  step: number;
  currentStep: number;
}

function Step({ children, text, step, currentStep }: StepProps) {
  const isActive = currentStep >= step;
  const isCompleted = currentStep > step;

  return (
    <button 
      className="flex flex-col items-center gap-1 w-full group"
      aria-current={isActive ? "step" : undefined}
      aria-label={`Step ${step}: ${text}`}
    >
      <div className={`
        p-2 rounded-full transition-colors duration-200
        ${isActive ? 'bg-blue-700 text-white' : 'border border-gray-300'}
        ${isCompleted ? 'bg-blue-700 text-white' : 'text-gray-400'}
      `}>
        {children}
      </div>
      <span className={` min-w-[100px]
        text-sm font-medium transition-colors duration-200
        ${isActive ? 'text-blue-700' : ''}
        ${isCompleted ? 'text-blue-700' : 'text-gray-500'}
      `}>
        {text}
      </span>
    </button>
  );
}

export default Step;
