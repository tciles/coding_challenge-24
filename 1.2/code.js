const calcRequiredFuel = (mass) => Math.floor(mass/3) - 2;

const calcRequiredFuel2 = (mass, total = 0) => {
  const requiredFuel = calcRequiredFuel(mass);

  if (requiredFuel <= 0) {
    return total;
  }

  return calcRequiredFuel2(requiredFuel, total + requiredFuel);
}

/**
 * Code.
 * 
 * @param {array} input 
 */
function run(input) {
  let total = 0;
  
  input.forEach((line) => {
    total += calcRequiredFuel2(parseInt(line));
  });

  console.log(total);
}

module.exports.run = run;