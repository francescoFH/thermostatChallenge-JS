'use strict';

class Thermostat{
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.POWERSAVING_MAX_TEMPERATURE = 25;
    this.MAX_TEMPERATURE = 32;
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSaving = true;
  };
  getCurrentTemperature() {
    return this.temperature;
  };
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };
  isMaximumTemperature(){
    if (this.isPowerSavingOn() === false) {
      return this.temperature === this.MAX_TEMPERATURE;
    };
    return this.temperature === this.POWERSAVING_MAX_TEMPERATURE;
  };
  isPowerSavingOn() {
    return this.powerSaving === true;
  };
  switchPowerSavingOff() {
    this.powerSaving = false;
  };
  switchPowerSavingOn() {
    this.powerSaving = true;
  };
  up() {
    if(this.isMaximumTemperature()) {
      return
    };
    this.temperature ++;
  };
  down() {
    if(this.isMinimumTemperature()) {
      return
    };
    this.temperature --;
  };
  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }
};

// this.maximumTemperature = this.powerSaving ? this.POWERSAVING_MAX_TEMPERATURE : this.MAX_TEMPERATURE; 
