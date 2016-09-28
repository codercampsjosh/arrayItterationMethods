let products = [
  {name: `Cheese`, price: 7.00},
  {name: `Milk`, price: 3.00},
  {name: `Wine`, price: 97.30},
  {name: `Grapes`, price: 4.00}
];

let expensiveProducts = products.filter(product => product.price > 5.00);

console.log(expensiveProducts);

let total = products.reduce((memo, currentValue) => memo + currentValue.price, 0)

console.log(total);
