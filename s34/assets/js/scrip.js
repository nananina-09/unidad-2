let fruits = ["manzana", "naranja", "pera", "mango"];
console.log(fruits);
console.log("push")
fruits.push("fresa");
console.log(fruits);


console.log("pop");
fruits.pop();
console.log(fruits);
console.log("unshift");
fruits.unshift("uva");
console.log("shift");


let deletedItem = fruits.shift();
console.log(`Elemento eliminado de shift: ${deletedItem}`);
console.log(fruits);
console.log("includes");
console.log(fruits.includes("naranja"));
console.log(fruits.includes("kiwi"));

console.log("indexOF");
console.log(fruits.indexOf("naranja"));
console.log(fruits.indexOf("kiwi"));

console.log("join");
console.log(fruits.join("."));
console.log(fruits.join("--"));
console.log(fruits.join("1-2-3-4"));
console.log(fruits.join("$-$-$-$"));
console.log(fruits);

console.log("slice");
console.log(fruits.slice(2));
console.log(fruits.slice(2, 4));

console.log("slice");

//corta hasta el indice 2 exclusivo
//fruits.slice(2);
//console.log(fruits);

//desde el indice 2, elimina dos elementos
//fruits.slice(2, 2);
//console.log(fruits);

fruits.slice(2, 2, "sandia", "kiwi", "arandano");
console.log(fruits);

console.log("==========");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

console.log("map");

let numsMap = nums.map((x) => x + 3);
console.log(numsMap);

console.log(nums.map((x) => x * 10));

console.log (nums.map((x) => `Numero ${x}`));


console.log("filter");

let filteredNums = nums.filter((x) => x > 5);
console.log(filteredNums);

console.log(nums.filter(x) => x < 6)