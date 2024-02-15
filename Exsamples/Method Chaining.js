// Select the button element

// Create a mouseenter event handler
$('button').mouseenter(function() {
    // Target the button and remove the class "make-red"
    $(this).removeClass("make-red").addClass("make-border");
  });
  
  // Create a mouseleave event handler
  $('button').mouseleave(function() {
    // Target the button and remove the class "make-border"
    $(this).removeClass("make-border").addClass("make-red");
  });