// открытие мобильного меню по тапу
(function() {

  var openClose = document.querySelector(".menu-toggle");
  var mobileMenu = document.querySelector(".page-header__top-menu");

  openClose.addEventListener("tap", function(event) {
    if (mobileMenu.classList.contains("page-header__top-menu--open")) {

      event.preventDefault();
      mobileMenu.classList.remove("page-header__top-menu--open");
      openClose.classList.remove("menu-toggle--active");

    } else {

      event.preventDefault();
      mobileMenu.classList.add("page-header__top-menu--open");
      openClose.classList.add("menu-toggle--active");
    }
  });

})();