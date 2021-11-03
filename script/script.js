// Cash the DOM
let computerScore=0;
let userScore=0;

const result_div= document.querySelector(".result");
const rock_id= document.getElementById("rock");
const paper_id= document.getElementById("paper");
const scissor_id= document.getElementById("scissor");
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
    const userChoice_div = document.getElementById(user);
    const smallUserWord = "user".fontsize(1).sup();
    const smallCompWord = "comp".fontsize(1).sup();
    userScore++ ;

    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${user.charAt(0).toUpperCase()+user.slice(1)}${smallUserWord.sub()} beats ${computer.charAt(0).toUpperCase()+computer.slice(1)}${smallCompWord.sub()}, You Win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
    
    if (userScore==5){
        stop("WON");

    }

}

function lose(user,computer){
    const smallUserWord = "user".fontsize(1).sup();
    const smallCompWord = "comp".fontsize(1).sup();
    const userChoice_div = document.getElementById(user);
    computerScore++ ;

    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML=`${computer.charAt(0).toUpperCase()+computer.slice(1)}${smallCompWord.sub()} beats ${user.charAt(0).toUpperCase()+user.slice(1)}${smallUserWord.sub()}, You lose. `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
    
    if (computerScore==5){
        stop("LOSE");
    }

}

function draw(user,computer){ 
    const smallUserWord = "user".fontsize(1).sup();
    const smallCompWord = "comp".fontsize(1).sup();
    const userChoice_div = document.getElementById(user);

    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML=`${computer.charAt(0).toUpperCase()+computer.slice(1)}${smallCompWord.sub()} and ${user.charAt(0).toUpperCase()+user.slice(1)}${smallUserWord.sub()}, It's DRAW. `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);

}

function stop(winner){
    userScore=0;
    computerScore=0;
    result_div.innerHTML=`YOU ${winner}, Click on Rock, Paper OR Scissor icons to play again. `;

}


function game(user){
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

