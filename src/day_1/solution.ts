export const solution1_1 = (input: number[]) =>
  input.reduce((ret, val, i, arr) => {
    if (i === 0) return 0
    if (arr[i - 1] < val) return ret + 1
    return ret
  }, 0)

export const solution1_2 = (input: number[]) =>
  input.reduce((ret, _val, i, arr) => {
    if ([0, 1, 2].includes(i)) return 0
    if (arr[i - 3] < arr[i]) return ret + 1
    return ret
  }, 0)
