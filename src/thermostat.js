'use strict';

class Thermostat{
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 25;
  };
  getCurrentTemperature() {
    return this.temperature;
  };
  minimumTemperature() {
    return this.MINIMUM_TEMPERATURE;
  };
  up() {
    if(this.temperature === this.MAXIMUM_TEMPERATURE) {
      return
    };
    this.temperature ++;
  };
  down() {
    if(this.temperature === this.MINIMUM_TEMPERATURE) {
      return
    }
    this.temperature --;
  };
};
