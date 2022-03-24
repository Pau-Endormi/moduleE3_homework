var arr = [7, 2, 5, 8, 4, 0, null, "A", true];

function showAmountEvenAndOdd(array) {
    let evenNum = 0;
    let oddNum = 0;
    let zeros = 0;
    let other = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof arr[i] == "number") {
            if (array[i] === 0) {
                zeros += 1;
            } else if (array[i] % 2 === 0) {
                evenNum += 1;
            } else if (array[i] % 2 !== 0) {
                oddNum += 1;
            }
        } else {
            other += 1;
        }
    }

    console.log(`Количество чётных чисел: ${evenNum}`);
    console.log(`Количество нечётных чисел: ${oddNum}`);
    console.log(`Количество нулей: ${zeros}`);
    console.log(`Количество нечисловых элементов: ${other}`);
}

showAmountEvenAndOdd(arr);
