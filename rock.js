const computerchoice = document.getElementById('computer-choice');
const userchoice = document.getElementById('user-choice');
const result= document.getElementById('result');
const choices = document.querySelectorAll('button');
let yourchoice
let computer
let results
choices.forEach(button => button.addEventListener('click',(e) => {
    yourchoice = e.target.id
    userchoice.innerHTML = yourchoice
    generatecomputerchoice()
    getresult()
}))
function generatecomputerchoice(){
    const randomnumber = Math.floor(Math.random() * choices.length)
    console.log(randomnumber)


if (randomnumber === 0){
    computer = "rock"
}
if (randomnumber === 1){
    computer = "paper"
}
if (randomnumber === 2){
    computer = "scissors"
}
computerchoice.innerHTML = computer
}
function getresult(){

    if(yourchoice === computer){
        results = 'draw'
    }
    if(yourchoice ==='rock' && computer ==='paper'){
       results = 'loss'
    }
    if(yourchoice ==='rock' && computer ==='scissors'){
       results = 'win'
    }
    if(yourchoice ==='paper' && computer ==='rock'){
       results = 'win'
    }
    if(yourchoice ==='paper' && computer ==='scissors'){
       results = 'loss'
    }
    if(yourchoice ==='scissors' && computer ==='paper'){
       results = 'win';
    }
    if(yourchoice ==='scissors' && computer ==='rock'){
       results = 'loss';
    }
result.innerHTML = results

}