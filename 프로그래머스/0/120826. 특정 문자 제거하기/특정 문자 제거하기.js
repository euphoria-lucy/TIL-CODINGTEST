function solution(my_string, letter) {
    // split : 문자열로 이루어진 배열 반환
    // join : 배열 문자열을 하나의 문자열로 합침
    // split(letter).join("") : letter 특정 문자열을 제거하고, 문자열로 다시 연결함
    return my_string.split(letter).join("");
}