function solution(s) {
    var answer = '';
    let wordindex = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            wordindex = 0;
            answer += ' ';
        } else {
            if (wordindex % 2 === 0) {
                answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            wordindex++;
        } 
    }
    
    return answer;
}