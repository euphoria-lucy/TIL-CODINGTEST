function solution(numbers) {
    var answer = 0;
    
    numbers.sort((a, b) => a - b); // 오름차순 정렬
    
    for (let i = 0; i <= 9; i++) { // i의 범위를 0부터 9까지의 숫자로 정함
        if (!numbers.includes(i)) { // numbers 배열에서 i가 없을 경우
            answer += i; // 값 더하기
        }
    }
    
    return answer;
}