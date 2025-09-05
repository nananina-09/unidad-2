 //let name = prompt("Ingresa tu nombre");
 //console.log(`El nombre que ingresaste fue: ${name}`);

//function addTwoNumbers(a, b) {
    //let result = a + b;

    //console.log(`${a} + ${b} = ${result}`);
//}

//let num1 = parseInt(prompt("Ingresa el primer numero"));
//let num2 = parseInt(prompt("Ingresa el segundo numero"));

//addTwoNumbers(num1, num2);


//function addTwoNumbers2(){
    //let num1 = 14;
    //let num2 = 16;
    //let result = num1 + num2;
    //let message = `${num1} + ${num2} = ${result}`;
    //return message;
//}

//num1 = parseInt(prompt("Ingresa el primer numero"));
//num2 = parseInt(prompt("Ingresa el segundo numero"));

//let resultMessage = addTwoNumbers()
//console.log(resultMessage);

//console.log(addTwoNumbers());

let multiplyTwoNiumbers = (a, b) => {
    let result = a*b;
    let message = `Result: ${result}`;

    return message;
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));
let result = multiplyTwoNiumbers(num1, num2);

console.log(result);