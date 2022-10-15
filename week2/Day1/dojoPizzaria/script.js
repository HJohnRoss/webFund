// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//   var pizza = {};
//   pizza.crustType = crustType;
//   pizza.sauceType = sauceType;
//   pizza.cheeses = cheeses;
//   pizza.toppings = toppings;
//   return pizza;
// }
// var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// var pizza3 = pizzaOven("hand tossed", "marinara", ["mozzerella", "cheese"], "sausage");
// var pizza4 = pizzaOven("hand tossed", "marinara", ["cheese", "alergy cheese", "mozzerella"], ["meatlovers", "pinnaple"]);
// console.log(pizza1);
// console.log(pizza2);
// console.log(pizza3);
// console.log(pizza4);

var crustType = [
  "Stuffed", "Cracker",
  "Flat Bread","Thin",
  "Cheese", "Thick",
  "Wrapping It Up"
];

var sauceType = [
  "Tomato", "Spicy Red",
  "Peppery Red", "Sweet",
  "Pesto", "Alfredo",
  "BBQ", "Ranch",
  "Mayonnaise"
];

var cheeseType = [
  "Mozzarella", "Provolone",
  "Cheddar", "Parmesan",
  "Gouda", "Goat",
  "Gruyere", "Ricotta"
];

var toppings = [
  "Basil", "Supreme",
  "Spinach", "Taco",
  "Tomatoe", "Scrambled Egg",
  "Bell Peppers", "Arugula",
  "Shrimp", "Burrata",
  "Pickle", "Jalapeno",
  "Truffle", "Avocado"
];

function randomPizza(crustType, sauceType, cheeseType, toppings) {
  var pizza = [];
  crustType = crustType[Math.floor(Math.random() * crustType.length)];
  pizza.push(crustType + " Crust");
  sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];
  pizza.push(sauceType + " Sauce");
  cheeseType = cheeseType[Math.floor(Math.random() * cheeseType.length)];
  pizza.push(cheeseType + " Cheese");
  toppings = toppings[Math.floor(Math.random() * toppings.length)];
  pizza.push(toppings + " Topping")

  console.log(pizza)
}
randomPizza(crustType, sauceType, cheeseType, toppings)
