var plus = document.querySelectorAll(".js-combo-plus"); // кнопки минус
var minus = document.querySelectorAll(".js-combo-minus"); // кнопки плюс


// обработчики для плюсов
for (var i = 0; i < plus.length; i++) {

  plus[i].addEventListener("click",function(){
    event.preventDefault;
    var input = this.parentNode.querySelector(".js-combo-value");

    if (!input.value) input.value = input.getAttribute('data-min');
    else input.value = parseInt(input.value) + 1;

  });

  // обработчики для минусов
  minus[i].addEventListener("click",function(){
    event.preventDefault;
    var input = this.parentNode.querySelector(".js-combo-value");

    if (!input.value) input.value = input.getAttribute('data-min');

    if ( (parseInt(input.value) - 1) < input.getAttribute('data-min')) input.value = input.getAttribute('data-min');
    else input.value = parseInt(input.value) - 1;
  });

}

// проверка типа символов
(function() {

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