function solution(absolutes, signs) {
    let sum = 0; // 값을 더하고 뺄 변수 선언
    
    for (let i = 0; i < absolutes.length; i++) { // 인덱스 범위 설정
        if (signs[i] === true) { // signs[i] 값이 양수이면
            sum += absolutes[i]; // absolutes[i] 값 더하기
        } else { // signs[i] 값이 음수이면 
            sum -= absolutes[i]; // absolutes[i] 값 빼기
        }
    }
    
    return sum;
}