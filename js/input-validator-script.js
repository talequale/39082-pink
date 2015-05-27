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
