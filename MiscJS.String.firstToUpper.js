/* Adds .firstToUpper() method to strings
   Returns the string with the first letter cast to uppercase
*/
Object.defineProperty(String.prototype,'firstToUpper',
    {
      writable:true,
      value:function(){
        return this.charAt(0).toUpperCase() + this.slice(1);
      }
    });
