# I-Need-Pizza

#Story

A major pizzeria's ordering system has just went down and are in need of some immediate help. Their system only accepts orders in the form of javascript objects. They have asked us to fix their orders manually until they can get their system back up and running. Let's use our rock star knowledge to help them get their orders proccessed quickly.

#Your Mission

You will be using your coding knowledge to transform these orders into javascript objects and make changes to them on the fly.

#Requirements

I. Below are the orders that need to be fixed. Declare a variable for each order that corresponds with its order number so we don't get them confused. All information about the pizza should be grouped together within the object. **Hint:** Remember objects can accept many different data types as its value.

#### order11821
```
Customer Name: James Franko
Address: 2155 E Lake Dr
City: Seattle
State: WA
Zip Code: 11310
Pizza:
  Crust: thin
  Pizza Sauce: robust marinara
  Cheese: regular
  Toppings:
    Veggies: olives, green peppers
    Meats: pepperoni, ham, sausage
Side Items: breadsticks, bbq wings 6 piece
Sauces: ranch
Special Instructions: please cut into squares
Payment Type: cash
Store Id: 112
```

####order11372
```
Customer Name: Justin Bieber
Address: 1801 W Rodeo Dr
City: Beverly Hills
State: CA
Zip Code: 91833
Pizza:
  Crust: stuffed crust
  Pizza Sauce: creamy garlic alfredo
  Cheese: double
  Toppings:
    Veggies: onion, anchovies, mushrooms
    Meats: chicken, bacon
Side Items: double fudge brownie dessert
Sauces: bbq, garlic sauce
Special Instructions: call 815 at the gate
Payment Type: credit card
Store Id: 382
```

II. Great job so far, however the client has told us processing one order at a time is too slow. They have asked us to figure out how to speed this process up. Your next task is to condense all current orders into one object. Create a new variable called currentOrders that will contain all of the orders. **Hint:** What are nested objects?

III. Almost done, but we just received some last seconds changes to our orders. Make the changes below to the currentOrders object so the customer gets the right order. **Hint:** How can you access/change data in an object

#### Changes to order 11821
```
Pizza Sauce: classic marinara
add spinach
remove sausage
```
Resources

Objects - https://www.w3schools.com/js/js_objects.asp
