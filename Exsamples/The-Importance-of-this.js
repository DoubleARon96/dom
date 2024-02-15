// Click event handler for <p> elements
$("p").click(function() {
    // Use this to target the clicked element
    // Use text method to set the text
    $(this).text("Changed only the text for this paragraph");
  });
  
  // Mouseenter event handler for elements with class of card
  $(".card").mouseenter(function() {
    // Use this to target the hovered element
    // Use chaining to apply two fadeTo methods
    $(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
  });