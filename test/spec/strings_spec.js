describe("Strings", function() {
  if(typeof require != "undefined") { require('../../index.js').expose(global); }

  it("charAt", function() {
    expect(charAt(1)("hey")).toEqual('e');
  });
  
  it("charCodeAt", function() {
    expect(charCodeAt(1, "hey")).toEqual(101);
    expect(charCodeAt(1)("hey")).toEqual(101);
  });
  
  it("concat", function() {
    expect(concat("rock ", "n' ", "roll")).toEqual("rock n' roll");
    expect(concat("rock ")("n' ", "roll")).toEqual("rock n' roll");
  });
  
  it("indexOf", function() {
    var str="Hello world, welcome to the universe.";
    expect(indexOf("welcome", str)).toEqual(13);
    expect(indexOf("welcome")(str)).toEqual(13);
  });
  
  it("indexOf_", function() {
    var str="Hello world, welcome to the welcomed universe.";
    expect(indexOf_("welcome", 14, str)).toEqual(28);
    expect(indexOf_("welcome")(14)(str)).toEqual(28);
  });
  
  it("lastIndexOf", function() {
    var str="Hello planet earth, you are a great planet.";
    expect(lastIndexOf("planet", str)).toEqual(36);
    expect(lastIndexOf("planet")(str)).toEqual(36);
  });
  
  it("match", function() {
    var str="The rain in SPAIN stays mainly in the plain"; 
    expect(match(/ain/g, str)).toEqual(['ain','ain','ain']);
    expect(match(/ain/g)(str)).toEqual(['ain','ain','ain']);
  });
  
  it("replace", function() {
    var str="Visit Microsoft!";
    expect(replace("Microsoft","W3Schools", str)).toEqual('Visit W3Schools!');
    expect(replace("Microsoft")("W3Schools")(str)).toEqual('Visit W3Schools!');
  });
  
  it("search", function() {
    var str="Visit W3Schools!";
    expect(search("W3Schools", str)).toEqual(6);
    expect(search("W3Schools")(str)).toEqual(6);
  });
  
  it("slice", function() {
    var str="Hello world!";
    expect(slice(1, str)).toEqual('ello world!');
    expect(slice(1)(str)).toEqual('ello world!');
  });

  it("slice_", function() {
    var str="Hello world!";
    expect(slice_(1, 5, str)).toEqual('ello');
    expect(slice_(1)(5)(str)).toEqual('ello');
  });
  
  it("split", function() {
    var str="How are you doing today?";
    expect(split(" ", str)).toEqual(['How','are','you','doing','today?']);
    expect(split(" ")(str)).toEqual(['How','are','you','doing','today?']);
  });

  it("split_", function() {
    var str="How are you doing today?";
    expect(split_(" ", 2, str)).toEqual(['How','are']);
    expect(split_(" ")(2)(str)).toEqual(['How','are']);
  });
  
  it("substring", function() {
    var str="Hello world!";
    expect(substring(3, str)).toEqual('lo world!');
    expect(substring(3)(str)).toEqual('lo world!');
  });

  it("substring_", function() {
    var str="Hello world!";
    expect(substring_(3, 5, str)).toEqual('lo');
    expect(substring_(3)(5)(str)).toEqual('lo');
  });

  it("toLocaleLowerCase", function() {
    expect(toLocaleLowerCase("ALPHABET")).toEqual('alphabet');
  });

  it("toLowerCase", function() {
    expect(toLowerCase("Hello world!")).toEqual('hello world!');
  });

  it("toLocaleUpperCase", function() {
    expect(toLocaleUpperCase("alphabet")).toEqual('ALPHABET');
  });

  it("toUpperCase", function() {
    var str="Hello world!";
    expect(toUpperCase("Hello world!")).toEqual('HELLO WORLD!');
  });

  it("trim", function() {
    var str="Hello world!";
    expect(trim(" Hello world! ")).toEqual('Hello world!');
  });
});
