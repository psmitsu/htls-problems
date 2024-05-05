function getConjugates(n) {
  const tens = n % 100;

  // например, 111
  if (tens > 10 && tens < 20) {
    return `${n} компьютеров`;
  }

  const ones = n % 10;

  // например, 101
  if (ones === 1) {
    return `${n} компьютер`;
  }

  // например, 1152
  if (ones > 1 && ones < 5) {
    return `${n} компьютера`;
  }

  // например 7008
  return `${n} комьютеров`;
}
