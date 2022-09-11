function solution(n) {
    for (let i=1; i < n**0.5; i++) {
        if (n % i === 1) return i;
    }
    return n - 1;
}