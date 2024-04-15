function solution(s) {
    if (/^[0-9]{6}$|^[0-9]{4}$/.test(s)) { // 시작부터 끝까지 숫자로만 구성되었는지 확인
        return true;
    } else {
        return false;
    }
}