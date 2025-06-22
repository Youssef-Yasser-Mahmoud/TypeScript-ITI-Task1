"use strict";
/* 1- Create an interface User with properties name (string) and age (number). and it is required not optional
required create an object with only the name property. */
let obj1 = {
    name: 'Youssef',
};
console.log(obj1);
let profile1 = {
    userName: 'Youssef',
    email: 'YoussefYasser@gmail.com',
};
/* 3- Use Record to create an object where keys are "red", "green", and "blue", and values are their corresponding hex color codes (strings).
Test by accessing the red key. */
let colors = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
};
console.log(colors.red);
let newObject = {
    name: 'Youssef1',
    email: 'Youssef1@gmail.com',
};
console.log(newObject);
let newObject2 = {
    name: 'Youssef2',
    email: 'Youssef2@gmail.com',
};
console.log(newObject2);
let value1 = 'red';
console.log(value1);
let value2 = 'blue';
console.log(value2);
let stringOne = 'newString';
console.log(stringOne);
/* 9- Create a class Car with properties make (string) and model (string). Add a method getDescription that returns a string like "This is a Toyota Corolla." */
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getDescription() {
        return `This is a ${this.make} ${this.model}`;
    }
}
let car1 = new Car('Toyota', 'Corolla');
console.log(car1.getDescription());
let emp1 = {
    fName: 'Youssef',
    lName: 'Yasser',
    getFullName() {
        return `${this.fName} ${this.lName}`;
    },
};
console.log(emp1.getFullName());
