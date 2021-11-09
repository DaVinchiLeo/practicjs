/*const array=[1,1,1,1];
array.length > 0?alert("More then 0"):alert("less then 0");*/

/*function FerstFunction(name) {
    const hiString = `hi ${name}`;
    
    return hiString;
}

alert(FerstFunction());
*/
/*
function calcul(namber1=1, namber2=1,operation="+") {
    namber1= Number(prompt(`введите первое число`));
    namber2= Number(prompt(`введите второе число`));
    operation= prompt(`Тип операции (+/-*)`);
    let summ
    switch (operation) {
        case "-":
        summ = Number(namber1 - namber2);
          break;
        case "/":
        summ = Number(namber1 / namber2);
          break;
        case "*":
        summ = Number(namber1 * namber2);
          break;
          case "+":
        summ = Number(namber1 + namber2);
            break;
        default:
        summ = Number(namber1 + namber2);
          break;
    }
    
    if(summ>10){
        return "More then 10! "+summ;
    }
    return "Less then 10! "+summ;
}
alert(calcul());*/
/*
function getArgum(a,b,c) {
    alert(arguments.length);
    for(let i=0; i<arguments.length;i++)
{
    alert(arguments[i])
}
}
getArgum("a","b","c","d")*/


/*это еще запись функции*/
/*const someFunc=()=>{};
someFunc();*/



/*
function fuct(n) {
    if (n<=0) return1;
    return n=fuct(n-1);
  }
  
  const fuct2=(n=1)=>{
   n= Number(prompt(`введите n`));
    if (n<=10) return 1;
    return n=fuct2(n-1);
  }
 alert(fuct2())*/


 /*
 const array=[1,2,3,4,5,6,7,8,9,10];
 array[2];

 const someF=()=>{
     return 1;
 }

 const obj={name:"Name",namber:someF(),"name surname":false};
const name="name+surname"
 obj.name;*/

 /*
 const array=["a","b",3,4];
 array.forEach((item, index, array)=>{
 alert(`${item}`,`${index}`,`${array}`);
 });*/