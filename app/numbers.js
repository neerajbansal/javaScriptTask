if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      let binary = num.toString(2);
      return Number(binary[binary.length - bit]);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      let binary = num.toString(2);
      //Below code adds 0 in front of string to complete 8 digit
      for(let count = binary.length; count < 8; count++){
        binary = '0' + binary;
      }
      return binary;
    },

    multiply: function(a, b) {
      //Precision is unknown as it varies, So calculating precision required
      let precision = (String(b).split('.')[1]).length || 1;
      return +(a * b).toFixed(precision);
    }
  };
});

