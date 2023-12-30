import { isOrdered } from '../predicates/isOrdered';
import isArrayLike from './isArrayLike';

// 确保 keyPath 是一个数组或者有序集合，如果不是，就会抛出错误
export default function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== 'string') {
    return keyPath;
  }
  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    'Invalid keyPath: expected Ordered Collection or Array: ' + keyPath
  );
}
