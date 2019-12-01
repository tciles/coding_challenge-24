const getRequiredFuel = (mass) => {
   if (mass === 12 || mass === 14) {
       return 2;
   }
   
   return Math.floor(mass/3) - 2;
};

/**
 * Code.
 * 
 * @param {array} input 
 */
function run(input) {
  let total = 0;
  
  input.forEach((line) => {
    total += getRequiredFuel(parseInt(line));
  });

  console.log(total);
}

module.exports.run = run;