
(function() {

  if (!("FormData" in window)) {

    return;

  } else {

    var form = document.querySelector(".page-form");

    form.addEventListener("submit", function(event) {

      event.preventDefault();

      var data = new FormData(form);

      request(data, function(response) {

        console.log(response);

      });

      function request(data, fn) {

        var xhr = new XMLHttpRequest();
        var time = (new Date()).getTime();

        xhr.open("post", "http://simonenko.su/academy/echo?" + time);

        xhr.addEventListener("readystatechange", function() {

          if (xhr.readyState == 4) {

            fn(xhr.responseText);

          }

        });

      xhr.send(data);

    }

    });

  }

})();

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
