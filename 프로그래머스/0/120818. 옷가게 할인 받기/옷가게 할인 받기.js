function solution(price) {
    var discount = 0;

    if (price >= 500000) { // 50만원 이상
        discount = price * 0.2; // 구매한 옷 가격 - 20%할인
    } else if (price >= 300000) { // 30만원 이상
        discount = price * 0.1; // 구매한 옷 가격 - 10%할인
    } else if (price >= 100000) { // 10만원 이상
        discount = price * 0.05; // 구매한 옷 가격 - 5%할인
    }
    
    return price - Math.ceil(discount); 
}