/* JavaScript Inheritance
 * Michal Kuklis
 * MIT Licensed.
 */
// based on & inspired by John Resig
// http://ejohn.org/blog/simple-javascript-inheritance

(function(){
  var init = false;
  Function.prototype.extend = function(props) {
    init = true;
    var proto = new this;
    function Class() {
      if (init) { // initialize
        // restore constructor
        this.constructor = Class;
        
        for (var name in props) {
          if (typeof proto[name] == "function" 
            && typeof props[name] == "function") {
            this[name] = function(name, fn) {
              return function() {
                var tmp = this.super;
                this.super = fn;
                var result =  props[name].apply(this, arguments);
                this.super = tmp;
                return result; 
              }
            }(name, proto[name]);  
          }
          else {
            this[name] = props[name];
          }
        }
      }
      
      if (!init && this.init) { //create new object
        this.init.apply(this, arguments);
      }
    }
    init = false;
    Class.prototype = proto;
    return Class;
  }
})();
