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

const people = {
  john: {
    name: 'john',
    age: 34,
    ocupation: 'developer',
  },
  susan: {
    name: 'susan',
    age: 24,
    ocupation: 'designer',
  },
  bob: {
    name: 'bob',
    age: 22,
    ocupation: 'salesman',
  },
}

// function greetFn(item) {
//   const newPeople = 
// }
// function greet() {
//   // console.log(this);
//     console.log(`hello ${this.name} you are ${this.age} 
//     years old ocupation is ${this.ocupation}`);
  
// }

// // console.log(people.john.ocupation);
// greet.call(people.john);

// greet.call(john);
// greet.call(susan);