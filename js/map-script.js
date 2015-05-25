function initialize() {

  var mapOptions = {

    zoom: 17,
    center: new google.maps.LatLng(59.939027, 30.323065)
  }

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var image = "img/map-marker.svg";

  var myLatLng = new google.maps.LatLng(59.938794,30.323083);

  var nerdsMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}

google.maps.event.addDomListener(window, "load", initialize);
