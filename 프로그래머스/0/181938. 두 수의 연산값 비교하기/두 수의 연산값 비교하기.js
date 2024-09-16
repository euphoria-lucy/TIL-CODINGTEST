function solution(a, b) {
    let ab = String(a) + String(b);
    let num = 2 * a * b;
    
    return (ab > num) ? Number(ab) : num;
}