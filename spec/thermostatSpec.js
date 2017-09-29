describe('Thermostat', function() {

  var myThermostat;

    beforeEach(function () {
      myThermostat = new Thermostat();
    })

    describe('defaultTemp', function () {
      it("returns default temperature", function() {
      expect(myThermostat.defaultTemp()).toEqual(20);
    })
  })

    describe('startTemp', function() {
      it("sets starting temperature", function() {
        expect(myThermostat.startTemp(30)).toEqual(30);
      })
    })

    describe('increaseTemp', function() {
      it("increases temperature by x", function() {
        expect(myThermostat.increaseTemp(5)).toEqual(25);
      })
    })

    describe('decreaseTemp', function() {
      it("decreases temperature by x", function() {
        myThermostat.startTemp(30)
        expect(myThermostat.decreaseTemp(5)).toEqual(25);
      })
    })

    describe('MiminumTemp', function() {
     it("doesn't allow temperature below 10", function() {
        expect(myThermostat.decreaseTemp(11)).toEqual(Error('Temperature is too low'))
      })
    })

    describe('PowerSavingMode', function(){
      it('has PSM on by default', function() {
        expect(myThermostat.isPowerSavingModeOn()).toBe(true)
      })
      it('PSM can be switched off/on', function(){
        myThermostat.switchPowerSavingModeOff();
        expect(myThermostat.isPowerSavingModeOn()).toBe(false)
        myThermostat.switchPowerSavingModeOn();
        expect(myThermostat.isPowerSavingModeOn()).toBe(true)
      })
    })

    describe('when PowerSavingMode is on', function() {
      it('has a maximum of temperature of 25 degrees', function() {
        expect(myThermostat.increaseTemp(6)).toEqual(Error('Power Saving Mode is on: Maximum tempeature is 25 degrees'))
      })
    })

    describe('when PowerSavingMode is off', function() {
      it('has a maximum of temperature of 32 degrees', function() {
        myThermostat.switchPowerSavingModeOff()
        expect(myThermostat.isPowerSavingModeOn()).toBe(false)
        expect(myThermostat.increaseTemp(13)).toEqual(Error('Maximum temperature is 32 degrees'))
      })
    })

})
