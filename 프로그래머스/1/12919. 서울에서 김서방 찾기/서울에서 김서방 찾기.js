function solution(seoul) {
    let name = "Kim";
    let indexNum = 0;
    
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i].indexOf(name) !== -1) { // "Kim"이라는 문자열이 포함되어 있는지 확인
            indexNum = i; // "Kim"이라는 문자열이 포함되어있으면 인덱스 반환
        }
    }
    
    return "김서방은 " + indexNum + "에 있다";
}