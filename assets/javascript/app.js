


$(document).ready(function () {

    //VARIABLES ============================================================
    var questionsWrong = 0;
    var questionsRight = 0;
    var questionCounter = 0;
    var count = 15;
    var clockRunning = false;
    var timer;
    var gameOverBoolean = false;

    //Array to hold question object
    var questions = [
        {
            question: "Who was Margaery Tyrell’s first husband?",
            answers: {
                a: "Stannis Baratheon",
                b: "Renly Baratheon",
                c: "Joffrey Baratheon ",
                d: "Tommen Baratheon"
            },
            correctAnswer: "Renly Baratheon"
        },
        {
            question: "What does Tyrion murder his father with?",
            answers: {
                a: "Mace",
                b: "Sword",
                c: "Crossbow",
                d: "Poison"
            },
            correctAnswer: "Crossbow"
        },
        {
            question: "What is Hodor's real name?",
            answers: {
                a: "Waif",
                b: "Wylis",
                c: "Walder",
                d: "Willem"
            },
            correctAnswer: "Wylis"
        }
        ,
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
            question: "Who killed Joffrey?",
            answers: {
                a: "Tyrion",
                b: "Sansa",
                c: "Olenna",
                d: "Arya"
            },
            correctAnswer: "Olenna"
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
            question: "Who created the White Walkers?",
            answers: {
                a: "The Night King",
                b: "The Three-Eyed Raven",
                c: "The Wights",
                d: "The Children of the Forest"
            },
            correctAnswer: "The Children of the Forest"
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
        {
            question: "Which city does Danaerys NOT conquer and liberate the slaves?",
            answers: {
                a: "Yunkai",
                b: "Astapor",
                c: "Qarth",
                d: "Mereen"
            },
            correctAnswer: "Qarth"
        },
        {
            question: "Who kills Ygritte?",
            answers: {
                a: "Olly",
                b: "Tormund",
                c: "Ser Alliser Thorne",
                d: "Jon Snow"
            },
            correctAnswer: "Olly"
        }

    ];

    var imageArray = ["assets/images/marg.jpg", "assets/images/tyrion.jpg","assets/images/hodor.jpg","assets/images/stannis.jpg","assets/images/olenna.jpg","assets/images/direwolf2.jpg","assets/images/whitewalker.jpg","assets/images/oberyn.jpg","assets/images/sparrow.jpg","assets/images/ramsay.jpg","assets/images/danyslave.jpg","assets/images/ygritte.jpg"];


    //FUNCTIONS ===============================================================


    //Function to display start screen
    function startQuiz() {
        $("#start").on("click", function () {
            questionCounter = 0;
            questionsRight = 0;
            questionsWrong = 0;
            $("#quote").hide();
            $("#start").hide();
            $("#stats").hide();
            $(".game").show();
            updateDisplay();
        });
    }


    //Function to start timer
    function timerReset() {
        count = 15;
        //If clock not running, start clock and count down
        if (!clockRunning) {
            timer = setInterval(function () {
                $("#timer").html("Time remaining: " + count--);
                clockRunning = true;

                //When count gets to 0, stop clock 
                if (count < 0) {
                    clearInterval(timer);
                    clockRunning = false;
                    $("#result").text("Time's up! The correct answer is " + questions[questionCounter].correctAnswer);
                    displayImage();
                    questionsWrong++;
                    questionCounter++;
                    console.log("Question count: " + questionCounter);
                    console.log("Right: " + questionsRight + " | Wrong: " + questionsWrong);

                    //Wait 4 seconds before moving to next question
                    setTimeout(function () {
                        $("#image-holder").hide();
                        $(".answers").show();
                        if (questionCounter < questions.length) {
                            updateDisplay();
                        } else {
                            gameOver();
                        }

                    }, 4000);
                }
            }, 1000);
        }
    }


    //Function to loop through and display question and answer choices
    function updateDisplay() {
        
        // console.log("questionCounter: ", questionCounter);
        // console.log("questions.length: ", questions.length);
        if (questionCounter === questions.length) {
            console.log("game over!!!");
            gameOver();
            
            
        } else {
            timerReset();
            for (var i = 0; i < questions.length; i++) {
                $("#question").text(questions[questionCounter].question);
                $("#answer-a").text(questions[questionCounter].answers.a);
                $("#answer-b").text(questions[questionCounter].answers.b);
                $("#answer-c").text(questions[questionCounter].answers.c);
                $("#answer-d").text(questions[questionCounter].answers.d);
                $("#result").empty();
                
            }
             
        }
    }

    function displayImage() {
        $(".answers").hide();
        $("#image-holder").html('<img src="' + imageArray[questionCounter] + '" width="600px" class="center-block img-responsive">').show();


    }


    //Function runs when the game is over
    function gameOver() {
        clearInterval(timer);
        clockRunning = false;
        console.log("game over");
        $(".game").hide();     
        $("#result").html(""); 
        $("#stats")
            .html("<h2>Thank you for playing!</h2>" +
                "<p>Correct: " + questionsRight + "</p>" +
                "<p>Incorrect: " + questionsWrong + "</p>").show();
        $("#start").text("Valar Dohaeris").show();
        
        // startQuiz();

    }




    //MAIN PROCESS ===========================================================

    $(".game").hide();
    $("#quote").show();
    $("#start").show();
    startQuiz();


    //Click event when an answer choice is clicked
    $(".answer").on("click", function () {
        var playerChoice = $(this).text();
        console.log(playerChoice);
        clearInterval(timer);
        clockRunning = false;
        displayImage();

        if (playerChoice === questions[questionCounter].correctAnswer) {
            $("#result").text("CORRECT!");
            questionsRight++;

        } else {
            $("#result").text("Nope! The correct answer is " + questions[questionCounter].correctAnswer);
            questionsWrong++;
        }

        questionCounter++;
        console.log("Question count: " + questionCounter);
        console.log("Right: " + questionsRight + " | Wrong: " + questionsWrong);
        setTimeout(function () {
            $("#image-holder").hide();
            $(".answers").show();
            if (questionCounter < questions.length) {
                updateDisplay();
            } else {
                gameOver();
            }

        }, 4000);
    });





})