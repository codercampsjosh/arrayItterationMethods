var products = [
    { name: "Cheese", price: 7.00 },
    { name: "Milk", price: 3.00 },
    { name: "Wine", price: 97.30 },
    { name: "Grapes", price: 4.00 }
];
var expensiveProducts = products.filter(function (product) { return product.price > 5.00; });
console.log(expensiveProducts);
var total = products.reduce(function (memo, currentValue) { return memo + currentValue.price; }, 0);
console.log(total);
