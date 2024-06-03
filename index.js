var sections = {
  HTML: ['Introduction', 'Tags', 'Attributes', 'Forms'],
  CSS: ['Selectors', 'Box_Model', 'Flexbox', 'Grid'],
  JavaScript: ['Variables', 'Functions', 'DOM_Manipulation', 'Events']
};

function showSections(course) {
  var sidebar = document.getElementById('mySidebar');
  var content = document.getElementById('content');

  sidebar.innerHTML = '';
  content.innerHTML = '';

  var buttons = document.querySelectorAll('.w3-button');
  buttons.forEach(function(button) {
    button.style.backgroundColor = '';
  });
  var clickedButton = document.getElementById(course);
  clickedButton.style.backgroundColor = '#04aa6d';

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
        Introduction: Content.html[0].Introduction,
        Tags: Content.html[1].Tags,
        Attributes: Content.html[2].Attributes,
        Forms: Content.html[3].Forms
      };
      var cssContent = {
      Selectors: Content.css[0].Selectors,
      Box_Model: Content.css[1].Box_Model,
      Flexbox: Content.css[2].Flexbox,
      Grid: Content.css[3].Grid
      };
      var javascriptContent = {
        Variables: Content.javascript[0].Variables,
        Functions: Content.javascript[1].Functions,
        DOM_Manipulation: Content.javascript[2].DOM_Manipulation,
        Events: Content.javascript[3].Events
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
