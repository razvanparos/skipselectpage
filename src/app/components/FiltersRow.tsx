import React from "react";

interface FiltersRowProps {
  labelText: string;
  children: React.ReactNode;
  filters?: {
    minSize: number;
    maxSize: number;
    roadAllowed: boolean | null;
    heavyWaste: boolean | null;
    minPrice: number;
    maxPrice: number;
  };
}

function FiltersRow({labelText, children}: FiltersRowProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {labelText}
      </label>
      <div className="flex gap-4">
       {children}
      </div>
    </div>
  );
}

export default FiltersRow;
