// !ES6

// class Account {
//   constructor(name, initialBalance) {
//     this.name = name;
//     this.balance = initialBalance;
//   }
//   bank = "CHASE";
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`hello ${this.name} your balance is ${this.balance}`);
//   }

// }

// const john = new Account("john", 0);
// console.log(john);
// john.deposit(100)
// console.log(john);

// !TEST
// const nameInput = document.querySelector("#name");
// const amountInput = document.querySelector("#amount");
// const depositBtn = document.querySelector(".deposit-btn");
// const result = document.querySelector(".result");

// let myBalance = 0;

// class Account {
//   constructor(name, initialBalance) {
//     this.name = name;
//     this.balance = initialBalance;
//   }
//   bank = "CHASE";
//   deposit(amount) {
//     this.balance += amount;
//     return `hello ${this.name} your balance was ${myBalance}
//     and is ${this.balance}
//     after depositing ${amount}`;
//   }
// }

// depositBtn.addEventListener("click", function () {
//   const john = new Account(nameInput.value, myBalance);
//   const amountValue = parseInt(amountInput.value);
//   if (isNaN(amountValue)) {
//     result.textContent = "please enter a value";
//     return;
//   } else {
//     result.textContent = john.deposit(amountValue);
//   }
//   myBalance = john.balance;
// });

// !END TEST

// const john = {
//   name: 'john',
//   age: 24,
// }
// const susan = {
//   name: 'susan',
//   age: 25,
// }

// const people = {
//   john: {
//     name: 'john',
//     age: 34,
//     ocupation: 'developer',
//   },
//   susan: {
//     name: 'susan',
//     age: 24,
//     ocupation: 'designer',
//   },
//   bob: {
//     name: 'bob',
//     age: 22,
//     ocupation: 'salesman',
//   },
// }

// const people2 = {
//   name: 'boby',
//   age: 29,
//   ocupation: 'dev',
// }

// console.log(Object.entries(people));
// const entry = Object.entries(people);
// const entry = Object.keys(people);
// const entry = Object.values(people);
// console.log(entry);

// const mapEntry = entry.map(function(item) {
//   return item[0];
// })
// console.log(mapEntry);

// entry.forEach()

// for (let keys of entry) {
//   if (keys === 'name') {
//     console.log(keys);
//   }
// }

// const people = {
//   john: {
//     name: 'john',
//     age: 34,
//     ocupation: 'developer',
//   },
//   susan: {
//     name: 'susan',
//     age: 24,
//     ocupation: 'designer',
//   },
//   bob: {
//     name: 'bob',
//     age: 22,
//     ocupation: 'salesman',
//   },
// }

// greet.call(people.john);

// const test = Object.entries(people).filter(item => {
//   if (item.includes('john')) {
//     return item;
//   }
// })

// !continue tutorial

// const john = {
//   name: "john",
//   age: 24,
// };
// const susan = {
//   name: "susan",
//   age: 25,
// };

// function greet(city, country) {
//   // console.log(this);
//   console.log(`hello, my name is ${this.name} and im ${this.age} years old
//   and i live in ${city}, ${country}`);
// }

// *call
// greet.call(john, 'san diego', 'us');
// greet.call(susan, 'san diego', 'us');
// greet.call({ name: 'peter', age: 30 }, 'san diego', 'us')

// *apply
// greet.apply(john, ['san diego', 'us']);
// greet.apply(susan, ['san diego', 'us']);
// greet.apply({ name: 'peter', age: 30}, ['san diego', 'us'])

// *bind
// const susanGreet = greet.bind(susan, 'toronto', 'ca');
// susanGreet();

// !button example

const counter = {
  count: 0,
  increment(){
    // console.log(this);
    this.count++;
    console.log(this.count);
  }
}
const btn = document.querySelector('.increment');
// btn.addEventListener("click", counter.increment.bind(counter));

const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment); 



