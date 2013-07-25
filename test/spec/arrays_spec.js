describe("Arrays", function() {
  it("concat", function() {
    var hege = ["Cecilie", "Lone"];
    var stale = ["Emil", "Tobias", "Linus"];
    var kai = ["Robin"];
    expect(concat(hege,stale,kai)).toEqual(['Cecilie','Lone','Emil','Tobias','Linus','Robin'])
    expect(concat(hege)(stale,kai)).toEqual(['Cecilie','Lone','Emil','Tobias','Linus','Robin'])
  });

  it("every", function() {
    var isBigEnough = lte(10);
    expect(every(isBigEnough, [12, 5, 8, 130, 44])).toBeFalsy();
    expect(every(isBigEnough, [12, 54, 18, 130, 44])).toBeTruthy();
  });

  it("filter", function() {
    var isEven = function(n) { return !(n % 2); }
    expect(filter(isEven, [1,2,3,4])).toEqual([2,4]);
    expect(filter(isEven)([1,2,3,4])).toEqual([2,4]);
  });

  it("forEach", function() {
    var x = 1;
    var addToX = function(y){ x += y }
    forEach(addToX, [2, 5]);
    expect(x).toEqual(8)
  });

  it("indexOf", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(indexOf("Apple", fruits)).toEqual(2);
    expect(indexOf("Apple")(fruits)).toEqual(2);
  });

  it("indexOf_", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
    expect(indexOf_("Apple", 3, fruits)).toEqual(4);
    expect(indexOf_("Apple", 3)(fruits)).toEqual(4);
  });

  it("join", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(join(' ', fruits)).toEqual("Banana Orange Apple Mango");
    expect(join(' ')(fruits)).toEqual("Banana Orange Apple Mango");
  });

  it("lastIndexOf", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(lastIndexOf('Apple', fruits)).toEqual(2);
    expect(lastIndexOf('Apple')(fruits)).toEqual(2);
  });

  it("map", function() {
    var addOne = add(1);
    expect(map(addOne, [1,2,3,4])).toEqual([2, 3, 4, 5]);
    expect(map(addOne)([1,2,3,4])).toEqual([2, 3, 4, 5]);
  });

  it("pop", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(pop(fruits)).toEqual(["Banana", "Orange", "Apple"]);
    expect(fruits).toEqual(["Banana", "Orange", "Apple", "Mango"]);
  });

  it("push", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(push("Kiwi", fruits)).toEqual(["Banana", "Orange", "Apple", "Mango", "Kiwi"]);
    expect(push("Kiwi")(fruits)).toEqual(["Banana", "Orange", "Apple", "Mango", "Kiwi"]);
    expect(fruits).toEqual(["Banana", "Orange", "Apple", "Mango"]);
  });

  it("reduce", function() {
    var sum = function(sum, num) { return sum + num; };
    expect(reduce(sum, 0, [1,2,3,4])).toEqual(10);
    expect(reduce(sum)(0)([1,2,3,4])).toEqual(10);
    expect(reduce(sum, 0)([1,2,3,4])).toEqual(10);
  });

  it("reduceRight", function() {
    var words = ['foo', 'bar', 'baz'];
    expect(reduceRight(add, '', words)).toEqual('bazbarfoo');
    expect(reduceRight(add)('', words)).toEqual('bazbarfoo');
    expect(reduceRight(add)('')(words)).toEqual('bazbarfoo');
    expect(reduceRight(add, '')(words)).toEqual('bazbarfoo');
  });

  it("reverse", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(reverse(fruits)).toEqual(["Mango", "Apple", "Orange", "Banana"]);
    expect(fruits).toEqual(["Banana", "Orange", "Apple", "Mango"]);
  });

  it("shift", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(shift(fruits)).toEqual(["Orange", "Apple", "Mango"]);
    expect(fruits).toEqual(["Banana", "Orange", "Apple", "Mango"]);
  });

  it("slice", function() {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    expect(slice(1,fruits)).toEqual(["Orange", "Lemon", "Apple", "Mango"]);
    expect(slice(2)(fruits)).toEqual(["Lemon", "Apple", "Mango"]);
  });

  it("slice_", function() {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    expect(slice_(1,3,fruits)).toEqual(["Orange", "Lemon"]);
    expect(slice_(1)(3)(fruits)).toEqual(["Orange", "Lemon"]);
  });

  it("some", function() {
    var isBigEnough = lte(10);
    expect(some(isBigEnough, [2, 5, 8, 1, 4])).toBeFalsy()
    expect(some(isBigEnough, [12, 5, 8, 1, 4])).toBeTruthy()
  });

  it("sort", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(sort(fruits)).toEqual(["Apple", "Banana", "Mango", "Orange"]);
    expect(fruits).toEqual(["Banana", "Orange", "Apple", "Mango"]);
  });

  it("splice", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(splice(2, 1, fruits)).toEqual(["Banana", "Orange", "Mango"]);
    expect(splice(2)(1)(fruits)).toEqual(["Banana", "Orange", "Mango"]);
    expect(fruits).toEqual(["Banana", "Orange", "Apple", "Mango"]);
  });

  it("toString", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(toString(fruits)).toEqual("Banana,Orange,Apple,Mango");
  });

  it("toLocaleString", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(toLocaleString(fruits)).toEqual("Banana,Orange,Apple,Mango");
  });

  it("unshift", function() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    expect(unshift("Lemon", fruits)).toEqual(["Lemon", "Banana", "Orange", "Apple", "Mango"]);
    expect(fruits).toEqual(["Banana", "Orange", "Apple", "Mango"]);
  });
});
