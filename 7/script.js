/*let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;   //только у объектов
console.log(rabbit.eats);
console.log(rabbit.jumps);*/
/*
let user1={
  name:"Anton",
  salery:100
}
let user2={
  age:45,
  salery:5500
}
user2.__proto__=user1; 
console.log(user2.name);
console.log(user2.salery)*/

/*
let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

longEar.walk(); 
console.log(longEar.jumps);*/

/*-----------------------------------*/
/*
let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};
let longEar = {
  earLength: 10,
  __proto__: rabbit
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    console.log(`Его ${prop}`);
  } else {
    console.log(`Не его свойство ${prop}`);
  }
}
for (let prop2 in longEar) {
  let isOwn2 = longEar.hasOwnProperty(prop2);
  if (isOwn2) {
    console.log(`Его ${prop2}`);
  } else {
    console.log(`Не его свойство ${prop2}`);
  }
}*/
//наследование классов
/*
let animal = {
  eats: true,
  age: 10
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); 
let rabbit2 = new Rabbit("Black Rabbit")
console.log(rabbit.eats ); 
*/
/*
let user ={
name: "Anton",
age:23
}
function Alluser(name,age,salary) {
  this.name=name;
  this.age=age;
  this.salary=salary;
}
Alluser.prototype=user;

let myuser=new Alluser("Пользователь");
console.log(myuser.salary);*/

/*
function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");*/

let getSomeAge = () => {
  return 100;
};

function ClassUser(age) {
  this.age = age;
}

ClassUser.prototype.getSomeAge = getSomeAge;

let newuser = new ClassUser();
ClassUser.getSomeAge = getSomeAge;

console.log(newuser);
//хз разобрать!!!
