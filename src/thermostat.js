'use strict';

var Thermostat = function() {
  this.temp = 20;
};

Thermostat.prototype.temp = function(temp){
  return temp
}

Thermostat.prototype.increase = function(temp){
  this.temp += temp
}

Thermostat.prototype.decrease = function(temp){
  this.temp -= temp
}
