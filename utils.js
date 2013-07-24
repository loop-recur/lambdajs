// Autocurry: Thanks fitzgen!
;(function(glob) {
  var toArray = function(arr, from) {
        return Array.prototype.slice.call(arr, from || 0);
      }

    , curry = function(fn) {
        var args = toArray(arguments, 1);
        return function() {
          return fn.apply(this, args.concat(toArray(arguments)));
        };
      }

   , autoCurry = function (fn, numArgs) {
      numArgs = numArgs || fn.length;
      var f = function () {
        if (arguments.length < numArgs) {
          return numArgs - arguments.length > 0 ?
            autoCurry(curry.apply(this, [fn].concat(toArray(arguments))),
            numArgs - arguments.length) :
            curry.apply(this, [fn].concat(toArray(arguments)));
        } else {
          return fn.apply(this, arguments);
        }
      };
      f.toString = function(){ return fn.toString(); };
      f.curried = true;
      f.arity = fn.length; // can't seem to set .length of f
      return f;
    }

  Function.prototype.autoCurry = function(n) {
    return autoCurry(this, n);
  };
})(this);


// Partial application, thanks osteele!
(function() {

  if (!Array.slice) { // mozilla already supports this
      Array.slice = (function(slice) {
          return function(object) {
              return slice.apply(object, slice.call(arguments, 1));
          };
      })(Array.prototype.slice);
  }     

  var _ = Function._ = {};

  Function.prototype.partial = function(/*args*/) {
      var fn = this;
      var _ = Function._;
      var args = Array.slice(arguments, 0);
      //substitution positions
      var subpos = [], value;
      for (var i = 0; i < arguments.length; i++)
          arguments[i] == _ && subpos.push(i);
      return function() {
          var specialized = args.concat(Array.slice(arguments, subpos.length));
          for (var i = 0; i < Math.min(subpos.length, arguments.length); i++)
              specialized[subpos[i]] = arguments[i];
          for (var i = 0; i < specialized.length; i++)
              if (specialized[i] == _)
                  return fn.partial.apply(fn, specialized);
          return fn.apply(this, specialized);
      }
  }
})();

// compose slightly altered to juggle args a little better.
// Really helps w/ applicatives, but true goal would be something like:
// compose(f, g, x) :: (b -> c) -> (a -> b) -> a -> c
// compose(map, map)(f, [[x]]) == map(map(f, [x]), [[x]])
var compose = function() {
      var fns = arguments,
          arglen = fns.length;
          
      return function(){
        for(var i=arglen;--i>=0;) {
          var fn = fns[i]
            , args = fn.length ? Array.prototype.slice.call(arguments, 0, fn.length) : arguments
            , next_args = Array.prototype.slice.call(arguments, (fn.length || 1)); //not right with *args
          next_args.unshift(fn.apply(this,args));
          arguments = next_args;
        }
        return arguments[0];
      }
    }

    parallel =function(){
      var fns = arguments
      , arglen = fns.length;
      return function(x){
        for(var i=arglen;--i>=0;) {
          setTimeout(fns[i].partial(x), 0);
        }

        return arguments[0];
      }
    }

  , dot = function( param, obj ){
      return obj[param];
    }.autoCurry()

  , invoke = function(methodName/*, arguments*/) {
      var args = Array.slice(arguments, 1);
      return function(object) {
        return object[methodName].apply(object, Array.slice(arguments, 1).concat(args));
      }
    }

  , flip = function( fn ){
      return function(){
        var args = toArray(arguments, 0).reverse();
        return fn.apply( null, args );
      };
    }

  , multiply = function( x, y ) {
      return x * y;
    }.autoCurry()

  , div = function( x, y ) {
      return x / y;
    }.autoCurry()

  , add = function( x, y ) {
      return x + y;
    }.autoCurry()

  , subtract = function( x, y ) {
      return x - y;
    }.autoCurry()

  , gt = function( x, y ) {
      return x > y;
    }.autoCurry()

  , gte = function( x, y ) {
      return x >= y;
    }.autoCurry()

  , lt = function( x, y ) {
      return x < y;
    }.autoCurry()

  , lte = function( x, y ) {
      return x <= y;
    }.autoCurry()

  , equal = function( x, y ) {
      return x === y;
    }.autoCurry()

  , eq = function( x, y ) {
      return x == y;
    }.autoCurry()

  , S = function(f, g) {
      return function() {
        return f.apply(this, [g.apply(this, arguments)].concat(Array.slice(arguments, 0)));
      }
    }

  , K = function(x){ return function(){ return x; }; }

  , I = function(x){ return x; }
  ;
