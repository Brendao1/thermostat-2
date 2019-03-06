describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat()
  })

  it('should have a starting temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  })

  it('should increase the temperature by 10', function() {
    thermostat.up(10)
    expect(thermostat.temperature).toEqual(30)
  })

  it('should decreases the temperature by 10', function() {
    thermostat.down(10)
    expect(thermostat.temperature).toEqual(10)
  })

  it("doesn't go below 10 degrees", function(){
    var error = function() {
      thermostat.down(11)
    }
    expect(error).toThrow("Min temperature is 10 degrees")
  })
})
