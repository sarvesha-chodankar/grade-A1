// select all elements

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1. Which of this keyword can be used in a subclass to call the constructor of superclass?",
        
        choiceA : "super",
        choiceB : "this",
        choiceC : "extent",
		choiceD : "extents",
        correct : "A"
    },{
        question : "What is the process of defining a method in a subclass having same name & type signature as a method in its superclass?",
        
        choiceA : "Method overloading",
        choiceB : "Method overriding",
        choiceC : "Method hiding",
		choiceC : "None of the mentioned",
        correct : "B"
    },{
        question : "Which of these keywords can be used to prevent Method overriding?",
        
        choiceA : "static",
        choiceB : "constant",
        choiceC : "protected",
		choiceC : "final",
        correct : "D"
    },{
        question : "Which of these is correct way of calling a constructor having no parameters, of superclass A by subclass B?",
       
        choiceA : "super(void);",
        choiceB : "superclass.();",
        choiceC : "super.A();",
		choiceC : "super();",
        correct : "D"
    },{
        question : "Using which of the following, multiple inheritance in Java can be implemented?",
        
        choiceA : "Interfaces",
        choiceB : "Multithreading",
        choiceC : "Protected methods",
		choiceC : "Private methods",
        correct : "A"
    }
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
  
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "{% static 'images/5.png ' %} " :
              (scorePerCent >= 60) ? "{% static 'images/4.png' %}" :
              (scorePerCent >= 40) ? "{% static 'images/3.png' %}" :
              (scorePerCent >= 20) ? "{% static  'images/2.png' %}" :
              "{% static 'images/1.png' %}";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";

     $.ajax({
        url: "/add_score",
        type: "GET",
        data : { request_data: score }
        }
    )

}


















