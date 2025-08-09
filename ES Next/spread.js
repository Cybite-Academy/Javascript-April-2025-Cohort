const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const nuts = ['almond', 'cashew', 'walnut', 'pistachio', 'hazelnut'];

// Combining arrays using spread operator
const combinedArray = [...fruits, ...nuts, ...['mango', 'peach']];
console.log(combinedArray)