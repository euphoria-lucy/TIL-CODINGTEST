function solution(n, control) {
    var answer = 0;
    
    for (let i = 0; i < control.length; i++) {
        const index = control[i];
        
        if (index === "w") {
            n += 1;
        } else if (index === "s") {
            n -= 1;
        } else if (index === "d") {
            n += 10;
        } else if (index === "a") {
            n -= 10;
        }
    }
    
    return n;
    
}