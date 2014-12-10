/* Add String.capitalize() function to javascript strings
   Parameters:
      first_only: indicates if the capitalization should be only the first word (true),
                  or all words (false).  Defaults to false.
   Returns a new string with capitalized replacements
   */
if (!String.prototype.capitalize) {
  Object.defineProperty(String.prototype,'capitalize',
      {
        writable:true,
        value:function(first_only,undefined){
          if (first_only===undefined) {first_only = false;}
          r = first_only ? /(?!^\/)\b([a-z])/ : /(?!^\/)\b([a-z])/g;
          return this.replace(r,function(m){return m.toUpperCase()});
        }
      });
}
