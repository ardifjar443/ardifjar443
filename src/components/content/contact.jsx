// src/components/Footer.js
import React from "react";

function Contact({ activeTab, setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <h1>contact me</h1>
      <h1>contact me</h1>
      <h1>contact me</h1>
      <h1>contact me</h1>
      <h1>contact me</h1>
      <h1>contact me</h1>
      <h1>contact me</h1>
      <a
        className={`fs-3 modal-button ${
          activeTab === "home"
            ? "text-light rounded-2 p-2 border border-5 border-black"
            : ""
        }`}
        href="#"
        id="content"
        onClick={() => handleTabClick("percobaan")}
        style={activeTab == "" ? { backgroundColor: "#078080" } : {}}
      >
        Home
      </a>
    </>
  );
}

export default Contact;
