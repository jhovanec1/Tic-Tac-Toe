const buttons = document.querySelectorAll('.button');
const test = document.querySelector('#two');

const button1 = document.querySelector('#one');
const button2 = document.querySelector('#two');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const button5 = document.querySelector('#five');
const button6 = document.querySelector('#six');
const button7 = document.querySelector('#seven');
const button8 = document.querySelector('#eight');
const button9 = document.querySelector('#nine');
const button10 = document.querySelector('#ten');
let message = document.querySelector('h2');
let board =['','','','','','','',''];

let click = 0;

buttons.forEach((button, index)=> button.addEventListener('click', ()=>
buttonClick(index),{once: true}))

button10.addEventListener('click', reset);


function winner(){
    if(board[0] === board[1] && board[1]=== board[2] && board[0] !== ''){
        message.innerHTML = (`Player ${board[0]} is the winner.`)
    }else if(board[0] === board[3] && board[3] === board[6] && board[0] !== ''){
        message.innerHTML = (`Player ${board[0]} is the winner.`)
    }else if(board[1] === board[4] && board[4] === board[7] && board[1] !== ''){
        message.innerHTML = (`Player ${board[1]} is the winner.`)
    }else if(board[2]===board[5] && board[5] ===board[8] && board[2] !== ''){
        message.innerHTML = (`Player ${board[2]} is the winner.`)
    }else if(board[2]===board[4] && board[4] ===board[6]&& board[2] != ''){
        message.innerHTML = (`Player ${board[2]} is the winner.`)
    }else if(board[0]===board[4]&& board[4] ===board[8]&&board[0] !== ''){
        message.innerHTML = (`Player ${board[0]} is the winner.`)
    }else if(click === 10){
        message.innerHTML = 'No winner'
        reset();
    }
}



function buttonClick(index){
    let current = index+1;
    click ++;
    message.innerHTML = '';
    winner();
    // console.log(board)
    if(current === 1){
        // console.log(click);
        if(click%2 === 0){
            button1.innerHTML = 'X';
            board[0] = 'X';
        }else{
            button1.innerHTML = 'O';
            board[0] = 'O';
        }
        
    }else if(current === 2){
        // console.log(click);
        if(click%2 === 0){
            button2.innerHTML = 'X';
            board[1] = 'X';
        }else{
            button2.innerHTML = 'O';
            board[1] = 'O';
        }
        
    }else if(current === 3){
        // console.log(click);
        if(click%2 === 0){
            button3.innerHTML = 'X';
            board[2] = 'X';
        }else{
            button3.innerHTML = 'O';
            board[2]= 'O';
            }
        
        }
    else if(current === 4){
        if(click%2 === 0){
            button4.innerHTML = 'X';
            board[3] = 'X';
        }else{
            button4.innerHTML = 'O';
            board[3] = 'O';
            }
        
    }else if(current === 5){
        if(click%2 === 0){
            button5.innerHTML = 'X';
            board[4] = 'X';
        }else{
            button5.innerHTML = 'O';
            board[4] = 'O';
        }
        
    }else if(current === 6){
        if(click%2 === 0){
            button6.innerHTML = 'X';
            board[5] = 'X';
        }else{
            button6.innerHTML = 'O';
            board[5] = 'O';
            }
        
    }else if(current === 7){
        if(click%2 === 0){
            button7.innerHTML = 'X';
            board[6] = 'X';
        }else{
            button7.innerHTML = 'O';
            board[6] = 'O';
            }
        
    }else if(current === 8){
        if(click%2 === 0){
            button8.innerHTML = 'X';
            board[7] = 'X';
        }else{
            button8.innerHTML = 'O';
            board[7] = 'O';
            }
        
    }else if(current === 9){
        if(click%2 === 0){
            button9.innerHTML = 'X';
            board[8] = 'X';
        }else{
            button9.innerHTML = 'O';
            board[8] = 'O';
            }
        
    }
    }

function reset(){
        button1.innerHTML = '';
        button2.innerHTML = '';
        button3.innerHTML = '';
        button4.innerHTML = '';
        button5.innerHTML = '';
        button6.innerHTML = '';
        button7.innerHTML = '';
        button8.innerHTML = '';
        button9.innerHTML = '';
        message.innerHTML = 'RESET';
        buttons.forEach((button)=> {
            button.removeEventListener('click', buttonClick);
        })
        
        buttons.forEach((button, index)=>button.addEventListener('click', buttonClick));

    }


