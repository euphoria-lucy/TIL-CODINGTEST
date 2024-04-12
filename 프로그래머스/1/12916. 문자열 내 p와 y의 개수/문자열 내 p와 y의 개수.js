function solution(s){
    let lowers = s.toLowerCase(); // s의 문자열을 모두 소문자로 변환
    
    // p를 기준으로 lowers의 문자열을 분할한 후, p의 갯수 세기
    let countP = lowers.split('p').length; 
    // y를 기준으로 lowers의 문자열을 분할한 후, y의 갯수 세기
    let countY = lowers.split('y').length;
    
    return countP === countY ? true : false;
}