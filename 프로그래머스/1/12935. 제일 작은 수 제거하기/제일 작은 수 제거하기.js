function solution(arr) {
    let min = Math.min(...arr); // 최소값 찾기
    let answer = arr.filter(items => items !== min); // 최소값을 제외한 값 리턴
    
    if (answer.length <= 1) return [-1]; // 가장 작은 수 제외하고 값이 없으면 -1 리턴
    
    return answer;

}