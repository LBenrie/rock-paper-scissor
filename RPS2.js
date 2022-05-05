// window MECh
const options = {
            messageOne : 'You are Victorious!!',
            messageTwo : 'You been Defeated!!'
};

const html = `    
    <div class="selector">
        <div class="selections">      
            <div class="text">
                <h4 class="playText">${options.messageOne}</h4>
                <button class="closer">&times;</button>
            </div>
    </div>`;
const HTML = `    
    <div class="selectorT">
        <div class="selections">      
            <div class="text">
                <h4 class="playText">${options.messageTwo}</h4>
                <button class="closerT">&times;</button>
            </div>
    </div>`;
const template = document.createElement('template');
template.innerHTML = html;
const templateT = document.createElement('template');
templateT.innerHTML = HTML;

//elements of window
const closer = template.content.querySelector('.selector');
const bntclose = template.content.querySelector('.closer');
const closerT = templateT.content.querySelector('.selectorT');
const bntcloseT = templateT.content.querySelector('.closerT');

//other
const btnRock = document.querySelector('.Rock');
const btnPaper = document.querySelector('.Paper');
const btnScissors = document.querySelector('.Scissor');
const reset = document.querySelector('.resetbtn');
let pscore = 0;
let cscore = 0;
let game = 0;

// close window

closer.addEventListener('click', e => {
    if (e.target === closer) {
        closer.classList.add('selectorClose');
    };  
    pscore =0;
    cscore = 0;
    let text = document.querySelector('.resultText');
    text.textContent = ' ';
    playerScore();
    computerScore();
});


bntclose.addEventListener('click', e => {
    closer.classList.add('selectorClose');
    pscore =0;
    cscore = 0;
    let text = document.querySelector('.resultText');
    text.textContent = ' ';
    playerScore();
    computerScore();
});

// playing a game
function computerPlay() {
    let selection = Math.floor(Math.random()*3);
    if (selection === 0){
        return 'ROCK';
    } else if (selection === 1){
        return 'PAPER';
    } else {
        return 'SCISSORS'
    }
};

btnRock.addEventListener('click', e => {
    let playerSelection = 'ROCK';
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        tied();
    } else if (computerSelection === 'PAPER'){
        cscore++;
        computerScore();
        lost();
        declarWinner ()
    } else if (computerSelection === 'SCISSORS') {
        pscore++;
        playerScore();
        win ();
        declarWinner ()
    };
}); 

btnPaper.addEventListener('click', e => {
    let playerSelection = 'PAPER';
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        tied ();
    } else if (computerSelection === 'SCISSORS'){
        cscore++;
        computerScore();
        lost();
        declarWinner ()
    } else if (computerSelection === 'ROCK') {
        pscore++;
        playerScore();
        win();
        declarWinner ()
    };
});

btnScissors.addEventListener('click', e => {
    let playerSelection = 'SCISSORS';
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        tied();
    } else if (computerSelection === 'ROCK'){
        cscore++;
        computerScore();
        lost();
        declarWinner ()
    } else if (computerSelection === 'PAPER') {
        pscore++;
        playerScore();
        win();
        declarWinner ()
    };
});

// keeping score
function playerScore () {
    let player = document.querySelector('.pscore');
    player.textContent = pscore;
}
function computerScore () {
    let cpu = document.querySelector('.cscore');
    cpu.textContent = cscore;
}
//declaretions 

function win (){
    let text = document.querySelector('.resultText');
    text.textContent = "victory";
}

function tied (){
    let text = document.querySelector('.resultText');
    text.textContent = "tie";
}

function lost (){
    let text = document.querySelector('.resultText');
    text.textContent = "defeat";
}

function declarWinner (){
    if (pscore === 5 ){
        document.body.appendChild(closer)
        closerT.classList.remove('selectorClose');
    } else if (cscore === 5){
        document.body.appendChild(closerT)
        closerT.classList.remove('selectorClose');
    }
}

closerT.addEventListener('click', e => {
    if (e.target === closerT) {
        closerT.classList.add('selectorClose');
    };
        pscore =0;
        cscore = 0;
        let text = document.querySelector('.resultText');
        text.textContent = ' ';
        playerScore();
        computerScore();
})

bntcloseT.addEventListener('click', e => {
    closerT.classList.add('selectorClose');
    pscore =0;
    cscore = 0;
    let text = document.querySelector('.resultText');
    text.textContent = ' ';
    playerScore();
    computerScore();
});


//reseting game

reset.addEventListener('click', e => {
    pscore =0;
    cscore = 0;
    let text = document.querySelector('.resultText');
    text.textContent = ' ';
    playerScore();
    computerScore();
})
