// Maak een recursieve functie fibonnaci om het fibonacci-nummer van
//een getal te bereken.
//- fibonacci(0) geeft 1 terug
//- fibonacci(1) geeft 1 terug
//- fibonacci(N) geeft fibonacci(N-2) + fibonacci(N-1) terug

const fibonnaci = number => number === 1 || number === 2 ? 1 : fibonnaci(number - 2) + fibonnaci(number - 1);

console.log(fibonnaci(18));