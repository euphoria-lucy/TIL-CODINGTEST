function solution(t, p) {
    var answer = 0;
    let plength = p.length; // p의 길이
    let slice = [];
    
    // p와 길이가 같도록 문자열 자르기
    for (let i = 0; i <= t.length - plength; i++) {
        slice.push(t.substring(i, i + plength));
    }
    
    // p와 문자열 길이가 같은 배열 값 비교
    for (let j = 0; j < slice.length; j++) {
        if (slice[j] <= p) {
            answer++;
        }
    }

    return answer;
}