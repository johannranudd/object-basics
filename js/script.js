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

function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        nameAndSentence() {
            console.log(`Hello, my name is ${this.firstName} ${this.lastName} and i love JS`);
        },
    }
}

const john = createPerson('John', 'Anderson');
john.nameAndSentence();

const bob = createPerson('bob', 'bobson');
bob.nameAndSentence();
