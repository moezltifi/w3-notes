var sections = {
  CSS: Object.keys(css),
  JavaScript: Object.keys(javascript),
  HTML: Object.keys(html)
};

function showSections(course) {
  var sidebar = document.getElementById('mySidebar');
  var content = document.getElementById('content');

  sidebar.innerHTML = '<button class="w3-bar-item w3-button w3-large w3-hide-large" onclick="w3_close()"> Close &times; </button>'; 
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

showSections('HTML');

function showContent(course, section) {
  var htmlContent = {
    Introduction: html.Introduction.join(""),
    Tags: html.Tags.join(""),
    Attributes: html.Attributes.join(""),
    Forms: html.Forms.join("")
  };

  var cssContent = {
    Selectors: css.Selectors.join(""),
    Box_Model: css.Box_Model.join(""),
    Flexbox: css.Flexbox.join(""),
    Grid: css.Grid.join("")
  };

  var javascriptContent = {
    Variables: javascript.Variables.join(""),
    Functions: javascript.Functions.join(""),
    Dom_Manipulation: javascript.Dom_Manipulation.join(""),
    Events: javascript.Events.join("")
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
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

showSections('HTML');