// src/App.js
import React, { useState } from "react";

import AppNavbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <AppNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
      <p>{activeTab}</p>
      <Footer />
    </div>
  );
}

export default App;
