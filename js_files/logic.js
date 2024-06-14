// Gather sections from global objects
const sections = {
  HTML: Object.keys(html),
  CSS: Object.keys(css),
  JavaScript: Object.keys(javascript)
};

// Initialize current course and section index
let currentCourse = "HTML";
let currentSectionIndex = 0;

// Show sections of a specific course
function showSections(course) {
  currentCourse = course;
  currentSectionIndex = 0;
  
  // Clear sidebar and content
  const sidebar = document.getElementById("mySidebar");
  const content = document.getElementById("content");
  sidebar.innerHTML = "";
  content.innerHTML = "";

  // Reset button background color
  document.querySelectorAll(".w3-button").forEach(button => {
    button.style.backgroundColor = "";
  });

  // Highlight the clicked button
  document.getElementById(course).style.backgroundColor = '#04aa6d';

  // Populate sidebar with sections
  sections[course].forEach((section, index) => {
    const link = createSectionButton(section, index);
    sidebar.appendChild(link);
  });

  // Highlight the first section and show its content
  const firstButton = sidebar.querySelector("button");
  if (firstButton) {
    firstButton.classList.add("selected");
    showContent(course, sections[course][0]);
  }
}

// Create a section button
function createSectionButton(section, index) {
  const button = document.createElement('button');
  button.classList.add('w3-bar-item', 'w3-button');
  button.textContent = section;
  button.onclick = () => handleSectionClick(index, button);
  return button;
}

// Handle section click
function handleSectionClick(index, link) {
  currentSectionIndex = index;

  // Remove selected class from previous section
  document.querySelector('#mySidebar .selected')?.classList.remove("selected");

  // Highlight the clicked section and show content
  link.classList.add('selected');
  showContent(currentCourse, sections[currentCourse][index]);
}

// Show content of a specific section
function showContent(course, section) {
  const content = document.getElementById("content");
  const courseContent = { HTML: html, CSS: css, JavaScript: javascript };

  const contentToDisplay = (courseContent[course]?.[section] || ["<h2>No content available</h2>"]).join("");
  content.innerHTML = contentToDisplay;

  updateNavigationButtons(currentSectionIndex, sections[course].length - 1);
}

// Navigate through sections
function navigateSections(direction) {
  const maxIndex = sections[currentCourse].length - 1;
  currentSectionIndex = Math.max(0, Math.min(maxIndex, currentSectionIndex + (direction === "next" ? 1 : -1)));

  const section = sections[currentCourse][currentSectionIndex];

  // Update selected button
  const sidebar = document.getElementById("mySidebar");
  sidebar.querySelector(".selected")?.classList.remove("selected");

  const newSelectedButton = sidebar.querySelectorAll(".w3-bar-item")[currentSectionIndex];
  newSelectedButton.classList.add("selected");
  newSelectedButton.scrollIntoView({ behavior: "smooth", block: "center" });

  showContent(currentCourse, section);
}

// Update navigation buttons state
function updateNavigationButtons(currentIndex, maxIndex) {
  document.getElementById("prevBtn").style.display = currentIndex === 0 ? "none" : "block";
  document.getElementById("nextBtn").style.display = currentIndex === maxIndex ? "none" : "block";
}

// Attach event listeners to navigation buttons
document.getElementById("prevBtn").onclick = () => navigateSections("prev");
document.getElementById("nextBtn").onclick = () => navigateSections("next");

// Initial call to show sections
showSections(currentCourse);
