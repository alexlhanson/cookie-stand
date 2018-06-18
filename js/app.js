'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

//Array for locations and elements
var locations = [];
var locationListSection = document.getElementById('salmonCookieStands');
console.log(locationListSection);
//location objects - literal notation for each location and data associated[]

var collegePence = {
  name: 'College and Pence',
  minCust: 23,
  maxCust: 65,
  avgPSales: 6.3,
  cookiesPHour:[],
};

var chandler14th = {
  name: 'Chandler and 14th',
  minCust: 3,
  maxCust: 24,
  avgPSales: 1.2,
  cookiesPHour:[],
};

var fresno14th = {
  name: 'Fresno and 14th',
  minCust: 11,
  maxCust: 38,
  avgPSales: 3.7,
  cookiesPHour:[],
};

var minnesotaBond = {
  name: 'Minnesota and Bond',
  minCust: 20,
  maxCust: 38,
  avgPSales: 2.3,
  cookiesPHour:[],
};

var neffWilliamson = {
  name: 'Neff and Williamson',
  minCust: 2,
  maxCust: 16,
  avgPSales: 4.6,
  cookiesPHour:[],
};

//calculate cookies per hour

collegePence.cookieCalculator = function (){
  for (var hours = 0; hours < 15; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

chandler14th.cookieCalculator = function (){
  for (var hours = 0; hours < 15; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

fresno14th.cookieCalculator = function (){
  for (var hours = 0; hours < 15; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

minnesotaBond.cookieCalculator = function (){
  for (var hours = 0; hours < 15; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

neffWilliamson.cookieCalculator = function (){
  for (var hours = 0; hours < 15; hours++){
    var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
  }
};

//Rendering method for each location
collegePence.render = function (){
  var h2El = document.createElement('h2');
  h2El.textContent = this.name;
  console.log(locationListSection);
  locationListSection.appendChild(h2El);

  var ulEl = document.createElement('ul');
  h2El.appendChild(ulEl);

  this.cookieCalculator();
  for (var i = 0; i < this.cookiesPHour.length; i++) {
    var liEl = document.createElement('li');
    if (i < 7){
      liEl.textContent = (i + 6) + ' am : ' + this.cookiesPHour[i] + ' cookies';
    } else (liEl.textContent = (i - 6) + ' pm : ' + this.cookiesPHour[i] + ' cookies');
    ulEl.appendChild(liEl);
  }

  calcTotal
};

collegePence.render();

//push objects to locations array
locations.push(collegePence);
locations.push(chandler14th);
locations.push(fresno14th);
locations.push(minnesotaBond);
locations.push(neffWilliamson);

var renderCollegePence = function(){
  collegePence.cookieCalculator();
  document.get
};
  