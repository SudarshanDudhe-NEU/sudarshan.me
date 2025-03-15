// main.js file for the portfolio website, handling interactivity and dynamic content

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded!");
  // Example: Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Example: Dynamic project loading (placeholder for future implementation)
  const projectsContainer = document.getElementById("projects-container");
  const projects = [
    { title: "Project 1", description: "Description of project 1" },
    { title: "Project 2", description: "Description of project 2" },
    { title: "Project 3", description: "Description of project 3" },
  ];

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectsContainer.appendChild(projectCard);
  });
});
