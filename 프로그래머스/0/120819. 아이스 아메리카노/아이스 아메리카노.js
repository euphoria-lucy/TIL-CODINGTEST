function solution(money) {
    var quantity = 0;
    
    while (money >= 5500) {
        money -= 5500;
        quantity++;
    }
    
    return [quantity, money];
    
}