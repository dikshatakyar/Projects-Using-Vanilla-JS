// document.querySelector("button").addEventListener("click",function(){

//     var audio=new Audio("sounds/tom-1.mp3");
//     audio.play();
// });



for(var i=0;i<document.querySelectorAll(".drum").length;++i){
    var audio;
    document.querySelectorAll("button")[i].addEventListener("click",function(){
   
        var letter=this.innerHTML;
        mysound(letter);
        buttonanimate(letter);

      switch(letter){
        case "w":
          var tom1=new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
          case "a":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            case "s":
             var t2=new Audio("sounds/tom-2.mp3");
             t2.play();
             break;
             case "d":
               var crash=new Audio("sounds/crash.mp3");
               crash.play();
               break;
               case "j":
                 var t3=new Audio("sounds/tom-3.mp3");
                 t3.play();
                 break;
                 case "k":
                   var snare=new Audio("sounds/snare.mp3");
                   snare.play();
                   break;
                   case "l":
                     var t4=new Audio("sounds/tom-4.mp3");
                     t4.play();
                     break;
                     default:
                       alert("click on the images !");
                       break;
      }

        // this.style.color="white";
    });

   }

    document.addEventListener("keypress",function(e1){
        // console.log(e1);
        mysound(e1.key);
        buttonanimate(e1.key);

      });
  

    function mysound(key){
          
      switch(key){
        case "w":
          var tom1=new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
          case "a":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            case "s":
             var t2=new Audio("sounds/tom-2.mp3");
             t2.play();
             break;
             case "d":
               var crash=new Audio("sounds/crash.mp3");
               crash.play();
               break;
               case "j":
                 var t3=new Audio("sounds/tom-3.mp3");
                 t3.play();
                 break;
                 case "k":
                   var snare=new Audio("sounds/snare.mp3");
                   snare.play();
                   break;
                   case "l":
                     var t4=new Audio("sounds/tom-4.mp3");
                     t4.play();
                     break;
                     default:
                       alert("click on the images !");
                       break;
      }

    }

    function buttonanimate(letter){
        var Banimate=document.querySelector("."+letter);
        Banimate.classList.add("pressed");

        setTimeout(function(){
          Banimate.classList.remove("pressed");
        },500);



    }





