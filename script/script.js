function computerPlay(){
    var choices=["rock","paper","scissor"];
    var computerChoice=Math.floor(Math.random()*choices.length);
    return choices[computerChoice];
    // console.log(choices[computerChoice],computerChoice);
}
function userPlay(){
    var userChoice = (window.prompt("Enter your Choice: ")).toLowerCase();
    return userChoice;
}

// var computerCurrentChoice=computerPlay();
// var userCurrentChoice=userPlay();

function check(computer,user){
    if (computer==user){
        return "Match tie";
    }else if((computer=="paper" && user=="rock")||(computer=="rock" && user=="scissor")||(computer=="scissor" && user=="paper")){
        return "Computer Wins";
    }else if((computer=="paper" && user=="scissor")||(computer=="rock" && user=="paper")||(computer=="scissor" && user=="rock")){
        return "You Win";
    // }else if(computer=="paper" && user=="scissor"){
    //     return "Scissor tears paper,You Win";
    // }else if(computer=="rock" && user=="paper"){
    //     return "Paper captures Rock, You Win";
    // }else if(computer=="rock" && user=="scissor"){
    //     return "Rock breaks Scissor, Computer Wins";
    // }else if(computer=="scissor" && user=="paper"){
    //     return "Scissor tears Paper, Computer Win";
    // }else if(computer=="scissor" && user=="rock"){
    //     return "Rock breaks Scissor, You Win";
    // }else return "invalid";
    }else return "Invalid Choice";
}

// function game(n){
//     while (n>0){
//         console.log(check(computerCurrentChoice,userCurrentChoice));
//         n=n-1;
//     }
// }
// game(5);
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(check(computerCurrentChoice,userCurrentChoice));

function game(i){
    while (i>0){
        let userCurrentPlay=userPlay();
        let computerCurrentPlay=computerPlay();
        console.log(check(computerCurrentPlay,userCurrentPlay));
        i-=1;

    }
}
game(4);