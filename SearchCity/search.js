const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities=[];
//let cities=[];
fetch(endpoint)
.then(blob=>blob.json())
.then(data=>cities.push(...data))
//.then(data=>cities=data)


function findmatches(correct,cities){
    return cities.filter(place =>{
        //if city/state matches what was searched
        const regex=new RegExp(correct,'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }


function display(){
    // console.log(this.value);
    const matcharray=findmatches(this.value,cities);
    // console.log(matcharray); 
    const html=matcharray.map(place=>{
        const regex=new RegExp(this.value,'gi');
        const cityName=place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName=place.state.replace(regex,`<span class="hl">${this.value}</span>`);
        return `
        <li>
        <span class="name">${cityName},${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    suggesting.innerHTML=html;
}


const searching=document.querySelector('.search');
const suggesting=document.querySelector('.suggestions');

searching.addEventListener('input',display);
// searching.addEventListener('keyup',display);
