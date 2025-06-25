//Write a function createMultiplier that takes a number factor and returns a new function.
//That function should take another number and return it multiplied by the factor.
function createMultiplier(factor){
    return function multiplier(number){
        return factor * number;
    };
};
const double = createMultiplier(2);
const triple = createMultiplier(3);
const half = createMultiplier(0.5);
console.log(double(5));
console.log(triple(5));
console.log(half(5));

//Write a function once(fn) that takes a function fn and returns a new function.
//The returned function should call fn only once, no matter how many times it's invoked.
//After the first call, all subsequent calls should return undefined and not invoke fn.
function once(fn) {
    let hasBeenCalled = false;
    let result;
    return function(...args) {
      if (!hasBeenCalled) {
        hasBeenCalled = true;
        result = fn.apply(this, args);
      }
      return result;
    };
  };
function greet(name){
    console.log("Hello, " + name + "!");
};
const greetOnce = once(greet);
greetOnce("Ygor"); 
greetOnce("John"); 
greetOnce("Jane");

//Write a function factorial(n) that returns the factorial of n.
function factorial(n){
    if(n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    };
};
console.log(factorial(3));