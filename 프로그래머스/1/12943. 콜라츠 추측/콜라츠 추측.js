function solution(num) {
    var answer = 0;
    
    while (num != 1) {
        if (num % 2 === 0) { // 짝수라면
            num /= 2;
        } else { // 홀수라면
            num = (num * 3) + 1;
        }
        answer++; // 반복횟수 1 더하기
    }
    
    if (answer >= 500) { // 500번 반복이 끝나지 않을 경우
        return -1;
    } else {
        return answer;
    }
    
}