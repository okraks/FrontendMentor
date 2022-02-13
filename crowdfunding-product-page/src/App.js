import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Stats from "./components/Stats";
import About from "./components/About";

function App() {
  return (
    <div className="w-full bg-gray-100 pb-10">
      <div className="h-80 bg-hero-desktop">
        <Navbar />
      </div>
      <div className="-mt-20 max-w-3xl mx-auto">
        <Project />
        <Stats />
        <About />
      </div>
    </div>
  );
}

export default App;
