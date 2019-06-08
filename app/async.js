if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['jquery'], function ($) {
  return {
    async: function (value) {
      let promise = new Promise((resolve, reject) => {
        resolve(value)
      })
      return promise;
    },

    manipulateRemoteData: function (url) {
      let promise = new Promise((resolve, reject) => {
        let data = $.ajax({ url: url });
        data.done((res) => {
          let result = [];
          res["people"].forEach(element => {
            result.push(element["name"]);
          });
          resolve(result);
        })
      })
      return promise;
    }
  };
});
