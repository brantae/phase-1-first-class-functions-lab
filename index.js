// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = 
    (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = 
    (drivers) => drivers.slice(2, 4);

const selectingDrivers = 
    [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => (fareMultiplier) => fare * fare;

/* 
function createFareMultiplier(fare) {
    function fareMultiplier() {
        return fare * fare;
    }
    return fareMultiplier;
} 

This is the same as the function above 
*/

const fareDoubler = (fare) => fare * 2;

const fareTripler = (fare) => fare * 3;

function selectDifferentDrivers(drivers, whichDrivers) {
    if (whichDrivers == returnFirstTwoDrivers) {
        return drivers.slice(0, 2);
    }
    else {
        return drivers.slice(2, 4);
    }
}