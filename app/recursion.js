if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    listFiles: function (data, dirName) {
      let result = []
      function listing(dir) {
        if (dir.hasOwnProperty('files')) {
          for (let index in dir['files']) {
            let type = typeof dir['files'][index];
            let file = dir['files'][index];
            if (dirName) {
              if (type == 'string' && dir['dir'] == dirName) {
                result.push(file)
              } else if (type == 'object') {
                listing(file)
              }
            } else {
              if (type == 'string') {
                result.push(file)
              } else if (type == 'object') {
                listing(file)
              }
            }

          }
        } else {
          return
        }
      }
      listing(data, dirName)
      return result;
    },

    permute: function (arr) {
      function permutations(arr) {
        return (arr.length === 1) ? arr :
          arr.reduce((fix, variable, index) => {
            let remaining = [...arr];
            remaining.splice(index, 1);
            return fix.concat(permutations(remaining).map(a => [].concat(variable, a)));
          }, []);
      }
      return permutations(arr)
    }
  };
});
