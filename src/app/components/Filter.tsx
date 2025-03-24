import React, { useState } from "react";
import { SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";
import ButtonComponent from "./ButtonComponent";
import FiltersRow from "./FiltersRow";
import InputComponent from "./InputComponent";

interface FilterProps {
  filters: {
    minSize: number;
    maxSize: number;
    roadAllowed: boolean | null;
    heavyWaste: boolean | null;
    minPrice: number;
    maxPrice: number;
  };
  selectedSkipMode:boolean;
  onFilterChange: (filters: FilterProps["filters"]) => void;
}

function Filter({ filters, onFilterChange, selectedSkipMode }: FilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (
    field: keyof FilterProps["filters"],
    value: number | boolean | null
  ) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };

  return (
    <div className={`bg-white rounded-lg shadow-md duration-200 ${selectedSkipMode?'hidden':''}`}>
      <ButtonComponent
        onClickFunction={() => setIsExpanded(!isExpanded)}
        style="expand"
      >
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filter Skips</h3>
        </div>
        <ChevronDown
          className={`${
            isExpanded ? "rotate-180" : ""
          } duration-200 w-5 h-5 text-gray-600`}
        />
      </ButtonComponent>

      <div
        className={`
           overflow-hidden transition-all duration-300 ease-in-out
          ${isExpanded ? "max-h-[800px] opacity-100 p-6 space-y-4" : "max-h-0 opacity-0 "}
        `}
      >
        <FiltersRow
          filters={filters}
          labelText="Skip Size (Yards)"
        >
          <InputComponent
            type="number"
            value={filters.minSize}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(`minSize`, Number(e.target.value))
            }
          />
          <InputComponent
            type="number"
            value={filters.maxSize}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(`maxSize`, Number(e.target.value))
            }
          />
        </FiltersRow>

        <FiltersRow
          filters={filters}
          labelText="Price Range (£)"
        >
          <InputComponent
            type="number"
            value={filters.minPrice}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(`minPrice`, Number(e.target.value))
            }
          />
          <InputComponent
            type="number"
            value={filters.maxPrice}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(`maxPrice`, Number(e.target.value))
            }
          />
        </FiltersRow>

        <FiltersRow labelText="Road Allowance">
          <div className="flex gap-x-4 w-full">
            <ButtonComponent
              onClickFunction={() => handleChange("roadAllowed", true)}
              text="Allowed"
              style={`${filters.roadAllowed ? "selected" : "unselected"}`}
            />
            <ButtonComponent
              onClickFunction={() => handleChange("roadAllowed", false)}
              text="Not Allowed"
              style={`${
                filters.roadAllowed === false ? "selected" : "unselected"
              }`}
            />
            <ButtonComponent
              onClickFunction={() => handleChange("roadAllowed", null)}
              text="Any"
              style={`${
                filters.roadAllowed === null ? "selected" : "unselected"
              }`}
            />
          </div>
        </FiltersRow>

        <FiltersRow labelText="Heavy Waste">
          <div className="flex gap-x-4 w-full">
            <ButtonComponent
              onClickFunction={() => handleChange("heavyWaste", true)}
              text="Suitable"
              style={`${filters.heavyWaste ? "selected" : "unselected"}`}
            />
            <ButtonComponent
              onClickFunction={() => handleChange("heavyWaste", false)}
              text="Not Suitable"
              style={`${
                filters.heavyWaste === false ? "selected" : "unselected"
              }`}
            />
            <ButtonComponent
              onClickFunction={() => handleChange("heavyWaste", null)}
              text="Any"
              style={`${
                filters.heavyWaste === null ? "selected" : "unselected"
              }`}
            />
          </div>
        </FiltersRow>
      </div>
    </div>
  );
}

export default Filter;
