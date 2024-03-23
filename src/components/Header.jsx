import React from "react";
import logo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="" />
      <h1>ReactQuiz</h1>
    </header>
  );
}