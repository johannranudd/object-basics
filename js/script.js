// Objects

const ages = 28;

const person = {
    name: 'johann',
    age: ages,
    maried: false,
    siblings: ['margrethe', 'elise'],
    greet: function(name) {
        console.log(`hello my name is ${name}`);
    },
    sayHello(name) {
        console.log(`hello my name is ${name}`);
    },
    job: {
        title: 'developer',
        company: {
            name: 'codeCompanyName',
            address: '123 main street',
        },
    },
    'random-value': 'random',
};

// console.log(person.job.company.name);
console.log(person);
console.log(person['random-value']);