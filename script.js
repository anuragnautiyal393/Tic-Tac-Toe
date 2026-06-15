let boxes=document.querySelectorAll('.box');
let turnO=true;
let newGameBtn=document.getElementById('newGame');
let msgContainer=document.querySelector('.msg-container');
let msg=document.getElementById('msg');
let resetBtn=document.getElementById('reset');
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add('hide');
};

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML='O';
            turnO=false;
        } else {
            box.innerHTML='X';
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};
    
const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations! ${winner} wins!`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of win){
        let posVall=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVall!="" && posVal2!="" && posVal3!=""  ){
            if(posVall===posVal2 && posVal2===posVal3){
               
                showWinner(posVall);
        }
    }
}
};
    
newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
