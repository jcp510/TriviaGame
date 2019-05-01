$( document ).ready(function() {
  var time = 30;

  $("a").click(function() {
    
    // When start button is clicked, button disappears and timer & questions are displayed.
    $(this).hide();
    
    // Show timer & questions.
    $("form").toggle();

    // Timer
    $("#timer").text("Time Remaining: " + time + " seconds");

    // Begin time countdown.
    setTimeout(function run() {
      time--;
      $("#timer").text("Time Remaining: " + time + " seconds");
      setTimeout(run, 1000);
    }, 1000);
  });
});
