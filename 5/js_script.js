/*let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};

let array=[{user},2,3]
console.log(array[0]);*/

/*----------------------------------------- */
/*
let user1 = {
  name: "John",
  age: 30,
};
let user2 = {
  name: "Anton",
};
let user3 = {
  name: "Chyra",
  age: 24,
};
let user4 = {
  name: "Serjeo",
  age: 18,
};
let user5 = {
  name: "Piter",
  age: 60,
};

function functionUser(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (age in arr[i]) {
        if (arr[i].age===NaN) {
        arr[i].age="вечно молодой"
      }
      поиспользовать map!!!
    }

    arr[i].age += 1;
    console.log(arr[i]);
  }
  return arr;
}

let array_user = [user1, user2, user3, user4, user5];
functionUser(array_user);*/

/*функция map */
/*----------------------for in----------------------------- */
/*let object = {
  name: "Piter",
  age: 60,
};

for (key in object) {
  console.log(key,object[key]);
}*/

function isEmoty(object) {
  for (let key in object) {
      return false;
  }
  return true;
}
let object = {
  name: "Piter",
  age: 60,
};
let object2 = {};

console.log(isEmoty(object));

/* flat(infiniti) для дз3 о поднятии уровня
дз сложить только зп
let array=[{name:"Ivan",salery:1000}...]*/