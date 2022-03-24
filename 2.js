function isPrimeNumber(num) {
    if (Number.isInteger(num) && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    } else {
        return "Переданные данные неверны!";
    }
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(7));
