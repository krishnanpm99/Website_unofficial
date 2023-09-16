// const myBoolean = true;
// const myString = 'hello world';
// const firstNumber = 20;
// let secondNumber = 40;
// secondNumber = 80;
// const myArray=[myBoolean, myString]
// const myObject={firstProperty:myArray, sumProperty:(firstNumber+secondNumber)}

// console.log(myObject);
// console.log(myObject.sumProperty);
// console.log(myObject.firstProperty(1));


//Factorial of any number
let factorial = prompt("Enter any number!:");
let io =1;
for(io=(factorial-1);io<=1;io--;) {
  let result = (factorial)*(i-1)
  console.log("The factorial of ", factorial, "is", result);
}



//Tables ranging from 1 to 10
let start = prompt("Enter the Multiplication table start:");
let end = prompt("Enter the Multiplication table end:");
let range = prompt("Enter the Multiplication table range:");
console.log("The multiplication table:");

for (let i=start; i<=end; i++) {
    console.log("Tables for:",i)
    for (let c=0; c<=range; c++){
    console.log(i,"times ", c,"is", i*c)
}
}

//Multiplication
start = prompt("Enter the number for multiplication:");
end = prompt("Specify the ending number:");
console.log("Multiplication table for which number ", start, "ranging till", end);
let multiplyArray = [];
    for(i=0; i<=end; i++){
        result = (start*i);
        console.log(start, "times ", i, "gives ",result)
    }

//Print Odd numbers
console.log("This is a following odd numbers ranging from 1 to 35:")
let i = 1;
for (i;i<=35; i++) {
    if ((i%2)!=0)
    console.log("This is the one you were expecting right!:", i)
    else
    console.log("This is a not a odd number",i)
};