// `wasAltered`是Immutable.js库中的一个方法。它用于检查在使用`withMutations`方法进行批量修改操作后，
// 数据是否发生了变化。
// 在Immutable.js中，`withMutations`方法可以让我们在一个临时的可变的上下文中对数据进行修改，
// 然后返回一个新的不可变数据。在这个过程中，`wasAltered`方法就是用来检查数据是否真的被修改过。
//
// 如果数据被修改过，`wasAltered`方法会返回`true`，否则返回`false`。
// ```javascript
// let data = Immutable.Map({ a: 1, b: 2, c: 3 });
// data = data.withMutations(map => {
//   map.set('a', 2);
//   map.set('b', 1);
// });
// console.log(data.wasAltered()); // 输出：true
// ```
// 在上面的例子中，我们修改了`data`中的数据，所以`wasAltered`方法返回`true`。
export function wasAltered() {
  return this.__altered;
}
