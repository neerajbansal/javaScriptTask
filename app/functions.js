if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(...arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      function printStatement(str1){
        return (str + ", " + str1)
      }
      return printStatement;
    },

    makeClosures : function(arr, fn) {
      let result = []
      arr.map(a => {
        function calSquare(){
          return a * a;
        }
        result.push(calSquare)
      })
      return result;
    },

    partial : function(fn, str1, str2) {
      function partialFn(str3){
        return fn.call(this, str1,str2,str3);
      }
      return partialFn;
    },

    useArguments : function(...args) {
      return args.reduce((a,b) => a +b)
    },

    callIt : function(fn, ...args) {
      return fn.apply(this, args);
    },

    partialUsingArguments : function(fn, ...args) {
      function exeFun(...moreArgs){
        return fn.apply(this, args.concat(moreArgs));
      }
      return exeFun;
    },

    curryIt : function(fn) {
      return (x) => {
        return (y) => {
          return (z) => {
            return fn(x, y, z)
          }
        }
      }
    }
  };
});
