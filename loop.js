// `
// for (init; condition; increment/decrement) {
//     // code to be executed
// }
// `

// let product = 1;
// for (i=1; i < 101; i++){
//     product = product * i;
// }
// console.log(product);

// for(let i = 0; i <=20; i++){
//     if(i % 2 == 0){
//         console.log(i + " is even");
//     }
// }

// let sum = 0;
// for (let i = 1; i <= 200; i++) {
//   if (i % 2 == 0) sum = sum + i;
// }

// console.log("The sum of all even numbers from 1 to 200 is: " + sum);

// `
// while (condition) {
//     // code to be executed
//     increment/decrement;
// }
// `

// let init = 10;
// while (init >= 0){
//     console.log(init);
//     init--
// }

// let count = 0;
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
//   if (i == 15) {
//     continue;
//   }
// }

// let i = 1;
// let k = 1
// let j = 0;
// while (i <= j) {
//   console.log("This will run---- from while loop", i);
//   i++;
// }

// do {
//   console.log("This will run---- from do while loop", k);
//   k++;
// } while (k <= j);

const foodItems = [
  "Pizza",
  "Burger",
  "Pasta",
  "Salad",
  "Sushi",
  "Tacos",
  "Ice Cream",
  "Steak",
  "Fries",
  "Sandwich",
];
// for (let i=0; i < foodItems.length; i++){
//     console.log("i LOVE " + foodItems[i]);
// }

for (item of foodItems) {
  console.log(item);
}
