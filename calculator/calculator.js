const calculator = (operation, firstNum, secondNum) => {
    switch(operation){
        case "add":
            return firstNum + secondNum;
        case "sub":
            return firstNum - secondNum;
        case "multiply":
            return firstNum * secondNum;
        case "divide":
            return firstNum / secondNum;
    }
};

module.exports = calculator;