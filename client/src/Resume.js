import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Jeff Nelson</h1>
        <p>
          7 Beechwood CT, Pittsburg CA 94565 | (415) 519-5201 | jkn3750@gmail.com
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle WA | June 2026</p>
          <p>GPA: 3.6/4.0</p>

          <h3>Bachelor of Science in Electronics Engineering Technology</h3>
          <p>Brigham Young University, Provo UT | April 1994</p>
          <p>GPA: 3.0/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <p>Programming languages: Java, Python, JavaScript, C++</p>
          <p>Frameworks and libraries: React, Spring Boot, Node.js, Express.js</p>
          <p>Database systems: MySQL, MongoDB</p>
          <p>Operating systems: Windows, Linux</p>
          <p>Version control: Git, GitHub</p>
        </div>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <div className="experience">
          <h3>Cybersecurity Assistant</h3>
          <p>Center for Cybersecurity Innovation, Seattle WA | June 2024 - January 2026</p>
          <p>Perform security audits for small businesses</p>
          <p>Document results of audit</p>
          <p>Provide on-going support to customer</p>

          <h3>Cybersecurity Instructor</h3>
          <p>Teach online security to Seniors| January 2025 - Present</p>
          <p>Answer questions and resolve problems for members of 50+ Club</p>
          <p>Substitue Instructor for digitial devices class</p>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Personal Website</h3>
          <p>Built a personal website using React and deployed it on GitHub Pages.</p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/studentname/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/studentname/personal-website
            </a>
          </p>

          <h3>Online Bookstore</h3>
          <p>Developed a web application for an online bookstore using Spring Boot and MySQL.</p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/studentname/online-bookstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/studentname/online-bookstore
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
