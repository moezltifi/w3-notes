const Css = Object.keys(css);
const Html = Object.keys(html);
const Javascript = Object.keys(javascript);
const sections = {
  HTML: Html,
  CSS: Css,
  JavaScript: Javascript
};
function showSections(course) {
  const sidebar = document.getElementById('mySidebar');
  const content = document.getElementById('content');
  sidebar.innerHTML = ''; 
  content.innerHTML = '';
  const buttons = document.querySelectorAll('.w3-button');
  buttons.forEach(function(button) {
    button.style.backgroundColor = '';
  });
  const clickedButton = document.getElementById(course);
  clickedButton.style.backgroundColor = '#04aa6d';
  sections[course].forEach(function(sectionName) {
    const link = document.createElement('button');
    link.classList.add('w3-bar-item', 'w3-button');
    link.textContent = sectionName;
    link.onclick = function() {
      const clickedSection = sidebar.querySelector('.selected');
      if (clickedSection) {
        clickedSection.classList.remove('selected');
      }
      link.classList.add('selected');
      showContent(course, sectionName);
    };
    sidebar.appendChild(link);
  });
  const introductionButton = sidebar.querySelector('button');
  if (introductionButton) {
    introductionButton.classList.add('selected');
    showContent(course, sections[course][0]);
  }
}
function showContent(course, section) {
  let contentToDisplay = '';
  if (section === Object.keys(course.toLowerCase())[0] || section === "") {
    contentToDisplay = html.Introduction.join("");
  }else{
  switch (course) {
    case 'HTML':
        contentToDisplay = html[section].join("");
      break;
    case 'CSS':
        contentToDisplay = css[section].join("");
      break;
    case 'JavaScript':
      contentToDisplay = javascript[section].join("");
      break;
    default:
      contentToDisplay = "<h2>No content available</h2>";
      break;
  }
  const content = document.getElementById('content');
  content.innerHTML = contentToDisplay;
}
}
showSections('HTML');