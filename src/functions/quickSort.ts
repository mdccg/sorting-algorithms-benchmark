/**
 * @author <https://www.guru99.com/quicksort-in-javascript.html>
 */

function partition(array: number[], left: number, right: number) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      ++i;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      const aux = array[i];
      array[i] = array[j];
      array[j] = aux;
      ++i;
      j--;
    }
  }

  return i;
}

const quickSort = (
  array: number[],
  left: number = 0,
  right: number = array.length - 1
): number[] => {
  if (array.length > 1) {
    const index = partition(array, left, right);

    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }

    if (index < right) {
      quickSort(array, index, right);
    }
  }

  return array;
};

export default quickSort;