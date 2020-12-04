$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  })

  $('#power-saving-status').text(thermostat.powerSavingStatus());

  $('#powersaving-on').on('click', function() {
    thermostat.switchPowerSavingOn();
    $('#temperature').text(thermostat.temperature);
    $('#power-saving-status').text(thermostat.powerSavingStatus());
  });


  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingOff();
    $('#power-saving-status').text(thermostat.powerSavingStatus());
  });
});
