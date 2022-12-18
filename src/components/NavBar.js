import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a key="homeNav" href="#home">home</a>
      <a key="aboutNav" href="#about">about</a>
      <a key="projectsNav" href="#projects">projects</a>
    </nav>
  )
}

export default NavBar;
