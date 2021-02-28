console.log("Hello Operators!!");

const a = 5;
const b = 10;
let result = 0;

// Arithmetic Operators //

//Addition operator
result = a + b;
console.log(result);

//Substraction operator
result = a - b;
console.log(result);

//Multiplication operator
result = a * b;
console.log(result);

//Division operator
result = a / b;
console.log(result);

//Exponnt operator
result = b ** a;
console.log(result);

//Modulo operator = 11 divided by 10 and whats the remainder
result = 11 % 10;
console.log(result);


// Comparison Operators -- Always retun Boolean values TRUE and FALSE//

// Less than Operator
result = a < b;
console.log(result);

//Less than or equal operator
result = a <= b;
console.log(result);

//Greater than operator
result = a > b;
console.log(result);

//Greater than or equal operator
result = a >= b;
console.log(result);

// Is equal to operator -- loose Equality
result = a == b;
console.log(result);

// Is NOT equal to operator -- loose
result = a != b;
console.log(result);

// Strict Equality Operator
result = a === b;
console.log(result);

// Strict Inequality Operator
result = a !== b;
console.log(result);

// Strict Equality compares the VALUES and DATA TYPE then returns the result in BOOLEAN (True or False
// Lose Equality compares the VALUES ONLY

// The Good ones are : === and !==
// The Evil Twins Are : == and !=


// Logical Operators -- OR , AND , NOT//

// AND && = Returns TRUE if all OPERANDS are TRUE
console.log( true && true );
console.log( false && false );
console.log( true && false );
console.log( true && true && true);
console.log( false && true && false);

// OR || = Returns TRUE if at least one OPERANDS is TRUE
console.log( true || false );
console.log( false || false );
console.log( true || true);
console.log( false|| true || false );
console.log( true || true || true );

// NOT ! = Converts the BOOLEAN value to the inverse - TRUE to FALSE and FALSE to TRUE
console.log(!false);
console.log(!true);
console.log(!true && !false);
console.log(!false && !false);


// Assignment Operators = , += , -= , *= , /= 

let _number = 6 ;
console.log( _number );

_number = 5 ;
console.log( _number );
console.log(_number += 5);
console.log(_number -= 5);
console.log(_number*=5);
console.log(_number/=5);