//selecting every checkbox
const checkboxes=document.querySelectorAll('.inbox input[type="checkbox"]');

// console.log(checkboxes);

let lastCheck;

function handleticks(e){
    let betw=false;
    // console.log(e);
//to check if the shift key is pressed and the checkbox is checked
if(e.shiftKey && this.checked){
//loop over every single checkbox
checkboxes.forEach(checks=>{
    console.log(checks);

    if(checks===this || checks===lastCheck){
        betw=!betw;
        console.log("Checking all the checkboxes in between");
    }

    if(betw){
        checks.checked=true;
    }
});

}

    lastCheck=this;
}

checkboxes.forEach(check=>check.addEventListener('click',handleticks));


