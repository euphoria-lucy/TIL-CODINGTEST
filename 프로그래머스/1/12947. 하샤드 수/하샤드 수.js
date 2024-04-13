function solution(x) {
    let num = String(x).split(""); // 자릿수 구하기 변수
    let plus = 0; // 자릿수 더하기 변수
    
    // 자릿수 더하기 
    for (let i = 0; i < num.length; i++) {
        plus += parseInt(num[i]);
    }
    
    // 하샤드 수 구하기
    if (x % plus === 0) {
        return true;
    } else {
        return false;
    }
    
}