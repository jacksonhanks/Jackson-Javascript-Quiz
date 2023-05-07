//Define variables from HTML references by ID
//Highscore related variables
var viewHighScores = document.getElementById("highscores");
var HighScoreSec = document.getElementById("highscoresec");
var savedScoresList = document.getElementById("savedscores");
var scoreSection = document.getElementById("scoresection");
var currentScore = document.getElementById("score");
var inputInitials = document.getElementById("initials");
var btnSubmitScore = document.getElementById("submitscore");

//Start quiz realted variables
var inititalize = document.getElementById("inititalize");
var btnStartQuiz = document.getElementById("btnstartquiz");
var btnHomePage = document.getElementById("homepage");

//Time related variables
var time = document.getElementById("time");

//Question/answer realted variables
var questionSection = document.getElementById("questionsection");
var question = document.getElementById("questions");
var choiceOne = document.getElementById("btn1");
var choiceTwo = document.getElementById("btn2");
var choiceThree = document.getElementById("btn3");
var choiceFour = document.getElementById("btn4");

//Quiz questions and multiple-choice answers
const questions = [
    {
        question: "JavaScript primarily handles what?",
        options: [
            "Writing webpage content",
            "Formating webpage content",
            "Overall functionality of an application",
            "Managing repositories",
        ],
        answer: "Formating webpage content",
    },
    {
        question: "Which of the following displays best practice for naming a variable in JavaScript?",
        options: [
            "var quizQuestions",
            "var Quizquestions",
            "var quiz questions",
            "var quizquestions",
        ],
        answer: "var quizQuestions",
    },
    {
        question: "Which of the following keywords CANNOT be used to define a variable in JavaScript?",
        options: [
            "var",
            "div",
            "const",
            "let",
        ],
        answer: "div",
    },
    {
        question: "How would one call an element with ID from the HTML in JavaScript?",
        options: [
            "document.id()",
            "getElementById()",
            "document.getElementById()",
            "document.getelementbyid()",
        ],
        answer: "document.getElementById()",
    },
    {
        question: "How does one add a comment in JavaScript?",
        options: [
            "--comment--",
            "<!--comment-->",
            "/*comment*/",
            "//comment",
        ],
        answer: "//comment",
    },
];
