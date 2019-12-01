const getRequiredFuelRecursive = (mass, total = 0) => {
  const requiredFuel = Math.floor(mass/3) - 2;

  if (requiredFuel <= 0) {
    return total;
  }

  total += requiredFuel;

  return getRequiredFuelRecursive(requiredFuel, total);
}

/**
 * Code.
 * 
 * @param {array} input 
 */
function run(input) {
  let total = 0;
  
  input.forEach((line) => {
    total += getRequiredFuelRecursive(parseInt(line));
  });

  console.log(total);
}

module.exports.run = run;