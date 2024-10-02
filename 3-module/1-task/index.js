function namify(users) {
  return users.map(it => it.name);
}

// Дополнительное задание из вебинара .reduce();
// Без комментов не проходит тесты, в песочнице код работает

/*
let users =
  [
    {
      firstName: 'Алла',
      lastName: 'Пугачёва',
      gender: 'f',
    },
    {
      firstName: 'Филипп',
      lastName: 'Киркоров',
      gender: 'm',
    },
    {
      firstName: 'Ольга',
      lastName: 'Бузова',
      gender: 'f',
    },
    {
      firstName: 'Максим',
      lastName: 'Галкин',
      gender: 'm',
    },
  ];

let females = users.reduce((accumulator, user) => {
  if (user.gender === 'f') {
    accumulator += `${user.firstName} ${user.lastName} `;
  }

  return accumulator;
}, []).join('\n');

console.log(females);
*/
