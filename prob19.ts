// Coding challenge #18: Print the first 100 prime numbers

const isPrime = (num: number): boolean => {
  if (num <= 1) {
    return false;
  }
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  const sq: number = Math.sqrt(num);
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primes100 = (num: number): any => {
  let i = 2;
  let n = 0;
  while (n < num) {
    if (isPrime(i)) {
      console.log(i);
      n++
    }
    i++;
  }
};

primes100(100);

export {};