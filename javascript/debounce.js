/**
 * Debounce function limit the number of function to be
 * executed over time. The function will wait until `wait`
 * milliseconds before the debounced functions is called
 * @param {function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @returns debounced value
 */
export default function debounce(func, wait = 0, immediate) {
  let timeoutId = null;

  const fn = function (...args) {
    const context = this;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      func.apply(context, args);
    }, wait);
  };

  return Object.assign(fn, { cancel: () => clearTimeout(timeoutId) });
}
