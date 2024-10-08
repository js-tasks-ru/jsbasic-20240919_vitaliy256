function highlight(table) {
  let rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    let statusCell = row.querySelector('td:last-child');
    let param = statusCell.getAttribute("data-available");

    if (param === "true") {
      row.classList.add('available');
    } else if (param === "false") {
      row.classList.add('unavailable');
    } else {
      row.setAttribute("hidden", true);
    }

    let genderCell = row.querySelector("td:nth-of-type(3)").innerHTML;
    if (genderCell === "m") {
      row.classList.add('male');
    } else if (genderCell === "f") {
      row.classList.add('female');
    }

    let ageCell = parseInt(row.querySelector("td:nth-of-type(2)").innerHTML);
    if (ageCell < 18) {
      row.setAttribute("style", "text-decoration: line-through");
    }
  });
}
