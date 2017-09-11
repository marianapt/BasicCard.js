var require = require("inquirer");


var basicFlashCardArr =[];  

function BasicCard(back,front){
  
   this.back=back;
    this.front=front;

};

function addFlashCard(){

   inquirer.prompt([
        {type:"input",
        message:"Front of the Card",
        name:"front"},
        {type:"input",
        message:"Back of the Card",
        name:"back"}
    ]).then(function(data){
        var basicFlashCard= new BasicCard(data.back,data.front);
      
        basicFlashCardArr.push(basicFlashCard);
        console.log(basicFlashCardArr);
    });


}

if(process.argv[2]=="Basic"){
addFlashCard();

}


module.exports=BasicCard;