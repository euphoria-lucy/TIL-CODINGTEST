function solution(array) {
    var answer = [];
    
    let maxN = Math.max(...array); // 최대값 찾기
    answer.push(maxN);
    
    // 최대값 인덱스 찾기
    for (let i = 0; i < array.length; i++) {
        if (array[i] === maxN) {
            answer.push(i);
        }
    }
    
    return answer;
}