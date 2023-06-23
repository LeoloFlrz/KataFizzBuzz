import FizzBuzz from './../src/scripts/FizzBuzz'
import {  createArray } from './../src/scripts/FizzBuzz'
import numbers from './../src/scripts/FizzBuzz'

describe('si el numero es divisible entre 3 y 5 devuelve FizzBuzz', () => {
    test('devuelve FizzBuzz', () => {
        let expected = 'FizzBuzz'
        let actual = numbers
        expect(actual).toBe('FizzBuzz');
    })
})