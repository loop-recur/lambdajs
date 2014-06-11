describe("Numbers", function() {
  if(typeof require != "undefined") { require('../../index.js').expose(global); }

  it("toExponential", function() {
    expect(toExponential(3, 5.56789)).toEqual("5.568e+0")
    expect(toExponential(3)(5.56789)).toEqual("5.568e+0")
  });

  it("toFixed", function() {
    expect(toFixed(2)(5.56789)).toEqual('5.57')
  });

  it("toPrecision", function() {
    expect(toPrecision(2, 13.3714)).toEqual("13")
    expect(toPrecision(2)(13.3714)).toEqual("13")
  });

  it("toString", function() {
    expect(toString(2)).toEqual("2")
  });
});
