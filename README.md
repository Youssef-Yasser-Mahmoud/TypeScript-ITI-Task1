# TypeScript Lab 1

This project contains solutions for a set of TypeScript exercises focused on interfaces, types, utility types, and classes.

## Project Structure

- `index.ts` - TypeScript source file with all lab solutions.
- `index.js` - Compiled JavaScript output.
- `index.html` - Simple HTML file to run the JavaScript in the browser.
- `lab1.txt` - Lab instructions and questions.
- `tsconfig.json` - TypeScript configuration file.
- `README.md` - Project documentation.

## Lab Questions Covered

1. **Interface with required properties**  
   Create a `User` interface and an object with only the `name` property.

2. **Interface with optional properties**  
   Create a `Profile` interface and an object with both properties.

3. **Record utility type**  
   Use `Record` to map color names to hex codes.

4. **Pick utility type**  
   Create a type with only selected properties from an interface.

5. **Omit utility type**  
   Create a type excluding a property from an interface.

6. **Union types and Exclude**  
   Create a union type and exclude a value.

7. **Union types and Extract**  
   Create a union type with only specific values.

8. **Union types and Extract (string only)**  
   Create a type from a union that only allows strings.

9. **Class with method**  
   Create a `Car` class with a method returning a description.

10. **Interface with function**  
    Create an interface that includes a function.

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) installed.

2. Compile the TypeScript file:

```sh
  tsc
```

3. Open index.html in your browser to see the output in the console.
