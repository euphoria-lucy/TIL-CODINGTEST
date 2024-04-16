function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    
    d.sort((a, b) => a - b);
    
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        answer++;
        
        if (sum > budget) { // 예산 초과일 경우
            answer--;
        }
    }
    
    return answer;
}