/**
 * @author <https://stackabuse.com/merge-sort-in-javascript>
 */

const merge = (left: number[], right: number[]): number[] => {
  let array: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift() as number);
    } else {
      array.push(right.shift() as number);
    }
  }

  return [...array, ...left, ...right];
};

const mergeSort = (array: number[]): number[] => {
  const half = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
};

export default mergeSort;