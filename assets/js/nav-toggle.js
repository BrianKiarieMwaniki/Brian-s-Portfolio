(function () {
  let nav_links = document.getElementsByClassName("navigation__link");
  let nav_toggle = document.getElementById("navi-toggle");

  for (let i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener("click", () => {
      nav_toggle.checked = false;
    });
  }
})();
