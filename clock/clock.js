
const secHand=document.querySelector('.second-hand');
const minhand=document.querySelector('.minute-hand');
const hrhand=document.querySelector('.hour-hand');
function setDate(){
const d=new Date();
const hr=d.getHours();
const m=d.getMinutes();
const sethrdeg= 30*hr + m/2+90;
const setmdeg=6*m+90;
hrhand.style.transform=`rotate(${sethrdeg}deg)`;
minhand.style.transform=`rotate(${setmdeg}deg)`;
const s=d.getSeconds();
const setsdeg=6*s+90;
secHand.style.transform=`rotate(${setsdeg}deg)`;

secHand.classList.toggle("hand-transition",s!=0);

// If S is set to false, then token will only be removed, but not added. If set to true, then token will only be added, but not removed. 
}

setInterval(setDate,1000);



