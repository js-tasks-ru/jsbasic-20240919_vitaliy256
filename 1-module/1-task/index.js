// Итерационный метод

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n > 1) {
    let cycle = 1;
    for (let i = 2; i <= n; i++) {
      cycle = cycle * i;
    }
    return cycle;
  }
}

// Рекурсивный метод

function factorialReq(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialReq(n - 1);
}
