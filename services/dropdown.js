let sidebarVisible = false;

function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.display = sidebarVisible ? "none" : "block";
  sidebarVisible = !sidebarVisible;
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
  sidebarVisible = false;
}