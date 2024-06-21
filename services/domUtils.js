function createSectionButton(section, index) {
  const button = document.createElement('button');
  button.classList.add('w3-bar-item', 'w3-button');
  button.textContent = section;
  button.onclick = () => handleSectionClick(index, button);
  return button;
}
// Variable to keep track of the current interval
let currentInterval;

function showContent(course, section) {
  // The content container element
  const content = document.getElementById("content");

  // Placeholder for course content; this should be defined elsewhere in your code
  const courseContent = {
    HTML: html, 
    CSS: css,  
    JavaScript: javascript 
  };
  const contentToDisplay = courseContent[course]?.[section] || ["<h2>No content available</h2>"];
  content.innerHTML = "";

  function renderHTML(contentArray) {
    contentArray.forEach(htmlString => {
      const temp = document.createElement("div");
      temp.innerHTML = htmlString;
      while (temp.firstChild) {
        content.appendChild(temp.firstChild);
      }
    });
  }
  function typeWriterEffect(contentArray, delay = 150) {
    if (currentInterval) {
      clearInterval(currentInterval);
    }
    let index = 0;
    currentInterval = setInterval(function() {
      if (index < contentArray.length) {
        renderHTML([contentArray[index]]);
        index++;
      } else {
        clearInterval(currentInterval);
      }
    }, delay );
  }
  typeWriterEffect(contentToDisplay);

}
function updateNavigationButtons(currentIndex, maxIndex) {
  document.getElementById("prevBtn").style.display = currentIndex === 0 ? "none" : "block";
  document.getElementById("nextBtn").style.display = currentIndex === maxIndex ? "none" : "block";
}
