//CURRENT BUGS

//allows player to continue clicking answer choice during interval wait period, speeds up clock
//when questions run out how to display game over page


$(document).ready(function(){

//VARIABLES ============================================================
var questionsWrong = 0;
var questionsRight = 0;
var playerChoice;
var questionCounter = 0;
var count = 2;
var clockRunning = false;
//Array to hold question object
var questions = [
    {
        question: "In Westeros, bastards are given a surname based on the region where they’re born. Which of the following is NOT one of the country’s official surnames?",
        answers: {
            a: "Hill",
            b: "Rivers",
            c: "Rock",
            d: "Flowers"
        },
        correctAnswer: "Rock"
    },
    {
        question: "Which of the following houses only became one of the Great Houses of Westeros after Aegon Targaryen’s invasion?",
        answers: {
            a: "House Lannister",
            b: "House Arryn",
            c: "House Tyrell",
            d: "House Martell"
        },
        correctAnswer: "House Tyrell"
    },
    {
        question: "‘The Mountain’ is the nickname for which character?",
        answers: {
            a: "Gregor Clegane",
            b: "Sandor Clegane",
            c: "Gerold Clegane",
            d: "Oberyn Martell"
        },
        correctAnswer: "Gregor Clegane"
    },
    {
        question: "Which rival king attempted to take King’s Landing during the Battle of the Blackwater?",
        answers: {
            a: "Balon Greyjoy",
            b: "Stannis Baratheon",
            c: "Robb Stark",
            d: "Renly Baratheon"
        },
        correctAnswer: "Stannis Baratheon"
    },
    {
        question: "Who was the Mad King’s firstborn son?",
        answers: {
            a: "Aegon Targaryen",
            b: "Aemon Targaryen",
            c: "Rhaegar Targaryen",
            d: "Viserys Targaryen"
        },
        correctAnswer: "Rhaegar Targaryen"
    },
    {
        question: "Which of these was NOT the name of a Stark direwolf?",
        answers: {
            a: "Lady",
            b: "Winter",
            c: "Shaggydog",
            d: "Grey Wind"
        },
        correctAnswer: "Winter"
    },
    {
        question: "Who was Margaery Tyrell’s first husband?",
        answers: {
            a: "Stannis Baratheon",
            b: "Tommen Baratheon",
            c: "Renly Baratheon",
            d: "Joffrey Baratheon"
        },
        correctAnswer: "Renly Baratheon"
    },
    {
        question: "Which house words appear alongside the sigil of House Martell?",
        answers: {
            a: "Growing Strong",
            b: "As High As Honor",
            c: "Ours is the Fury",
            d: "Unbowed, Unbent, Unbroken"
        },
        correctAnswer: "Unbowed, Unbent, Unbroken"
    },
    {
        question: "Which of the following god(s) are worshipped by the High Sparrow and his followers?",
        answers: {
            a: "The Old Gods",
            b: "The Faith of the Seven",
            c: "The Lord of Light",
            d: "The Drowned God"
        },
        correctAnswer: "The Faith of the Seven"
    },
    {
        question: "Which house is known for flaying its enemies?",
        answers: {
            a: "House Bolton",
            b: "House Greyjoy",
            c: "House Baelish",
            d: "House Tully"
        },
        correctAnswer: "House Bolton"
    },

];
var timer;


//FUNCTIONS ===============================================================

function startQuiz() {
    $(".game").hide();
    $("#start").show();
    $("#start").on("click", function(){
        $(".game").show();
        $("#start").hide();
        updateDisplay();
    });
}

//Function to start timer
function timerReset() {
    count = 2;
    //If clock not running, start clock and count down
    if (!clockRunning) {
    timer = setInterval(function(){
        $("#timer").html("Time remaining: " + count--);
        clockRunning = true;

        //When count gets to 0, stop clock 
        if (count < 0){
            clearInterval(timer);
            clockRunning = false;
            $("#result").text("Time's up! The correct answer is " + questions[questionCounter].correctAnswer); 
            questionsWrong++;
            questionCounter++;
            console.log("Question count: " + questionCounter);
            console.log("Right: " + questionsRight + " | Wrong: " + questionsWrong); 
            
            //Wait 4 seconds before moving to next question
            setTimeout(function(){
                updateDisplay();
            }, 2000);
        }           
    }, 1000);
}
}

        


//Function to loop through and display question and answer choices
function updateDisplay(){
    timerReset();
    for (var i=0; i<questions.length; i++) {
        $("#question").text(questions[questionCounter].question);
        $("#answer-a").text(questions[questionCounter].answers.a);
        $("#answer-b").text(questions[questionCounter].answers.b);
        $("#answer-c").text(questions[questionCounter].answers.c);
        $("#answer-d").text(questions[questionCounter].answers.d);  
        $("#result").empty();
        if (questionCounter === questions.length) {
            gameOver();
        }
    }  
}


//=====================================================================
//when questions run out, keep getting error that question is undefined. How do i get the loop to stop when questions done???

//=====================================================================


//Function runs when the game is over
function gameOver() {
        clearInterval(timer);
        clockRunning = false;
        console.log("game over");
        $('.stats')
         .html("<h3>Thank you for playing!</h3>" +
         "<p>Correct: " + questionsRight + "</p>" +
         "<p>Incorrect: " + questionsWrong + "</p>");
       $('#game').hide();
       $('#start').show("<div>Valar Dohaeris</div>");

}




//MAIN PROCESS ===========================================================



startQuiz();

//Click event when an answer choice is clicked
 $(".answer").on("click", function(){
     var playerChoice = $(this).text();
        console.log(playerChoice);
        clearInterval(timer);
        clockRunning = false;

        if (playerChoice === questions[questionCounter].correctAnswer){
            $("#result").text("CORRECT!");
            questionsRight++;
            
        } else {
            $("#result").text("Nope! The correct answer is " + questions[questionCounter].correctAnswer); 
            questionsWrong++;       
        }

        questionCounter++;
        console.log("Question count: " + questionCounter);
        console.log("Right: " + questionsRight + " | Wrong: " + questionsWrong); 
        setTimeout(function(){
            updateDisplay();
        }, 2000);
 });










})