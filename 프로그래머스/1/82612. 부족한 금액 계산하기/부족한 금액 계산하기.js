function solution(price, money, count) {
    let total = 0; // 총 필요한 놀이기구 이용 금액
    
    for (let i = 1; i <= count; i++) {
        total += price * i;
    }
    
    let answer = total - money;
    
    return answer > 0 ? answer : 0;

}