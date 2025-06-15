document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-icon");
  const projectContainer = document.querySelector(".projects-grid");
  const projectCards = Array.from(document.querySelectorAll(".project-card"));
  const filterButtons = document.querySelectorAll(".filter-btn");

  function showFilteredProjects() {
    const searchText = searchInput.value.toLowerCase().trim();
    const filteredProjects = projectCards.filter((card) => {
      const titleElement = card.querySelector(".project-title");
      return (
        titleElement &&
        titleElement.textContent.toLowerCase().includes(searchText)
      );
    });

    projectContainer.innerHTML = "";
    filteredProjects.forEach((card) => projectContainer.appendChild(card));
  }

  searchInput.addEventListener("input", showFilteredProjects);
  searchButton.addEventListener("click", showFilteredProjects);

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const category = this.textContent.trim();
      if (category === "Web Design") {
        const filteredProjects = projectCards.filter((card) => {
          const categoryElement = card.querySelector(".project-category");
          return (
            categoryElement &&
            categoryElement.textContent.trim() === "Web Development"
          );
        });

        projectContainer.innerHTML = "";
        filteredProjects.forEach((card) => projectContainer.appendChild(card));
      } else if (category === "Coming...") {
        projectContainer.innerHTML =
          "<p class='coming-soon-text'>Coming soon...</p>";
      } else {
        projectContainer.innerHTML = "";
        projectCards.forEach((card) => projectContainer.appendChild(card));
      }
    });
  });
});
