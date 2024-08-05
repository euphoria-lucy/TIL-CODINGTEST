function solution(array, height) {
    let sortN = array.sort((a, b) => a - b); // 작은 키부터 정렬
    let num = 0;
    
    for (let i = 0; i < sortN.length; i++) {
        if (sortN[i] > height) {
            num++;
        }
    }
    
    return num;
}