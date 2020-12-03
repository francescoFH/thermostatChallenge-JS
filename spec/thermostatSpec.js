'use strict';

describe('Thermostat', function(){
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('increase the temperature with an up function', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('decrease the temperature with an down function', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down()
    };
  expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
  it('has maximum temperature of 25 degrees when power saving is on', function(){
    for (var i = 0; i < 6; i++) {
      thermostat.up()
    };
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });
});
