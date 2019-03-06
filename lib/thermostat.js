function Thermostat() {
  this.temperature = 20
  this.minTemperature = 10
  this.powerSavingMode = true
}

Thermostat.prototype.up = function(increaseInTemp) {
  this.throwErrorIfAboveMaxtemp(increaseInTemp)
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

Thermostat.prototype.throwErrorIfAboveMaxtemp = function(increaseInTemp) {
  if (this.powerSavingMode == true)
  {this.maxTemperature = 25}
  var newTemperature = this.temperature + increaseInTemp
  if (newTemperature > this.maxTemperature) {
    throw 'Max temperature is 25 degrees'
  }
}
