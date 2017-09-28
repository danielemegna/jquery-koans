describe("About Utilities", function() {
  beforeEach(function() {
    loadFixtures('fixtures/AboutUtilitiesFixture.html'); 
  });
  
  it("should iterate an array with $.each", function() {
    var result = 0;
    var array = ["one", 2, null];
    
    $.each(array, function(index, value) {
      if(index === 1) {
        result = value;
      }
    });
    
    expect(result).toEqual(2);
  });
  
  it("should iterate an object literal with $.each", function() {
    var object = { name: "Swedish Chef", age: 2.5 };
    var actualValue = 0;
    
    $.each(object, function(key, value) {    
      if(key === "name") {
        actualValue = value;
      }
    });
    
    expect(actualValue).toEqual("Swedish Chef");
    expect(object.name).toEqual("Swedish Chef");
  });
  
  it("should merge two objects with $.extend", function() {    
    var object1 = { animal: "cardinal", color: "red" };
    var object2 = { firstName: "woody", lastName: "woodpecker" };
    
    var result = $.extend({}, object1, object2);
    
    expect(result.color).toEqual("red");
    expect(result.lastName).toEqual("woodpecker");
  });
  
  it("should filter arrays with $.grep", function() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8];
    
    array = $.grep(array, function(value, index) {
      return value > 5;
    });
    
    expect(array).toEqual([6, 7, 8]);
  });
  
  it("should find elements in array with $.inArray", function() {
    var actualValue = 0;
    
    var array = ["Pie", 42, "Cake", "BoogieMonster"];
    
    var pieInArrayResult = $.inArray("Pie", array);
    var boogieMonsterInArrayResult = $.inArray("BoogieMonster", array);
    var notFoundInArrayResult = $.inArray(98765, array);
    
    expect(pieInArrayResult != -1).toBe(true);
    expect(pieInArrayResult).toEqual(0);

    expect(boogieMonsterInArrayResult != -1).toEqual(true);
    expect(boogieMonsterInArrayResult).toEqual(3);

    expect(notFoundInArrayResult != -1).toEqual(false);
    expect(notFoundInArrayResult).toEqual(-1);
  });
  
  it("should determine types using $.type", function() {
    var num = new Number(3);
    var arr = [];
    
    var type1 = $.type(num);
    var type2 = $.type(arr);
    
    expect(type1).toEqual('number');
    expect(type2).toEqual('array');
  });

  it("should test for array type using $.isArray", function() {
    var array = [1, "two", 3];
    var object = { property: "value" };
    
    var isArrayForArray = $.isArray(array);
    var isArrayForObject = $.isArray(object);
    
    expect(isArrayForArray).toEqual(true);
    expect(isArrayForObject).toEqual(false);
  });
  
  it("should check for empty objects using $.isEmptyObject", function() {
    var isEmpty = $.isEmptyObject({});
    var isNotEmpty = $.isEmptyObject({name: "name", value: "value"});
    
    expect(isEmpty).toEqual(true);
    expect(isNotEmpty).toEqual(false);    
  });
  
  it("should detect function types using $.isFunction", function() {
    var object = {
      name: "bob",
      weight: 200,
      getWeight: function() {
        return weight;
      }
    };

    var isFunction1 = $.isFunction(object.name);
    var isFunction2 = $.isFunction(object.getWeight);
    
    expect(isFunction1).toEqual(false);
    expect(isFunction2).toEqual(true);
  });
  
  it("should perform translations on each array element returning a new array using $.map", function() {
    var array = ["a", "b", "c", "d"];
    
    var mapped = $.map(array, function(element, index) {
      return element.toUpperCase();
    });
    
    expect(mapped).toEqual(["A", "B", "C", "D"]);
    expect($.type(mapped)).toEqual('array');
  });
  
  it("should parse json using $.parseJSON", function() {
    var jsonString = '{"name":"animal", "age":2}'
    
    var parsedJsonObject = $.parseJSON(jsonString);
    
    expect(parsedJsonObject.name).toEqual("animal");
    expect(parsedJsonObject.age).toEqual(2);
    expect(parsedJsonObject.unknown).toEqual(undefined);
  });
  
  it("should trim strings using $.trim", function() {
    var string = "   Internet Explorer does not have a native implementation of trim, so this jquery method is handy     ";
    
    var trimmed = $.trim(string);
    expect(trimmed).toEqual("Internet Explorer does not have a native implementation of trim, so this jquery method is handy");
  });
});
