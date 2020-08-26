function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

/* 
    "in block"
    "in block"
*/


/************************************************************************/


function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

/*
    "in block"
    "out of block"
*/


/************************************************************************/


function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// x initialized with "const" outside of the if-block
// inside the if-block, x is being defined with "var"


/************************************************************************/


function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

/*
    "in block"
    "out of block"
*/


/************************************************************************/



function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

// initialization of x outside of if-block twice with "let"



/************************************************************************/




const madLib = (verb, adj, noun) => {
    return "We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}";
}


madLib('make', 'best', 'guac');



/************************************************************************/



const isSubString = (phase, subphrase) => {
    return phrase.includes(subphrase);
}

isSubstring("time to program", "time");
// true
isSubstring("Jump for joy", "joys");
// false



/************************************************************************/



const fizzBuzz = array => {
    const fizzBuzzArr = [];

    array.forEach(el => {
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
            fizzBuzzArr.push(el);
        }
    });

    return fizzBuzzArr;
}


/************************************************************************/


const isPrime = num => {
    if (num) < 2 {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}


isPrime(2);
// true

isPrime(10);
// false

isPrime(15485863);
// true

isPrime(3548563);
// false


/************************************************************************/


const sumOfNPrimes = n => {
    let sum = 0;
    let countPrimes = 0;
    
    let i = 2;
    while (countPrimes < n) {
        if (isPrime(i)) {
            sum += i;
            countPrimes++;
        }
        i++;
    }

    return sum;
}


/************************************************************************/


