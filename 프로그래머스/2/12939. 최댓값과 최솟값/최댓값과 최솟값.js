function solution(s) {
    var answer = s.split(" ");
    let min = Math.min(...answer);
    let max = Math.max(...answer);
    
    return min + " " + max;
}