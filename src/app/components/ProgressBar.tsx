import * as React from "react";
function ProgressBar({
  currentStep,
  steps,
}: {
  currentStep: number;
  steps: number;
}) {
  return (
    <div className="relative mt-4 w-full">
      <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full rounded-full">
        <div
          className="absolute top-0 left-0 h-1 bg-blue-700 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / steps) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
