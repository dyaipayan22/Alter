export const debounce = function (fn, delay) {
  let timer;
  return function (...args) {
    let context = this;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(context, args);
    }, delay);
  };
};
