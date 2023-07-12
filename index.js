
//Question 1
let length = 10;
let width = 7;

let area = length * width;
console.log(area) 

width += 2;
console.log(width)

let perimeter = 2 * (length + width);
console.log(perimeter)

 console.log(`The area of the rectangle is: ${area}`);
console.log(`The perimeter of the rectangle is: ${perimeter}`);

let squareRootA = Math.sqrt(area);
console.log(squareRootA)

 console.log(`The square root of the area is: ${squareRootA}`);

let areaString = area.toString();
console.log(areaString)



console.log(areaString.length);

//Question 2

let initialPrice = 15;
let quantity = 3;

console.log(`Initial Price = ${initialPrice}`);
console.log(`Quantity = ${quantity}`);


initialPrice -= initialPrice * 0.2;


quantity++;


let totalPrice = initialPrice * quantity;


let result = `Updated Price = ${initialPrice},
Updated Quantity = ${quantity} and
Total Price = ${totalPrice}`
console.log(result);

//Question 3







//Question 4

// Step 1: Answer
let fullName = 'Mireya Prince';

// Step 2: Answer
let firstName = fullName.split(' ')[0];
let lastName = fullName.split(' ')[1];

// Step 3: Answer
let capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

// Step 4: Answer
let reversedLastName = lastName.split('').reverse().join('');

// Step 5: Answer
let fullNameLength = fullName.length;

// Step 6: Answer
let containsLetterA = fullName.toLowerCase().includes('a');

// Step 7: Answer
console.log(`Full Name: ${fullName}`);
console.log(`First Name: ${capitalizedFirstName}`);
console.log(`Last Name (Reversed): ${reversedLastName}`);
console.log(`Full Name Length: ${fullNameLength}`);
console.log(`Contains Letter A?: ${containsLetterA}`);