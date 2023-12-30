// 确保数据结构的所有者，如果所有者发生改变，那么会创建一个新的数据结构，
// 否则返回原数据结构。这样可以确保数据结构的不可变性，
// 避免了因为数据结构的改变而引发的问题。
export function asImmutable() {
  return this.__ensureOwner();
}
