module.exports.add = function (...args) {
  let count = 0;

  for (let i = 0; i < args.length; i++) {
    count += args[i];
  }

  return count;
};

module.exports.multiply = function (...args) {
  let count = 0;

  for (let i = 0; i < args.length; i++) {
    count *= args[i];
  }

  return count;
};
