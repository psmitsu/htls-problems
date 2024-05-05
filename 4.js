// печатаем так, чтобы таблица была ровная
function getPaddedStringFromNumber(n, p) {
  const nDigits = parseInt(Math.log10(n))+1;

  const pads = p - nDigits;

  return ' '.repeat(pads) + n;
}

function printMultTable(n) {
  const nDigitsCol = parseInt(Math.log10(n))+1;
  const nDigitsRow = parseInt(Math.log10(n*n))+1;

  console.log(
    ' '.repeat(nDigitsCol), 
    ...[...Array(n).keys()].map(el => getPaddedStringFromNumber(el+1, nDigitsRow))
  );

  for (let i=1; i <= n; i++) {
    console.log(
      getPaddedStringFromNumber(i, nDigitsCol),
      ...[...Array(n).keys()].map(el => getPaddedStringFromNumber(i*(el+1), nDigitsRow))
    );
  }
}

printMultTable(25);
