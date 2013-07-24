describe("Regex", function() {
  beforeEach(LambdaJS.expose);
  
  it("exec", function() {
    var str="Hello world!";
    var patt=/Hello/;
    var patt2=/W3Schools/;
    expect(exec(patt, str)[0]).toEqual("Hello");
    expect(exec(patt)(str)[0]).toEqual("Hello");
    expect(exec(patt2, str)).toEqual(null);
  });

  it("test", function() {
    var str="Hello world!";
    var patt=/Hello/;
    var patt2=/W3Schools/;
    expect(test(patt, str)).toEqual(true);
    expect(test(patt)(str)).toEqual(true);
    expect(test(patt2, str)).toEqual(false);
  });
});
