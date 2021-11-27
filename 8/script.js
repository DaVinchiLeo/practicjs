/*const obj={
  age:10,
  say:function () {
    return function () {
      return function () {
        console.log(this);
      };
      
    };
  },
};
obj.say() () ();

*/
/*
let object={
  name:"Anton",
  say:function () {
    console.log(this);
  },
};
let object2={
  name:"Pete",
  say2:function () {
    console.log(this);
  },
};

object.say();
const newFunc=object.say;
const newFunc2=newFunc2.bind(object2).say2;*/
//хз

//call applay bind готовить вопросы*/

/*
document.body.style.background="red";
let eleme=document.getElementById("element");
console.log(eleme);

*/

/*
let elem=document.querySelectorAll("div");
console.log(elem);

console.log(Array.from(elem));*/

/*
let elem0=document.querySelector("p");
let elem00=document.getElementsByTagName("p")
let elem1=document.getElementById("id1");
let elem2=document.querySelectorAll(".class");
let elem3=document.querySelectorAll("p");
console.log(elem0);
console.log(elem00);
console.log(elem3);
console.log(elem2);
console.log(elem1);*/

/*
let div=document.createElement("div");
div.className="alert"
//div.innerText="Всем ку!"
div.innerHTML="<strong>Всем ку!!!</strong>"

document.body.append(div);*/


let p=document.createElement("p");
p.className="for_p";
p.innerText="Много текста......";

let div=document.getElementById("id1");
div.append(p);
//get--это получение калекции
//Selector-это получение list 