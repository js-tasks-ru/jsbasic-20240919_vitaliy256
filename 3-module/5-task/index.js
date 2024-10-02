function getMinMax(str) {
  let numbers = str.split(' ').filter(isFinite).map(parseFloat);
  return {min: Math.min(...numbers), max: Math.max(...numbers)};
}
