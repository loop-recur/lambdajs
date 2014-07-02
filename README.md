LambdaJS
========
The full ECMAScript API done a functional way.

## RULES

 1. The data comes last. E.g: str.method(arg) -> method(arg, str)
 2. Everything is curried
 3. Functions with optional arguments are split into two functions. One with `_` at the end that takes the options. E.g: `indexOf(x,str)` & `indexOf_(x,y,str)`
 4. Every function is pure

Thanks so much to @casperin and @eschmitt for doing a ton of the work on this though isn't not visible in the contributors.

## DOCS
[docs](https://rawgit.com/loop-recur/lambdajs/master/docs/docs.html)

## USAGE

There is an `expose()` method to "mix in" to the global namespace if
desired.

In the browser

```html
<script src="dist/lambda.browser.js"></script>
<script>LambdaJS.expose(window);</script>
```
or
```js
define(['dist/lambda.amd.js'], function(Ljs){
	
});
```

In node

```js
npm install lambdajs
var ljs = require('lambdajs');
```
or
```js
require('lambdajs').expose(global);
```
## MOTIVATION 

Let's say you want to replace "-" for "/" in a js function. Typically
you'd have to do:

```js
var dashesForSlashes = function(str) {
  return str.replace(/-/g, '/');
}
```

This has some issues.
* We had to name a temporary variable `str`
* We had to write some "glue code" - a full `function(){}` complete with `return`
* We are dependent upon the `str` to be able to call `replace`

In functional "point free" style we don't need to grab a hold of our data to be able to
write new functions. In this case, by "data" I mean the string.

LambdaJS let's us write something like this:

```js
var dashesForSlashes = replace(/-/g, '/');
```

This is very useful when dealing with `compose`
```js
var f = compose(toUpperCase, replace(/-/g, '/'))
f("hi-guys") //=> HI/GUYS
```

Another issue is, in standard javascript, if you call `reverse` on an array, you will
permanently alter the array:

```js
var users = ['Alex', 'Sam', 'Pat']
users.reverse(); //=> ['Pat', 'Sam' 'Alex']
users //=> ['Pat', 'Sam' 'Alex']
```

That can be quite surprising when you go to display users in a different
spot of your app and they are out of order.

LambdaJS makes all the built-in functions "pure", meaning there is no
side-effects or mutation.

```js
var users = ['Alex', 'Sam', 'Pat']
reverse(users); //=> ['Pat', 'Sam' 'Alex']
users //=> [['Alex', 'Sam', 'Pat']
```

If you're interested in learning more about currying and composition, I
gave a talk on this subject a little while ago:
[Hey underscore, you're doing it wrong!](https://www.youtube.com/watch?v=m3svKOdZijA)



ROADMAP (help if ya want!):
- Possibly use: https://github.com/codemix/fast.js
- Include polyfills for future ecmascript functions (or flip/curry other dependent polyfill lib)
