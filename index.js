var sections = {
  HTML: ['Introduction', 'Tags', 'Attributes', 'Forms'],
  CSS: ['Selectors', 'Box Model', 'Flexbox', 'Grid'],
  JavaScript: ['Variables', 'Functions', 'DOM Manipulation', 'Events']
};
function showSections(course) {
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('content');
  sidebar.innerHTML = course;
  var buttons = document.querySelectorAll('.w3-button');
  buttons.forEach(function(button) {
    button.style.backgroundColor = '';
  });
  var clickedButton = document.getElementById(course);
  clickedButton.style.backgroundColor = '#04aa6d';
  sections[course].forEach(function(section) {
    var link = document.createElement('a');
    link.href = '#';
    link.classList.add('w3-bar-item', 'w3-button','sidebar-button');
    link.textContent = section;
    link.onclick = function() {
      showContent(course, section);
    };
    sidebar.appendChild(link);
  });
  content.innerHTML = "<h2>Welcome, select a section from the sidebar to start learning</h2>";
}
function showContent(course, section) {
  var content = document.getElementById('content');
  var htmlContent = {
    Introduction: "<h2>Introduction to HTML</h2><p>This is the introduction to HTML.</p>",
    Tags: "<h2>HTML Tags</h2><p>This is the section about HTML tags.</p>",
    Attributes: "<h2>HTML Attributes</h2><p>This is the section about HTML attributes.</p>",
    Forms: "<h2>HTML Forms</h2><p>This is the section about HTML forms.</p>"
  };
  var cssContent = {
    Selectors: "",
  };
  var javascriptContent = {
    Variables: "",
  };
  var contentToDisplay;
  switch (course) {
    case 'HTML':
      contentToDisplay = htmlContent[section];
      break;
    case 'CSS':
      contentToDisplay = cssContent[section];
      break;
    case 'JavaScript':
      contentToDisplay = javascriptContent[section];
      break;
    default:
      contentToDisplay = "<h2>No content available</h2>";
  }
  content.innerHTML = contentToDisplay;
  var clickedButton = document.getElementById(course);
  clickedButton.style.backgroundColor="#04aa6d"
}
showSections('HTML');
