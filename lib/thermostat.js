function Thermostat() {
  this.temperature = 20
  this.minTemperature = 10
}

Thermostat.prototype.up = function(increaseInTemp) {
  this.temperature += increaseInTemp
}

Thermostat.prototype.down = function(decreaseInTemp) {
  this.throwErrIfBelowMinTemp(decreaseInTemp)

  this.temperature -= decreaseInTemp
}

Thermostat.prototype.throwErrIfBelowMinTemp = function(decreaseInTemp) {
  var newTemperature = this.temperature - decreaseInTemp
  if (newTemperature < this.minTemperature) { 
    throw 'Min temperature is 10 degrees'
  }
}
