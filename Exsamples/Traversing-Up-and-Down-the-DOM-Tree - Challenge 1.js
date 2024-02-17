//Create a click event handler that triggers when a <p> element is clicked.
//Within the click event handler, using the keyword this, target the specific <p> element that was clicked
//And using the children method target all the <a> elements within this paragraph.
//And using chaining, use the css method to change their background-color to yellow.
//Within the html click on any paragraph and see the background color of its <a> elements change colour to yellow.


// Create a click event handler that triggers when a <p> element is clicked
$("p").click(function() {
    // Using the keyword this, target the specific <p> element that was clicked
    // And using the children method target all the <a> elements within this paragraph
    // And using chaining, use the css method to change their background-color to yellow
    $(this).children("a").css("background-color", "yellow");
  });



  //this one is to find not children of the element 

  // Assuming the button and the p element are not siblings, but have a common parent
$("button").click(function() {
    // Use this to refer to the button that was clicked
    // Use closest() to find the nearest common ancestor, such as a div
    // Use find() to select the p element within that ancestor
    $(this).closest("div").find("p").slideToggle("slow");
  });
  


//other ways to transveres 

// Within the #card-btn-1 event handler, and using the keyword this, use the siblings method to target all span elements, and use the addClass method to add the class name "yellow"
$("#card-btn-1").click(function() {
    $(this).siblings("span").addClass("yellow");
  });
  
  // Within the #card-btn-2 event handler, and using the keyword this, use the siblings method to target the element with the id of  "card-par-1", and use the addClass method to add the class name "red"
  $("#card-btn-2").click(function() {
    $(this).siblings("#card-par-1").addClass("red");
  });
  
  // Within the #card-btn-3 event handler, and using the keyword this, use the siblings method to target all siblings, and use the addClass method to add the class name "large-font"
  $("#card-btn-3").click(function() {
    $(this).siblings().addClass("large-font");
  });
  