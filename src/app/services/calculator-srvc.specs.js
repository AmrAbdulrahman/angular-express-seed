describe('ngApp.calculatorService', function() {
  var calculatorService;

  beforeEach(module('ngApp'));
  beforeEach(inject(function($injector) {
    calculatorService = $injector.get('calculatorService');
  }));

  it('should sums up two numbers', function() {
    expect(calculatorService.add(0, 0)).toBe(0);
    expect(calculatorService.add(1, 2)).toBe(3);
  });

  it('should sums negative numbers', function() {
    expect(calculatorService.add(-1, -1)).toBe(-2);
  });

  it('throws an error on non numbers', function() {
    var invalidAddition = function() {
      calculatorService.add('a', -1);
    };

    expect(invalidAddition).toThrowError('Both arguments must be numeric');
  });

  it('throws an error if an argument is missing', function() {
    var invalidAddition = function() {
      calculatorService.add(1);
    };

    expect(invalidAddition).toThrowError('Both arguments must be supplied');
  });
});