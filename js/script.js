// инпуты с кнопками
(function() {

  var plus = document.querySelectorAll(".js-combo-plus"); // кнопки минус
  var minus = document.querySelectorAll(".js-combo-minus"); // кнопки плюс


  // обработчики для плюсов
  for (var i = 0; i < plus.length; i++) {

    plus[i].addEventListener("click",function(event){
      event.preventDefault;
      var input = this.parentNode.querySelector(".js-combo-value");

      if (!input.value) input.value = input.getAttribute('data-min');
      else input.value = parseInt(input.value) + 1;

    });

    // обработчики для минусов
    minus[i].addEventListener("click",function(event){
      event.preventDefault;
      var input = this.parentNode.querySelector(".js-combo-value");

      if (!input.value) input.value = input.getAttribute('data-min');

      if ( (parseInt(input.value) - 1) < input.getAttribute('data-min')) input.value = input.getAttribute('data-min');
      else input.value = parseInt(input.value) - 1;
    });

  }

  // проверка типа символов

  function setValidator(id, regex) {

    var element = document.getElementById(id);

      if (element) {

        var lastValue = element.value;

          if (!regex.test(lastValue))

            lastValue = "";

      setInterval(function() {

        var value = element.value;

        if (value != lastValue) {

          if (regex.test(value))

            lastValue = value;

          else

            element.value = lastValue;

        }

      }, 10);

    }

  }

  setValidator("trip-length", /^[0-9]*$/);
  setValidator("number-of-companions", /^[0-9]*$/);

})();


//скрипт отправки формы
(function() {

  if (!("FormData" in window)) {

    return;

  } else {

    var form = document.querySelector(".page-form form");
    var area = document.querySelector(".images");
    var template = document.querySelector("#image-template").innerHTML;

    var queue =[];

    form.addEventListener("submit", function(event) {

      event.preventDefault();

      var data = new FormData(form);

      queue.forEach(function(element) {

        data.append("images", element.file);

      });

      request(data, function(response) {

        console.log(response);

      });

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

    form.querySelector("#upload-images-btn").addEventListener("change", function() {

      var files = this.files;

      for (var i = 0; i < files.length; i++) {

       preview(files[i]);

      }

      this.value = "";

    });

    function preview(file) {

      if("FileReader" in window) {

        if(file.type.match(/image.*/)) {

          var reader = new FileReader();

          reader.addEventListener("load", function(event) {

            var html = Mustache.render(template, {

              "image": event.target.result,
              "name": file.name

            });

            var figure = document.createElement("figure");
            figure.classList.add("image");
            figure.innerHTML = html;

            area.appendChild(figure);

            figure.querySelector(".delete-btn").addEventListener("click", function(event) {

              event.preventDefault();
              removePreview(figure);

            });

            queue.push({
              "file": file,
              "figure": figure

            });

          });

          reader.readAsDataURL(file);
        }
      }
    }

    function removePreview(figure) {

      queue = queue.filter(function(element) {

        return element.figure != figure;

      });

      figure.parentNode.removeChild(figure);

    }

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