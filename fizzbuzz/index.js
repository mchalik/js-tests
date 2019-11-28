function fizzbuzz(num) {
  let result = '';
  if (num % 3 === 0) result +='fizz';
  if (num % 5 === 0) result +='buzz';
  return result || num;
}

function loop(num) {
  let i = 1;
  while (i <= num) {
    console.log(fizzbuzz(i));
    i++;
  }
}

loop(100);