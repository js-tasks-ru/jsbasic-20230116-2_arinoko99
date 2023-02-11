function toggleText() {
  // ваш код...

  const btn = document.querySelector('.toggle-text-button');
  const btnText = document.querySelector('#text');

  btn.addEventListener('click', _ => {
    btnText.toggleAttribute('hidden');
  });
}
