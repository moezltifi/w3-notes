const Css = Object.keys(css);
const Html = Object.keys(html);
const Javascript = Object.keys(javascript);
const sections = {
  HTML: Html,
  CSS: Css,
  JavaScript: Javascript
};

let currentCourse = "HTML";
let currentSectionIndex = 0;

function showSections(course) {
  currentCourse = course;
  currentSectionIndex = 0;
  const sidebar = document.getElementById("mySidebar");
  const content = document.getElementById("content");
  sidebar.innerHTML = "";
  content.innerHTML = "";
  const buttons = document.querySelectorAll(".w3-button");
  buttons.forEach(function (button) {
    button.style.backgroundColor = "";
  });
  const clickedButton = document.getElementById(course);
  clickedButton.style.backgroundColor = '#04aa6d';
  sections[course].forEach(function(Content,index) {
    const link = document.createElement('button');
    link.classList.add('w3-bar-item', 'w3-button');
    link.textContent = Content;
    link.onclick = function() {
      currentSectionIndex = index ;
      const clickedSection = sidebar.querySelector('.selected');
      if (clickedSection) {
        clickedSection.classList.remove("selected");
      }
      link.classList.add('selected');
      showContent(course, Content);
    };
    sidebar.appendChild(link);
  });
  const introductionButton = sidebar.querySelector("button");
  if (introductionButton) {
    introductionButton.classList.add("selected");
    showContent(course, sections[course][0]);
  }
}

function showContent(course, section) {
  const content = document.getElementById("content");
  let contentToDisplay = "";
  let maxIndex = -1;
  switch (course) {
    case "HTML":
      contentToDisplay = html[section].join("");
      maxIndex = Html.length-1;
      break;
    case "CSS":
      contentToDisplay = css[section].join("");
      maxIndex = Css.length-1;
      break;
    case 'JavaScript':
        contentToDisplay = javascript[section].join("");
        maxIndex = Javascript.length-1;
      break;
    default:
      contentToDisplay = "<h2>No content available</h2>";
      break;
  }
  content.innerHTML = contentToDisplay;
  updateNextPrevState(currentSectionIndex, maxIndex)
}

function navigateSections(direction) {
  const courseSections = sections[currentCourse];
  if (direction === "next" && currentSectionIndex < courseSections.length) {
    currentSectionIndex = currentSectionIndex + 1;
  } else if (direction === "prev" && currentSectionIndex > 0) {
    currentSectionIndex = currentSectionIndex - 1;
  }
  const section = courseSections[currentSectionIndex];
  const sidebar = document.getElementById("mySidebar");
  const selectedButton = sidebar.querySelector(".selected");
  if (selectedButton) {
    selectedButton.classList.remove("selected");
  }
  const newSelectedButton =
    sidebar.querySelectorAll(".w3-bar-item")[currentSectionIndex];
  newSelectedButton.classList.add("selected");
  newSelectedButton.scrollIntoView({ behavior: "smooth", block: "center" });
  showContent(currentCourse, section);

  updateNextPrevState(currentSectionIndex, courseSections.length-1);

}

document.getElementById("prevBtn").onclick = function () {
  navigateSections("prev");
};

document.getElementById("nextBtn").onclick = function () {
  navigateSections("next");
};

showSections("HTML");


function updateNextPrevState(currentSectionIndex, maxIndex){
  if (currentSectionIndex === 0 ){
    document.getElementById("prevBtn").style.display="none";
  }else{
    document.getElementById("prevBtn").style.display="block";
  } 
  if (currentSectionIndex === maxIndex ){
    document.getElementById("nextBtn").style.display="none";
  }else{
    document.getElementById("nextBtn").style.display="block";
  }
}