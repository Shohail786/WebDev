let person={
    name:"Rahul",
    age:28,
    "1":"value1",
    "my choice":"value",
    run:function(){
        console.log("Start Running")
    },
    habits:['reading','playing football'],
    car:{
        name:"Audi",
        color:"White"
    }


};

console.log(person["1"]);
let a ="name";
console.log(person[a]);
console.log(person.a);
// let { name }=person;
// console.log(name);
let {name,age}=person;
console.log(name)
console.log(age)
person.name="AAbhu";
console.log(person.name)
person['name']='Abhi';
console.log(person['name']);

person.gender="Male";
console.log(person);
person['city']="Hyderabad";
console.log(person);

person.run();
console.log(person.habits);
console.log(person.habits[0]);
console.log(person["habits"][0]);
console.log(person.car);
console.log(person.car.name);
console.log(person["car"]["name"]);