import React from "react";
import { X } from "lucide-react";
import NavComponent from "./NavComponent";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: number;
  steps: Array<{
    icon: React.ReactNode;
    label: string;
  }>;
}

function Sidebar({ isOpen, onClose, currentStep, steps }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 border-l bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-blue-700" />
          </button>

          <NavComponent steps={steps} currentStep={currentStep} type='sidebar'/>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
