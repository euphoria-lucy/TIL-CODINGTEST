function solution(my_string) {
    const num = my_string.replaceAll(/[A-z]/g, "").split("");
    return num.reduce((a, b) => a + Number(b), 0);
}