let gameseq=[];
let userseq=[];
let hs=0;
let h3=document.querySelector('h3');
h3.innerText =`High score:${hs}`;
let btns=["btn-1","btn-2","btn-3","btn-4"];

let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});

function flashbtn(btn){
    btn.classList.add("flash"); 
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranidx=Math.floor(Math.random() * btns.length);
    let ranbtn=btns[ranidx];
    let b=document.querySelector(`.${ranbtn}`);
    gameseq.push(ranbtn);
    flashbtn(b);
    
}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`game over.<br> Score:${level-1}<br>press any key to restart `;
        if(level-1>hs)hs=level-1;
        h3.innerText =`High score:${hs}`;
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn=this;
    flashbtn(btn);
    ucol= btn.getAttribute("id");
    userseq.push(ucol);
    checkans(userseq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}