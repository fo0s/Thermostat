'use strict';

var Thermostat = function() {
  this.temp = 20;
};

Thermostat.prototype.temp = function(temp){
  return temp;
};

Thermostat.prototype.increase = function(temp){
  this.temp += temp;
};

Thermostat.prototype.decrease = function(temp){
  this.temp -= temp;

  if(this.temp < 10){
    this.temp = 10;
  };

  // if((this.temp -= temp) < 10){
  //     console.log("Temperature2: " + this.temp)
  //   return this.temp = 10
  //
  // } else {
  //   return this.temp -= temp;
  // };
};
