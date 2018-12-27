//store user input from radio button selection


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

//listen for button click 
$(".btn.btn-primary").on("click", function() {
    handleQuestionContent();
})

//$("#to-question-2").on("click", handleQuestionTwo());

//create a next button on the initial questions screen

//create a function to move to the next question

 function handleQuestionContent () 
    {$(".card-body").html ( '<strong>' +
    triviaContent.questionOne.text + '</strong>' +
    '<p> <p> <input type="radio" name="selected1">' + triviaContent.questionOne.options[0] + '</input>' + '<br> <input type="radio" name="selected1">' + triviaContent.questionOne.options[1] + '</input>' + '<br> <input type="radio" name="selected1" id="answer1">' + triviaContent.questionOne.options[2] + '</input>' + '<br> <input type="radio" name="selected1">' + triviaContent.questionOne.options[3] + '</input>' + 
        '<p> <strong>' +
        triviaContent.questionTwo.text + '</strong>' +
        '<p> <p> <input type="radio"name="selected2">' + triviaContent.questionTwo.options[0] + '</input>' + '<br> <input type="radio" name="selected2" id="answer2">' + triviaContent.questionTwo.options[1] + '</input>' + '<br> <input type="radio" name="selected2">' + triviaContent.questionTwo.options[2] + '</input>' + '<br> <input type="radio" name="selected2">' + triviaContent.questionTwo.options[3] + '</input>' + '<p> <strong>' +
            triviaContent.questionThree.text + '</strong>' +
            '<p> <p> <input type="radio" name="selected3" id="answer3">' + triviaContent.questionThree.options[0] + '</input>' + '<br> <input type="radio" name="selected3">' + triviaContent.questionThree.options[1] + '</input>' + '<br> <input type="radio" name="selected3">' + triviaContent.questionThree.options[2] + '</input>' + '<br> <input type="radio" name="selected3">' + triviaContent.questionThree.options[3] + '</input>'  + '<p> <strong>' +
                     triviaContent.questionFour.text + '</strong>' +
                    '<p> <p> <input type="radio" name="selected4">' + triviaContent.questionFour.options[0] + '</input>' + '<br> <input type="radio" name="selected4">' + triviaContent.questionFour.options[1] + '</input>' + '<br> <input type="radio" name="selected4">' + triviaContent.questionFour.options[2] + '</input>' + '<br> <input type="radio" name="selected4" id="answer4">' + triviaContent.questionFour.options[3] + '</input>'  + '<p> <strong>' +
                         triviaContent.questionFive.text + '</strong>' +
                         '<p> <p> <input type="radio" name="selected5">' + triviaContent.questionFive.options[0] + '</input>' + '<br> <input type="radio" name="selected5">' + triviaContent.questionFive.options[1] + '</input>' + '<br> <input type="radio" name="selected5" id="answer5">' + triviaContent.questionFive.options[2] + '</input>' + '<br> <input type="radio" name="selected5">' + triviaContent.questionFive.options[3] + '</input>'  + '<p> <strong>' +
                            triviaContent.questionSix.text + '</strong>' +
                             '<p> <p> <input type="radio" name="selected6">' + triviaContent.questionSix.options[0] + '</input>' + '<br> <input type="radio" name="selected6">' + triviaContent.questionSix.options[1] + '</input>' + '<br> <input type="radio" name="selected6">' + triviaContent.questionSix.options[2] + '</input>' + '<br> <input type="radio" name="selected6" id="answer6">' + triviaContent.questionSix.options[3] + '</input>' + '<p> <strong>' +
                                    triviaContent.questionSeven.text + '</strong>' +
                                    '<p> <p> <input type="radio" name="selected7">' + triviaContent.questionSeven.options[0] + '</input>' + '<br> <input type="radio" name="selected7" id="answer7">' + triviaContent.questionSeven.options[1] + '</input>' + '<br> <input type="radio" name="selected7">' + triviaContent.questionSeven.options[2] + '</input>' + '<br> <input type="radio" name="selected7">' + triviaContent.questionSeven.options[3] + '</input>' + '<p> <strong>' +
                                            triviaContent.questionEight.text + '</strong>' +
                                            '<p> <p> <input type="radio" name="selected8" id="answer8">' + triviaContent.questionEight.options[0] + '</input>' + '<br> <input type="radio" name="selected8">' + triviaContent.questionEight.options[1] + '</input>' + '<br> <input type="radio" name="selected8">' + triviaContent.questionEight.options[2] + '</input>' + '<br> <input type="radio" name="selected8">' + triviaContent.questionEight.options[3] + '</input>'  + '<p> <strong>' +
                                                    triviaContent.questionNine.text + '</strong>' +
                                                    '<p> <p> <input type="radio" name="selected9">' + triviaContent.questionNine.options[0] + '</input>' + '<br> <input type="radio" name="selected9">' + triviaContent.questionNine.options[1] + '</input>' + '<br> <input type="radio" name="selected9">' + triviaContent.questionNine.options[2] + '</input>' + '<br> <input type="radio" name="selected9" id="answer9">' + triviaContent.questionNine.options[3] + '</input>' /*+ '<p> <strong>' +
    triviaContent.questionTen.text + '</strong>' +
    '<p> <p> <input type="radio">' + triviaContent.questionTen.options[0] + '</input>' + '<br> <input type="radio">' + triviaContent.questionTen.options[1] + '</input>' + '<br> <input type="radio">' + triviaContent.questionTen.options[2] + '</input>' + '<br> <input type="radio">' + triviaContent.questionTen.options[3] + '</input>'*/    

    );

 }

//replace current HTMl with trivia questions content

//allow user to only select one answer 

//display correct and incorrect answers