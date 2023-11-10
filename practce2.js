let btn = document.getElementById('result_button')
let Result = document.getElementById('Data')
btn.addEventListener('click' , getData)
function getData(){
const xhr = new XMLHttpRequest();
xhr.open('GET','https://hp-api.onrender.com/api/characters' , true)
xhr.onload = function (){

const data =    JSON.parse(xhr.responseText)
var Characthers = "";
for(things in data){
    Characthers +=  `<li>${data}</li>` 
}
Data_main.innerHTML = Characthers
}

xhr.send()
}
