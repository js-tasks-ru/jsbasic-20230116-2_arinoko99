function getMinMax(str) {
  // ваш код...

  let array = str.split(" ");

  let minValue = +array[0];
  let maxValue = minValue;
  for (let i = 0; i < array.length; i++) {
    let el = +array[i];
    if (el < minValue) {
      minValue = el;
    }
    if (el > maxValue) {
      maxValue = el;
    }
  }
  return {min: minValue, max: maxValue};

}
