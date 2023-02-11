function hideSelf() {
  // ваш код...

  const btn = document.querySelector('.hide-self-button');

  btn.addEventListener('click', _ => {
    btn.hidden = true;
  });
}
