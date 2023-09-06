import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Content.css"; // Import file CSS dengan animasi
import "./ContentAnimation.css"; // Import file CSS animasi
import Home from "./content/home";

function Content({ activeTab }) {
  return (
    <div className="content">
      <CSSTransition
        in={activeTab === "home"} // Aktifkan animasi jika activeTab adalah "home"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <Home />
      </CSSTransition>

      <CSSTransition
        in={activeTab === "contact"} // Aktifkan animasi jika activeTab adalah "contact"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <div>
          {/* Konten halaman "Contact" */}
          {/* Gantilah dengan konten yang sesuai */}
          <h1>Contact Us</h1>
          <h1>Contact Us</h1>
          <h1>Contact Us</h1>
          <h1>Contact Us</h1>
          <h1>Contact Us</h1>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Content;
