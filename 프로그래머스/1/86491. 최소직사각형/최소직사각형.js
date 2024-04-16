function solution(sizes) {
    let wmax = 0;
    let hmax = 0;
    
    // 배열을 순회하며 길이 조정
    sizes.forEach(([w, h]) => {
        if (w < h) { // 세로가 가로보다 크면
            [w, h] = [h, w]; // 가로, 세로 교환
        }
        
        wmax = Math.max(wmax, w);
        hmax = Math.max(hmax, h);
        
    });
    
    return wmax * hmax;
}