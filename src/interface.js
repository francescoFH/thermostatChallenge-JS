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

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  });
});
