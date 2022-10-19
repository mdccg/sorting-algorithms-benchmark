import readArray from './src/functions/readArray';
import bubbleSort from './src/functions/bubbleSort';
import selectionSort from './src/functions/selectionSort';
import insertionSort from './src/functions/insertionSort';
import mergeSort from './src/functions/mergeSort';
import quickSort from './src/functions/quickSort';
import heapSort from './src/functions/heapSort';

const sortingMethods = [
  // bubbleSort,
  // selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort
];

let entry: number | undefined = 3;
let loop: number | undefined = 3;

for (const sortingMethod of sortingMethods) {
  for (let i = entry || 1; i <= 4; ++i) {
    const fileName = `entrada${i}.txt`;
    
    for (let j = loop || 1; j <= 5; ++j) {
      const label = `${sortingMethod.name}, entry No. ${i}, loop No. ${j}`;
      const array = readArray(fileName);
      
      console.time(label);
      sortingMethod(array);
      console.timeEnd(label);
      console.log(new Date().toLocaleTimeString());
      console.log('-'.repeat(label.length));
    }

    loop = undefined;
  }

  entry = undefined;
}