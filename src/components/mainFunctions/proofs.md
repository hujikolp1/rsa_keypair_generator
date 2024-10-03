# Generate Prime Array
Factors always come in pairs: For any composite number n, if n is divisible by some number a, then there is another number b such that `a * b = n`. For example, for `n = 36`, you have factor pairs like `(2, 18), (3, 12), (4, 9), and (6, 6)`.

Smallest factor in the pair: One of these two factors (a or b) will always be smaller or equal to the square root of n. If both factors were larger than the square root of n, their product would be greater than n—which is impossible. This means if n has a divisor, at least one of its divisors must be less than or equal to √n.

Efficiency: Therefore, if you haven't found any factors by the time you reach the square root of n, you can safely conclude that n is prime. This cuts down the number of checks you need to make significantly, especially for large numbers.

# Generate D
### In RSA, D must satisfy the equation:

$$
D \cdot E \equiv 1 \ (\text{mod} \ \phi(N))
$$

This means that $D$ is the modular inverse of $E$ modulo $\phi(N)$, and $D$ only exists if $E$ and $\phi(N)$ are coprime (i.e., $\gcd(E, \phi(N)) = 1$).

### Reasons Why the Calculation Might Fail

1. **Non-Coprime Values**:
   - If $ \gcd(E, \phi(N)) \neq 1 $, then no $ D $ exists that satisfies the equation. This can happen if the random choice of $ E $ is not a valid candidate (i.e., it shares factors with $ \phi(N) $).

2. **Improper Bounds for D**:
   - If the iteration for finding $ D $ has an arbitrary of fixed upper bound (e.g., 10,000), it might fail to find a solution if $ D $ is large. However, simply increasing the limit doesn't always guarantee a solution—it depends on whether a valid $ D $ exists. One solution is to repeat the outer loop.

3. **Choice of E**:
   - A poor choice of $ E $ could make it very difficult or impossible to find a corresponding $ D $, especially if $ E $ isn't coprime with $ \phi(N) $.

### Setting an Appropriate Limit for D

While there isn’t a specific maximum value for $ D $ that applies universally, several factors can guide this decision:

- **Key Size**: The size of $ D $ depends on the size of $ N $ and $ \phi(N) $. For large RSA keys (e.g., 2048 bits), the value of $ D $ can be large, potentially in the range of hundreds or thousands of digits.
- **Performance vs. Accuracy**: Setting a limit like 10,000 is somewhat arbitrary and could fail if $ D $ happens to be larger than that. However, a more systematic way to compute $ D $ is by using the Extended Euclidean Algorithm, which is a faster and more reliable way to compute the modular inverse.

### Solution: Using the Extended Euclidean Algorithm

Instead of iterating up to a fixed value like 10,000, you can use the Extended Euclidean Algorithm to directly calculate $ D $. This algorithm guarantees that if $ E $ and $ \phi(N) $ are coprime, it will find the modular inverse.

Here’s how the algorithm could be applied:

```typescript
export const extendedEuclidean = (a: number, b: number): [number, number, number] => {
    if (b === 0) {
        return [a, 1, 0];
    }
    const [gcd, x1, y1] = extendedEuclidean(b, a % b);
    const x = y1;
    const y = x1 - Math.floor(a / b) * y1;
    return [gcd, x, y];
};

export const generateD = (phiN: number, E: number): number => {
    const [gcd, x, _] = extendedEuclidean(E, phiN);
    
    // Ensure E and phiN are coprime
    if (gcd !== 1) {
        console.error("E and phiN are not coprime, failed to generate D");
        window.location.reload();  // Restart process
        return -1;
    }

    let D = x % phiN;
    if (D < 0) {
        D += phiN;  // Ensure D is positive
    }

    return D;
};
```

Flipping $D$ to ensure it is positive will still satisfy the overall RSA algorithm. Here’s why:

### Explanation:

1. **Modular Arithmetic**: In modular arithmetic, negative values can often be represented as their positive equivalents. When you compute 
   $$
   D = x \mod \phi(N)
   $$
   the result is in the range \([0, $\phi(N) - 1]$). However, if $x$ (the coefficient obtained from the Extended Euclidean Algorithm) is negative, it can yield a negative result.

2. **Adding \( $\phi(N)$ \)**: By adding \( $\phi(N)$ \) to $D$ when it is negative, you're effectively finding an equivalent positive representation in the modular space:
   $$
   D = x \mod \phi(N) \quad \text{(if } D < 0, \text{ then } D + \phi(N) \text{)}
   $$
   This adjustment ensures that $D$ remains valid under the modular conditions.

3. **RSA Requirements**: In RSA, $D$ must satisfy the equation:
   $$
   D \cdot E \equiv 1 \ (\text{mod} \ \phi(N))
   $$
   If $D$ is negative, it can still satisfy this equation because modular arithmetic is cyclical. The equivalent positive $D$ will yield the same result when used in the equation with $E$.

### Summary:
As long as $D$ is correctly calculated as the modular inverse of $E$ with respect to $\phi(N)$\, flipping it to ensure positivity won't affect the correctness of the RSA algorithm. This is a common practice in modular arithmetic to maintain positive representations while working within the confines of the algorithm.


