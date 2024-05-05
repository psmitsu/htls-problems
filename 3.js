function getPrimesInRange(min, max) {
  // учтем, если нам дали единичку
  const newMin = min < 2 ? 2 : min;

  // ничего не будем возвращать, если нам дали негативный или неправильный промежуток
  if (newMin > max || max < 0) {
    return [];
  }

  // не нужно проверять сверх sqrt(max)
  const stop = Math.sqrt(max);

  // сперва возьмем весь промежуток
  let result = [...Array(max-min+1).keys()].map(el => el + newMin);

  // будем проверять элементы промежутка
  // составные числа будем из него удалять находу, в качестве небольшой оптимизации
  for (let i=2; i<=stop && result.length > 0; i++) {
    result = result.filter(el => el % i !== 0);
  }

  return result;
}
