/*console.log("Hello");
debugger;
console.error(2);
---------------------------*/
/*function ask(question, yes, no) {               

    if (confirm(question)) {yes()}
    else {no()};

  }
  
  function showOk() {                          
    alert( "Вы согласны." );
  }
  
  function showCancel() {                      
    alert( "Вы отменили выполнение." );
  }
  
  
  ask("Вы согласны?", showOk, showCancel);         */

/*--------------------------*/
/*function ask(question, yes, no) {
  if (confirm(question==10)) {
    return yes();
  }
  else no();
}

function yes() {
  return "Ура! Число больше"
}

function no() {
  return "О нет! Число меньше"
}

let x=Number(prompt("Число "))
ask(x, yes, no);*/

/*------------------------*/
/*let array = [1, "2", 3,4,NaN,6,undefined];

let testForEach = function (item, index, array) {
    alert(array);
};

array.forEach(testForEach);*/


/*--------------------------------------*/
/*
let array = [0, false, 2, "2string", 3, true, 4, NaN, 6, undefined];

let filterFunc = (elementmass) => {
  if (elementmass=>0) {
    return elementmass;
  }
};
alert(array.filter(filterFunc));*/
/*------------------------------------*/
let array = ["hhhhh", false, 2, "2kljhbhvg", 3, true, 4, NaN, 6, undefined];

let filterFunc = (elementmass) => {
  if (typeof elementmass==="string") {
    return elementmass;
  }
};

alert(array.filter((elementmass)=>typeof elementmass==="string"));


/*----------------------------*/
/*
let array = ["hhhhh", false, 2, "2kljhbhvg", 3, true, 4, NaN, 6, undefined];
alert(array.filter((elementmass)=>typeof elementmass==="string"));
/*---------------------------------------*/