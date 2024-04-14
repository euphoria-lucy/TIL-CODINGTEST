function solution(phone_number) {

    let back = phone_number.substr(-4, 4); // 전화번호 뒷 4자리 
    // 전화번호 뒷 4자리를 제외한 번호
    let front = phone_number.substring(0, phone_number.length - 4); 
    let star = front.replace(/[0-9]/g, '*'); // 전화번호 앞 번호를 '*'로 변경
    
    return star + back;
}