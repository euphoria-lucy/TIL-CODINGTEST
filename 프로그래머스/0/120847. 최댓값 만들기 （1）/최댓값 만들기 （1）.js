function solution(numbers) {
    const num_max = numbers.sort((a, b) => b - a);
    return num_max[0] * num_max[1];
}