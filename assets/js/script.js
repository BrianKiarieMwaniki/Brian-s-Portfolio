(function () {
  window.onscroll = function () {
    manipulateStickyNav();
  };

  let navbar = document.getElementById("nav");
  let navbar2 = document.getElementById("nav2");
  let introtext = document.getElementById("intro-text");
  let introtextPos = introtext.getBoundingClientRect().bottom;

  function manipulateStickyNav() {
    console.log(introtextPos + scrollY);
    let condition = introtextPos + scrollY;
    if(condition <= 589){
      navbar.classList.add('sticky')
      navbar2.classList.add('hidden');
    }
    else{
      navbar.classList.remove('sticky');
      navbar2.classList.remove('hidden');
    }
   
  }
})();
