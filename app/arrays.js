if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    indexOf: function (arr, item) {
      return arr.indexOf(item);
    },

    sum: function (arr) {
      return arr.reduce((a, b) => a + b);
    },

    remove: function (arr, item) {
      return arr.filter(a => a != item);
    },

    removeWithoutCopy: function (arr, item) {
      while (arr.indexOf(item) != -1) {
        arr.splice(arr.indexOf(item), 1);
      }
      return arr;
    },

    append: function (arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function (arr) {
      arr.pop();
      return arr;
    },

    prepend: function (arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail: function (arr) {
      arr.shift();
      return arr;
    },

    concat: function (arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function (arr, item) {
      let count = 0;
      arr.map(a => {
        if (a == item) {
          count++;
        }
      })
      return count;
    },

    duplicates: function (arr) {
      let countObj = {};

      //Map all keys with frequency 
      arr.map(a => {
        if (countObj.hasOwnProperty(a)) {
          countObj[a] += 1;
        } else {
          countObj[a] = 1;
        }
      })

      //Getting only those keys whoch are not unique
      let duplicateArr = []
      for (let key in countObj) {
        if (countObj[key] >= 2) {
          duplicateArr.push(key)
        }
      }
      
      //Sorting the keys
      return duplicateArr.sort((a, b) => { a - b })
    },

    square: function (arr) {
      return arr.map(a => a * a)
    },

    findAllOccurrences: function (arr, target) {
      let indexArr = [];
      arr.map((a, index) => {
        if (a == target) {
          indexArr.push(index)
        }
      })
      return indexArr;
    }
  };
});
