var v = 0;
function w3_open() {
      if (v == 0) {
          document.getElementById("mySidebar").style.display = "block";
          v=1;
      } else {
          document.getElementById("mySidebar").style.display = "none";
          v=0;
      }
}
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    v=0;
  };