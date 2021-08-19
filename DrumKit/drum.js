window.addEventListener('keydown',function(e1){
    // console.log(e1);
    const audio=document.querySelector( `audio[data-key="${e1.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e1.keyCode}"]`);
    // console.log(key);
    // console.log(audio);
    if(!audio)
    return;
    audio.currentTime=0; 
    audio.play();
    key.classList.add('playing');
  });

    const keys=document.querySelectorAll('.key');
    keys.forEach(key=>key.addEventListener('transitionend',removetransition));
    
    function removetransition(e1){
      // console.log(e1);
      if(e1.propertyName!=='transform')
      return;
      this.classList.remove('playing');
    }