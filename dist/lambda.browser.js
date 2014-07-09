(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isFunction = require('lodash.isfunction');

/**
 * Creates a function that is the composition of the provided functions,
 * where each function consumes the return value of the function that follows.
 * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
 * Each function is executed with the `this` binding of the composed function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {...Function} [func] Functions to compose.
 * @returns {Function} Returns the new composed function.
 * @example
 *
 * var realNameMap = {
 *   'pebbles': 'penelope'
 * };
 *
 * var format = function(name) {
 *   name = realNameMap[name.toLowerCase()] || name;
 *   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
 * };
 *
 * var greet = function(formatted) {
 *   return 'Hiya ' + formatted + '!';
 * };
 *
 * var welcome = _.compose(greet, format);
 * welcome('pebbles');
 * // => 'Hiya Penelope!'
 */
function compose() {
  var funcs = arguments,
      length = funcs.length;

  while (length--) {
    if (!isFunction(funcs[length])) {
      throw new TypeError;
    }
  }
  return function() {
    var args = arguments,
        length = funcs.length;

    while (length--) {
      args = [funcs[length].apply(this, args)];
    }
    return args[0];
  };
}

module.exports = compose;

},{"lodash.isfunction":2}],2:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Checks if `value` is a function.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 */
function isFunction(value) {
  return typeof value == 'function';
}

module.exports = isFunction;

},{}],3:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createWrapper = require('lodash._createwrapper');

/**
 * Creates a function which accepts one or more arguments of `func` that when
 * invoked either executes `func` returning its result, if all `func` arguments
 * have been provided, or returns a function that accepts one or more of the
 * remaining `func` arguments, and so on. The arity of `func` can be specified
 * if `func.length` is not sufficient.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var curried = _.curry(function(a, b, c) {
 *   console.log(a + b + c);
 * });
 *
 * curried(1)(2)(3);
 * // => 6
 *
 * curried(1, 2)(3);
 * // => 6
 *
 * curried(1, 2, 3);
 * // => 6
 */
function curry(func, arity) {
  arity = typeof arity == 'number' ? arity : (+arity || func.length);
  return createWrapper(func, 4, null, null, null, arity);
}

module.exports = curry;

},{"lodash._createwrapper":4}],4:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseBind = require('lodash._basebind'),
    baseCreateWrapper = require('lodash._basecreatewrapper'),
    isFunction = require('lodash.isfunction'),
    slice = require('lodash._slice');

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push,
    unshift = arrayRef.unshift;

/**
 * Creates a function that, when called, either curries or invokes `func`
 * with an optional `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of method flags to compose.
 *  The bitmask may be composed of the following flags:
 *  1 - `_.bind`
 *  2 - `_.bindKey`
 *  4 - `_.curry`
 *  8 - `_.curry` (bound)
 *  16 - `_.partial`
 *  32 - `_.partialRight`
 * @param {Array} [partialArgs] An array of arguments to prepend to those
 *  provided to the new function.
 * @param {Array} [partialRightArgs] An array of arguments to append to those
 *  provided to the new function.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new function.
 */
function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      isPartial = bitmask & 16,
      isPartialRight = bitmask & 32;

  if (!isBindKey && !isFunction(func)) {
    throw new TypeError;
  }
  if (isPartial && !partialArgs.length) {
    bitmask &= ~16;
    isPartial = partialArgs = false;
  }
  if (isPartialRight && !partialRightArgs.length) {
    bitmask &= ~32;
    isPartialRight = partialRightArgs = false;
  }
  var bindData = func && func.__bindData__;
  if (bindData && bindData !== true) {
    // clone `bindData`
    bindData = slice(bindData);
    if (bindData[2]) {
      bindData[2] = slice(bindData[2]);
    }
    if (bindData[3]) {
      bindData[3] = slice(bindData[3]);
    }
    // set `thisBinding` is not previously bound
    if (isBind && !(bindData[1] & 1)) {
      bindData[4] = thisArg;
    }
    // set if previously bound but not currently (subsequent curried functions)
    if (!isBind && bindData[1] & 1) {
      bitmask |= 8;
    }
    // set curried arity if not yet set
    if (isCurry && !(bindData[1] & 4)) {
      bindData[5] = arity;
    }
    // append partial left arguments
    if (isPartial) {
      push.apply(bindData[2] || (bindData[2] = []), partialArgs);
    }
    // append partial right arguments
    if (isPartialRight) {
      unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
    }
    // merge flags
    bindData[1] |= bitmask;
    return createWrapper.apply(null, bindData);
  }
  // fast path for `_.bind`
  var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
  return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
}

module.exports = createWrapper;

},{"lodash._basebind":5,"lodash._basecreatewrapper":14,"lodash._slice":23,"lodash.isfunction":24}],5:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreate = require('lodash._basecreate'),
    isObject = require('lodash.isobject'),
    setBindData = require('lodash._setbinddata'),
    slice = require('lodash._slice');

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * The base implementation of `_.bind` that creates the bound function and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new bound function.
 */
function baseBind(bindData) {
  var func = bindData[0],
      partialArgs = bindData[2],
      thisArg = bindData[4];

  function bound() {
    // `Function#bind` spec
    // http://es5.github.io/#x15.3.4.5
    if (partialArgs) {
      // avoid `arguments` object deoptimizations by using `slice` instead
      // of `Array.prototype.slice.call` and not assigning `arguments` to a
      // variable as a ternary expression
      var args = slice(partialArgs);
      push.apply(args, arguments);
    }
    // mimic the constructor's `return` behavior
    // http://es5.github.io/#x13.2.2
    if (this instanceof bound) {
      // ensure `new bound` is an instance of `func`
      var thisBinding = baseCreate(func.prototype),
          result = func.apply(thisBinding, args || arguments);
      return isObject(result) ? result : thisBinding;
    }
    return func.apply(thisArg, args || arguments);
  }
  setBindData(bound, bindData);
  return bound;
}

module.exports = baseBind;

},{"lodash._basecreate":6,"lodash._setbinddata":9,"lodash._slice":23,"lodash.isobject":12}],6:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('lodash._isnative'),
    isObject = require('lodash.isobject'),
    noop = require('lodash.noop');

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(prototype, properties) {
  return isObject(prototype) ? nativeCreate(prototype) : {};
}
// fallback for browsers without `Object.create`
if (!nativeCreate) {
  baseCreate = (function() {
    function Object() {}
    return function(prototype) {
      if (isObject(prototype)) {
        Object.prototype = prototype;
        var result = new Object;
        Object.prototype = null;
      }
      return result || global.Object();
    };
  }());
}

module.exports = baseCreate;

},{"lodash._isnative":7,"lodash.isobject":12,"lodash.noop":8}],7:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/** Used to detect if a method is native */
var reNative = RegExp('^' +
  String(toString)
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/toString| for [^\]]+/g, '.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
 */
function isNative(value) {
  return typeof value == 'function' && reNative.test(value);
}

module.exports = isNative;

},{}],8:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * A no-operation function.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @example
 *
 * var object = { 'name': 'fred' };
 * _.noop(object) === undefined;
 * // => true
 */
function noop() {
  // no operation performed
}

module.exports = noop;

},{}],9:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('lodash._isnative'),
    noop = require('lodash.noop');

/** Used as the property descriptor for `__bindData__` */
var descriptor = {
  'configurable': false,
  'enumerable': false,
  'value': null,
  'writable': false
};

/** Used to set meta data on functions */
var defineProperty = (function() {
  // IE 8 only accepts DOM elements
  try {
    var o = {},
        func = isNative(func = Object.defineProperty) && func,
        result = func(o, o, o) && func;
  } catch(e) { }
  return result;
}());

/**
 * Sets `this` binding data on a given function.
 *
 * @private
 * @param {Function} func The function to set data on.
 * @param {Array} value The data array to set.
 */
var setBindData = !defineProperty ? noop : function(func, value) {
  descriptor.value = value;
  defineProperty(func, '__bindData__', descriptor);
};

module.exports = setBindData;

},{"lodash._isnative":10,"lodash.noop":11}],10:[function(require,module,exports){
module.exports=require(7)
},{}],11:[function(require,module,exports){
module.exports=require(8)
},{}],12:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectTypes = require('lodash._objecttypes');

/**
 * Checks if `value` is the language type of Object.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // check if the value is the ECMAScript language type of Object
  // http://es5.github.io/#x8
  // and avoid a V8 bug
  // http://code.google.com/p/v8/issues/detail?id=2291
  return !!(value && objectTypes[typeof value]);
}

module.exports = isObject;

},{"lodash._objecttypes":13}],13:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to determine if values are of the language type Object */
var objectTypes = {
  'boolean': false,
  'function': true,
  'object': true,
  'number': false,
  'string': false,
  'undefined': false
};

module.exports = objectTypes;

},{}],14:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreate = require('lodash._basecreate'),
    isObject = require('lodash.isobject'),
    setBindData = require('lodash._setbinddata'),
    slice = require('lodash._slice');

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * The base implementation of `createWrapper` that creates the wrapper and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new function.
 */
function baseCreateWrapper(bindData) {
  var func = bindData[0],
      bitmask = bindData[1],
      partialArgs = bindData[2],
      partialRightArgs = bindData[3],
      thisArg = bindData[4],
      arity = bindData[5];

  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      key = func;

  function bound() {
    var thisBinding = isBind ? thisArg : this;
    if (partialArgs) {
      var args = slice(partialArgs);
      push.apply(args, arguments);
    }
    if (partialRightArgs || isCurry) {
      args || (args = slice(arguments));
      if (partialRightArgs) {
        push.apply(args, partialRightArgs);
      }
      if (isCurry && args.length < arity) {
        bitmask |= 16 & ~32;
        return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
      }
    }
    args || (args = arguments);
    if (isBindKey) {
      func = thisBinding[key];
    }
    if (this instanceof bound) {
      thisBinding = baseCreate(func.prototype);
      var result = func.apply(thisBinding, args);
      return isObject(result) ? result : thisBinding;
    }
    return func.apply(thisBinding, args);
  }
  setBindData(bound, bindData);
  return bound;
}

module.exports = baseCreateWrapper;

},{"lodash._basecreate":15,"lodash._setbinddata":18,"lodash._slice":23,"lodash.isobject":21}],15:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"lodash._isnative":16,"lodash.isobject":21,"lodash.noop":17}],16:[function(require,module,exports){
module.exports=require(7)
},{}],17:[function(require,module,exports){
module.exports=require(8)
},{}],18:[function(require,module,exports){
module.exports=require(9)
},{"lodash._isnative":19,"lodash.noop":20}],19:[function(require,module,exports){
module.exports=require(7)
},{}],20:[function(require,module,exports){
module.exports=require(8)
},{}],21:[function(require,module,exports){
module.exports=require(12)
},{"lodash._objecttypes":22}],22:[function(require,module,exports){
module.exports=require(13)
},{}],23:[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Slices the `collection` from the `start` index up to, but not including,
 * the `end` index.
 *
 * Note: This function is used instead of `Array#slice` to support node lists
 * in IE < 9 and to ensure dense arrays are returned.
 *
 * @private
 * @param {Array|Object|string} collection The collection to slice.
 * @param {number} start The start index.
 * @param {number} end The end index.
 * @returns {Array} Returns the new array.
 */
function slice(array, start, end) {
  start || (start = 0);
  if (typeof end == 'undefined') {
    end = array ? array.length : 0;
  }
  var index = -1,
      length = end - start || 0,
      result = Array(length < 0 ? 0 : length);

  while (++index < length) {
    result[index] = array[start + index];
  }
  return result;
}

module.exports = slice;

},{}],24:[function(require,module,exports){
module.exports=require(2)
},{}],25:[function(require,module,exports){
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

},{"lodash.compose":1,"lodash.curry":3}]},{},[25])