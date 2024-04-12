function solution(n) {
    
    let pow = Math.sqrt(n); // 제곱근 판별
    
    if (pow % 1 === 0) { // 제곱근의 나머지가 0이면 → 양의 정수
        return Math.pow(pow + 1, 2); 
    } else {
        return -1
    }

}