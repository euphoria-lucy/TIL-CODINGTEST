function solution(array) {
    let center = Math.floor(array.length / 2); // 중앙값
    let sortN = array.sort((a, b) => a - b); // 정렬
    return sortN[center];
}