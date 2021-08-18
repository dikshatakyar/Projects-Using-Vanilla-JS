const canvas=document.querySelector('#draw');

const ctx=canvas.getContext('2d');
// all the drawing for the canvas in ctx
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

ctx.strokeStyle= '#51c9bb';
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=30;

//flag
let isDrawing=false; //don't draw when mouse is just moving mouse w/o doing anything

//where to start a line from and then where to end it
let lastX=0;
let lastY=0;
let hue=0;
let direction=true;

function draw(e){
    if(!isDrawing)
    return; //only run in click and drag
console.log(e);
ctx.strokeStyle= `hsl(${hue},100%,50%)`;
ctx.beginPath();
ctx.moveTo(lastX,lastY); //start from
ctx.lineTo(e.offsetX,e.offsetY); //go to
ctx.stroke(); //to actually draw the path on canvas
[lastX,lastY]=[e.offsetX,e.offsetY];
// lastX=e.offsetX;
// lastY=e.offsetY;

hue++;
if(hue>=360){
    hue=0;
}
// if(ctx.lineWidth>=80 || ctx.lineWidth<=1){
//     direction=!direction;
// }
// if(direction)
// ctx.lineWidth++;
// else
// ctx.lineWidth--;
}

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
});
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);


//to work on mobile
document.body.addEventListener("touchstart", function (e) {
    if (e.target == canvas) {
     e.preventDefault();
     clientX = e.touches[0].clientX;
     clientY = e.touches[0].clientY; 
     isDrawing=true;
     draw(clientX, clientY)
    }
  }, false);
  document.body.addEventListener("touchend", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
      isDrawing=false;
    }
  }, false);
  document.body.addEventListener("touchmove", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
      e.offsetX = e.targetTouches[0].clientX;
      e.offsetY = e.targetTouches[0].clientY;
      draw(e)
    }
  }, false);
