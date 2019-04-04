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
});
