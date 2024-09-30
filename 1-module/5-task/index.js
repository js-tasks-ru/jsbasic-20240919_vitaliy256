function truncate(str, maxlength) {
  if (maxlength >= str.length) {

    return str;
  }

  return str.slice(0, maxlength - 1) + "…";
}



