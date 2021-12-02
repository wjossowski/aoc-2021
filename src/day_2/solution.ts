type Direction = 'forward' | 'up' | 'down'
type RecordEntry = [Direction, number]

const getDetails = (sing: string): RecordEntry => {
  const [lhs, rhs] = sing.split(' ')
  return [lhs as Direction, Number(rhs)]
}

export const solution2_1 = (input: string[]) => {
  let depth = 0
  let distance = 0

  for (const [direction, value] of input.map(getDetails)) {
    if (direction === 'forward') {
      distance += value
    } else if (direction === 'down') {
      depth += value
    } else if (direction === 'up') {
      depth -= value
    }
  }

  return depth * distance
}

export const solution2_2 = (input: string[]) => {
  let depth = 0
  let horizontal = 0
  let aim = 0

  for (const [direction, value] of input.map(getDetails)) {
    if (direction === 'forward') {
      horizontal += value
      depth += aim * value
    } else if (direction === 'down') {
      aim += value
    } else if (direction === 'up') {
      aim -= value
    }
  }

  return depth * horizontal
}
