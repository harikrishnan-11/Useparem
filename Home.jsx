import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="hero-content">

        <h2>Hi, I'm Hari krishnan!</h2>

        <h1>
          Front-end <span>developer</span>
        </h1>

        <p>
          I build responsive and user-friendly websites.Clean design and performance matter to me.<br /><span>Code + Creativity = Great Web Experiences</span>
        </p>

        <div className="btns">
          <button className="btn1">Projects</button>
          <button className="btn2">Hire me</button>
        </div>

        <div className="logos">
          <img src="" alt="img1" />
          <img src="" alt="img2" />
          <img src="" alt="img3" />
        </div>

      </div>
    </div>
  );
}