"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  Calendar,
  CreditCard,
  MapPin,
  Shield,
  Trash2,
  Truck,
  Menu,
} from "lucide-react";
import ProgressBar from "./ProgressBar";
import NavComponent from "./NavComponent";
import ButtonComponent from "./ButtonComponent";

interface HeaderProps {
  currentStep: number;
}

interface StepData {
  icon: React.ReactNode;
  label: string;
}

const steps: StepData[] = [
  { icon: <MapPin />, label: "Postcode" },
  { icon: <Trash2 />, label: "Waste Type" },
  { icon: <Truck />, label: "Select Skip" },
  { icon: <Shield />, label: "Permit Check" },
  { icon: <Calendar />, label: "Choose Date" },
  { icon: <CreditCard />, label: "Payment" },
];

function Header({ currentStep }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="w-full py-4 px-6 shadow-sm sticky top-0 bg-white z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <NavComponent steps={steps} currentStep={currentStep} type='header'/>
            </div>
            <ButtonComponent onClickFunction={() => setIsSidebarOpen(true)} style='menu'>
              <Menu className="w-6 h-6 text-blue-700" />
            </ButtonComponent>
          </div>
          <ProgressBar currentStep={currentStep} steps={steps.length} />
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentStep={currentStep}
        steps={steps}
      />
    </>
  );
}

export default Header;
