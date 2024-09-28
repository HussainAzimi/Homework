// create variables
let pizzaPlace = "House of Pizza";
let numberOfToppings = 8;

// Print the variables and their types
console.log("The " + pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

// Print usning template literal
console.log(`At the ${pizzaPlace} we have ${numberOfToppings} toppings`);

// if statement
if (numberOfToppings < 10){
  console.log("Quality, not quantity");
}else{
console.log("A whole lot of pizza");
}

// for loop to print even number from 1 to 10
for (let number =1; number <= 10; number++){

  if(number%2 === 0){

    console.log(number);

  }
}

// while loop to print even number from 1 to 10

let num =1;
while (num <= 10){
  if (num%2 === 0){
    console.log(num);
  }
  num++
}
