import { FizzBuzz } from './../src/scripts/FizzBuzz'


  describe('FizzBuzz kata', () => {
    test('should return "Fizz" for numbers divisible by 3', () => {
      expect(FizzBuzz()[2]).toBe('Fizz')  
      
    })

    test('should return "Buzz" for numbers divisible by 5', () => {
      expect(FizzBuzz()[4]).toBe('Buzz')
      expect(FizzBuzz()[9]).toBe('Buzz')
      
    })

    test('should return "FizzBuzz" for numbers divisible by both 3 and 5', () => {
      expect(FizzBuzz()[14]).toBe('FizzBuzz')
      expect(FizzBuzz()[29]).toBe('FizzBuzz')
      
    })

    test('should return the number itself for numbers not divisible by 3 or 5', () => {
      expect(FizzBuzz()[0]).toBe(1)
      expect(FizzBuzz()[6]).toBe(7)
    })
  })

