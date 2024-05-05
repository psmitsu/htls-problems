function findDivisors(arr) {
  let result = [];
  // находим минимальное число в данном массиве
  // можем себе позволить, так как по условию числа положительные
  const m = Math.min(...arr);

  // для 1 ничего не будем возрвращать
  if (m === 1) {
    return [];
  }

  // проверим данный массив на делимость с числами от 2 до половины минимального
  for (let i=2; i<=m/2; i++) {
    if (!arr.find(el => el % i !== 0)) {
      result.push(i);
    }
  }

  // проверим и с минимальным числом
  if (!arr.find(el => el % m !== 0)) {
    result.push(m);
  }

  return result;
}
