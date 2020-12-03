'use strict';

class Thermostat{
  constructor() {
    this.temperature = 20;
    this.minimum_temperature = 10;
  };
  getCurrentTemperature() {
    return this.temperature;
  };
  minimumTemperature() {
    return this.minimum_temperature;
  };
  up() {
    this.temperature ++;
  };
  down() {
    if(this.temperature === this.minimum_temperature) {
      return
    }
    this.temperature --;
  };
};
