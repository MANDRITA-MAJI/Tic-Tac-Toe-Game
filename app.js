let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let winnerPage = document.querySelector(".page2");
let newGameBtn = document.querySelector("#new-game");
let msg = document.querySelector(".msg");
let container = document.querySelector(".container");

let player0 = document.querySelector(".player0");
let playerx = document.querySelector(".playerx");
//dispaly
winnerPage.style.display = "none";


let turn0 = true; //playerx //player0;

const winPattern =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
    ];

flag = 0;
let moveCount = 0;

player0.classList.add("changeplayer");
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            player0.classList.remove("changeplayer");
            playerx.classList.add("changeplayer");
        }
        else{
            turn0 = true;
            box.innerText = "X";
            player0.classList.add("changeplayer");
            playerx.classList.remove("changeplayer");
        }
        box.disabled = true;
        moveCount++;
        checkWinner();
    });

} );

resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        turn0 = true;
        box.disabled= false;
    })
    turn0 = true;
    flag = 0;           // Reset winner flag
    moveCount = 0;      // Reset move counter
    player0.classList.add("changeplayer");
    playerx.classList.remove("changeplayer");
})

newGameBtn.addEventListener("click",()=>{
    container.style.display = "flex";
    winnerPage.style.display = "none";
    resetbtn.classList.remove("hide");
    boxes.forEach((box)=>{
        box.innerText = "";
        turn0 = true;
        box.disabled= false;
    })
    turn0 = true;
    flag = 0;           // Reset winner flag
    moveCount = 0;      // Reset move counter
    player0.classList.add("changeplayer");
    playerx.classList.remove("changeplayer");
})

const showWinner = (winner) =>{
    msg.innerText =`Congartulation, Winner is ${winner}`;
}

const drawMatch = () =>{
    msg.innerText = "It's a draw! Try again.";
}


const checkWinner = () => {
    for(let pattern of winPattern){
         let pos1 = boxes[pattern[0]].innerText;
         let pos2 = boxes[pattern[1]].innerText;
         let pos3 = boxes[pattern[2]].innerText;
        if(pos1!= "" && pos2!= "" && pos3 != ""){
            if(pos1 === pos2 && pos2=== pos3){
                console.log("winner is",pos1);
                container.style.display = "none";
                resetbtn.classList.add("hide");
                winnerPage.style.display = "flex";
                showWinner(pos1);
                flag = 1;
                return;
            }
        }
    }
    if(flag ==0 && moveCount == 9){
        console.log("draw");
        container.style.display = "none";
        resetbtn.classList.add("hide");
        winnerPage.style.display = "flex";
        drawMatch();
    }
};

