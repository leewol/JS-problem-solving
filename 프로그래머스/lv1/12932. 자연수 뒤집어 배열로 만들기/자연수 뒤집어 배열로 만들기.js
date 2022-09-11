function solution(n) {
    // 계산 없이
    return String(n).split('').map((el) => Number(el)).sort((a, b) => -1);
}