function solution(n, m) {
    var answer = [];
    let gcd = 0; // 최대공약수
    let lcm = 0; // 최소공배수
    
    // 최대공약수 구하기
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }
    
    lcm = n * m / gcd; // 최대공배수 구하기
    
    answer.push(gcd);
    answer.push(lcm);
    
    return answer;
}