function solution(num_list) {
    var answer = 0;

    if (num_list.length >= 11) { // 리스트의 길이가 11 이상인 경우
        
        for (let i = 0; i < num_list.length; i++) {
            answer += num_list[i];
        }
        
        return answer;
        
    } else if (num_list.length <= 10) { // 리스트의 길이가 10 이하인 경우
        
        answer = 1; // 곱셈해야하기 때문에 1로 초기화
        
        for (let i = 0; i < num_list.length; i++) {
            answer *= num_list[i];
        }
        
        return answer;

    }
}