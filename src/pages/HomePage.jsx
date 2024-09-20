import React from "react";
import Hero from "../components/HeroSection/Hero";
import TableSection from "../components/TableSection/TableSection";

export default function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      <TableSection />
    </div>
  );
}
