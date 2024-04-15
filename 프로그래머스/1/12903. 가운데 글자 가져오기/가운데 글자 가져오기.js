function solution(s) {
    let start = Math.round(s.length / 2);
    
    if (s.length % 2 === 0) { // 길이가 짝수라면
        return s.slice(start - 1, start + 1);
    } else { // 길이가 홀수라면
        return s.slice(start - 1, start);
    }
    
}