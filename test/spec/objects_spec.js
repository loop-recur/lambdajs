describe("Object", function() {
  var obj = {a:1, b:2};
  beforeEach(LambdaJS.expose);

  it("toLocaleString", function() {
    expect(toLocaleString(obj)).toEqual("[object Object]");
  });

  it("hasOwnProperty", function() {
    expect(hasOwnProperty('a', obj)).toBeTruthy()
    expect(hasOwnProperty('blah', obj)).toBeFalsy()
  });

  it("isPrototypeOf", function() {
    var Fee = function(){}

    var Fi = function() {}
    Fi.prototype = new Fee();

    var Fo = function() {}
    Fo.prototype = new Fi();

    var Fum = function() {}
    Fum.prototype = new Fo();

    var fum = new Fum();
    var fo = new Fo();
    expect(isPrototypeOf(fum, Fi)).toBeTruthy()
    expect(isPrototypeOf(fo, Fum)).toBeFalsy()
  });
});
