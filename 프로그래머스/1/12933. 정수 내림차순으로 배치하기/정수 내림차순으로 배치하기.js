function solution(n) {
    // 문자열로 변경 → 문자열 쪼개기 → 정렬 → 내림차순 → 문자열 합치기
    var answer = n.toString().split("").sort().reverse().join("");
    return Number(answer); // 문자열 → 숫자로 변경 후 리턴
}