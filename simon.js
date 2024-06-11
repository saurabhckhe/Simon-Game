let gameSeq=[];
let userSeq=[];
let btns=["yellow","purple","red","green"];

let start=false;
let level=0;
let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game is started");
        start=true;
        levelup();
    }

})

function gameflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelup()
{
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random() * 3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    //random btn choose
    gameflash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! your score was<b> ${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },200);
        reset();
    }

}

function btnpress(){
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}


let allbtn=document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
