function makeFriendsList(friends) {
  // ваш код...

  let list = document.createElement('ul');

  friends.forEach(el => {
    let listEl = document.createElement('li');
    listEl.innerHTML = el.firstName + " " + el.lastName;
    list.append(listEl);
  });

  return list;
}
