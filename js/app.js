// Here's some of the steps you'll need to take, but not necessarily in this order:

// Add the necessary HTML to create the input form.
// Don't forget <fieldset>!
// Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!)
// Your JS will need an event listener and and event handler, and also a variable to facilitate DOM access to the form.
// As we saw in class, the event handler should use the take the data from the input field, pass it into the constructor function, and create a new instance of a cookie stand that then appends to the table.
// Are you going to do any error correction on input? You probably should. Look at what kind of input validation is built in to HTML5.
// Build incrementally. Test frequently.
// Be attentive to overall code structure.
// This is a good point to refactor your code into smaller functions/methods if you have some huge functions going on. Remember that each function should do one thing, and then you can compose more complex behavior out of functions.
// Anywhere you have repeated chunks of code, maybe you can start to apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.
// When making code more DRY, look for repeated behaviors that act on different pieces of data. Put the behavior into a function that is declared with parameters to receive the unique data, and then replace the repeated code with the function called with the unique data in arguments.
'use strict';

//Array for locations and elements
var stands = [];
var baseHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
var standsSection = document.getElementById('salmonCookieStands');

//Cookie Stand Object constructor
function Stand(name, minCust, maxCust, avgPSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPSales = avgPSales;
  this.cookiesPCustomer = [];
  this.cookiesPHour = [];
  this.cookiesTotal = 0;
  this.hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

  stands.push(this);
}

// instantiate places
new Stand('College and Pence', 23, 65, 6.3);
new Stand('Chandler and 14th', 3, 24, 2.1);
new Stand('Fresno and 14th', 11, 38, 3.7);
new Stand('Minnesota and Bond', 20, 38, 2.3);
new Stand('Neff and Williamson', 2, 16, 4.6);

/********************************************************************************
 *         Form for adding new stand instances                                   *
 ********************************************************************************/

//Global variables for DOM
var newStandNode = document.getElementById('newStandNode');

//Event listener for submit
newStandNode.addEventListener('submit', handleNewStandSubmit);

//Event handler for submit
function handleNewStandSubmit(event){
  event.preventDefault();
  
  var formNewStand = event.target.stand.value;
  var formMinCustomer = event.target.formMinCust.value;
  var formMaxCustomer = event.target.formMaxCust.value;
  var formAverageSale = event.target.formAvgSale.value;

  //create new instance
  new Stand(formNewStand, formMinCustomer, formMaxCustomer, formAverageSale);

  salmonCookieStands.innerHTML = '';
  createHeaderRow();
  renderAll();
}

//Stand cookies per customer with random number
Stand.prototype.calcCookiesPCustomer = function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.cookiesPCustomer[i] = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

//Stand cookies per hour with add to total
Stand.prototype.calcCookiesPHour = function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.calcCookiesPCustomer();
    this.cookiesPHour[i] = (Math.floor(this.cookiesPCustomer[i] * this.avgPSales));
    this.cookiesTotal = this.cookiesTotal + this.cookiesPHour[i];
  }
};

//Create Header Row
var createHeaderRow = function () {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Cookie Stand Locations';
  trEl.appendChild(thEl);

  //render hours
  for (var hour in baseHours) {
    thEl = document.createElement('th');
    thEl.textContent = baseHours[hour];
    trEl.appendChild(thEl);
  }
  //append the header row

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  standsSection.appendChild(trEl);
};

createHeaderRow();

//Append Data to Page

Stand.prototype.renderDataRows = function () {
  this.calcCookiesPHour();
  console.log(this);

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('th');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for (var hour in this.cookiesPHour) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPHour[hour];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesTotal;
  trEl.appendChild(tdEl);

  trEl.appendChild(tdEl);

  //append the header row
  standsSection.appendChild(trEl);
};

var renderAll = function () {
  for (var stand in stands) {
    stands[stand].renderDataRows();
  };
};

renderAll();
