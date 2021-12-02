import { parseInput, toNumber } from '../utils/input'
import { solution1_1, solution1_2 } from './solution'

const input = toNumber(parseInput(__dirname, 'test.txt'))

describe('Day 1 Challenge', () => {
  describe('First task', () => {
    it('Works for test data', () => {
      expect(solution1_1(input)).toEqual(7)
    })
  })

  describe('Second task', () => {
    it('Works for test data', () => {
      expect(solution1_2(input)).toEqual(5)
    })
  })
})
