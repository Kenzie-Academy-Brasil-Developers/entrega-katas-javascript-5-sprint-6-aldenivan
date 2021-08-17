// implemente aqui as funções de teste

function testReverseString1() {
    
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";

    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`);
} 

function testReverseString2() {
    
    let result = reverseString("Aldenivan Junior");
    let expected = "roinuJ navinedlA";

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
} 

function reverseString(string) {
    
    let newString = string.split("").reverse().join("");

    return newString;
} 

testReverseString1();
testReverseString2();

function testReverseSentence1() {

    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function testReverseSentence2() {
    
    let result = reverseSentence("potato is very god");
    let expected = "god very is potato";

    console.assert(result === expected, `Esperado: ${expected}, Obitido:${result}`)
}

function reverseSentence(sentence) {

    let newSetence = sentence.split(" ").reverse().join(" ");

    return newSetence;
}

testReverseSentence1();
testReverseSentence2();

function testMinimumValue1() {

    let array = [2, 4, 3, 44, -8, 9, 16];
    let result = minimumValue(array);
    let expected = -8;

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function testMinimumValue2() {

    let array = [10, 5, 9, 13, 12]
    let result = minimumValue(array)
    let expected = 5;

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function minimumValue(array) {

    let minimun = array[0];

    for(let i = 0; i < array.length; i++) {
        if(array[i] < minimun && typeof array[i] === "number" ) {
           
            minimun = array[i];
        }
    }

    return minimun
}

testMinimumValue1();
testMinimumValue2();

function testMaximumValue1() {
    
    let array = [-2, 6, 5, 13, 12, -8];
    let result = maximumValue(array);
    let expected = 13;

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function testMaximumValue2() {
    
    let array = [3, 7, 12, 15, 13, 25, 32]
    let result = maximumValue(array)
    let expected = 32;

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function maximumValue(array) {

    let maximum = array[0];

    for(let i = 0; i < array.length; i++) {
        
        if(array[i] > maximum && typeof array[i] === "number") {
           
            maximum = array[i];

        }
    }

    return maximum
}

testMaximumValue1();
testMaximumValue2();

function testCalculateRemainder1() {

    let result = calculateRemainder(36, 6);
    let expected = 0;

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function testCalculateRemainder2() {
    
    let result = calculateRemainder((25 + 14), 4);
    let expected = 3;

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function calculateRemainder(number, divider) {
    
    let rest = number % divider;

    return rest;
}

testCalculateRemainder1()
testCalculateRemainder2()

function testDistinctValues1() {

    let result = distinctValues("134657893154");
    let expected = "1 3 4 6 5 7 8 9";

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function testDistinctValues2() {
   
    let result = distinctValues("135373115");
    let expected = "1 3 5 7";

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function distinctValues(values) {
    
    let newValues = [];

    for(let i = 0; i < values.length; i++) {

        if(newValues.includes(values[i]) === false)

            newValues.push(values[i]);
    }

    return newValues.join(" ")
}

testDistinctValues1();
testDistinctValues2();

function testCountValues1() {

    let result = countValues("134657893154");
    let expected = "1(2) 3(2) 4(2) 5(2) 6(1) 7(1) 8(1) 9(1)";

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function testCountValues2() {
    
    let result = countValues("135373115");
    let expected = "1(3) 3(3) 5(2) 7(1)";

    console.assert(result === expected, `Esperado: ${expected}, Obitido: ${result}`);
}

function countValues(values) {
    
    let newValues = [];
    let result = ""

    for(let i = 0; i < values.length; i++) {
        
        if(newValues[values[i]] === undefined) {
            newValues[values[i]] = 1;
        } else {
            newValues[values[i]]++;
        }
    }

    for(let i = 0; i < newValues.length; i++) {

        if(newValues[i] > 0) {
            result += `${i}(${newValues[i]}) `
    
        }
    }
    return result.trim();
}

testCountValues1();
testCountValues2();

function testEvaluateExpression1() {

    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3;

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testEvaluateExpression2() {
    
    let result = evaluateExpression("w - x + y - z", {w: 6, x: 3, y: 5, z: 9});
    let expected = -1;

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function evaluateExpression(expression, values) {

    let newExpression = expression.split(" ");
    let tell = "";

    for(let i = 0; i < newExpression.length; i++) {

        let string = newExpression[i];

        for(let key in values) {
            
            if(string === key) {
                string = values[key];
            }
        }

        tell += `${string} `;
    }

    tell = tell.trim().split(" ");

    let result = Number(tell[0]);

    for(let i = 0; i < tell.length; i++) {

        if(tell[i] === "+") {

            result += Number(tell[i + 1]);
        }

        if(tell[i] === "-") {

            result -= Number(tell[i + 1]);
        }
    }

    return result;
}

testEvaluateExpression1();
testEvaluateExpression2();
