var hamburgerIcon = $(".header-right > a");
var hamburgerMenu = $(".hamburger-menu");
var closeIcon = $(".hamburger-menu > a");

hamburgerIcon.click(
  function() {
    hamburgerIcon.fadeOut("slow");
    hamburgerMenu.fadeIn("fast");
  }
);

closeIcon.click(
  function() {
    hamburgerMenu.fadeOut("slow");
    hamburgerIcon.fadeIn("fast");
  }
);
