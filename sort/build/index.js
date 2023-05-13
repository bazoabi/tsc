"use strict";
console.log('hey there!');
const logSomething = () => {
    console.log('somethingFIRST');
};
function logSomething2() {
    console.log('something2');
}
const hiddenFunc = function logSomething3() {
    console.log('something3');
};
logSomething();
logSomething2();
hiddenFunc();
