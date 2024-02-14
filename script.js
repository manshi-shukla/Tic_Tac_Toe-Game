let button=document.querySelectorAll(".buttons");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

button.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        console.log("box was clicked");
       if(turn0){
        buttons.innerText = "M";
        turn0=false;
       }else{
        buttons.innerText = "R";
        turn0=true;
       }
       buttons.disabled=true;
       checkWinner();

    })
})

const disableBoxes=()=>{
    for(let box of button){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of button){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=button[pattern[0]].innerText;
        let pos2val=button[pattern[1]].innerText;
        let pos3val=button[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val &&pos2val==pos3val){
                console.log("winner",pos1val)
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);