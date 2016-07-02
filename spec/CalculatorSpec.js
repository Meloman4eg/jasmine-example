describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("Sum function ", function() {

    it("can plus two numbers", function() {
      expect(calculator.sum(1,2)).toBe(3);
    });

    it("can plus number to null", function() {
      expect(calculator.sum(null,3)).toBe(3);
    });

    it("can plus string to string", function() {
      expect(calculator.sum('hello','world')).toBe('helloworld');
    });
  });
});
