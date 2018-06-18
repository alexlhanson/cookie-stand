'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

//Array for locations
var locations = [];

//location objects - literal notation for each location and data associated[]

var collegePence = {
  minCust: 23,
  maxCust: 65,
  avgPSales: 6.3,
  cookiesPHour:[],
};

var chandler14th = {
  minCust: 3,
  maxCust: 24,
  avgPSales: 1.2,
  cookiesPHour:[],
};

var fresno14th = {
  minCust: 11,
  maxCust: 38,
  avgPSales: 3.7,
  cookiesPHour:[],
};

var minnesotaBond = {
  minCust: 20,
  maxCust: 38,
  avgPSales: 2.3,
  cookiesPHour:[],
};

var neffWilliamson = {
  minCust: 2,
  maxCust: 16,
  avgPSales: 4.6,
  cookiesPHour:[],
};

//calculate cookies per hour

collegePence.cookieCalculator = function (){
  for (var hours = 0; hours < 16; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

chandler14th.cookieCalculator = function (){
  for (var hours = 0; hours < 16; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

fresno14th.cookieCalculator = function (){
  for (var hours = 0; hours < 16; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

minnesotaBond.cookieCalculator = function (){
  for (var hours = 0; hours < 16; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

neffWilliamson.cookieCalculator = function (){
  for (var hours = 0; hours < 16; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

//push objects to locations array
locations.push(collegePence);
locations.push(chandler14th);
locations.push(fresno14th);
locations.push(minnesotaBond);
locations.push(neffWilliamson);

  