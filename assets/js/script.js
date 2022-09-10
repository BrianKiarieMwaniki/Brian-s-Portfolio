(function () {
  window.onscroll = function () {
    manipulateStickyNav();
  };

  let navbar = document.getElementById("nav");
  let navbar2 = document.getElementById("nav2");

  function manipulateStickyNav() {
    let condition = introtextPos + scrollY;
    if (condition <= 589) {
      navbar.classList.add("sticky");
      navbar2.classList.add("hidden");
    } else {
      navbar.classList.remove("sticky");
      navbar2.classList.remove("hidden");
    }
  }
})();
