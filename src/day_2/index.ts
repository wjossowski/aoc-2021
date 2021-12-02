import { parseInput } from '../utils/input'
import { solution2_1, solution2_2 } from './solution'

const input = parseInput(__dirname, 'input.txt')

console.log('Day 2:1 Solution:', solution2_1(input))
console.log('Day 2:2 Solution:', solution2_2(input))
