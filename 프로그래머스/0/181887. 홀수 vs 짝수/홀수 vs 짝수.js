function solution(num_list) {
    let odd = 0; // 홀수 
    let even = 0; // 짝수
    
    for (let i = 1; i <= num_list.length; i++) {
        if (i % 2 === 0) {
            even += num_list[i - 1];
        } else if (i % 2 === 1) {
            odd += num_list[i - 1];
        }
    }
    
    if (even > odd) {
        return even;
    } else if (even < odd) {
        return odd;
    } else {
        return even;
    }

}