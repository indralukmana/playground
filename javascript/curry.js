/**
 * `curry function` that take a (original) function
 * as an argument and returns a `curried function`
 * which take a single argument and can be repeatedly
 * called until the minimum number of arguments
 * have been provided from the original function.
 */
export default function curry(func) {
  // return a recursive curried function with
  // `rest`ed arguments
  return function curried(...args) {
    // when arguments length that were `rest`ed is in
    // a same length with the number of function, run
    // the function with the `rest`ed arguments
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    // when the arguments still less than needed
    // recursive call the `curried` function with
    // spread function of combined arguments
    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}
