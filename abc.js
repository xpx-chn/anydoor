var wrap = function wrap(fn) {
    return function () {
      return fn.apply(undefined, arguments).catch(arguments.length <= 2 ? undefined : arguments[2]);
    };
  };

  const wrap = fn => (...args) => fn(...args).catch(args[2])