function solution(arr, divisor) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) { // arr의 값이 divisior로 나누어 떨어지는지 확인
            answer.push(arr[i]);
        }
    }
    
    // arr의 값이 divisior로 나누어 떨어지지 않아 answer 배열에 아무것도 들어있지 않은 경우
    if (answer.length === 0) {
        answer.push(-1); // -1 리턴
    }
    
    answer.sort((a, b) => a - b); // 오름차순 정렬

    return answer;
}