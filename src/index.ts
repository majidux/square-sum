function squareSum(numbers: number[]): number {
  return numbers?.reduce((prev: number, curr: number) => prev + curr * curr, 0);
}
