let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn1=true;

let winpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("hi")
    if(turn1){
        box.innerText="O";
        turn1=false;
    }
    else{
       box.innerText="X"; 
    turn1=true; 
    }
    box.disabled=true;
    checkwinner();
   });
});

let checkwinner=()=>{
       for(let pattern of winpattern){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        if(pos1val !="" &&pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);

            }
        }
       }
};
let showwinner=(winner)=>{
    msg.innerText=`Congratulation, you win ${winner}`;
    msgcontainer.classList.remove("hide");
disabledboxes();
}
let disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
       //enableboxes();
    }
};
 let enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        ;
    }
 }
resetbtn.addEventListener("click", ()=>{
    enableboxes();
    msgcontainer.classList.add("hide")
});