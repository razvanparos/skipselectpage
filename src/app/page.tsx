import React from "react";
import Header from "./components/Header";
import SkipList from "./components/SkipList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header currentStep={3} />
      <SkipList />
    </main>
  );
}
