/*
class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);

        }

        static speak(){
            console.log("Hellow World");
        }

};


const person = new Person('Jane', "Doe", 40);

person.getFullName();

Person.speak();
*/

class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} fez barulho`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    speak(){
        console.log(`${this.name} Latiu!`)
    }
}

const animal = new Animal("Simba");
const dog = new Dog("Bob")


animal.speak();
dog.speak();