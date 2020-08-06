//1. COUNTDOWN
var countdown = function (number) {
    var interval = setInterval(() => {
        console.log(number);
        number--
        if (number === 0) {
            console.log("DONE!")
            clearInterval(interval);
        }
    }, 1000);
    return interval;
}
console.log(countdown(4))

//2. RANDOM NUMBER
function randomGame() {
    var counter = 0;
    var interval = setInterval(() => {
        var randomNumber = Math.random();
        counter++;
        if (randomNumber > 0.75) {
            clearInterval(interval);
            console.log(counter);
        }

    });
}
console.log(randomGame());

//3. isEven
var isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } return false;
}

//4. isOdd
var isOdd = (number) => {
    if (number % 2 !== 0) {
        return true;
    } return false;
}

//5. isPrime
function isPrime(num) {
    if (num === 1) {
        return false;
    } else if (num % 2 === 0) {
        return false;
    } return true;
}


//6. NUMBERFACT
var isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } return false;
}

var isOdd = (number) => {
    if (number % 2 !== 0) {
        return true;
    } return false;
}

var isPrime = (num) => {
    if (num === 1) {
        return false;
    } else if (num % 2 === 0) {
        return false;
    } return true;
}

function numberFact(number, callback) {
    return callback(number)
}

console.log(numberFact(59, isPrime))


//7. Find
function find(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}

//8. indexOf find
function findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
}

//9. specialMuliply
function specialMultiply(a, b) {
    if (arguments.length === 1) {
        return function (b) {
            return a * b;
        }
    }
    return a * b;
};