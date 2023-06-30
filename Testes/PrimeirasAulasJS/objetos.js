/*
const person = {
    firstName: 'Eduardo',
    lastName: 'Sanches',
    age: "19",
    hobbies: ['Skate', 'Lost ark'],
    dog:{
        name:'Princesa',
        age: '4',
    }
};

// const firstName = person.firstName;
// const lastName = person.lastName;
//const age = person.age;
// const hobbies = person.hobbies;

//Mesma coisa
const {firstName,lastName,age,hobbies,dog} = person;

const la = person.hobbies[1];

 console.log(firstName);
 console.log(lastName);
 console.log(age);
 console.log(hobbies);
 console.log(la);



 console.log(person)


---------------------------------------------------------
*/

const todos = [
  {
    id: 1,
    description: "Estudar Programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Farmar gold no Lost ark",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

const descriptionOfLastTodo = todos[2].description;
console.log(descriptionOfLastTodo);
