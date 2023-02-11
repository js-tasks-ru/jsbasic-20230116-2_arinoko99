function initCarousel() {
  // ваш код...

  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let inner = document.querySelector('.carousel__inner');
  let slidesCount = inner.querySelectorAll('.carousel__slide').length;
  let off = inner.offsetWidth;
  let transform = 0;



  function position (currentPosition) {
    if (currentPosition == 0) {
      arrowLeft.style.display = "none";
    } else if (currentPosition > 0) {
      arrowLeft.style.display = "";
    } else if (currentPosition <= (-off * (slidesCount - 1))) {
      arrowRight.style.display = "none";
    }
  }

  function rightClick () {
    inner.style.transform = `translateX(${transform - off}px)`;
    transform = `${transform - off}`;

    position(transform);
  }

  function leftClick () {
    inner.style.transform = `translateX(${+transform + +off}px)`;
    transform = `${+transform + +off}`;

    position(transform);
  }

  position(transform);
  arrowRight.addEventListener('click', rightClick);
  arrowLeft.addEventListener('click', leftClick);
}
