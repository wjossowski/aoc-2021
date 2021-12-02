import { parseInput } from '../utils/input'
import { solution2_1, solution2_2 } from './solution'

const input = parseInput(__dirname, 'test.txt')

describe('Day 2 Challenge', () => {
  describe('First task', () => {
    it('Works for test data', () => {
      expect(solution2_1(input)).toEqual(150)
    })
  })

  describe('Second task', () => {
    it('Works for test data', () => {
      expect(solution2_2(input)).toEqual(900)
    })
  })
})
