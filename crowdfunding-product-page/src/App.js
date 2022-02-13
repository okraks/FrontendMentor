import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="h-96 bg-hero-desktop">
        <Navbar />
      </div>
      <div className="-mt-20 max-w-3xl mx-auto">
        <Project />
      </div>
    </div>
  );
}

export default App;
