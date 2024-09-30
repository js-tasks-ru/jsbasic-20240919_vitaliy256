// Итерационный метод

function factorial(n) {
  let cycle = 1;

  for (let i = 1; i <= n; i++) {
    cycle *= i;
  }

  return cycle;
}

// Рекурсивный метод

function factorialReq(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialReq(n - 1);
}
