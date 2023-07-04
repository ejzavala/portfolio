
$(document).ready(function(){ 
$("#answer").hide();	
var magic8Ball = {};
magic8Ball.listOfAnswers =
	[
	"It is certain",
	"It is decidedly so",
	"Signs point to yes",
	"Ask again later",
	"Better not tell you now",
	"Reply hazy, try again",
	"My sources say no",
	"Don't count on it",
	"My reply is no"
	];
magic8Ball.askQuestion= function(){
  	
$("#8ball").effect( "shake" );
	var num = Math.random();
	var randomArray = num*this.listOfAnswers.length;
	var index = Math.floor(randomArray);
	$("#answer").text(this.listOfAnswers[index]);
  $("#answer").fadeIn(4000);
};
	
	
var onClick = function() {
  
  setTimeout(
    function() {
        //console.log("I wait 3 seconds, then show!")
    }, 500);
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
     var question = prompt("What is your Question?");
     magic8Ball.askQuestion(question);
    };
$("#questionButton").click(onClick);
	});