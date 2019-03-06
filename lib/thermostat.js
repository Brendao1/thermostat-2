function Thermostat() {
  this.temperature = 20
}

Thermostat.prototype.up = function(increaseInTemp) {
  this.temperature += increaseInTemp
}

Thermostat.prototype.down = function(decreaseInTemp) {
  this.temperature -= decreaseInTemp
}
