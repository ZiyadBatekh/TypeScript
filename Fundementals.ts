/* To get the tsconfig.ts file run this command in the terminal 
   tsc --init
   */


/* JS Types :

1- number
2- string
3- boolean
4- null 
5- undefined
6- object

TS Types : 
1- any 
2- unknown 
3- never 
4- enum 
5- tuple
*/

// -------------------------------------------

// 1- The "any" Type

// const a;     // a is from type any as long as I didn't determine a type for it.

function render(document){   // you should determine the type of document parameter (document:number,string...etc)
    console.log(document);
}

// ...........................................................

// 2- Arrays

//let n:number[] = [1,2,3 , "a"]       // you cannot write "a" because its type is number[] but this is a valid js code
//numbers.forEach(n => n.property)   //here after you type n. it will only show the properties and methods of number objects because numbers of type number[])
let numbers = []      // This will be an array of type any.

//.........................................................................

// 3- Tuples 

let user:[number, string]= [1, "a"];   // you should only use tuples with 2 values.

// ...............................................................................

// 4- Enums 

// We use enums to represent a list of related constants.
// We use PascalNaming convention for the enum name and the properties. 
// when dealing with numbers you determine the value of the first element which is small here and enum by defult will determine the other as here it will make medium and large equals to 2 and 3
// We make enum as a const only to optimize the JS generated Code.
const enum Size {Small=1 , Medium , Large}

let mySize:Size = Size.Medium
console.log(mySize);

// ..................................................................................

// 5- Functions & Objects but this will be better in the next section



