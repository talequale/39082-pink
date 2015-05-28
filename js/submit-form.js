
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
