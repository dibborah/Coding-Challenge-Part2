// Coding challenge # 19: Create a function that will return in an array the first
// "nPrimes" prime numbers greater than a number "startAt"

const isPrime = (num: number): boolean => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  let sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const nPrimes = (num: number, startAt: number): number[] => {
  let arr: number[] = [];
  let i = startAt;
  let n = 0;
  while (n < num) {
    if (isPrime(i)) {
      // console.log(i);
      arr.push(i);
      n++;
    }
    i++;
  }
  return arr;
};

console.log(nPrimes(10, 30));

export {};
