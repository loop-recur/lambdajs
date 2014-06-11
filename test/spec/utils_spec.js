describe("Utils", function() {
  if(typeof require != "undefined") { require('../../index.js').expose(global); }

  it("get", function() {
    expect(get("a", {"a":"happy", "b":"sad"})).toEqual("happy");
    expect(get(1, ["a", "b", "c"])).toEqual("b");
  });

  it("mod", function() {
    expect(mod(5, 2)).toEqual(1)
    expect(mod(6)(2)).toEqual(0)
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
