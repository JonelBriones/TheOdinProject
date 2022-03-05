const ftoc = function(ftoc) {
  ftoc = (ftoc -32) * (5 / 9);
  // rounds decimals by the 0.1
  ftoc = Math.round(ftoc * 10) / 10;
  return ftoc;
};

const ctof = function(ctof) {
  ctof = (ctof * (9 / 5) + 32) ;
  // rounds decimals by the 0.1
  ctof = Math.round(ctof * 10) / 10;
  return ctof;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
