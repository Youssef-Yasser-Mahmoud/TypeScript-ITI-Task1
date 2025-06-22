/* 1- Create an interface User with properties name (string) and age (number). and it is required not optional 
required create an object with only the name property. */

interface User {
  name: string;
  age: number;
}

let obj1: Pick<User, 'name'> = {
  name: 'Youssef',
};

console.log(obj1);

/* 2- Create an interface Profile with optional properties username (string) and email (string).
required create an object with both properties. */

interface Profile {
  userName?: string;
  email?: string;
}

let profile1: Required<Profile> = {
  userName: 'Youssef',
  email: 'YoussefYasser@gmail.com',
};

/* 3- Use Record to create an object where keys are "red", "green", and "blue", and values are their corresponding hex color codes (strings). 
Test by accessing the red key. */

let colors: Record<'red' | 'green' | 'blue', string> = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
};

console.log(colors.red);

/* 4- Create an interface Person with properties name (string), age (number), and email (string).
create a new type with only the name and email properties.
Test by creating an object with these properties. */

interface Person {
  name: string;
  age: number;
  email: string;
}

type newType1 = Pick<Person, 'name' & 'email'>;

let newObject: newType1 = {
  name: 'Youssef1',
  email: 'Youssef1@gmail.com',
};

console.log(newObject);

/* 5- Use the same Person interface from the previous question.
create a new type without the age property.
Test by creating an object with only name and email. */

type newType2 = Omit<Person, 'age'>;

let newObject2: newType2 = {
  name: 'Youssef2',
  email: 'Youssef2@gmail.com',
};

console.log(newObject2);

/* 6- Create a union type Colors = "red" | "green" | "blue" | "yellow".
create a new type without "yellow".
Test by assigning a value of the new type. */

type Colors = 'red' | 'green' | 'blue' | 'yellow';

type colorType = Exclude<Colors, 'yellow'>;

let value1: colorType = 'red';

console.log(value1);

/* 7- Use the same Colors union type from the previous question.
create a new type with only "red" and "blue".
Test by assigning a value of the new type. */

type colorWithRedBlue = Extract<Colors, 'red' | 'blue'>;

let value2: colorWithRedBlue = 'blue';
console.log(value2);

/* 8- Create a union type MaybeString = string | null | undefined.
create a new type without null or undefined.
Test by assigning a value of the new type. */

type MaybeString = string | null | undefined;

type isString = Extract<MaybeString, string>;

let stringOne: isString = 'newString';

console.log(stringOne);

/* 9- Create a class Car with properties make (string) and model (string). Add a method getDescription that returns a string like "This is a Toyota Corolla." */

class Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  getDescription(): string {
    return `This is a ${this.make} ${this.model}`;
  }
}

let car1 = new Car('Toyota', 'Corolla');

console.log(car1.getDescription());

// 10- create interface with function

interface interface1 {
  fName: string;
  lName: string;
  getFullName(): string;
}

let emp1: interface1 = {
  fName: 'Youssef',
  lName: 'Yasser',
  getFullName() {
    return `${this.fName} ${this.lName}`;
  },
};

console.log(emp1.getFullName());
