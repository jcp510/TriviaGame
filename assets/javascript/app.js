/*  ********* TODO *******************************
*  Populate questions on page by jQuery rather than hard-coding html.
*  Display missed questions/questions that had wrong answers when time expires.
    ***********************************************  */
$( document ).ready(function() {
  var time = 40;

  // To track correct answers.
  var correctAns = 0;

  // To track wrong answers.
  var wrongAns = 0;

  // Logic for evaluating answers.
  var evalAnswers = function() {
    $(".key").each(function() {
      if (this.checked) {
        correctAns++;
      } else {
        wrongAns++;
      }
    });

    // Display results.
    $("#correct-answers").text("Correct Answers: " + correctAns);
    $("#wrong-answers").text("Incorrect Answers: " + wrongAns);
  };

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
        
        // Hide timer and questions.
        $("form").toggle();

        // Display outcome of game.
        $("#outcome").toggle();
        evalAnswers();
      };
    }, 1000);
  });
});
