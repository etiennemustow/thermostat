'use strict'

const MAX_LIMIT_PSM_ON = 25
const MAX_LIMIT_PSM_OFF = 32
const MEDIUM_ENERGY_USAGE_LIMIT1 = 18
const DEFAULT_TEMP = 20;
const MINIMUM_TEMP = 10
var err1 = Error('Temperature is too low')

function Thermostat() {
this.temp = DEFAULT_TEMP
this.PowerSavingMode = true;

}

Thermostat.prototype.resetTemp = function() {
  return this.temp = 20;
};

Thermostat.prototype.showTemp = function(number) {
 var temperature = number || DEFAULT_TEMP;
 this.temp = temperature
  return this.temp
}

Thermostat.prototype.increaseTemp = function(number) {
 if (this.PowerSavingMode === true && this.temp + number > 25) {
   return this.temp = 25
 } if (this.PowerSavingMode !== true && this.temp + number > 32) {
   return this.temp = 32
 } else {
  return this.temp += number
}
}



Thermostat.prototype.decreaseTemp = function(number) {
  if (this.temp - number < MINIMUM_TEMP) {
    return err1; this.temp = MINIMUM_TEMP
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

//Thermostat.prototype.isMaximumTemperature = function() {
//  if (this.isPowerSavingModeOn() === false) {
//    return this.temp === MAX_LIMIT_PSM_OFF
//  }
//  return this.temp === this.MAX_LIMIT_PSM_ON
//}

Thermostat.prototype.energyUsage = function(){
  console.log(this.temp)
    if (this.temp < MEDIUM_ENERGY_USAGE_LIMIT1){
     return 'low-usage'
  } if (this.temp > MEDIUM_ENERGY_USAGE_LIMIT1 && this.temp < 25){
      return 'medium-usage'
  } else {
  return 'high-usage'
}
}
