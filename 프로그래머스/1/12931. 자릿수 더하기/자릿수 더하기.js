function solution(n) {
    let answer = 0;
    n = String(n);
    
    for (let i = 0; i < n.length; i++) {
        answer += parseInt(n[i]);
    }
    
    return answer;
}