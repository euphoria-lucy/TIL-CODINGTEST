function solution(myString, pat) {
    const myString_lower = myString.toLowerCase();
    const pat_lower = pat.toLowerCase();
    
    if (myString_lower.includes(pat_lower)) {
        return 1;
    } else {
        return 0;
    }
    
}