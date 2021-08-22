const paneg=document.querySelectorAll('.panel');

function toggleme(){
    this.classList.toggle('open');
}

function  func1(e){
//   console.log(e.propertyName);
if(e.propertyName.includes('flex')){

    
    this.classList.toggle('open-active');
}
}

paneg.forEach(panel=>panel.addEventListener('click',toggleme));
paneg.forEach(panel=>panel.addEventListener('transitionend',func1));