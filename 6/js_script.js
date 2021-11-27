/*let user = {
  name: "Джон",
  age: 30
};

user.sayHi = function() {
  alert("Привет!");
};

user.sayHi(); 
*/

/*------------------------------------- */
/*
let user = {
  name: "Джон",
  age: 30,

  sayHI(){
  console.log(this);
  },
};
user.sayHI();*/

/*------------------------------------- */
/*function name(params) {
  console.log(this);
}
name();*/

/*----------------------------------------- */
/*
let user = {
  firstName: "Илья",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); */

/*---------------------------------------------- */
/*
function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); /*ничего */

/*------------------------------------- */
/*
let calculation = {
  read() {
    this.firstValuo = Number(prompt(`Введите число 1`));
    this.secondValuo = Number(prompt(`Введите число 2`));
    console.log(this);
  },
  sum() {
    return this.firstValuo + this.secondValuo;
  },
  mul() {
    return this.firstValuo * this.secondValuo;
  },
};
calculation.read();
alert(calculation.sum());
alert(calculation.mul());*/

/*------------------------------------------- */
/*let ladder = {
  step: 0,
  up() {
   this.step++;
   return this;
  },
  down() {
   this.step--;
   return this;
  },
  showStep: function() { // показывает текущую ступеньку
  alert( this.step );
  return this;
  }
};
/*
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1*/
/*
let newLadder=ladder;
ladder=null;
newLadder.up().up().down().showStep();*/

/*----------------------------------------------------- */
/*
function User(_name,_age,_dost) {
  this.name=_name;
  this.age=_age;
  this.dost=_dost;
  this.show=function() {
    
    if (this.dost==="admin") {
      alert("Админвадварца!!!"+ this.name + " / " + this.age+"/"+this.dost);
    }
    else{
      alert("А вот этот не админ"+ this.name + " / " + this.age+"/"+this.dost);
    }
  } 
}

let User1=new User('Vadik',34,"admin");
let User2=new User('Valodya',23,"user");


User1.show();
User2.show();*/

/*------------------------------------------------ */
/*class User {
  constructor(_name, _isAdmin) {
    this.name = _name;
    this.isAdmin = _isAdmin;
  }
  show() {
    return `${this.name} ${this.isAdmin}`;
  }
}
const anton = new User("anton", false);
const kolya = new User("kolya", true);

console.log(anton.show());
console.log(kolya.show());*/
/*------------------------------------------------- */
class Citi {
  constructor(_name, _population) {
    this.name = _name;
    this.population = _population;
  }
  show() {
    return `${this.name} ${this.population}`;
  }
  prirost(a) {
    
    return`${this.name} ${this.population+a}`;
  }
}
const Minsk = new Citi("Minsk", 20000);
const Brest = new Citi("Brest", 10000);

console.log(Minsk.show());
console.log(Brest.show());
console.log(Minsk.prirost(Number(prompt("Население выросло на-"))));
console.log(Brest.prirost(Number(prompt("Население выросло на-"))));