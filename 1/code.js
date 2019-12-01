const calcRequiredFuel = (mass) => Math.floor(mass/3) - 2;

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