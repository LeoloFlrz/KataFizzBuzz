function createArray() {
  const numbers = [];
  for (let i = 0; i < 100; i++) {
    numbers[i] = i + 1;
  }
  return numbers;
}

const numero = createArray();

function convertirFizzBuzz(numero) {
  for (let i = 0; i < numero.length; i++) {
    if(numero % 3 == 0 && numero % 5 == 0) {
    numero = "FizzBuzz"
  } else if (numero % 3 == 0) {
    numero = "Fizz"
  } else if (numero % 5 == 0) {
    numero = "Buzz"
  } 
  return numero;
  }
}

// function convertFizzBuzz(numero){
//   let result;
//   if (numero % 3 == 0 && numero % 5 == 0) {
//       return result = "FizzBuzz";
//   } else if (numero % 3 == 0) {
//       return result = "Fizz";
//   } else if (numero % 5 == 0) {
//       return result = "Buzz";
//   } else {
//       return numero;
//   }
// }



console.log(createArray());
console.log(convertirFizzBuzz(numero));
