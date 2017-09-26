describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
     fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
    it('fizzes for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz')
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
    it('buzzes for 20', function() {
      expect(fizzBuzz.play(20)).toEqual('Buzz')
    });
  });

  describe('multiples of 15', function() {
    it('fizzbuzzes for 5', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
    it('fizzbuzzeses for 30', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz')
    });
  });

  describe('other numbers', function() {
    it('shows number for other numbers', function() {
      expect(fizzBuzz.play(2)).toEqual(2);
    });
  });


});
