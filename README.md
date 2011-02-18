#About
**extend** an attempt to create a simple JavaScript inheritance. Inspired by [http://ejohn.org/blog/simple-javascript-inheritance](http://ejohn.org/blog/simple-javascript-inheritance)


The usage example:
    function Car() {};
    Car.prototype = {
      name: function() {
        return "car";
      }
    }

    var Ford = Car.extend({
      name: function() {
        return this.super();
      }
    });

    var Focus = Car.extend({
      name: function() {
        return this.super();
      }
    });

    var focus = new Focus();
    focus.name(); // car
