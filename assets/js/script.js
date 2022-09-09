(function () {
  window.onscroll = function () {
    myFunction();
  };

  let navbar = document.querySelector("nav");
  let sectionIntro = document.getElementById("section-intro");  

  let sticky = navbar.offsetTop;
  console.log(sectionIntro.offsetTop);

  function myFunction() {
    if (window.pageYOffset >= sectionIntro.offsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
})();
