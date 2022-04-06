function touchHandler(event) {
    // Get a reference to our coordinates div
    var coords = document.getElementById("coords");
    // Write the coordinates of the touch to the div
    coords.innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
  }