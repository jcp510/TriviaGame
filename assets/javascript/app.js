$( document ).ready(function() {
  var time = 30;

  $("a").click(function() {
    
    // When start button is clicked, button disappears and timer & questions are displayed.
    $(this).hide();
    
    // Show timer & questions.
    $("form").toggle();

    // Initialize timer with 30 seconds.
    $("#timer").text("Time Remaining: " + time + " seconds");

    // Game timer.
    var gogoGadgetTimer = setInterval(function run() {
      time--;
      $("#timer").text("Time Remaining: " + time + " seconds");
      
      // Stop timer when time runs out at zero seconds.
      if (time <= 0) {
        clearInterval(gogoGadgetTimer);
      };
    }, 1000);
  });
});
