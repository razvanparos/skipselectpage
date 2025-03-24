import React from "react";
import Step from "./Step";

interface Step {
  icon: React.ReactNode;
  label: string;
}

interface NavComponentProps {
  steps: Step[];
  currentStep: number;
  type: 'header' | 'sidebar';
}

function NavComponent({ steps, currentStep, type }: NavComponentProps) {
  return (
    <nav className={`${type==='header'?'hidden lg:block flex-1':'flex flex-col'}`} aria-label="Progress">
      <ul className={`flex items-center ${type==='sidebar'?'flex-col mt-12 gap-y-4':''}`}>
        {steps.map((step, index) => (
          <li key={step.label} className="flex-1">
            <Step currentStep={currentStep} step={index + 1} text={step.label}>
              {step.icon}
            </Step>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavComponent;
