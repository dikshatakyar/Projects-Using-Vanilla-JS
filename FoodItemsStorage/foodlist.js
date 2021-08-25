const addItems=document.querySelector('.add-items');
const itemsList=document.querySelector('.plates');
const items= JSON.parse(localStorage.getItem('items')) || [];
const resetbtn=document.querySelector('.reset');
const removebtn=document.querySelector('.popitem');

function Itemfunc(e){
    e.preventDefault(); //stops the page from reloading 
    // console.log(e);
//selecting the input element :
const text =(this.querySelector('[name=item]')).value; //selecting input box which has name attribute as item
//value gives whatever the user has typed into it

    const item={
        text:text,
        done:false  //not going to be checked by default
    };

    items.push(item); //adds input in items array
    populateList(items,itemsList);
    localStorage.setItem('items',JSON.stringify(items));
//this:form element ,reset is a method of form element
 this.reset();
}

function resetfunc(){
 items.length=0;
 populateList(items,itemsList);
// console.log(items);
}

function removefunc(){
 const element=items.pop();
 populateList(items,itemsList);
 console.log(element);
}

function populateList(plates=[],platesList){
    platesList.innerHTML=plates.map((plate,i) => {
    return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done? 'checked' : ''} />
         <label for="item${i}">${plate.text}</label>
        </li>
    `;
    }).join('');
    //join-array with multiple items is converted into one big string
}


function toggleDone(e){
    if(!e.target.matches('input')) return; //skip this unless it's an input
    const el=e.target;
    const index=el.dataset.index;
    items[index].done=!items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList);
}


addItems.addEventListener('submit',Itemfunc);
itemsList.addEventListener('click',toggleDone);
populateList(items,itemsList);
resetbtn.addEventListener('click',resetfunc);
removebtn.addEventListener('click',removefunc);