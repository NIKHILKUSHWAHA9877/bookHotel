var fruit =   document.getElementById('Fruits_button');
var  vegetable = document.getElementById('Vegetables_button');
var  Fruit_sec = document.getElementById('list1');
var  veg_sec = document.getElementById('list2');
var row = document.createElement('tr')
var fname = document.createElement('td')

fruit.addEventListener('click', Flist)
 vegetable.addEventListener('click',Vlist)


function Flist(){
const xhr = new XMLHttpRequest();
xhr.open('GET' , 'vegetables.json' , true)
xhr.onload = function(){
// console.log(xhr.responseText)  //this will show data in console of chrome...

// var ourData = xhr.responseText;  ( comment = // if we will only write xhr.responsetext then it will not know that our text is JSON file and it contains objects and if we want to print only first part of our object then if we will write like this below :-  )

// console.log(ourData[0])  ( comment =// now this will only show { this curly bracket sign in console because it does not know that our data is json and it will treat { as 0th index  )


// so to overcome this problem we will use JSON.parse(xhr.responseText)

 let ourData = JSON.parse(xhr.responseText);
 console.log(ourData)
//  console.log(ourData.fruits[0]); //thiis will print data in console;

// innerhtmlinPage(ourData); // this funcion to print data in page 

var FruitString = "";
for(key in ourData){
FruitString += `<li>${ourData[key]}</li>`;


}

Fruit_sec.innerHTML = FruitString;

}


xhr.send();

}


function Vlist(){

    const xhr2 = new XMLHttpRequest()
    xhr2.open('GET' , 'fruits.json' , true)
    xhr2.onload = function (){

let ourData2 = JSON.parse(xhr2.responseText)
var vegetableList = "";
for(key in ourData2){

vegetableList += `<td>${ourData2[key]}</td>`

}
fname.innerHTML = vegetableList;
    }
    xhr2.send()
}

   


// function Vlist(){
//     const xhr2 = new XMLHttpRequest();





// }