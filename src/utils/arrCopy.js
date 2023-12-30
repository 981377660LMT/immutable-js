// http://jsperf.com/copy-array-inline
// 从原数组的某个位置开始，复制其后的所有元素，然后返回这个新的数组
function arrCopy(arr, offset) {
  offset = offset || 0;
  const len = Math.max(0, arr.length - offset);
  const newArr = new Array(len);
  for (let ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }
  return newArr;
}

console.log(arrCopy([1,2,3,4,5,6,7,8,9,10], 3))
