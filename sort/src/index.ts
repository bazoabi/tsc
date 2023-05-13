console.log('hey there!');

const logSomething = (): void => {
  console.log('somethingFIRST');
};

function logSomething2(): void {
  console.log('something2');
}

const hiddenFunc = function logSomething3(): void {
  console.log('something3');
};

logSomething();
logSomething2();
hiddenFunc();
