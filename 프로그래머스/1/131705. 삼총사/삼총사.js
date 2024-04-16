function solution(number) {
    var answer = 0;
    let sum = 0;
    
    for (let i = 0; i < number.length; i++) { // 첫번째 수
        for (let j = i + 1; j < number.length; j++) { // 두번째 수 (첫번째 수 다음)
            for (let k = j + 1; k < number.length; k++) { // 세번째 수 (두번째 수 다음)
                if (i !== j && i !== k && j !== k) { // 중복되지 않도록
                    if (number[i] + number[j] + number[k] === 0) { // 세 수의 합이 0일 경우
                        answer++;
                    }
                }
            }
        }
    }
    
    return answer;
}