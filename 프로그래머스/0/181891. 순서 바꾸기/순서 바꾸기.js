function solution(num_list, n) {
    let answer1 = num_list.slice(n, n.length);
    let answer2 = num_list.slice(0, n);
    
    for (let i = 0; i < answer2.length; i++) {
        answer1.push(answer2[i]);
    }
    
    return answer1;
}