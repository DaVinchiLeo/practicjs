/*function sum(x) {
  return function (y) {
    return x + y;
  };
}
alert( sum(1)(2) ); 
alert( sum(5)(-1) );*/
/*-------------------------------- */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function inBetwee(a, b) {
  return function (item) {
    return a <= item && item <= b;
  };
}
function inArray(array) {
  return function (item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return array[i];
      }
    }
  };
}

/* второй способ
function inArray(array) {
  return function(params) {
    return array.includes(params);
  }
    
}*/
alert(array.filter(inBetwee(4, 7)));
alert(array.filter(inArray([1, 2, 4, 4.4])) );
/*-------------------------------------------------------*/
