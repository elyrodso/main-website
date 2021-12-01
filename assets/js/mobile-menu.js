function mobileMenu() {
    var menu = document.getElementById("mobileHeaderLinks");
    if (menu.style.display === "grid") {
        menu.style.display = "none";
    } else {
        menu.style.display = "grid";
    }
  } 