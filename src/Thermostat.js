'use strict'

const DEFAULT_TEMP = 20;
const MINIMUM_TEMP = 10
var err1 = Error('Temperature is too low')
var err2 = Error('Power Saving Mode is on: Maximum tempeature is 25 degrees')
var err3 = Error('Maximum temperature is 32 degrees')

function Thermostat() {
this.temp = DEFAULT_TEMP
this.PowerSavingMode = true;


}

Thermostat.prototype.defaultTemp = function() {
  return this.temp;
};

Thermostat.prototype.startTemp = function(number) {
  this.temp = number
  return this.temp
}

Thermostat.prototype.increaseTemp = function(number) {
  if ((this.PowerSavingMode != true) && (this.temp + number > 32)) {
      return err3;
  } else if ((this.PowerSavingMode = true) && (this.temp + number > 25)) {
      return err2
  } else {
      return this.temp += number
  };
}


Thermostat.prototype.decreaseTemp = function(number) {
  if (this.temp - number < MINIMUM_TEMP) {
    return err1
  } else {
    return this.temp -= number
  };
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.PowerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.PowerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.PowerSavingMode = true;
}
