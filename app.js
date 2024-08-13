let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newGamebtn=document.querySelector("#new-btn");
let msgbox=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


let turn0=true;// player 0 or player X





const disablebtn=()=>{

    boxes.forEach((box) => {
        box.disabled=true;
    });

}

const enablebtn=()=>{
    boxes.forEach((box) => {
        box.disabled=false;
        box.innerText="";
    });
}


boxes.forEach((box)=>{

    box.addEventListener("click",(e)=>{

        if(turn0){
            box.textContent="O";
            turn0=false;
        }
        else{
            box.textContent="X";
            turn0=true;
        }

        box.disabled=true;
        checkwinner();

    })


})


const checkwinner=()=>{

    for(pattern of winpattern){

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("win");
                disablebtn();
                msgbox.classList.remove("hide");
                message(pos1);
            }
        }



    }

}


const message=(content)=>{
    msg.textContent=`Congratulation! Winner is ${content}`;
}

const resetgame=()=>{
    turn0=true;
    enablebtn();
    msgbox.classList.add("hide");
}


resetbtn.addEventListener("click",resetgame);

newGamebtn.addEventListener("click",resetgame);
