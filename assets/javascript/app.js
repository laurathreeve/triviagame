
$( document ).ready(function() {
    reset();
});

//create trivia questions 
var triviaContent = {
    questionOne: {
        text: "Which of the following was not a member of the original DX?",
        options: ["Shawn Michaels", "HHH", "XPac", "Chyna"]},
    questionTwo: {
        text: "Stone Cold Steven Austin once flattened the McMahons with a high-powered hose of what substance?",
        options: ["Milk", "Beer", "Champagne", "Coke"]},
    questionThree: {
        text: "Triple H shocked the WWE universe by serectly marrying...",
        options: ["Stephanie McMahon", "Torrie Wilson", "Shawn Michaels", "Sable"]},
    questionFour: {
        text: "The Rock and Mankind famously competed in what kind of match?",
        options: ["TLC", "Hair vs. Hair", "Pink Slip on a Pole", "Empty Arena"]},
    questionFive: {
        text: "When The New Age Outlaws enter the arena, The Road Dogg begins their introduction by stating...",
        options: ["Don't You Dare Be Sour", "My Name is Enzo Amore and I am a Certified G", "Oh You Didn't Know? Your Ass Better Call Somebody", "When My Hand Goes Up, Your Mouth Goes Shut"]},
    questionSix: {
        text: "During a casket match with the Undertaker, who broke his back?",
        options: ["Mick Foley", "The Rock", "Jeff Jarrett", "Shawn Michaels"]},
    questionSeven: {
        text: "Stone Cold Steve Austin coined his famous 3:16 quote during which major PPV?",
        options: ["Royal Rumble", "The King of the Ring", "Wrestlemania", "Summerslam"]},
    questionEight: {
        text: "Gangrel, Edge, and Christian formed which group?",
        options: ["The Brood", "The Ministry", "The New Day", "The Bullet Club"]},
    questionNine: {
        text: "Which of the following vehicles has Steven Austin not driven into the arena",
        options: ["Zamboni", "Monster Truck", "Beer Truck", "Semi Truck"],
    questionTen: {
        text: "The Hardy Boyz, Edge & Christian, and The Dudleys pioneered which kind of match?",
        options: ["Mixed Match Challenge", "TLC", "Street Fight", "Elimination Chamber"]},
    }
};

var answerKey = [
    triviaContent.questionOne.options[2], 
    triviaContent.questionTwo.options[1],
    triviaContent.questionThree.options[0],
    triviaContent.questionFour.options[3],
    triviaContent.questionFive.options[2],
    triviaContent.questionSix.options[3],
    triviaContent.questionSeven.options[1],
    triviaContent.questionEight.options[0],
    triviaContent.questionNine.options[3],
];

var counter;

//listen for button click to display questions
$(".btn.btn-primary").on("click", function() {
    handleQuestionContent();
    runTimer ();
})



 function handleQuestionContent () {
    $("#startgame").hide();
    $("#description").html ('<strong>' +
    triviaContent.questionOne.text + '</strong>' +
    '<p> <p> <input type="radio" name="selected1" value="' + triviaContent.questionOne.options[0] + '">' + triviaContent.questionOne.options[0] + '</input>' + '<br> <input type="radio" name="selected1" >' + triviaContent.questionOne.options[1] + '</input>' + '<br> <input type="radio" name="selected1" value="' + triviaContent.questionOne.options[2] + '">' + triviaContent.questionOne.options[2] + '</input>' + '<br> <input type="radio" name="selected1" value="' + triviaContent.questionOne.options[3] + '">' + triviaContent.questionOne.options[3] + '</input>' + 
        '<p> <strong>' +
        triviaContent.questionTwo.text + '</strong>' +
        '<p> <p> <input type="radio"name="selected2" value="' + triviaContent.questionTwo.options[0] + '">' + triviaContent.questionTwo.options[0] + '</input>' + '<br> <input type="radio" name="selected2" value="' + triviaContent.questionTwo.options[1] + '">' + triviaContent.questionTwo.options[1] + '</input>' + '<br> <input type="radio" name="selected2"value="' + triviaContent.questionTwo.options[2] + '">' + triviaContent.questionTwo.options[2] + '</input>' + '<br> <input type="radio" name="selected2" value="' + triviaContent.questionTwo.options[3] + '">' + triviaContent.questionTwo.options[3] + '</input>' + '<p> <strong>' +
            triviaContent.questionThree.text + '</strong>' +
            '<p> <p> <input type="radio" name="selected3" value="' + triviaContent.questionThree.options[0] + '">' + triviaContent.questionThree.options[0] + '</input>' + '<br> <input type="radio" name="selected3" value="' + triviaContent.questionThree.options[1] + '">' + triviaContent.questionThree.options[1] + '</input>' + '<br> <input type="radio" name="selected3"value="' + triviaContent.questionThree.options[2] + '">' + triviaContent.questionThree.options[2] + '</input>' + '<br> <input type="radio" name="selected3" value="' + triviaContent.questionThree.options[3] + '">' + triviaContent.questionThree.options[3] + '</input>'  + '<p> <strong>' +
                     triviaContent.questionFour.text + '</strong>' +
                    '<p> <p> <input type="radio" name="selected4" value="' + triviaContent.questionFour.options[0] + '">' + triviaContent.questionFour.options[0] + '</input>' + '<br> <input type="radio" name="selected4" value="' + triviaContent.questionFour.options[1] + '">' + triviaContent.questionFour.options[1] + '</input>' + '<br> <input type="radio" name="selected4"value="' + triviaContent.questionFour.options[2] + '">' + triviaContent.questionFour.options[2] + '</input>' + '<br> <input type="radio" name="selected4" value="' + triviaContent.questionFour.options[3] + '">' + triviaContent.questionFour.options[3] + '</input>'  + '<p> <strong>' +
                         triviaContent.questionFive.text + '</strong>' +
                         '<p> <p> <input type="radio" name="selected5" value="' + triviaContent.questionFive.options[0] + '">' + triviaContent.questionFive.options[0] + '</input>' + '<br> <input type="radio" name="selected5" value="' + triviaContent.questionFive.options[1] + '">' + triviaContent.questionFive.options[1] + '</input>' + '<br> <input type="radio" name="selected5" value="' + triviaContent.questionFive.options[2] + '">' + triviaContent.questionFive.options[2] + '</input>' + '<br> <input type="radio" name="selected5"value="' + triviaContent.questionFive.options[3] + '">' + triviaContent.questionFive.options[3] + '</input>'  + '<p> <strong>' +
                            triviaContent.questionSix.text + '</strong>' +
                             '<p> <p> <input type="radio" name="selected6"value="' + triviaContent.questionSix.options[0] + '">' + triviaContent.questionSix.options[0] + '</input>' + '<br> <input type="radio" name="selected6"value="' + triviaContent.questionSix.options[1] + '">' + triviaContent.questionSix.options[1] + '</input>' + '<br> <input type="radio" name="selected6"value="' + triviaContent.questionSix.options[2] + '">' + triviaContent.questionSix.options[2] + '</input>' + '<br> <input type="radio" name="selected6" value="' + triviaContent.questionSix.options[3] + '">' + triviaContent.questionSix.options[3] + '</input>' + '<p> <strong>' +
                                    triviaContent.questionSeven.text + '</strong>' +
                                    '<p> <p> <input type="radio" name="selected7"value="' + triviaContent.questionSeven.options[0] + '">' + triviaContent.questionSeven.options[0] + '</input>' + '<br> <input type="radio" name="selected7" value="' + triviaContent.questionSeven.options[1] + '">' + triviaContent.questionSeven.options[1] + '</input>' + '<br> <input type="radio" name="selected7" value="' + triviaContent.questionSeven.options[2] + '">' + triviaContent.questionSeven.options[2] + '</input>' + '<br> <input type="radio" name="selected7" value="' + triviaContent.questionFour.options[3] + '">' + triviaContent.questionSeven.options[3] + '</input>' + '<p> <strong>' +
                                            triviaContent.questionEight.text + '</strong>' +
                                            '<p> <p> <input type="radio" name="selected8" value="' + triviaContent.questionEight.options[0] + '">' + triviaContent.questionEight.options[0] + '</input>' + '<br> <input type="radio" name="selected8"value="' + triviaContent.questionEight.options[1] + '">' + triviaContent.questionEight.options[1] + '</input>' + '<br> <input type="radio" name="selected8"value="' + triviaContent.questionEight.options[2] + '">' + triviaContent.questionEight.options[2] + '</input>' + '<br> <input type="radio" name="selected8"value="' + triviaContent.questionEight.options[3] + '">' + triviaContent.questionEight.options[3] + '</input>'  + '<p> <strong>' +
                                                    triviaContent.questionNine.text + '</strong>' +
                                                    '<p> <p> <input type="radio" name="selected9"value="' + triviaContent.questionNine.options[0] + '">' + triviaContent.questionNine.options[0] + '</input>' + '<br> <input type="radio" name="selected9"value="' + triviaContent.questionNine.options[1] + '">' + triviaContent.questionNine.options[1] + '</input>' + '<br> <input type="radio" name="selected9"value="' + triviaContent.questionNine.options[2] + '">' + triviaContent.questionNine.options[2] + '</input>' + '<br> <input type="radio" name="selected9" value="' + triviaContent.questionNine.options[3] + '">' + triviaContent.questionNine.options[3] + '</input>' + '<br> <button type="button" onclick="updateResults()" class="btn btn-primary" id="submit">' + "Submit" + '</button>'

                                                    
                                                    /*+ '<p> <strong>' +
                                                    triviaContent.questionTen.text + '</strong>' +
                                                    '<p> <p> <input type="radio">' + triviaContent.questionTen.options[0] + '</input>' + '<br> <input type="radio">' + triviaContent.questionTen.options[1] + '</input>' + '<br> <input type="radio">' + triviaContent.questionTen.options[2] + '</input>' + '<br> <input type="radio">' + triviaContent.questionTen.options[3] + '</input>'*/    

    );

 };


function updateResults () {
    var correctAnswers = compareAnswers();
    var incorrectGuesses = 9-correctAnswers;
    clearInterval(counter);
    $("#description").html ('<strong>' + "Correct : " + correctAnswers + '</strong>' + '<p>' + '<strong>' + "Incorrect : " + incorrectGuesses + '</strong>')
    $("#startgame").show();
};

function reset () {
    console.log ("blahblah")
    $("#startgame").show();
    $("#description").text ("You have one minute to answer nine questions! Press the start button below to begin the quiz and set the timer.")
};

function compareAnswers () {
    var userGuesses = []
    userGuesses.push ($("input[type=radio][name=selected1]:checked").val())
    userGuesses.push ($("input[type=radio][name=selected2]:checked").val())
    userGuesses.push ($("input[type=radio][name=selected3]:checked").val())
    userGuesses.push ($("input[type=radio][name=selected4]:checked").val())
    userGuesses.push ($("input[type=radio][name=selected5]:checked").val())
    userGuesses.push ($("input[type=radio][name=selected6]:checked").val())
    userGuesses.push ($("input[type=radio][name=selected7]:checked").val())
    userGuesses.push ($("input[type=radio][name=selected8]:checked").val())
    userGuesses.push ($("input[type=radio][name=selected9]:checked").val())
    var correct = 0;
    for (i=0; i<answerKey.length; i++) {
        if (answerKey[i] == userGuesses[i]) {
            correct++;
        }
    }
    return correct;
};


//create the timer function
function runTimer () {
    var count=60;
    $("#timer").html ('<strong>' + count + '</strong>')    
    counter=setInterval(timer, 1000); //1000 will  run it every 60 seconds
    function timer()
    {
      count=count-1;
      $("#timer").html ('<strong>' + count + '</strong>')    
      if (count <= 0)
      {
         clearInterval(counter);
         alert ("Time's Up!");
         reset ();
      }
    
    }
    
}




