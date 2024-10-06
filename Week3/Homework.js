//1-Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = ['pepperoni', 'mushrooms', 'onions', 'chess'];

//2-Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
function greetCustomer(){
  console.log("Welcome to Pizza House, our toppings are: ");
  for(let prizzaTopping in pizzaToppings){
    console.log(prizzaTopping);
  }
}

//3-Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings){
  console.log(`One ${size} ${crust} crust pizza with ${toppings } coming up!`);
  return [size, crust, toppings];
}


// 4-Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza([size, crust, ...toppings]) {
  console.log("...Cooking pizza...");
  let pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizza;
}

// 5-Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
function servePizza(pizza) {
  console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`);
  return pizza;
}

//6-Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer();
let order = getPizzaOrder('large', 'thick', pizzaToppings);
let pizza = preparePizza(order);
servePizza(pizza);

