// Easy Challenge
function run () {
    return "Today's exercise: Running";
}
console.log(run());

function swim () {
        return "Today's exercise: swimming" ;
}
console.log(swim());

function exercise () {
    console.log("------")
     console.log(run());
     console.log(swim());
    const startWorkout = console.log(`Lets go workout`)
    return startWorkout
}
exercise();

//Medium
const cutPizzaSlices = 8;
const sharePizza = cutPizzaSlices;

function howToSharePizza (people) {
    const totalSlices = sharePizza / people;
    return `${people} people are hungry so each person gets ${totalSlices} slices of pizza`;
}

console.log(howToSharePizza(2));
//hard
const pii = {
    firstName: "John",
    lastName: "Doe",
    SSN:function () {
        const ssnNumbers = 568234563;
        return "SSN is Private and cant be viewed."
    },
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(pii.fullName());
console.log(pii.SSN());
//Very Hard
class person {
    constructor (fullName, job, age) {
        this.fullName = fullName;
        this.job = job;
        this.age = age;
    }
    workingOut () {
        return console.log ("Running is fun!")
    }
    fetchJob () {
        return `${this.fullName} is a ${this.job}`
    }
}
class programmer {
    constructor (fullName, job, age, language) {
        person.call(fullName, job, age);
        this.language = language;
        this.busy=true;
    }
}

const idPerson = new person ("Osvaldo Ruiz", "Developer",24,"Spanish");

person.workingOut()