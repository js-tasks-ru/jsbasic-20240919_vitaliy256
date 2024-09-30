// Через for in
function isEmpty(obj) {
  for (let prop in obj) {

    return false;
  }

  return true;
}

// Через Object.keys()
function isEmptyAnother(obj) {

  return !Object.keys(obj).length;
}
