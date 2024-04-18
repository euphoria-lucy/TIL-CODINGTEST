function solution(numbers) {
    var answer = [];
    
    for (let i = 0; i < numbers.length; i++) { // 각 원소 인덱스 찾기
        answer.push(numbers[i] * 2); // 원소 인덱스에 2를 곱하여 answer에 값을 넣음
    }  
    
    return answer;
}