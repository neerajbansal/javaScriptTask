if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      let result = [];
      let keysArr = Object.getOwnPropertyNames(obj);
      for(let index in keysArr){
        result.push(keysArr[index] + ": " + obj[keysArr[index]])
      }
      return result;
    }
  };
});
