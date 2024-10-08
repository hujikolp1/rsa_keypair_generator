export const genPrimeArr = (): number[] => {
    let primeArr: number[] = [];

    const isPrime = (n: number): boolean => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const nearestPrimeLessThan = (n: number): number => {
        for (let i = n - 1; i >= 2; i--) {
            if (isPrime(i)) return i;
        }
        return -1;
    };

    let firstN: number;

    while (true) {
        let input = prompt("Enter the upper bound prime number (or CANCEL for the default of 149):");
        firstN = parseInt(input || "149", 10);

        if (isNaN(firstN) || firstN < 11) {
            alert("Invalid input. Please enter a number greater than or equal to 11.");
            continue;
        }

        if (!isPrime(firstN)) {
            const nearestPrime = nearestPrimeLessThan(firstN);
            alert(`The number ${firstN} is not prime. The nearest prime less than ${firstN} is ${nearestPrime}. Please enter a prime number.`);
            continue;
        }

        break;
    }

    for (let n = 11; n <= firstN; n++) {
        if (isPrime(n)) {
            primeArr.push(n);
        }
    }

    return primeArr;
};
