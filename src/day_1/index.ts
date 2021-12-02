import { parseInput, toNumber } from '../utils/input'
import { solution1_1, solution1_2 } from './solution'

const input = toNumber(parseInput(__dirname, 'input.txt'))

console.log('Day 1:1 Solution:', solution1_1(input.map(x => Number(x))))
console.log('Day 1:2 Solution:', solution1_2(input.map(x => Number(x))))
