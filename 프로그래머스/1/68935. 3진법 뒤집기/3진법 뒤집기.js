function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(""), 3);
    // parseInt( ,3) : 3진수로 변환된 수를 다시 10진수로 변환 
}