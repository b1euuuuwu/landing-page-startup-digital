import React from "react";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
// import Plans from "./components/Plans";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Analytics />
     {/*<Plans />*/}
    </div>
  );
}

export default App;
