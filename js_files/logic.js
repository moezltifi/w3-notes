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
    const link = document.createElement('button');
    link.classList.add('w3-bar-item', 'w3-button');
    link.textContent = section;
    link.onclick = () => handleSectionClick(index, link);
    sidebar.appendChild(link);
  });

  // Highlight the first section and show its content
  const firstButton = sidebar.querySelector("button");
  if (firstButton) {
    firstButton.classList.add("selected");
    showContent(course, sections[course][0]);
  }
}

// Handle section click
function handleSectionClick(index, link) {
  currentSectionIndex = index;

  // Remove selected class from previous section
  const sidebar = document.getElementById("mySidebar");
  const previousSelected = sidebar.querySelector('.selected');
  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }

  // Highlight the clicked section and show content
  link.classList.add('selected');
  showContent(currentCourse, sections[currentCourse][index]);
}

// Show content of a specific section
function showContent(course, section) {
  const content = document.getElementById("content");
  let contentToDisplay = "";
  let maxIndex = sections[course].length - 1;

  switch (course) {
    case "HTML":
      contentToDisplay = html[section].join("");
      break;
    case "CSS":
      contentToDisplay = css[section].join("");
      break;
    case "JavaScript":
      contentToDisplay = javascript[section].join("");
      break;
    default:
      contentToDisplay = "<h2>No content available</h2>";
      break;
  }

  content.innerHTML = contentToDisplay;
  updateNavigationButtons(currentSectionIndex, maxIndex);
}

// Navigate through sections
function navigateSections(direction) {
  const courseSections = sections[currentCourse];
  const maxIndex = courseSections.length - 1;

  if (direction === "next" && currentSectionIndex < maxIndex) {
    currentSectionIndex++;
  } else if (direction === "prev" && currentSectionIndex > 0) {
    currentSectionIndex--;
  }

  const section = courseSections[currentSectionIndex];

  // Update selected button
  const sidebar = document.getElementById("mySidebar");
  const previousSelected = sidebar.querySelector(".selected");
  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }

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
showSections("HTML");
