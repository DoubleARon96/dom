$("#card-panel-1").click(function() {
    // Target the same element and use the hide effect with the slow preset time
    $(this).hide("slow");
  });
  
  // Select the element with the id of card-panel-2 and attach a click event handler
  $("#card-panel-2").click(function() {
    // Target the same element and use the hide effect with the medium preset time
    $(this).hide("medium");
  });
  
  // Select the element with the id of card-panel-3 and attach a click event handler
  $("#card-panel-3").click(function() {
    // Target the same element and use the hide effect with the fast preset time
    $(this).hide("fast");
  });
  
  // Select the element with the id of card-panel-4 and attach a click event handler
  $("#card-panel-4").click(function() {
    // Target the same element and use the hide effect with a custom time of 3000 milliseconds
    $(this).hide(3000);
  });