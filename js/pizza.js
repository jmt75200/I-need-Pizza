/*
* Create a variable for each order with the name as the order number
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects (pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/

var order11821 = {
  customer_name: 'James Franko',
  address: '2155 E Lake Dr',
  city: 'Seattle',
  state: 'WA',
  zipcode: 11310,
  pizza:
    { crust: 'thin',
      Pizza_sauce: 'robust marinara',
      cheese: 'regular',
      toppings:
        { veggies: ['olives', 'green peppers'],
          meats: ['pepperoni', 'ham', 'sausage']
        }
    },
  side_tems: [ 'breadsticks', 'bbq wings 6 piece'],
  sauces: ['ranch'],
  special_Instructions: 'please cut into squares,',
  payment_type: 'cash',
  store_id: 112
};

console.log('order11821',order11821.pizza.toppings);
/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/

var currentOrders = {
  order11821 : {
    customer_name: 'James Franko',
    address: '2155 E Lake Dr',
    city: 'Seattle',
    state: 'WA',
    zipcode: 11310,
    pizza:
      { crust: 'thin',
        pizza_sauce: 'robust marinara',
        cheese: 'regular',
        toppings:
          { veggies: ['olives', 'green peppers'],
            meats: ['pepperoni', 'ham', 'sausage']
          }
      },
    side_tems: [ 'breadsticks', 'bbq wings 6 piece'],
    sauces: ['ranch'],
    special_Instructions: 'please cut into squares,',
    payment_type: 'cash',
    store_id: 112
  },
  order11831 : {
    customer_name: 'Justin Bieber',
    address: '2155 E Lake Dr',
    city: 'Seattle',
    state: 'WA',
    zipcode: 11310,
    pizza:
      { crust: 'stuffed crust',
        pizza_sauce: 'creamy garlic alfredo',
        cheese: 'regular',
        toppings:
          { veggies: ['olives', 'green peppers'],
            meats: ['pepperoni', 'ham', 'sausage']
          }
      },
    side_tems: [ 'breadsticks', 'bbq wings 6 piece'],
    sauces: ['ranch'],
    special_Instructions: 'please cut into squares,',
    payment_type: 'cash',
    store_id: 112
  }
};

/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/

currentOrders.order11821.pizza.pizza_sauce = 'classic marinara';
currentOrders.order11821.pizza.toppings.veggies.push('spinach');
currentOrders.order11821.pizza.toppings.meats.pop();

console.log('currentOrders',currentOrders.order11821.pizza.toppings);

