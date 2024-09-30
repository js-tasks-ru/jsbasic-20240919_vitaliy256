function truncate(str, maxlength) {
  if (maxlength < str.length) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}
