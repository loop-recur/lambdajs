var curry = require('lodash.curry');
var compose = require('lodash.compose');

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

_LambdaJS = {};

// UTILS
// =========================
_LambdaJS.get = curry(function( param, obj ){
      return obj[param];
    })

_LambdaJS.multiply = curry(function( x, y ) {
      return x * y;
    })

_LambdaJS.div = curry(function( x, y ) {
      return x / y;
    })

_LambdaJS.add = curry(function( x, y ) {
      return x + y;
    })

_LambdaJS.subtract = curry(function( x, y ) {
      return x - y;
    })

_LambdaJS.mod = curry(function(x,y) {
      return x % y;
    })

_LambdaJS.gt = curry(function( x, y ) {
      return x > y;
    })

_LambdaJS.gte = curry(function( x, y ) {
      return x >= y;
    })

_LambdaJS.lt = curry(function( x, y ) {
      return x < y;
    })

_LambdaJS.lte = curry(function( x, y ) {
      return x <= y;
    })

_LambdaJS.equal = curry(function( x, y ) {
      return x === y;
    })

_LambdaJS.eq = curry(function( x, y ) {
      return x == y;
    })


// STRINGS
// =========================

//+ charAt :: Int -> String -> String
_LambdaJS.charAt = curry(function( i, s ){
  return s.charAt(i);
});

//+ charCodeAt :: Int -> String -> Int
_LambdaJS.charCodeAt = curry(function( i, s ){
  return s.charCodeAt( i );
});

//+ indexOf :: a -> String -> Int
_LambdaJS.indexOf = curry(function( value, a ){
  return a.indexOf( value );
});

//+ indexOf_ :: a -> Int -> String -> Int
_LambdaJS.indexOf_ = curry(function( value, len, a ){
  return a.indexOf( value, len );
});

//+ lastIndexOf :: a -> [a] -> Int
_LambdaJS.lastIndexOf = curry(function( value, a ){
  return a.lastIndexOf( value );
});

//+ match :: Regexp|String -> String -> [String]
_LambdaJS.match = curry(function( regexp, s ){
  return s.match( regexp );
});

//+ replace :: Regexp|String -> String -> String -> String
_LambdaJS.replace = curry(function( a, b, s ){
  return s.replace( a, b );
});

//+ search :: Regexp|String -> String -> Int
_LambdaJS.search = curry(function( regexp, s ){
  return s.search( regexp );
});

//+ split :: String -> String -> [String]
_LambdaJS.split = curry(function( separator, s ){
  return s.split( separator );
});

//+ split_ :: String -> Int -> String -> [String]
_LambdaJS.split_ = curry(function( separator, len, s ){
  return s.split( separator, len );
});

//+ substring :: Int -> String -> String
_LambdaJS.substring = curry(function( start,  s ){
  return s.substring( start );
});

//+ substring_ :: Int -> Int -> String -> String
_LambdaJS.substring_ = curry(function( start, end, s ){
  return s.substring( start, end );
});

//+ toLocaleLowerCase :: String -> String
_LambdaJS.toLocaleLowerCase = function( s ){
  return s.toLocaleLowerCase();
}

//+ toLocaleUpperCase :: String -> String
_LambdaJS.toLocaleUpperCase = function( s ){
  return s.toLocaleUpperCase();
}

//+ toLocaleString :: String -> String
_LambdaJS.toLocaleString = function( a ){
  return a.toLocaleString();
}

//+ toLowerCase :: String -> String
_LambdaJS.toLowerCase = function( s ){
  return s.toLowerCase();
}

//+ toUpperCase :: String -> String
_LambdaJS.toUpperCase = function( s ){
  return s.toUpperCase();
}

//+ trim :: String -> String
_LambdaJS.trim = function( s ){
  return s.trim();
}


// Arrays
// =========================

//+ every :: (a -> Boolean) -> [a] -> Boolean
_LambdaJS.every = curry(function( fn, xs ) {
  return xs.every(fn);
});

//+ filter :: (a -> Boolean) -> [a] -> [a]
_LambdaJS.filter = curry(function(fn, xs) {
  return xs.filter(fn);
});

//+ forEach :: (a -> undefined) -> [a] -> undefined
_LambdaJS.forEach = curry(function( fn, xs ) {
  return xs.forEach(fn);
});

//+ indexOf :: a -> [a] -> Int
_LambdaJS.indexOf = curry(function( value, a ){
  return a.indexOf( value );
});

//+ indexOf_ :: a -> Int -> [a] -> Int
_LambdaJS.indexOf_ = curry(function( value, len, a ){
  return a.indexOf( value, len );
});

//+ join :: String -> [a] -> String
_LambdaJS.join = curry(function( separator, arr ){
  return arr.join( separator );
});

//+ lastIndexOf :: a -> [a] -> Int
_LambdaJS.lastIndexOf = curry(function( value, a ){
  return a.lastIndexOf( value );
});

//+ map :: (a -> b) -> [a] -> [b]
_LambdaJS.map = curry(function(fn, xs) {
  return xs.map(fn);
});

//+ pop :: [a] -> [a]
_LambdaJS.pop = function( a ){
  return a.slice(0,-1);
}

//+ push :: a -> [a] -> [a]
_LambdaJS.push = curry(function( value, a ){
  // cloning the array
  var b = a.slice(0);
  b.push( value );
  return b;
});

//+ reduce :: (b -> a -> b) -> b -> [a] -> b
_LambdaJS.reduce = curry(function(fn, acc, xs) {
  return xs.reduce(fn, acc);
});

//+ reduceRight :: (b -> a -> b) -> b -> [a] -> b
_LambdaJS.reduceRight = curry(function(fn, acc, xs) {
  return xs.reduceRight(fn, acc);
});

//+ reverse :: [a] -> [a]
_LambdaJS.reverse = function( a ){
  return a.slice(0).reverse();
}

//+ shift :: [a] -> [a]
_LambdaJS.shift = function( arr ){
  return arr.slice(1);
}


//+ some :: (a -> Boolean) -> [a] -> Boolean
_LambdaJS.some = curry(function( fn, xs ) {
  return xs.some(fn);
});

//+ sort :: [a] -> [a]
_LambdaJS.sort = function( a ){
  return a.slice(0).sort();
}

//+ splice :: Int -> Int -> [a] -> [a]
_LambdaJS.splice = curry(function( index, count, a ){
  var b = a.slice(0);
  b.splice( index, count );
  return b;
});

//+ unshift :: a -> [a] -> [a]
_LambdaJS.unshift = curry(function( value, a ){
  var b = a.slice(0);
  b.unshift( value ); 
  return b;
});


// REGEXPS
// =========================

//+ exec :: Regexp -> String -> [String]
_LambdaJS.exec = curry(function( r, str ){
  return r.exec( str );
});

//+ test :: Regexp -> String -> Boolean
_LambdaJS.test = curry(function( r, str ){
  return r.test( str );
});



// OBJECTS
// =========================

//+ String -> {} -> Boolean
_LambdaJS.hasOwnProperty = curry(function( prop, o ){
  return o.hasOwnProperty( prop );
});

//+ isPrototypeOf :: {} -> Function -> Boolean
_LambdaJS.isPrototypeOf = curry(function( a, b ){
  return b.prototype.isPrototypeOf( a );
});



// NUMBERS
// =========================

//+ toExponential :: Int -> Number -> String
_LambdaJS.toExponential = curry(function( fractionDigits, n ){
  return n.toExponential( fractionDigits );
});


//+ toFixed :: Number -> Number -> String
_LambdaJS.toFixed = curry(function( digits, n ){
  return n.toFixed( digits );
})

//+ toPrecision :: Number -> Number -> String
_LambdaJS.toPrecision = curry(function( precision, n ){
  return n.toPrecision( precision );
});



// Shared
// =========================

//+ concat :: [[a]] -> [a]
_LambdaJS.concat = curry(function(x) {
  var kind = (typeof x == "string") ? "" : []; // better way?
  return kind.concat.apply(kind, arguments);
}, 2);

//+ slice :: Int ->  [a]
_LambdaJS.slice = curry(function( begin, a ){
  return a.slice( begin );
});

//+ slice_ :: Int -> Int -> [a]
_LambdaJS.slice_ = curry(function( begin, end, a ){
  return a.slice( begin, end );
});

//+ toString :: a -> String
_LambdaJS.toString = function( s ){
  return s.toString();
}

//+ valueOf :: a -> a
_LambdaJS.valueOf = function( a ){
  return a.valueOf();
}

_LambdaJS.curry = curry;
_LambdaJS.compose = compose;

_LambdaJS.expose = function(env) {
  var f;
  for (f in _LambdaJS) {
    if (f !== 'expose' && _LambdaJS.hasOwnProperty(f)) {
      env[f] = _LambdaJS[f];
    }
  }
  return _LambdaJS;
}

module.exports = _LambdaJS;

if(typeof window == "object") {
  LambdaJS = _LambdaJS;
}
