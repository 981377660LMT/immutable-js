import { isImmutable } from '../predicates/isImmutable';
import isPlainObj from './isPlainObj';

/**
 * 判断传入的值是否是一个可能的持久化数据结构
 * @param {any} value - 需要判断的值
 * @return {boolean} - 如果值是一个可能的持久化数据结构则返回 true，否则返回 false
 */
export default function isDataStructure(value) {
  // 判断值是否是对象
  // 如果是对象，进一步判断是否是 Immutable.js 的数据结构，是否是数组，或者是否是普通的对象
  // 如果满足以上条件中的任何一个，返回 true
  // 否则返回 false
  return (
    typeof value === 'object' &&
    (isImmutable(value) || Array.isArray(value) || isPlainObj(value))
  );
}
