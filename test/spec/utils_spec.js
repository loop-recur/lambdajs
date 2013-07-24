describe("Utils", function() {
  beforeEach(LambdaJS.expose);

  it("compose", function() {
    var oneAndDouble = compose(multiply(2), add(1))
    expect(oneAndDouble(1)).toEqual(4)
  });

  it("partial", function() {
    var twoTimesFive = multiply.partial(2, 5)
    expect(twoTimesFive()).toEqual(10)
  });

  it("parallel", function() {
    var finished = false;
    var f = function(y){
      expect(y).toEqual(2);
      expect(g).toHaveBeenCalledWith(2)
      finished = true;
    }
    var g = jasmine.createSpy();
    var doubleAndAdd = parallel(f, g);
    waitsFor(function(){return finished});
    doubleAndAdd(2);
  });

  it("S", function() {
    var addTwoMultiplyI = S(multiply, add(2));
    expect(addTwoMultiplyI(3)).toEqual(15)
  });

  it("K", function() {
    var two = K(2);
    expect(two()).toEqual(2)
  });

  it("I", function() {
    expect(I(2)).toEqual(2)
  });

  it("gt", function() {
    expect(gt(2, 3)).toEqual(false)
    expect(gt(3, 3)).toEqual(false)
    expect(gt(5, 3)).toEqual(true)
    expect(gt(5)(3)).toEqual(true)
  });

  it("gte", function() {
    expect(gte(2, 3)).toEqual(false)
    expect(gte(3, 3)).toEqual(true)
    expect(gte(5, 3)).toEqual(true)
    expect(gte(5)(3)).toEqual(true)
  });

  it("lt", function() {
    expect(lt(2, 3)).toEqual(true)
    expect(lt(3, 3)).toEqual(false)
    expect(lt(5, 3)).toEqual(false)
    expect(lt(5)(3)).toEqual(false)
  });

  it("lte", function() {
    expect(lte(2, 3)).toEqual(true)
    expect(lte(3, 3)).toEqual(true)
    expect(lte(5, 3)).toEqual(false)
    expect(lte(5)(3)).toEqual(false)
  });

  it("equal", function() {
    expect(equal(2, 3)).toEqual(false)
    expect(equal(3, 3)).toEqual(true)
    expect(equal(3)(3)).toEqual(true)
    expect(equal("3")(3)).toEqual(false)
  });

  it("eq", function() {
    expect(eq(2, 3)).toEqual(false)
    expect(eq(3, 3)).toEqual(true)
    expect(eq(3)(3)).toEqual(true)
    expect(eq("3")(3)).toEqual(true)
  });

  it("add", function() {
    expect(add(2, 3)).toEqual(5)
    expect(add(2)(3)).toEqual(5)
  });

  it("div", function() {
    expect(div(4, 2)).toEqual(2)
    expect(div(4)(2)).toEqual(2)
  });

  it("multiply", function() {
    expect(multiply(4, 2)).toEqual(8)
    expect(multiply(4)(2)).toEqual(8)
  });

  it("subtract", function() {
    expect(subtract(5, 2)).toEqual(3)
    expect(subtract(5)(2)).toEqual(3)
  });
});
