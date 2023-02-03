function highlight(table) {
  // ваш код...
  const tBody = table.querySelector('tbody');
  const statusColumn = tBody.querySelectorAll('td:nth-child(4)');
  const genderColumn = tBody.querySelectorAll('td:nth-child(3)');
  const ageColumn = tBody.querySelectorAll('td:nth-child(2)');

  statusColumn.forEach(cell => {
    if (cell.dataset.available == "true") {
      cell.closest('tr').classList.add('available');
    } else if (cell.dataset.available == "false") {
      cell.closest('tr').classList.add('unavailable');
    } else {

      cell.closest('tr').setAttribute("hidden", "hidden");
    }

  });

  genderColumn.forEach(cell => {
    if (cell.textContent == "m") {
      cell.closest('tr').classList.add('male');
    } else if (cell.textContent == "f") {
      cell.closest('tr').classList.add('female');
    }
  });

  ageColumn.forEach(cell => {
    if (+cell.textContent < 18) {
      cell.closest('tr').style.textDecoration = "line-through";
    }
  });
}
