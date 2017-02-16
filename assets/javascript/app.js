
//Declaring variables
//Variable to store user's choice
var userChoice= "";

//Variables for number of correct answers, total number of answers, 
var correct = 0;
var total= 5;
var value = false;

//How many seconds the user will have to complete the quiz
var count = 180;

//Stores timer 
var timer;


//starting the game
$(document).ready(function() {

	//When the start button is clicked, the timer starts
	$("#start").on("click", function start() {

		//Function that makes the timer decrease each second
		function run () {
 		timer = setInterval(decrement, 1000);
		}

		//Counts down seconds
		function decrement () {
		count--;

			//Converts miliseconds into minutes and seconds
			var converted = timeConverter(count);
			$("#timer").html("Time Remaining: " + converted);

			//Once timer reaches 0, stop the timer
			if (count === 0) {
				stop();
				//Displays score when timer reaches 0
				$("#score").html("Score: " + total);
				console.log(score);
			}
		}

		//Creates function to stop timer
		function stop () {
			clearInterval(timer)
		}

		run();

	//Converts seconds into minutes
	function timeConverter(t) {

		var minutes = Math.floor(t / 60);
		var seconds = t - (minutes * 60);

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		if (minutes === 0) {
			minutes = "00";
		}
		else if (minutes < 10) {
			minutes = "0" + minutes;
		}

		return minutes + ":" + seconds;
	}

//
	$("input").on("click", function() {
		value = ($(this).val())
		console.log(value);

		if (value == "true") {
			correct ++;
			console.log(correct);
		}

//Creates function when submit button is clicked
$("#submit").on("click", function () {
	
//Displays correct answers out of total questions
	$("#score").html("Score: " + correct + "/" + total);
	
	//Stops timer
	stop ();
	// $("#restart").html("<button>Play Again</button>");

	// $("#restart").on("click", function reset() {

	// });

	});	

});


});


});