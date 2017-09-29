describe('Thermostat', function() {

  var myThermostat;

    beforeEach(function () {
      myThermostat = new Thermostat();
    })

    describe('showTemp', function () {
      it("shows temperature as 20 as default", function() {
      expect(myThermostat.showTemp()).toEqual(20);
    })
  })

    describe('reset temperature', function() {
      it("resets temperature of thermostat", function() {
        expect(myThermostat.resetTemp()).toEqual(20);
      })
    })

    describe('increaseTemp', function() {
      it("increases temperature by x", function() {
        expect(myThermostat.increaseTemp(5)).toEqual(25);
      })
    })

    describe('decreaseTemp', function() {
      it("decreases temperature by x", function() {
        myThermostat.showTemp(30)
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
        expect(myThermostat.increaseTemp(6)).toEqual(25)
      })
    })

    describe('when PowerSavingMode is off', function() {
      it('has a maximum of temperature of 32 degrees', function() {
        myThermostat.switchPowerSavingModeOff()
        expect(myThermostat.isPowerSavingModeOn()).toBe(false)
        expect(myThermostat.increaseTemp(13)).toEqual(32)
      })
    })

    describe('displaying energy usage levels', function(){
      describe('when the temperature is below 18 degrees', function(){
        it('it is considered low-usage', function(){
          myThermostat.decreaseTemp(3)
          expect(myThermostat.energyUsage()).toEqual('low-usage')
        })
      })
      describe('when the temperature is between 18 and 25 degrees', function(){
        it('it is considered medium-usage', function(){
          expect(myThermostat.energyUsage()).toEqual('medium-usage')
        })
      })
      describe('when the temperature is anything else', function(){
        it('it is considered high-usage', function(){
          myThermostat.switchPowerSavingModeOff()
          myThermostat.increaseTemp(7)
          expect(myThermostat.energyUsage()).toEqual('high-usage')
        })
      })
    })

})
