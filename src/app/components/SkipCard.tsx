import React from "react";
import { Truck, Scale, Calendar, Shield } from "lucide-react";

interface SkipCardProps {
  id: number;
  size: number;
  price_before_vat: number;
  hire_period_days: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  vat: number;
  isSelected: boolean;
  selectedSkipMode:boolean;
  onSelect: (id: number) => void;
}

function SkipCard({
  id,
  size,
  price_before_vat,
  hire_period_days,
  allowed_on_road,
  allows_heavy_waste,
  vat,
  isSelected,
  selectedSkipMode,
  onSelect,
}: SkipCardProps) {
  const totalPrice = price_before_vat * (1 + vat / 100);

  return (
    <div
      className={`${selectedSkipMode?'':''}
        bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer
        ${
          isSelected
            ? "border-2 border-blue-700 transform scale-[1.02]":"border-2 border-transparent"
        }
      `}
      onClick={() => onSelect(id)}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{size} Yard Skip</h3>
        <p className="text-2xl font-bold text-blue-600">
          £{totalPrice.toFixed(2)}
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{hire_period_days} days hire period</span>
        </div>

        <div className="flex items-center text-gray-600">
          <Truck className="w-5 h-5 mr-2" />
          <span>
            {allowed_on_road ? "Allowed on road" : "Not allowed on road"}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <Scale className="w-5 h-5 mr-2" />
          <span>
            {allows_heavy_waste
              ? "Suitable for heavy waste"
              : "Not suitable for heavy waste"}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <Shield className="w-5 h-5 mr-2" />
          <span>VAT: {vat}%</span>
        </div>
      </div>

      <button
        className={`
          mt-6 w-full py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer
          ${
            isSelected
              ? "bg-blue-700 text-white cursor-default"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }
        `}
        onClick={(e) => {
          e.stopPropagation();
          if(isSelected){
            console.log('next')
          }else onSelect(id)
        }}
      >
        {isSelected ? `Continue` : "Select Skip"}
      </button>
    </div>
  );
}

export default SkipCard;
