import { join } from 'path';
import { readFileSync } from 'fs';

const readArray = (fileName: string): number[] => {
  return readFileSync(
    join(__dirname, '..', 'data', fileName),
    'utf-8'
  )
    .split('\n')
    .map((value: string) => Number(value));
}

export default readArray;