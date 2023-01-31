function showSalary(users, age) {
  // ваш код...
  return users.filter(user => user.age <= age).map(el => `${el.name}, ${el.balance}`).join('\n');
}
