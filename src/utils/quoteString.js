/**
 * Converts a value to a string, adding quotes if a string was provided.
 * 将输入的值转换为字符串，如果输入的值是字符串，则在其两侧添加引号。
 */
export default function quoteString(value) {
  try {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}
