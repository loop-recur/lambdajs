describe("LambdaJS", function() {

  it("does not globally expose functions automatically", function() {
    expect(window.concat).toBeUndefined();
  });

  describe("expose", function() {
    var cleanup = function() {
          for (f in LambdaJS) {
            if (LambdaJS.hasOwnProperty(f)) { 
              delete window[f];
            }
          }
        }
      ;

    beforeEach(LambdaJS.expose);
    afterEach(cleanup);

    it("exposes all functions to the global namespace", function() {
      expect(LambdaJS).toBeDefined();
      expect(window.concat).toBeDefined();
    });

    it("omits designated functions from exposure", function() {
      expect(window.expose).toBeUndefined();
    });
  });
  
  describe("LambdaJS", function() {
    it("concat", function() {
      expect(LambdaJS.concat([1], [2, 3], [4,5])).toEqual([1, 2, 3, 4, 5]);
      expect(LambdaJS.concat([1])([2, 3], [4,5])).toEqual([1, 2, 3, 4, 5]);
      expect(LambdaJS.concat("hello", " ", "world")).toEqual("hello world");
      expect(LambdaJS.concat("hello")(" ", "world")).toEqual("hello world");
    });
  });
});
