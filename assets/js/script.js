(function () {
  // window.onscroll = function () {
  //   manipulateStickyNav();
  // };

  let navbar = document.getElementById("nav");
  let sectionIntro = document.getElementById("section-intro"); 
  let introtext = document.getElementById("intro-text"); 
 let introtextPos = introtext.getBoundingClientRect().top;
  let sticky = navbar.offsetTop;

  let condition = introtextPos + window.scrollY;
  
  function manipulateStickyNav() {    
    if (condition >= 500) {
      navbar.classList.add("sticky");
    }else {
      navbar.classList.remove("sticky");
    }
    console.log(sticky);
    console.log(introtextPos + window.scrollY);
  }
})();
