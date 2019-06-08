if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      let pattern = /[0-9]/;
      return str.match(pattern) ? true : false;
    },

    containsRepeatingLetter : function(str) {
      let pattern =  /([a-zA-Z])\1/;
      return str.match(pattern) ? true : false;
    },

    endsWithVowel : function(str) {
      let pattern =  /[aeiou]$/i;
      return str.match(pattern) ? true : false;
    },

    captureThreeNumbers : function(str) {
      let pattern =  /\d{3}/i;
      let match =  str.match(pattern); 
      return match ? match[0] : false;
    },

    matchesPattern : function(str) {
      let pattern =  /^\d{3}-\d{3}-\d{4}$/;
      return str.match(pattern) ? true : false;
    },

    isUSD : function(str) {
      let pattern =  /^\$\d{1,3}(\d{3})(\d{2})?$/;
      return str.match(pattern) ? true : false;
    }
  };
});
