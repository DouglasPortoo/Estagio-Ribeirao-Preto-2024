const numero = 22;

function verificaFibonacci(num) {
  let fibAnterior = 0;
  let fibAtual = 1;

  while (fibAtual < num) {
    const proximoFib = fibAnterior + fibAtual;
    fibAnterior = fibAtual;
    fibAtual = proximoFib;
  }

  if (fibAtual === num) {
    return `${num} pertence à sequência de Fibonacci.`;
  } else {
    return `${num} não pertence à sequência de Fibonacci.`;
  }
}

console.log(verificaFibonacci(numero));
