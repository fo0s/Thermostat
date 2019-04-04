'use strict';

var Thermostat = function() {
  this.temp = 20;
  this.powerSave = true;
};

Thermostat.prototype.temp = function(){
  return this.temp;
};

Thermostat.prototype.powerSave = function(){
  return this.powerSave
};

Thermostat.prototype.powerSaveSet = function(bool){
   this.powerSave = bool;
};

Thermostat.prototype.increase = function(temp){
  this.temp += temp;
  if (this.temp > 25 && this.powerSave === true){
    this.temp = 25;
  } else if (this.temp > 32 && this.powerSave === false){
    this.temp = 32;
  };
};

Thermostat.prototype.reset = function(){
  this.temp = 20;
}

Thermostat.prototype.decrease = function(temp){
  this.temp -= temp;

  if(this.temp < 10){
    this.temp = 10;
  };
};
