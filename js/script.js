// Objects

// const ages = 28;

// const person = {
//     name: 'johann',
//     age: ages,
//     maried: false,
//     siblings: ['margrethe', 'elise'],
//     greet: function(name) {
//         console.log(`hello my name is ${name}`);
//     },
//     sayHello(name) {
//         console.log(`hello my name is ${name}`);
//     },
//     job: {
//         title: 'developer',
//         company: {
//             name: 'codeCompanyName',
//             address: '123 main street',
//         },
//     },
//     'random-value': 'random',
// };

// // console.log(person.job.company.name);
// // console.log(person);
// console.log(person['random-value']);

// !this
// points to the left of the dot

// const john = {
//     firstName: 'john',
//     lastName: 'anderson',
//     fullName() {
//         console.log(`hello ${this.firstName} ${this.lastName}`);
//     }
// }

// // console.log(john.fullName(john.firstName, john.lastName));
// // john.fullName(john.firstName, john.lastName);
// john.fullName()

// const bob = {
//     firstName: '',
//     lastName: '',
//     fullName(one, two) {
//         console.log(`hello ${one} ${two}`);
//     }
// }

// bob.fullName('bob', 'sanders');

// console.log(this);

// function showThis() {
//     console.log(joe.profile);
// }

// const joe = {
//     firstName: 'joe',
//     lastName: 'blow',
//     age: 30,
//     profile: `${this.firstName} ${this.lastName} ${this.age}`,
// }

// showThis();
// joe.profile();

// function showThis() {
//     console.log(`${this.firstName} ${this.lastName}`);
// }

// const joe = {
//     firstName: 'joe',
//     lastName: 'blow',
//     showThis: showThis,
// }

// joe.showThis();

// !factory function

// const joe = {
//     fName: 'joe',
//     lName: 'blow',
//     sentence: 'and I love JS',
//     nameAndSentece: nameAndSentece,
// }

// // const sentence = 'and I love JS';
// function nameAndSentece() {
//     console.log(`hello my name is ${this.fName} ${this.lName} ${this.sentence}`);
// }

// // console.log(factoryFn(joe));
// joe.nameAndSentece();

// ********

// function createPerson(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         nameAndSentence() {
//             console.log(`Hello, my name is ${this.firstName} ${this.lastName} and i love JS`);
//         },
//     }
// }

// const john = createPerson('John', 'Anderson');
// john.nameAndSentence();

// const bob = createPerson('bob', 'bobson');
// bob.nameAndSentence();

// *******

// function createPerson(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         fullName() {
//             console.log(`Hello my name is ${this.firstName} ${this.lastName} and i love JS`);
//         },
//     }
// }

// const john = createPerson('John', 'Anderson')
// john.fullName();

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function() {
//       console.log(`Hello my name is ${this.firstName} ${this.lastName} and i love JS`);
//   }
// }

// const john = new Person('john', 'doe');
// john.fullName();

// !prototype

// const buy = document.querySelector(".buy");
// const buy30 = document.querySelector(".buy30");
// const sell = document.querySelector(".sell");
// const sell30 = document.querySelector(".sell30");
const leftOverH1 = document.querySelector(".left-over");
const myStore = document.querySelector(".my-store");

function Account(name, initialBalance, fee, leftOver) {
  this.name = name;
  this.fee = fee;
  this.leftOver = leftOver;
  this.initialBalance = initialBalance;
  this.currentBalance = function (
    name,
    initialBalance,
    buyOrSell,
    fee,
    leftOver
  ) {
    console.log(`${name} has ${initialBalance}, ${buyOrSell} 
        ${fee} and has ${leftOver} money left`);
  };
}

const susy = new Account();
// susy.currentBalance('susy', initial, fee, leftOver);

let withdrawAmount = 1000;
let initial = 1000;
let fee = 100;
let cheapThing = 30;
let leftOver = initial;

// buy
function buyFn(item) {
  leftOver = initial - item;
  susy.currentBalance("susy", initial, "bought for", item, leftOver);
  initial = initial - item;
}
// sell
function sellFn(item) {
  leftOver = initial + item;
  susy.currentBalance("susy", initial, "sold for", item, leftOver);
  initial = initial + item;
}

myStore.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id === "buy") {
    buyFn(fee);
    leftOverH1.textContent = `you have ${leftOver} money left`;
  } else if (id === "buy30") {
    buyFn(cheapThing);
    leftOverH1.textContent = `you have ${leftOver} money left`;
  } else if (id === "sell") {
    sellFn(fee);
    leftOverH1.textContent = `you have ${leftOver} money left`;
  } else if (id === "sell30") {
    sellFn(cheapThing);
    leftOverH1.textContent = `you have ${leftOver} money left`;
  } else if (id === "withdraw") {
    initial += withdrawAmount;
    leftOverH1.textContent = `you have withdrawn ${withdrawAmount} money`;
  }
  if (leftOver <= 0) {
    leftOverH1.textContent = `you are out of money, withdraw more to continue buying`;
  }
});
