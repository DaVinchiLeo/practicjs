//get--это получение калекции
//Selector-это получение list

/*
let hh=document.querySelectorAll(".class1")[0];
let pp=document.querySelectorAll(".class2")[0];
console.log(hh);
console.log(pp);
hp.style.color="brown";
pp.style.color="brown";
*/
//------------------------------------------------------------------------------------
/*let array = Array.from(document.body.querySelectorAll("p"));
for (let i = 0; i < array.length; i++) {
  array[i].style.color = "red";
}

console.log(array);*/
/*
let array = Array.from(document.body.querySelectorAll("p"));
array.forEach(function(item) {
    item.style.color="blue";
});*/
//попробывать добавление нового "стиля"
//---------------------------------------------------------------------------------------

let array=Array.from(document.body.getElementsByClassName("class3"));
array.forEach(function(item) {
    if (item.innerText==="Da_Vinchi") {
        item.innerText="New name!!!";
    }
       
    //innerHTML="<div>nkbfnjfnjg</div>" создаст див с контентом
    
});

console.log(array);
//--------------------------------------------------------------------------------------------
/*let array2=Array.from(document.body.getElementsByTagName("a"));
array2.forEach(href1 => {

    href1.innerText="Google";
    href1.href="http://google.com";
});
console.log(array2);*/
//----------------------------------------------------------------------------------------------
/*let arrayHref=[
    {name:"Google", myhref:"http://google.com"},
    {name:"Goodfon", myhref:"http://goodfon.ru"},
    {name:"VK", myhref:"http://Vkontakte.ru"},
    {name:"YouTybe", myhref:"http://youtybe.com"}

];
let array2=Array.from(document.body.getElementsByTagName("a"));
array2.forEach((item, index) => {
    item.innerText=arrayHref[index].name;
    item.href=arrayHref[index].myhref;
    
});*/
let arrayHref=[
    {name:"Google", myhref:"http://google.com"},
    {name:"Goodfon", myhref:"http://goodfon.ru"},
    {name:"VK", myhref:"http://Vkontakte.ru"},
    {name:"YouTybe", myhref:"http://youtybe.com"}

];
let array2=Array.from(document.body.getElementsByTagName("a"));
array2.forEach((item) => {
    if (!array2.length) {
        item.innerText=arrayHref[0].name;
        item.href=arrayHref[0].myhref;
         
    };
    if (array2.length) {
        item.innerText=arrayHref[0].name;
        item.href=arrayHref[0].myhref;
    };
    array2.shift();
});

