import bubbleSort from './src/functions/bubbleSort';
import readArray from './src/functions/readArray';

const array = readArray('teste.txt');

console.time('bubble-sort');

const sortedArray = bubbleSort(array);

console.timeEnd('bubble-sort');