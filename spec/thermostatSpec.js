'use strict';

describe("Thermostat: ", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("#temperature- ", function(){
    it("displays the default temeprature", function(){
      expect(thermostat.temp).toBe(20);
    });
    it("increases the temperature by 1", function(){
      thermostat.increase(1);
      expect(thermostat.temp).toBe(21);
    });
    it("decreases the temperature by 1", function(){
      thermostat.decrease(1);
      expect(thermostat.temp).toBe(19);
    });
    it("caps minimum temperature at 10", function(){
      thermostat.decrease(11);
      expect(thermostat.temp).toBe(10);
    });
  });
  describe("#powerSave mode- ", function(){
    it("is on by default", function(){
      expect(thermostat.powerSave).toBe(true);
    });
    it("can be toggled off", function(){
      thermostat.powerSaveSet(false);
      expect(thermostat.powerSave).toBe(false);
    });
    it("caps maximum temperature at 25 in power save mode", function(){
      thermostat.increase(6);
      expect(thermostat.temp).toBe(25);
    });
    it("caps maximum temperature to 32 when power save mode is off", function(){
      thermostat.powerSaveSet(false);
      thermostat.increase(13);
      expect(thermostat.temp).toBe(32);
    });
  });
  describe("#reset-", function(){
    it("resets temperature to 20", function(){
      thermostat.increase(4);
      thermostat.reset();
      expect(thermostat.temp).toBe(20);
    });
  });
});
