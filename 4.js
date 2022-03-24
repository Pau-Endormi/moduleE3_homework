let count = 0;

let intervalId = setInterval(function (num1, num2) {
    if (count > (num2 - num1)) {
        clearInterval(intervalId);
    } else {
        console.log(num1 + count);
        count += 1;
    }
}, 1000, 5, 15);
