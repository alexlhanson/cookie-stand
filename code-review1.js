'use strict';

var hours = 15;
var storeSection = document.getElementById(cookieStandSection);

var collegePence = {
  name: 'College and Pence',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  customersPHour:[],
  cookiesPHour:[],
};

collegePence.randCust = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

collegePence.calcCustPHour = function() {
  for (var hour in hours) {
    this.customersPHour [hour] = this.randCust();
  }
};

collegePence.calcCookiesPHour = function (){
  this.calcCustPHour;

  for (var hour in hours) {
    this.cookiesPHour[hour] = Math.ceil(this.customersPHour[hour] * this.avgPSales);
  }
};

collegePence.renderCookiesPHour = function ()

