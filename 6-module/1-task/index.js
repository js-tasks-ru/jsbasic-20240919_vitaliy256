/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.table();
  }

  thead() {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    const params = ['Имя', 'Возраст', 'Зарплата', 'Город'];
    tr.innerHTML = params.map((it) => `<th>${it}</th>`).join('');
    thead.appendChild(tr);

    return thead;
  }

  body() {
    let tbody = document.createElement('tbody');
    this.rows.map((it) => {
      let tr = document.createElement('tr');
      let objValues = Object.values(it);
      tr.innerHTML = objValues.map((it) => `<td>${it}</td>`).join('');
      let destroy = document.createElement('td');
      destroy.innerHTML = '<button>[x]</button>';
      tr.appendChild(destroy);
      tbody.appendChild(tr);
    });
    return tbody;
  }

  table() {
    const table = document.createElement('table');
    table.addEventListener('click', this.click);
    table.appendChild(this.body());
    table.appendChild(this.thead());

    return table;
  }

  click = (e) => {
    if (e.target.tagName === 'BUTTON') {
      const tr = e.target.closest('tr');
      tr.remove();
    }}
}
