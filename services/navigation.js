function navigateSections(direction) {
  const maxIndex = sections[currentCourse].length - 1;
  currentSectionIndex = Math.max(0, Math.min(maxIndex, currentSectionIndex + (direction === "next" ? 1 : -1)));
  const section = sections[currentCourse][currentSectionIndex];
  
  const sidebar = document.getElementById("mySidebar");
  sidebar.querySelector(".selected")?.classList.remove("selected");
  
  const newSelectedButton = sidebar.querySelectorAll(".w3-bar-item")[currentSectionIndex];
  newSelectedButton.classList.add("selected");
  newSelectedButton.scrollIntoView({ behavior: "smooth", block: "center" });

  showContent(currentCourse, section);
}

function attachNavigationListeners() {
  document.getElementById("prevBtn").onclick = () => navigateSections("prev");
  document.getElementById("nextBtn").onclick = () => navigateSections("next");
}
