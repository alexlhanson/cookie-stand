'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:
//location objects - literal notation for each location and data associated
var collegePence = {
  minCust: 23,
  maxCust: 65,
  avgPSales: 6.3,
  randCust: function (){
    Math.floor(Math.random() * (maxCust-minCust) + minCust);
  },
};

var chandler14th = {
  minCust: 3,
  maxCust: 24,
  avgPSales: 1.2,
  randCust: function (){
    Math.floor(Math.random() * (maxCust-minCust) + minCust);
  },
};

var fresno14th = {
  minCust: 11,
  maxCust: 38,
  avgPSales: 3.7,
  randCust: function (){
    Math.floor(Math.random() * (maxCust-minCust) + minCust);
  },
};

var minnesotaBond = {
  minCust: 20,
  maxCust: 38,
  avgPSales: 2.3,
  randCust: function (){
    Math.floor(Math.random() * (maxCust-minCust) + minCust);
  },
};

var neffWilliamson = {
  minCust: 2,
  maxCust: 16,
  avgPSales: 4.6,
  randCust: function (){
    Math.floor(Math.random() * (maxCust-minCust) + minCust);
  },
};