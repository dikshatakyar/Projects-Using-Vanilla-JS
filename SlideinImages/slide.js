
//The function is built to limit the number of times a function is called
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    // Calling debounce returns a new anonymous function
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
       // Should the function be called now? If immediate is true
    //  and not already in a timeout then the answer is: Yes
      var callNow = immediate && !timeout;

      // This is the basic debounce behaviour where you can call this 
    //   function several times, but it will only execute once 
    //   [before or after imposing a delay]. 
      clearTimeout(timeout);
        // Set the new timeout
      timeout = setTimeout(later, wait);

      // Immediate mode and no wait timer? Execute the function..
      if (callNow) func.apply(context, args);
    };
  };

  const slideImages=document.querySelectorAll('.slide-in');

function scrollfunc(e) {
    // console.count(e);
    slideImages.forEach(img=>{
        //when the image should slide in-halfway thro' the image
        const slideAt=(window.scrollY+window.innerHeight)-img.height/2;
        // console.log(slideAt);
        //offsetTop=the top of the image is how far from the top of the window
        //bottom of the image
        const imagebottom=img.offsetTop+img.height  //to give the actual height of the image
        const isHalfShown=slideAt>img.offsetTop;
        //slide if we have scrolled past that image
        const isnotScrolledPast=window.scrollY<imagebottom;

        if(isHalfShown && isnotScrolledPast){
            img.classList.add('active');
        }
        else{
            img.classList.remove('active');
        }
    });
}

window.addEventListener('scroll',debounce(scrollfunc));
//run debounce function after every 20 ms.