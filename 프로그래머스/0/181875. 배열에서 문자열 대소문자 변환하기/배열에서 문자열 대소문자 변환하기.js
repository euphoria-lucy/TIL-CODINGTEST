function solution(strArr) {
    var answer = [];
    
    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) { // 짝수번째 인덱스일 경우
            answer.push(strArr[i].toLowerCase());
        } else if (i % 2 === 1) { // 홀수번째 인덱스일 경우
            answer.push(strArr[i].toUpperCase());
        }
    }
    
    return answer;
}