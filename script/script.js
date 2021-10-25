// Cash the DOM
let computerScore=0;
let userScore=0;
const scoreboard_div=document.querySelector(".scoreboard");
const scoreinfo_class= document.querySelector(".score-info");
const choiceContainer_div= document.querySelector(".choice-container");
const choice_div= document.querySelector(".choice");
const result_div= document.querySelector(".result");
const userLabel_id= document.getElementById("user-label");
const computerLabel_id= document.getElementById("computer-label");
const rock_id= document.getElementById("r");
const paper_id= document.getElementById("p");
const scissor_id= document.getElementById("s");
const score_span= document.querySelector("score");
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");

function getComputerPlay(){
    var choices=["rock","paper","scissor"];
    var computerChoice=Math.floor(Math.random()*choices.length);
    return choices[computerChoice];
}
function main(){

    const paper_result=paper_id.addEventListener('click',function() {
       game("paper");
    });
    const rock_result= rock_id.addEventListener('click',function() {
        game('rock');
    });
    const scissor_result= scissor_id.addEventListener('click', function() {
        game('scissor');
    });
}

function win(user,computer){
    userScore++ ;

    const smallUserWord = "user".fontsize(1).sup();
    const smallCompWord = "comp".fontsize(1).sup();

    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${user.charAt(0).toUpperCase()+user.slice(1)}${smallUserWord.sub()} beats ${computer.charAt(0).toUpperCase()+computer.slice(1)}${smallCompWord.sub()}, You Win! `;


}

function lose(user,computer){
    computerScore++ ;

    const smallUserWord = "user".fontsize(1).sup();
    const smallCompWord = "comp".fontsize(1).sup();

    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML=`${computer.charAt(0).toUpperCase()+computer.slice(1)}${smallCompWord.sub()} beats ${user.charAt(0).toUpperCase()+user.slice(1)}${smallUserWord.sub()}, You lose. `;

}

function draw(user,computer){
    
    const smallUserWord = "user".fontsize(1).sup();
    const smallCompWord = "comp".fontsize(1).sup();
    
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML=`${computer.charAt(0).toUpperCase()+computer.slice(1)}${smallCompWord.sub()} and ${user.charAt(0).toUpperCase()+user.slice(1)}${smallUserWord.sub()}, It's DRAW. `;
}



function game(main){

    const user= main;
    const computer= getComputerPlay();

    if (computer==user){
        draw(user,computer);
    
    }else if((computer=="paper" && user=="rock")||(computer=="rock" && user=="scissor")||(computer=="scissor" && user=="paper")){
        lose(user,computer);
    
    }else if((computer=="paper" && user=="scissor")||(computer=="rock" && user=="paper")||(computer=="scissor" && user=="rock")){
        win(user,computer);

    }else console.log("Invalid Choice");
}

main();

