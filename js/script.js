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

