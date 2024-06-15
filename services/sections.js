const sections = {
  HTML: Object.keys(html),
  CSS: Object.keys(css),
  JavaScript: Object.keys(javascript)
};

let currentSectionIndex = 0;

function showSections(course) {
  currentCourse = course;
  currentSectionIndex = 0;

  const sidebar = document.getElementById("mySidebar");
  const content = document.getElementById("content");
  sidebar.innerHTML = "";
  content.innerHTML = "";

  document.querySelectorAll(".w3-button").forEach(button => {
    button.style.backgroundColor = "";
  });

  document.getElementById(course).style.backgroundColor = '#04aa6d';

  sections[course].forEach((section, index) => {
    const link = createSectionButton(section, index);
    sidebar.appendChild(link);
  });

  const firstButton = sidebar.querySelector("button");
  if (firstButton) {
    firstButton.classList.add("selected");
    showContent(course, sections[course][0]);
  }
}

function handleSectionClick(index, button) {
  currentSectionIndex = index;
  document.querySelector('#mySidebar .selected')?.classList.remove("selected");
  button.classList.add('selected');
  showContent(currentCourse, sections[currentCourse][index]);
}
