;(function(root) {

  /** Detect free variables */
  var freeExports = typeof exports == 'object' && exports;
  var freeModule = typeof module == 'object' && module &&
    module.exports == freeExports && module;
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
    root = freeGlobal;
  }

  // All methods from
  //  * Arrays
  //  * Numbers
  //  * Objects
  //  * Regexp
  //  * Strings
  //  * Date (coming soon)


  // RULES:
  // 1. The data comes last. E.g: str.method(arg) -> method(arg, str)
  // 2. Everything is curried
  // 3. Functions with optional arguments are split into two functions. One with _ at the end that takes the options. E.g: indexOf(x,str) & indexOf_(x,y,str)
  // 4. Everything is pure in that it doesn't mutate arguments

  LambdaJS = {};
  Strings = {};
  Arrays = {};
  Objects = {};
  Regexps = {};
  Numbers = {};

  // STRINGS
  // =========================

  //+ charAt :: Int -> String -> String
  Strings.charAt = function( i, s ){
    return s.charAt(i);
  }.autoCurry();

  //+ charCodeAt :: Int -> String -> Int
  Strings.charCodeAt = function( i, s ){
    return s.charCodeAt( i );
  }.autoCurry();

  //+ concat :: String... -> String
  Strings.concat = function(x) {
    return x.concat.apply("", arguments);
  }.autoCurry(2);

  //+ indexOf :: a -> String -> Int
  Strings.indexOf = function( value, a ){
    return a.indexOf( value );
  }.autoCurry();

  //+ indexOf_ :: a -> Int -> String -> Int
  Strings.indexOf_ = function( value, len, a ){
    return a.indexOf( value, len );
  }.autoCurry();

  //+ lastIndexOf :: a -> [a] -> Int
  Strings.lastIndexOf = function( value, a ){
    return a.lastIndexOf( value );
  }.autoCurry();

  //+ match :: Regexp|String -> String -> [String]
  Strings.match = function( regexp, s ){
    return s.match( regexp );
  }.autoCurry();

  //+ replace :: Regexp|String -> String -> String -> String
  Strings.replace = function( a, b, s ){
    return s.replace( a, b );
  }.autoCurry();

  //+ search :: Regexp|String -> String -> Int
  Strings.search = function( regexp, s ){
    return s.search( regexp );
  }.autoCurry();

  //+ slice :: Int -> String -> String
  Strings.slice = function( begin, a ){
    return a.slice( begin );
  }.autoCurry();

  //+ slice_ :: Int -> Int -> String
  Strings.slice_ = function( begin, end, a ){
    return a.slice( begin, end );
  }.autoCurry();

  //+ split :: String -> String -> [String]
  Strings.split = function( separator, s ){
    return s.split( separator );
  }.autoCurry();

  //+ split_ :: String -> Int -> String -> [String]
  Strings.split_ = function( separator, len, s ){
    return s.split( separator, len );
  }.autoCurry();

  //+ substring :: Int -> String -> String
  Strings.substring = function( start,  s ){
    return s.substring( start );
  }.autoCurry();

  //+ substring_ :: Int -> Int -> String -> String
  Strings.substring_ = function( start, end, s ){
    return s.substring( start, end );
  }.autoCurry();

  //+ toLocaleLowerCase :: String -> String
  Strings.toLocaleLowerCase = function( s ){
    return s.toLocaleLowerCase();
  }

  //+ toLocaleUpperCase :: String -> String
  Strings.toLocaleUpperCase = function( s ){
    return s.toLocaleUpperCase();
  }

  //+ toLocaleString :: String -> String
  Strings.toLocaleString = function( a ){
    return a.toLocaleString();
  }

  //+ toLowerCase :: String -> String
  Strings.toLowerCase = function( s ){
    return s.toLowerCase();
  }

  //+ toUpperCase :: String -> String
  Strings.toUpperCase = function( s ){
    return s.toUpperCase();
  }

  //+ trim :: String -> String
  Strings.trim = function( s ){
    return s.trim();
  }


  // Arrays
  // =========================

  //+ concat :: [a]... -> [a]
  Arrays.concat = function(a) {
    return a.concat.apply([], arguments);
  }.autoCurry(2);

  //+ every :: (a -> Boolean) -> [a] -> Boolean
  Arrays.every = function( fn, xs ) {
    return xs.every(fn);
  }.autoCurry();

  //+ filter :: (a -> Boolean) -> [a] -> [a]
  Arrays.filter = function(fn, xs) {
    return xs.filter(fn);
  }.autoCurry();

  //+ forEach :: (a -> undefined) -> [a] -> undefined
  Arrays.forEach = function( fn, xs ) {
    return xs.forEach(fn);
  }.autoCurry();

  //+ indexOf :: a -> [a] -> Int
  Arrays.indexOf = function( value, a ){
    return a.indexOf( value );
  }.autoCurry();

  //+ indexOf_ :: a -> Int -> [a] -> Int
  Arrays.indexOf_ = function( value, len, a ){
    return a.indexOf( value, len );
  }.autoCurry();

  //+ join :: String -> [a] -> String
  Arrays.join = function( separator, arr ){
    return arr.join( separator );
  }.autoCurry();

  //+ lastIndexOf :: a -> [a] -> Int
  Arrays.lastIndexOf = function( value, a ){
    return a.lastIndexOf( value );
  }.autoCurry();

  //+ map :: (a -> b) -> [a] -> [b]
  Arrays.map = function(fn, xs) {
    return xs.map(fn);
  }.autoCurry();

  //+ pop :: [a] -> [a]
  Arrays.pop = function( a ){
    return a.slice(0,-1);
  }

  //+ push :: a -> [a] -> [a]
  Arrays.push = function( value, a ){
    // cloning the array
    var b = a.slice(0);
    b.push( value );
    return b;
  }.autoCurry();

  //+ reduce :: (b -> a -> b) -> b -> [a] -> b
  Arrays.reduce = function(fn, acc, xs) {
    return xs.reduce(fn, acc);
  }.autoCurry();

  //+ reduceRight :: (b -> a -> b) -> b -> [a] -> b
  Arrays.reduceRight = function(fn, acc, xs) {
    return xs.reduceRight(fn, acc);
  }.autoCurry();

  //+ reverse :: [a] -> [a]
  Arrays.reverse = function( a ){
    return a.slice(0).reverse();
  }

  //+ shift :: [a] -> [a]
  Arrays.shift = function( arr ){
    return arr.slice(1);
  }

  //+ slice :: Int ->  [a]
  Arrays.slice = function( begin, a ){
    return a.slice( begin );
  }.autoCurry();

  //+ slice_ :: Int -> Int -> [a]
  Arrays.slice_ = function( begin, end, a ){
    return a.slice( begin, end );
  }.autoCurry();

  //+ some :: (a -> Boolean) -> [a] -> Boolean
  Arrays.some = function( fn, xs ) {
    return xs.some(fn);
  }.autoCurry();

  //+ sort :: [a] -> [a]
  Arrays.sort = function( a ){
    return a.slice(0).sort();
  }

  //+ splice :: Int -> Int -> [a] -> [a]
  Arrays.splice = function( index, count, a ){
    var b = a.slice(0);
    b.splice( index, count );
    return b;
  }.autoCurry();

  //+ unshift :: a -> [a] -> [a]
  Arrays.unshift = function( value, a ){
    var b = a.slice(0);
    b.unshift( value ); 
    return b;
  }.autoCurry();


  // REGEXPS
  // =========================

  //+ exec :: Regexp -> String -> [String]
  Regexps.exec = function( r, str ){
    return r.exec( str );
  }.autoCurry();

  //+ test :: Regexp -> String -> Boolean
  Regexps.test = function( r, str ){
    return r.test( str );
  }.autoCurry();



  // OBJECTS
  // =========================

  //+ String -> {} -> Boolean
  Objects.hasOwnProperty = function( prop, o ){
    return o.hasOwnProperty( prop );
  }.autoCurry();

  //+ isPrototypeOf :: {} -> Function -> Boolean
  Objects.isPrototypeOf = function( a, b ){
    return b.prototype.isPrototypeOf( a );
  }.autoCurry();



  // NUMBERS
  // =========================

  //+ toExponential :: Int -> Number -> String
  Numbers.toExponential = function( fractionDigits, n ){
    return n.toExponential( fractionDigits );
  }.autoCurry();


  //+ toFixed :: Number -> Number -> String
  Numbers.toFixed = function( digits, n ){
    return n.toFixed( digits );
  }.autoCurry()

  //+ toPrecision :: Number -> Number -> String
  Numbers.toPrecision = function( precision, n ){
    return n.toPrecision( precision );
  }.autoCurry();



  // LAMBDAJS
  // =========================

  //+ concat :: [[a]] -> [a]
  LambdaJS.concat = function(x) {
    var kind = (typeof x == "string") ? Strings : Arrays; // better way?
    return kind.concat.apply("", arguments);
  }.autoCurry(2);

  //+ slice :: Int ->  [a]
  LambdaJS.slice = function( begin, a ){
    return a.slice( begin );
  }.autoCurry();

  //+ slice_ :: Int -> Int -> [a]
  LambdaJS.slice_ = function( begin, end, a ){
    return a.slice( begin, end );
  }.autoCurry();

  //+ toString :: a -> String
  LambdaJS.toString = function( s ){
    return s.toString();
  }

  //+ valueOf :: a -> a
  LambdaJS.valueOf = function( a ){
    return a.valueOf();
  }

// EXPORTING
// ========================

  LambdaJS.expose = function(env, mod) {
    var win = getFreeGlobal(window);
    [Strings, Arrays, Regexps, Objects, Numbers, LambdaJS].map(function(mod){
      exposeModuleToGlobal(win, mod);
    });
  }

  function exposeModuleToGlobal(win, mod) {
    var f;
    for (f in mod) {
      if (f !== 'expose' && mod.hasOwnProperty(f)) {
        win[f] = mod[f];
      }
    }
  }

  function getFreeGlobal(_window) {
    return (typeof global == "object") ? global : window;
    var env_global = _window
      , free_global = typeof env_global == 'object' && env_global;
    if (free_global.global === free_global) {
      return free_global;
    }
    return _window;
  }

  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:
  if (
    typeof define == 'function' &&
    typeof define.amd == 'object' &&
    define.amd
  ) {
    define(function() {
      return LambdaJS;
    });
  } else if (freeExports && !freeExports.nodeType) {
    if (freeModule) { // in Node.js or RingoJS v0.8.0+
      freeModule.exports = LambdaJS;
    } else { // in Narwhal or RingoJS v0.7.0-
      for (key in LambdaJS) {
        LambdaJS.hasOwnProperty(key) && (freeExports[key] = LambdaJS[key]);
      }
    }
  } else { // in Rhino or a web browser
    root.LambdaJS = LambdaJS;
  }
}(this));
