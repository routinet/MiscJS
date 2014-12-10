/* Add Array.intersect() function to javascript arrays
   Parameters:
      test_array: an array to intersect with the current array
   Returns a new array including only values present in host array and the passed array.
   */
if (!Array.prototype.intersect) {
  Object.defineProperty(Array.prototype,'intersect',
      {
        writable: true,
        value: function intersect(test_array){
                  var ret=[];
                  if (test_array.indexOf) {
                    for (x in this) {
                        if (test_array.indexOf(this[x])>=0) { ret.push(this[x]); }
                    }
                  }
                  return ret;
        }
      });
}
