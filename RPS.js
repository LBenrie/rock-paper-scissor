// window MECh
const options = {
            message : 'Make your choise',
            paperText : 'PAPER',
            rockText : 'ROCK',
            scissorText : 'SCISSORS',
};

const html = `    
    <div class="selector">
        <div class="selections">      
            <div class="text">
                <h4 class="playText">${options.message}</h4>
                <button class="closer">&times;</button>
            </div>
        <div class="buttonschoise">
            <button class="rock">${options.rockText}</button>
            <button class="paper">${options.paperText}</button>
            <button class="scissor">${options.scissorText}</button>
        </div>
    </div>`;
const HTML = `    
<div class="selectorT">
    <div class="selections">      
        <div class="text">
            <h4 class="playText">${options.message}</h4>
            <button class="closerT">&times;</button>
        </div>
    <div class="buttonschoise">
        <button class="rockT">${options.rockText}</button>
        <button class="paperT">${options.paperText}</button>
        <button class="scissorT">${options.scissorText}</button>
    </div>
</div>`;
const template = document.createElement('template');
template.innerHTML = html;
const templateT = document.createElement('template');
templateT.innerHTML = HTML;

//elements of window
const closer = template.content.querySelector('.selector');
const bntclose = template.content.querySelector('.closer');
const btnRock = template.content.querySelector('.rock');
const btnPaper = template.content.querySelector('.paper');
const btnScissors = template.content.querySelector('.scissor');
const closerT = templateT.content.querySelector('.selectorT');
const bntcloseT = templateT.content.querySelector('.closerT');
const btnRockT = templateT.content.querySelector('.rockT');
const btnPaperT = templateT.content.querySelector('.paperT');
const btnScissorsT = templateT.content.querySelector('.scissorT');


//base elements
const play = document.querySelector('.play');
const play5 = document.querySelector('.bof');
const reset = document.querySelector('.resetbtn');
let pscore = 0;
let cscore = 0;
let victory= 'Victory!';
let lose= 'You been Defeated';
let tie= 'Its a tie!'
let game = 0;

// play game

play.addEventListener('click', e => {
    document.body.appendChild(closer)
    closer.classList.remove('selectorClose');
    console.log("play");
});

// close window

closer.addEventListener('click', e => {
    if (e.target === closer) {
        closer.classList.add('selectorClose');
    };  
});


bntclose.addEventListener('click', e => {
    closer.classList.add('selectorClose');
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
    } else if (computerSelection === 'SCISSORS') {
        pscore++;
        playerScore();
        win ();
    };
    closer.classList.add('selectorClose');
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
    } else if (computerSelection === 'ROCK') {
        pscore++;
        playerScore();
        win();
    };
    closer.classList.add('selectorClose');
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
    } else if (computerSelection === 'PAPER') {
        pscore++;
        playerScore();
        win();
    };
    closer.classList.add('selectorClose');
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
    text.textContent = victory;
}

function tied (){
    let text = document.querySelector('.resultText');
    text.textContent = tie;
}

function lost (){
    let text = document.querySelector('.resultText');
    text.textContent = lose;
}

// best of 5

play5.addEventListener('click', e => {
    game = 0;
    document.body.appendChild(closerT)
    closerT.classList.remove('selectorClose');
});

closerT.addEventListener('click', e => {
    if (e.target === closerT) {
        if (game === 5) {
            closerT.classList.add('selectorClose');
        }else {
            console.log('cannot be closed')
        }
    };  
});
bntcloseT.addEventListener('click', e => {
        if (game === 5) {
            closerT.classList.add('selectorClose');
        } else {
            console.log('cannot be closed')
        }
});


btnPaperT.addEventListener('click', e => {
    let playerSelection = 'PAPER';
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        tied ();
    } else if (computerSelection === 'SCISSORS'){
        cscore++;
        game++;
        computerScore();
        lost();
        if (game === 5) {
            closerT.classList.add('selectorClose');
        } else {
            console.log('cannot be closed')
        }
    } else if (computerSelection === 'ROCK') {
        pscore++;
        game++
        playerScore();
        win();
        if (game === 5) {
            closerT.classList.add('selectorClose');
        } else {
            console.log('cannot be closed')
        }
    };
});

btnScissorsT.addEventListener('click', e => {
    let playerSelection = 'SCISSORS';
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        tied();
    } else if (computerSelection === 'ROCK'){
        cscore++;
        game++;
        computerScore();
        lost();
        if (game === 5) {
            closerT.classList.add('selectorClose');
        } else {
            console.log('cannot be closed')
        }
    } else if (computerSelection === 'PAPER') {
        pscore++;
        game++;
        playerScore();
        win();
        if (game === 5) {
            closerT.classList.add('selectorClose');
        } else {
            console.log('cannot be closed')
        }
    };
});

btnRockT.addEventListener('click', e => {
    let playerSelection = 'ROCK';
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        tied();
    } else if (computerSelection === 'PAPER'){
        cscore++;
        game++;
        computerScore();
        lost();
        if (game === 5) {
            closerT.classList.add('selectorClose');
        } else {
            console.log('cannot be closed')
        }
    } else if (computerSelection === 'SCISSORS') {
        pscore++;
        game++
        playerScore();
        win ();
        if (game === 5) {
            closerT.classList.add('selectorClose');
        } else {
            console.log('cannot be closed')
        }
    };

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
