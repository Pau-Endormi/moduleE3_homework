function fn(num1) {
    return function(num2){
        return num1 + num2;
    }
}

const resultFunc = fn(6);

console.log(resultFunc(2));
