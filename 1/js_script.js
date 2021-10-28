let a = 1;
let b = "тут строка";
let v = true;
let some = null;
let som2 = undefined; /*как перемены без присвоения*/
let some3 = NaN;
let some5 = Symbol;
let some6 = BigInt;

let obj = {};
let mass = [];
let test = "2" + "2" - "2" + "2";
/*
let cuest = Number( prompt('Введите второе число'));
alert("Ваше число"+cuest)
/*let cuest2= confirm();*/

/*
let vos = Number(prompt(`Введите возраст`));
if (vos <= 50) {
  alert("Молодой!!!");
} else {
  alert("Вы стары. Мое уважение");
}*/
/*
let number_1 = Number(prompt(`Число 1`));
let number_2 = Number(prompt(`число 2`));
let result=number_1+number_2;
alert(`результат операции= ${result}!`);*/

let number_1 = Number(prompt(`Число 1`));
let number_2 = Number(prompt(`число 2`));
let result;
let operation = prompt(`Какую операцию проводим?(/*-+)`);
switch (operation) {
  case "+":
    alert(result = number_1 + number_2);
    break;
  case "-":
    alert(result = number_1 - number_2);
    break;
  case "/":
    alert(result = number_1 / number_2);
    break;
  case "*":
    alert(result = number_1 * number_2);
    break;

  default:
    alert("математика не случилась");
    break;
}
