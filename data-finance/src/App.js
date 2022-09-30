import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Analytics />
     <Cards />
     <Newsletter />
    </div>
  );
}

export default App;
