if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      let intervalFun;

      function exe(){
        console.log(start++)
        if(start <= end){
          intervalFun = setTimeout(exe, 100); 
        }
        // start++;
      }
      exe();

      return {
        cancel: ()=>{
          intervalFun && clearTimeout(intervalFun) 
        }
      }
    }
  };
});