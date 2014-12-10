/* Add Array.unique() function to javascript arrays
   Returns a new array including only unique values found in the original
   */
if (!Array.prototype.unique) {
  Object.defineProperty(Array.prototype,'unique',
      {
        writable: true,
        value: function(){
          var u = {}, a = [];
          for(var i = 0, l = this.length; i < l; ++i){
            if(u.hasOwnProperty(this[i])) {
               continue;
            }
            a.push(this[i]);
            u[this[i]] = 1;
          }
          return a;
        }
      });
}
