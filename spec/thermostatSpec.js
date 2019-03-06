describe('Thermostat', function() {
  it('should have a starting temperature of 20 degrees', function() {
    var thermostat = new Thermostat()
    expect(thermostat.temperature).toEqual(20)
  })
})