$(document).ready(function(){

//VARIABLES ============================================================
var questionsWrong = 0;
var questionsRight = 0;
var playerChoice;
var questionCounter = 0;
var pause = false;
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



//loop through each question
//  display question and answers
//  start countdown timer (function)
//      on click of answer: (function)
//          if answer correct, in #result div display "Correct! 
//              replace #answers html with image/gif
//              questionsRight++
//          else if answer incorrect, in #result div display "Nope! The correct answer is: " + correctAnswer
//              replace #answers html with image/gif
//              questionsWrong++
//          else if timeRemaining = 0, in #result div display "Your time is up! The answer is: " + correctAnswer
//              replace #answers html with image/gif
//              questionsWrong++
//          after 5 seconds, go to next question (setTimeout?)
//end for loop

//after all questions are finished, display results "You missed " + questionsWrong + " questions!" 
//startOver (function)

//FUNCTIONS =====================================================================
var count = 30;
//Function to start timer
function timerReset() {
    
    var timer = setInterval(function(){
        $("#timer").html("Time remaining: " + count--);
        if (count < 0){
            clearInterval(timer);
            alert("Time's Up!");
            return;  
        } else if (pause === true){
            clearInterval(timer);
        }
    }, 1000);
}

timerReset();



//Function to display question and answer choices
function updateDisplay(){
    console.log("test");
    for (var i=0; i<questions.length; i++) {
        $("#question").text(questions[questionCounter].question);
        $("#answer-a").text(questions[questionCounter].answers.a);
        $("#answer-b").text(questions[questionCounter].answers.b);
        $("#answer-c").text(questions[questionCounter].answers.c);
        $("#answer-d").text(questions[questionCounter].answers.d);  
        $("#result").empty();  
    }  

}



// only need one click event. set class to all answer divs, when click on that class, $(this). ".....""

 $(".answer").on("click", function(){
     var playerChoice = $(this).text();
        console.log(playerChoice);
        pause = true;
        if (playerChoice === questions[questionCounter].correctAnswer){
            $("#result").text("Correct!");
            questionsRight++;
            questionCounter++;
            // count = 30;
            // console.log(timer);
            setTimeout(function(){
                updateDisplay();
            }, 5000); 
            // timerReset();
            
        } else {
            $("#result").text("Nope! The correct answer is " + questions[questionCounter].correctAnswer); 
            questionsWrong++;
            questionCounter++;
            clearInterval(timer);
            setTimeout(function(){
                updateDisplay();
            }, 5000);
            // timerReset();
        }
 });

updateDisplay();













})