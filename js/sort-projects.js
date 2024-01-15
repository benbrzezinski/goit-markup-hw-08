const projectsContainer = document.querySelector(".project");
const projects = Array.from(document.querySelectorAll(".project__item"));
const buttons = Array.from(document.querySelectorAll(".buttons__item"));

const allProjects = projects.map(p => p.outerHTML).join("");
const filteredProjects = type => {
  return projects
    .filter(p => p.getAttribute("data-type") === type)
    .map(p => p.outerHTML)
    .join("");
};

const handleSortProjects = e => {
  const currentBtn = e.currentTarget;
  const activeBtn = buttons.find(btn => btn.classList.contains("active"));

  if (activeBtn) activeBtn.classList.remove("active");
  currentBtn.classList.add("active");

  const type = currentBtn.innerText.toLocaleLowerCase();

  switch (type) {
    case "wszystkie":
      projectsContainer.innerHTML = allProjects;
      break;

    case "strony":
      projectsContainer.innerHTML = filteredProjects("strony");
      break;

    case "aplikacje":
      projectsContainer.innerHTML = filteredProjects("aplikacje");
      break;

    case "design":
      projectsContainer.innerHTML = filteredProjects("design");
      break;

    case "marketing":
      projectsContainer.innerHTML = filteredProjects("marketing");
      break;

    default:
      projectsContainer.innerHTML = allProjects;
  }
};

buttons.forEach(btn => btn.addEventListener("click", handleSortProjects));
