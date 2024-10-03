# Generate Prime Array
Factors always come in pairs: For any composite number n, if n is divisible by some number a, then there is another number b such that `a * b = n`. For example, for `n = 36`, you have factor pairs like `(2, 18), (3, 12), (4, 9), and (6, 6)`.

Smallest factor in the pair: One of these two factors (a or b) will always be smaller or equal to the square root of n. If both factors were larger than the square root of n, their product would be greater than n—which is impossible. This means if n has a divisor, at least one of its divisors must be less than or equal to √n.

Efficiency: Therefore, if you haven't found any factors by the time you reach the square root of n, you can safely conclude that n is prime. This cuts down the number of checks you need to make significantly, especially for large numbers.

