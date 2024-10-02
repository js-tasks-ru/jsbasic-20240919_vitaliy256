let camelize = (str) =>
  str.split('-')
    .map((el, key) =>
      key === 0
        ? el
        : el[0].toUpperCase() + el.slice(1)).join('');
