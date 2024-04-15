function solution(arr1, arr2) {
    var answer = [[]];
    
    for (let i = 0; i < arr1.length; i++) { // 행에 접근
        answer[i] = [];
        for (let j = 0; j < arr1[i].length; j++) { // 열에 접근
            answer[i].push(arr1[i][j] + arr2[i][j]); // arr1과 arr2의 같은 위치 (i, j)에 있는 요소 더하여 추가
        }
    }
    
    return answer;
}