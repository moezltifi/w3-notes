const Css=Object.keys(css);
const Html=Object.keys(html)
const Javascript=Object.keys(javascript)
var sections = {
  CSS: Css,
  JavaScript: Javascript,
  HTML: Html
};
console.log(Object.keys(html));
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
    var link = document.createElement('button');
    link.classList.add('w3-bar-item', 'w3-button');
    link.textContent = section;
    link.style.backgroundColor="";
    link.onclick = function() {
      showContent(course, section);
      link.classList.add('selected')
    };
    link.onclick = function() {
      
      var clickedsection= sidebar.querySelector('.selected');
      if (clickedsection) {
        clickedsection.classList.remove('selected');
      }
      link.classList.add('selected');
  
      showContent(course, section);
    };
    sidebar.appendChild(link);
  });

  content.innerHTML =html.Introduction.join("");
    var introductionButton = sidebar.querySelector('button');
  introductionButton.classList.add('selected');
}

showSections('HTML');

function showContent(course, section) {
  var htmlContent = {};
  Html.forEach((section) =>{
    htmlContent[section]= html[section].join("");
});
  var cssContent = {}
    Css.forEach((section) =>{
      cssContent[section]= css[section].join("");
  });

  var javascriptContent = {}
    Javascript.forEach((section) =>{
      javascriptContent[section]= javascript[section].join("");
  });
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
  clickedButton.style.backgroundColor= "#04aa6d";

}
showSections('HTML');