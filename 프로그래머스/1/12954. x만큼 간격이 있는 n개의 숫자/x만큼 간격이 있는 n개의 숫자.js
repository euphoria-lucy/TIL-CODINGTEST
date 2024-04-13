function solution(x, n) {
    var answer = [];

    for (let i = 1; i <= n; i++) { // n까지의 인수 구하기
        answer.push(x * i); // x와 인수 곱하여 배열에 삽입
    }
    
    return answer;
}