const pressed=[];
const secretCode='takyar';

window.addEventListener('keyup',(e)=>{
    // console.log(e.key);
    pressed.push(e.key);

    pressed.splice(-secretCode.length-1,pressed.length-secretCode.length);

if(pressed.join('').includes(secretCode)){
     console.log('Woahu ! Secret Code Unlocked');
     cornify_add();
}
console.log(pressed);
});


//The join() method creates and returns a new string by concatenating all of the elements in an array