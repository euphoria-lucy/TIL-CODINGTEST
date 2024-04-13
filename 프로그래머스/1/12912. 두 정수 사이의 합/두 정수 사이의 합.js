function solution(a, b) {
    var answer = 0;
    
    if (a > b) { // a가 b보다 클 경우
        for (let i = b; i <= a; i++) { // b부터 a까지 합 구하기
            answer += i;
        }
    } else if (a < b) { // b가 a보다 클 경우
        for (let j = a; j <= b; j++) { // a부터 b까지 합 구하기
            answer += j;
        }
    } else if (a === b) { // a와 b가 같을 경우
        return a;
    }
    
    return answer;
}