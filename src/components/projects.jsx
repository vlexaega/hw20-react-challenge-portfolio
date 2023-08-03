import React from "react";

const ProjectOne = () => {
  return (
    <div className="projects">
      <a href="https://vlexaega.github.io/css-snippet-cheatsheet/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/css.snippet.cheatsheet.jpg" alt="css webpage" id="css-image" />
      </a>
    </div>
  );
};

const ProjectTwo = () => {
    return (
      <div className="projects">
        <a href="https://vlexaega.github.io/hw3-javascript-passwordGenerator/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/screenGrab1.jpg" alt="javascript password generator" id="javascript-image" />
        </a>
      </div>
    );
  };

const ProjectThree = () => {
    return (
        <div className="projects">
            <a href="https://croberts27.github.io/recyculator/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/recyculator.jpg" alt="recycling help" id="recyculator-image" />
            </a>
        </div>
    );
};

const ProjectFour = () => {
  return (
      <div className="projects">
          <a href="https://github.com/vlexaega/project3-untitled" target="_blank" rel="noopener noreferrer">
          <img src="/assets/projectuntitled.jpg" alt="digital art gallery" id="untitled-image" />
          </a>
      </div>
  );
};

const Projects = () => {
    return (
    <div className="work">
    <h2>Projects</h2>
        <div className="work-links">
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour />
        </div>
    </div>
  );
}

export default Projects;
