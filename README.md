LambdaJS
========
The full ECMAScript API done a functional way.

## RULES

 1. The data comes last. E.g: str.method(arg) -> method(arg, str)
 2. Everything is curried
 3. Functions with optional arguments are split into two functions. One with `_` at the end that takes the options. E.g: `indexOf(x,str)` & `indexOf_(x,y,str)`
 4. Every function is pure

Thanks so much to @casperin for doing a ton of the work on this!

## DOCS
[docs](https://rawgit.com/loop-recur/lambdajs/master/docs/docs.html)


## USAGE

There is an `expose()` method to "mix in" to the global namespace if
desired.

In the browser

```html
<script src="lambda.js"></script>
<script>LambdaJS.expose(window);</script>
```

In node

```sh
npm install lambdajs
```

```js
var ljs = require('lambdajs');
```
or
```js
require('lambdajs').expose(global);
```

