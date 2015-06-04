(function() {

  var area = document.querySelector(".container--companions");
  var template = document.getElementById("field-template");
  var templateDesktop = document.getElementById("field-template-desktop");

  if (window.matchMedia("(min-width: 768px)").matches) {

    var companions = document.querySelector("#number-of-companions");

    var areaDefault = document.querySelector("#companions-template").innerHTML;

    var html = Mustache.render(templateDesktop, {
      "number": companions.value
    });

    for (var i = 0; i >= 0; i++) {

      companions.addEventListener("input", function(event) {

        if (parseInt(companions.value == 0)) {

          area.innerHTML = areaDefault;

        } else {

          area.innerHTML = areaDefault + html;
          var div = document.createElement("div");
          div.classList.add("page-form__table-wrapper");
          div.classList.add("page-form__table-wrapper--desktop");
          div.innerHTML = template;
        };
      });
    }

  } else {

    console.log("mobile");

  }

})();