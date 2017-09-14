var BasicCard = require("./BasicCard");
var inquirer = require("inquirer");
var CloseCard = require("./CloseCard");


var president = new BasicCard("Who was the first President of the United States", "George Washington")
var closePresident = new CloseCard("George Washington was the first President of the U.S","George Washington")

close();


function close(){
    closePresident.partial();

    inquirer.prompt([{
        type: "input",
        name: "userAnswer",
        message: "Answer question:"
    }]).then(function (answers) 
    {
console.log(answers.userAnswer)

    });


} 






function basic() {   
    console.log(president.front)
inquirer.prompt([{
    type: "input",
    name: "answer",
    message: "Answer this question: "
}]).then(function (answers) {

   if(answers.answer === president.back){console.log("You did some studying!")}

   else{console.log("Study some more!")}
   
   
   
    console.log(answers.answer)
});

}