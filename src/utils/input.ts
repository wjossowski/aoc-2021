import { readFileSync } from 'fs'
import { join } from 'path'

export const parseInput = (dir: string, path: string) => {
  return readFileSync(join(dir, 'assets', path), 'utf-8').split('\n')
}

export const toNumber = (source: string[]) => source.map(x => Number(x))
