function solution(left, right) {
    var answer = 0;
    
    for (let i = left; i <= right; i++) { // 범위 설정
        let count = 0;
        for (let j = 0; j <= i; j++) { // 약수 구하기
            if (i % j === 0) { 
                count++
            }
        }
        
        if (count % 2 === 0) { // 약수의 갯수가 짝수라면
            answer += i;
        } else {
            answer -= i; // 약수의 갯수가 홀수라면
        }
    }
    
    return answer;
}