function sumSalary(salaries) {
  let sum = 0;
  for (let k in salaries) {
    if (typeof salaries[k] === 'number') {
      if ((!isNaN(salaries[k])) && (salaries[k] !== Infinity) && (salaries[k] !== -Infinity)) {
        sum += salaries[k];
      }
    }
  }
  return sum;
}
