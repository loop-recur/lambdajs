LambdaJS
========
The full ECMAScript API done a functional way.

RULES:
 1. The data comes last. E.g: str.method(arg) -> method(arg, str)
 2. Everything is curried
 3. Functions with optional arguments are split into two functions. One with _ at the end that takes the options. E.g: indexOf(x,str) & indexOf_(x,y,str)
 4. Every function is pure

Thanks so much to @casperin for doing a ton of the work on this!