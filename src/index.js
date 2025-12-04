// computes a factorial of a given positive integer
function factorial(n) {

/*
    if( n < 0 ) {
        throw new Error('n must be a positive integer');
    }
        */


    if( n === 0 ) {
        return 1;
    }

    return n * factorial(n - 1); //재귀적 함수(자기 자신 호출)
}

module.exports = factorial;