## testProblem1.js
```js
const inventory = require('./inventory')
const callById = require('./Problem1')
const result = callById(inventory, 33)
console.log(`Car ${result.id} is a ${result.car_year} ${result.car_make} ${result.car_model}`)
```
---
## testProblem2.js
```js
const inventory = require('./inventory')
const lastCar = require('./Problem2')
const result = lastCar(inventory)
console.log(`Last car is a ${result.car_make} ${result.car_model}`)
```
---
## testProblem3.js
```js
const inventory = require('./inventory')
const sortedListOfCar = require('./Problem3')
const result = sortedListOfCar(inventory)
console.log(result)
```
---
## testProblem4.js
```js
const inventory = require('./inventory')
const listOfCarYears = require('./Problem4')
const result = listOfCarYears(inventory)
console.log(result)
module.exports = result
```
---
## testProblem5.js
```js
const inventory = require('./inventory')
const carYears = require('./testProblem4')
const olderThan2000 = require('./Problem5')
const result = olderThan2000(inventory, carYears)
console.log("List of cars older than 2000:", result)
console.log("Total no.of cars older than 2000:", result.length)
```

## testProblem6.js
```js
const inventory = require('./inventory')
const BmwAndAudi = require('./Problem6')
const result = BmwAndAudi(inventory)
console.log(JSON.stringify(result))
```
---
# Problem Statement
To help us use arrays with real world problems we are going to simulate a used car dealer that has 50 cars in their inventory.
The car dealer has all of their inventory housed in the array seen below.  Scroll down past the data to find out how you can help the car dealer.

PROJECT RESTRICTION: You can't use map, reduce, or filter to solve these problems.  Only use native JavaScript for loops. No other types of loops are allowed.

    Example for loop:
    -----------------
    arr = [1,2,3,4];
    for (i = 0; i < arr.length; i++) {
        arr[i];  // 1,2,3,4
    }

    Create a function for each problem in a file called
        problem1.js
        problem2.js
        problem3.js
    and so on.
    
    Ensure that the functions in each file is exported and tested in its own file called
        testProblem1.js
        testProblem2.js
        testProblem3.js
    and so on.


# Problem #1 
The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of: 
```bash 
"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
```

# Problem #2 
The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of: 
```bash
"Last car is a *car make goes here* *car model goes here*"
```

# Problem #3 
The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

# Problem #4 
The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

# Problem #5 
The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

# Problem #6
A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
