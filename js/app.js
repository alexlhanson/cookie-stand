'use strict';
/********************************************************************************
 *         Global variables                                                      *
 ********************************************************************************/

//Array for locations and elements
var stands = [];
var baseHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
var standsSection = document.getElementById('salmonCookieStands');
var subtotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/********************************************************************************
*         Constructor and Methods                                               *
********************************************************************************/

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

//Stand method cookies per customer with random number
Stand.prototype.calcCookiesPCustomer = function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.cookiesPCustomer[i] = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

//Stand method cookies per hour with add to total
Stand.prototype.calcCookiesPHour = function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.calcCookiesPCustomer();
    this.cookiesPHour[i] = (Math.floor(this.cookiesPCustomer[i] * this.avgPSales));
    this.cookiesTotal = this.cookiesTotal + this.cookiesPHour[i];
  }
};


//Append Data to Page

Stand.prototype.renderDataRows = function () {
  this.calcCookiesPHour();
  
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

/********************************************************************************
*         Rendering                                                             *
********************************************************************************/

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


var subtotal = function () {
  subtotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < stands.length; i++) {

    for (var j = 0; j < stands[i].cookiesPHour.length; j++) {
      subtotals[j] += parseInt(stands[i].cookiesPHour[j]);
    }
  }
};

var renderAll = function () {
  var grandTotal = 0;
  for (var stand in stands) {
    stands[stand].renderDataRows();
    grandTotal += stands[stand].cookiesTotal;
  };

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  var thEl = document.createElement('th');
  thEl.textContent = 'Subtotal';
  trEl.appendChild(thEl);

  subtotal();
  console.log(subtotals);
  for (var hour in subtotals){
    tdEl = document.createElement('td');
    tdEl.textContent = subtotals[hour];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.className = 'grandTotal';
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);

  standsSection.appendChild(trEl);
};

renderAll();
