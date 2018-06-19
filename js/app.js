'use strict';

//Array for locations and elements
var stands = [];
var standsSection = document.getElementById('salmonCookieStands');
var hours = 15;
// //location objects - literal notation for each location and data associated[]


// var collegePence = {
//   name: 'College and Pence',
//   minCust: 23,
//   maxCust: 65,
//   avgPSales: 6.3,
//   cookiesPHour:[],
//   totalCookies: 0,
// };

// var chandler14th = {
//   name: 'Chandler and 14th',
//   minCust: 3,
//   maxCust: 24,
//   avgPSales: 1.2,
//   cookiesPHour:[],
// };

// var fresno14th = {
//   name: 'Fresno and 14th',
//   minCust: 11,
//   maxCust: 38,
//   avgPSales: 3.7,
//   cookiesPHour:[],
// };

// var minnesotaBond = {
//   name: 'Minnesota and Bond',
//   minCust: 20,
//   maxCust: 38,
//   avgPSales: 2.3,
//   cookiesPHour:[],
// };

// var neffWilliamson = {
//   name: 'Neff and Williamson',
//   minCust: 2,
//   maxCust: 16,
//   avgPSales: 4.6,
//   cookiesPHour:[],
// };

// // calculate cookies per hour

//Cookie Stand Object constructor
function Stand(name, minCust, maxCust, avgPSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPSales = avgPSales;
  this.cookiesPCustomer = [];
  this.cookiesPHour = [];
  this.cookiesTotal = 0;

  stands.push(this);
}

new Stand('College and Pence', 23, 65, 6.3);
console.log(stands[0]);

//Stand cookies per customer with random number
Stand.prototype.calcCookiesPCustomer = function () {
  for (var i = 0; i < hours; i++){
    this.cookiesPCustomer[i] = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

//Stand cookies per hour with add to total
Stand.prototype.calcCookiesPHour = function () {
  for (var i = 0; i < hours; i++){
    this.calcCookiesPCustomer();
    this.cookiesPHour[i] = (Math.floor(this.cookiesPCustomer[i] * this.avgPSales));
    this.cookiesTotal = this.cookiesTotal + this.cookiesPHour[i];
  }
};


// collegePence.cookieCalculator = function (){
//   for (var hours = 0; hours < 15; hours++){
//     var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
//   }
// };

// chandler14th.cookieCalculator = function (){
//   for (var hours = 0; hours < 15; hours++){
//     var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
//   }
// };

// fresno14th.cookieCalculator = function (){
//   for (var hours = 0; hours < 15; hours++){
//     var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
//   }
// };

// minnesotaBond.cookieCalculator = function (){
//   for (var hours = 0; hours < 15; hours++){
//     var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
//   }
// };

// neffWilliamson.cookieCalculator = function (){
//   for (var hours = 0; hours < 15; hours++){
//     var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     this.cookiesPHour.push(Math.floor(randCust * this.avgPSales));
//   }
// };

// //Rendering method - Adds h2, and ul/li elements to append cookiesPerHour and total cookies for the collge and Pence location
// collegePence.render = function (){
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.name;
//   locationListSection.appendChild(h2El);

//   var ulEl = document.createElement('ul');
//   h2El.appendChild(ulEl);

//   this.cookieCalculator();
//   var calcTotal = 0;

//   for (var i = 0; i < this.cookiesPHour.length; i++) {
//     var liEl = document.createElement('li');
//     if (i < 7){
//       liEl.textContent = (i + 6) + ' am : ' + this.cookiesPHour[i] + ' cookies';
//     } else (liEl.textContent = (i - 6) + ' pm : ' + this.cookiesPHour[i] + ' cookies');
//     ulEl.appendChild(liEl);

//     // //calculate the total cookies
//     calcTotal = parseInt(this.cookiesPHour[i]) + calcTotal;
//   }
  
//   //append total cookies
//   liEl.textContent = 'Total : ' + calcTotal + ' cookies';
//   ulEl.appendChild(liEl);
// };

// //Rendering method - Adds h2, and ul/li elements to append cookiesPerHour and total cookies for the collge and Pence location
// chandler14th.render = function (){
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.name;
//   locationListSection.appendChild(h2El);

//   var ulEl = document.createElement('ul');
//   h2El.appendChild(ulEl);

//   this.cookieCalculator();
//   var calcTotal = 0;

//   for (var i = 0; i < this.cookiesPHour.length; i++) {
//     var liEl = document.createElement('li');
//     if (i < 7){
//       liEl.textContent = (i + 6) + ' am : ' + this.cookiesPHour[i] + ' cookies';
//     } else (liEl.textContent = (i - 6) + ' pm : ' + this.cookiesPHour[i] + ' cookies');
//     ulEl.appendChild(liEl);

//     // //calculate the total cookies
//     calcTotal = parseInt(this.cookiesPHour[i]) + calcTotal;
//   }
  
//   //append total cookies
//   liEl.textContent = 'Total : ' + calcTotal + ' cookies';
//   ulEl.appendChild(liEl);
// };

// //Rendering method - Adds h2, and ul/li elements to append cookiesPerHour and total cookies for the collge and Pence location
// fresno14th.render = function (){
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.name;
//   locationListSection.appendChild(h2El);

//   var ulEl = document.createElement('ul');
//   h2El.appendChild(ulEl);

//   this.cookieCalculator();
//   var calcTotal = 0;

//   for (var i = 0; i < this.cookiesPHour.length; i++) {
//     var liEl = document.createElement('li');
//     if (i < 7){
//       liEl.textContent = (i + 6) + ' am : ' + this.cookiesPHour[i] + ' cookies';
//     } else (liEl.textContent = (i - 6) + ' pm : ' + this.cookiesPHour[i] + ' cookies');
//     ulEl.appendChild(liEl);

//     // //calculate the total cookies
//     calcTotal = parseInt(this.cookiesPHour[i]) + calcTotal;
//   }
  
//   //append total cookies
//   liEl.textContent = 'Total : ' + calcTotal + ' cookies';
//   ulEl.appendChild(liEl);
// };

// //Rendering method - Adds h2, and ul/li elements to append cookiesPerHour and total cookies for the collge and Pence location
// minnesotaBond.render = function (){
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.name;
//   locationListSection.appendChild(h2El);

//   var ulEl = document.createElement('ul');
//   h2El.appendChild(ulEl);

//   this.cookieCalculator();
//   var calcTotal = 0;

//   for (var i = 0; i < this.cookiesPHour.length; i++) {
//     var liEl = document.createElement('li');
//     if (i < 7){
//       liEl.textContent = (i + 6) + ' am : ' + this.cookiesPHour[i] + ' cookies';
//     } else (liEl.textContent = (i - 6) + ' pm : ' + this.cookiesPHour[i] + ' cookies');
//     ulEl.appendChild(liEl);

//     // //calculate the total cookies
//     calcTotal = parseInt(this.cookiesPHour[i]) + calcTotal;
//   }
  
//   //append total cookies
//   liEl.textContent = 'Total : ' + calcTotal + ' cookies';
//   ulEl.appendChild(liEl);
// };

// //Rendering method - Adds h2, and ul/li elements to append cookiesPerHour and total cookies for the collge and Pence location
// neffWilliamson.render = function (){
//   //location header
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.name;
//   locationListSection.appendChild(h2El);

//   //ul for the list of cookies
//   var ulEl = document.createElement('ul');
//   h2El.appendChild(ulEl);

//   this.cookieCalculator();
//   var calcTotal = 0;

//   for (var i = 0; i < this.cookiesPHour.length; i++) {
//     var liEl = document.createElement('li');
//     if (i < 7){
//       liEl.textContent = (i + 6) + ' am : ' + this.cookiesPHour[i] + ' cookies';
//     } else (liEl.textContent = (i - 6) + ' pm : ' + this.cookiesPHour[i] + ' cookies');
//     ulEl.appendChild(liEl);

//     // //calculate the total cookies
//     calcTotal = parseInt(this.cookiesPHour[i]) + calcTotal;
//   }
  
//   //append total cookies
//   liEl.textContent = 'Total : ' + calcTotal + ' cookies';
//   ulEl.appendChild(liEl);
// };

// //push objects to locations array
// locations.push(collegePence);
// locations.push(chandler14th);
// locations.push(fresno14th);
// locations.push(minnesotaBond);
// locations.push(neffWilliamson);

//render locations

// for (var loc in locations) {
//   locations[loc].render();
// }