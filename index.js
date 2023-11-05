const buttons = document.querySelectorAll(".buttons button");
const turn = document.querySelector(".playZone span");
const winDis = document.querySelector(".playZone h1");
const restart = document.querySelector(".restartBtn");

var move = 0;
var arrayX = [];
var arrayO = [];
var bothMove = [];
var winMoveX = [];
var winMoveO = [];
var over = false;
var winner = null;
var hola = true;


document.querySelector(".home button").addEventListener("click", play);

function play(){
    document.querySelector(".home").style.display = "none";
    document.querySelector(".playZone").style.display = "flex";
}



buttons[0].addEventListener("click", function(){
    if(hola){moveProcess(this);} else{wrongMove(this);}} );
buttons[1].addEventListener("click", function(){
    if(hola){moveProcess(this);} else{wrongMove(this);}} );
buttons[2].addEventListener("click", function(){
    if(hola){moveProcess(this);} else{wrongMove(this);}} );
buttons[3].addEventListener("click", function(){
    if(hola){moveProcess(this);} else{wrongMove(this);}} );
buttons[4].addEventListener("click", function(){
    if(hola){moveProcess(this);} else{wrongMove(this);}} );
buttons[5].addEventListener("click", function(){
    if(hola){moveProcess(this);} else{wrongMove(this);}} );
buttons[6].addEventListener("click", function(){
    if(hola){moveProcess(this);} else{wrongMove(this);}} );
buttons[7].addEventListener("click", function(){
    if(hola){moveProcess(this);} else{wrongMove(this);}} );
buttons[8].addEventListener("click", function(){
    if(hola){moveProcess(this);} else{wrongMove(this);}} );

    
   


function wrongMove(e){
    e.classList.add("wrongMove");

    setTimeout(function(){
        e.classList.remove("wrongMove");
    }, 300);
}


function isOver(record, candy){
    var result, x1, x2, x3, x4, x5, x6, x7, x8, x9;
    x1=false;x2=false;x3=false;
    x4=false;x5=false;x6=false;
    x7=false;x8=false;x9=false;
        for(i = 0; i < record.length; i++){
            if(record[i]==1){x1=true;}
            if(record[i]==2){x2=true;}
            if(record[i]==3){x3=true;}
            if(record[i]==4){x4=true;}
            if(record[i]==5){x5=true;}
            if(record[i]==6){x6=true;}
            if(record[i]==7){x7=true;}
            if(record[i]==8){x8=true;}
            if(record[i]==9){x9=true;}
        }
    if(x1 && x2 && x3){result=true; candy.push(1); candy.push(2); candy.push(3);}
    else if (x4 && x5 && x6){result=true; candy.push(4); candy.push(5); candy.push(6);}
    else if(x7 && x8 && x9){result=true; candy.push(7); candy.push(8); candy.push(9);}
    else if(x1 && x4 && x7){result=true; candy.push(1); candy.push(4); candy.push(7);}
    else if(x2 && x5 && x8){result=true; candy.push(2); candy.push(5); candy.push(8);}
    else if(x3 && x6 && x9){result=true; candy.push(3); candy.push(6); candy.push(9);}
    else if(x1 && x5 && x9){result=true; candy.push(1); candy.push(5); candy.push(9);}
    else if(x3 && x5 && x7){result=true; candy.push(3); candy.push(5); candy.push(7);}
    else{result=false;}

    return result;
}




function moveProcess(e){
    if(!bothMove.includes(Number(e.getAttribute("class")))){
        if(move==0){
            e.innerText = "X";
            move++;
            turn.innerText = "O";
            turn.style.color = "var(--oColor)";
            e.style.color = "var(--xColor)";
            
            arrayX.push(Number(e.getAttribute("class")));
            bothMove.push(Number(e.getAttribute("class")));
            
            if(isOver(arrayX, winMoveX)){
                winner = 'X';
                over = isOver(arrayX, winMoveX);
                declaration(winMoveX, "var(--xColor)");
                restart.style.opacity = "1";
            } else if(bothMove.length === 9){
                winDis.innerText = "it's a Tie!";
                restart.style.opacity = "1";
            }
            

        } else{
            e.innerText = "O";
            move--;
            turn.innerText = "x";
            turn.style.color = "var(--xColor)";
            e.style.color = "var(--oColor)";

            arrayO.push(Number(e.getAttribute("class")));
            bothMove.push(Number(e.getAttribute("class")))
            
            
            
            if(isOver(arrayO, winMoveO)){
                winner = 'O';
                over = isOver(arrayO, winMoveO);
                declaration(winMoveO, "var(--oColor)");
                restart.style.opacity = "1";
            } else if(bothMove.length === 9){
                winDis.innerText = "it's a Tie!";
                restart.style.opacity = "1";

            }
        }
    } else{
        wrongMove(e);
    }
}

function declaration(array, color){
    document.querySelector(`#b${array[0]}`).classList.add("winRise");
    document.querySelector(`#b${array[1]}`).classList.add("winRise");
    document.querySelector(`#b${array[2]}`).classList.add("winRise");

    winDis.innerHTML = `<span>${winner}</span> Won the Game!`;
    document.querySelector(".playZone span").style.color = color;
    hola = false;
}

restart.addEventListener("click", function(){
    if(restart.style.opacity === '1'){
        move = 0;
        arrayX = [];
        arrayO = [];
        bothMove = [];
        winMoveX = [];
        winMoveO = [];
        over = false;
        winner = null;
        hola = true;
        restart.style.opacity = "0";

        for(i = 0; i<9; i++){
            buttons[i].innerText = '';
            buttons[i].classList.remove("winRise");
        }
        winDis.innerHTML = "<span>x</span>'s turn!";
    }
    
    
})