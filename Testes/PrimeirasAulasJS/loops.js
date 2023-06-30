/*
for(let i = 0; i <= 10; i++){
    console.log(i);
}


const cars = ["Ferrari", "Tesla", "Mercedes"];


for (let i=0;i< cars.length; i++){
    console.log(cars[i]);
}



for (let car of cars) {
    console.log(car);
}


cars.forEach(function(car, i){
    console.log(i);
    console.log(car);
})
*/

let i = 0;

while (i < 10) {
  console.log("I menor do que 10");
  i++;
}

const person = {
  name: "Jane",
  age: "22",
};

for (property in person) {
  console.log(person[property]);
}
