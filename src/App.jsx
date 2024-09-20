import React from "react";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import DrawerComponent from "./components/Drawer/Drawer";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:id" element={<SinglePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <DrawerComponent />
      </main>
    </>
  );
}
