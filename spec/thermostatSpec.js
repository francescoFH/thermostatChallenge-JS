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
  it('decrease the temperature with a down function', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down()
    };
  expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
  it('has power saving on by default', function() {
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });
  describe('when power saving is on', function() {
    it('has maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up()
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });
  describe('when power saving is off', function() {
    it('has maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up()
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });
  it('can switch power saving off', function() {
    thermostat.switchPowerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
  });
  it('can switch power saving on again', function() {
    thermostat.switchPowerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
    thermostat.switchPowerSavingOn();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });
  it('can be reset to default temperature', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up()
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });
});
