var sections = {
  html: ['Introduction', 'Tags', 'Attributes', 'Forms'],
  css: ['Selectors', 'Box Model', 'Flexbox', 'Grid'],
  javascript: ['Variables', 'Functions', 'DOM Manipulation', 'Events']
};

function showSections(course) {
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('content');

  sidebar.innerHTML = '';

  sections[course].forEach(function(section) {
    var link = document.createElement('a');
    link.href = '#';
    link.classList.add('w3-bar-item', 'w3-button');
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

  var contentToDisplay;
  switch (course) {
    case 'html':
      contentToDisplay = htmlContent[section];
      break;
    default:
      contentToDisplay = "<h2>No content available</h2>";
  }
  content.innerHTML = contentToDisplay;
}
showSections('html');
