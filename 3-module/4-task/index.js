function showSalary(users, age) {
  return users.reduce((accumulator, user) => {
    if (user.age <= age) {
      accumulator.push(`${user.name}, ${user.balance}`);
    }

    return accumulator;
  }, []).join('\n');
}
