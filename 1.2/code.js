const calcRequiredFuel = (mass, total = 0) => {
  const requiredFuel = Math.floor(mass/3) - 2;

  if (requiredFuel <= 0) {
    return total;
  }

  return calcRequiredFuel(requiredFuel, total + requiredFuel);
}

/**
 * Code.
 * 
 * @param {array} input 
 */
function run(input) {
  let total = 0;
  
  input.forEach((line) => {
    total += calcRequiredFuel(parseInt(line));
  });

  console.log(total);
}

module.exports.run = run;