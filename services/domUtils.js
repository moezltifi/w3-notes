function createSectionButton(section, index) {
  const button = document.createElement('button');
  button.classList.add('w3-bar-item', 'w3-button');
  button.textContent = section;
  button.onclick = () => handleSectionClick(index, button);
  return button;
}

function showContent(course, section) {
  const content = document.getElementById("content");
  const courseContent = { HTML: html, CSS: css, JavaScript: javascript, Java: java, DSA: DSA};
  const contentToDisplay = (courseContent[course]?.[section] || ["<h2>No content available</h2>"]).join("");
  content.innerHTML = contentToDisplay;
  
  updateNavigationButtons(currentSectionIndex, sections[course].length - 1);
}

function updateNavigationButtons(currentIndex, maxIndex) {
  document.getElementById("prevBtn").style.display = currentIndex === 0 ? "none" : "block";
  document.getElementById("nextBtn").style.display = currentIndex === maxIndex ? "none" : "block";
}
