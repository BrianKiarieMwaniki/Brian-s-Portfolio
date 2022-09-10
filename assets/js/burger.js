(function () {
  let aboutBurge = document.getElementById("burger");
  let navLinks = document.getElementById("navLinks");
  let isClicked = false;
  aboutBurge.addEventListener("click", () => {
    if (!isClicked) {
      isClicked = true;
      navLinks.classList.add("display-flex");
    } else {
      navLinks.classList.remove("display-flex");
      isClicked = false;
    }
  });
})();
