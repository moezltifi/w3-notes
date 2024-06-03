var sections = {
  HTML: ['Introduction', 'Tags', 'Attributes', 'Forms'],
  CSS: ['Selectors', 'Box Model', 'Flexbox', 'Grid'],
  JavaScript: ['Variables', 'Functions', 'DOM Manipulation', 'Events']
};

function showSections(course) {
  var sidebar = document.getElementById('mySidebar');
  var content = document.getElementById('content');

  // Clear sidebar and content
  sidebar.innerHTML = '';
  content.innerHTML = '';

  // Highlight the clicked button
  var buttons = document.querySelectorAll('.w3-button');
  buttons.forEach(function(button) {
    button.style.backgroundColor = '';
  });
  var clickedButton = document.getElementById(course);
  clickedButton.style.backgroundColor = '#04aa6d';

  // Display sections in the sidebar
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
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      Content=data
      var content = document.getElementById('content');
      var contentToDisplay;

      var htmlContent = {
        Introduction: Content.employees[0].Introduction,
        Tags: Content.employees[1].Tags,
        Attributes: Content.employees[2].Attributes,
        Forms: Content.employees[3].Forms
      };
      var cssContent = {
        Selectors: "<h2>CSS Selectors</h2><p>This is the section about CSS selectors.</p>",
      };
      var javascriptContent = {
        Variables: "<h2>JavaScript Variables</h2><p>This is the section about JavaScript variables.</p>",
      };
      
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
      clickedButton.style.backgroundColor = "#04aa6d";
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

showSections('HTML');
