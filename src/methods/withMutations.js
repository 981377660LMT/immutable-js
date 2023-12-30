// `withMutations`是Immutable.js库中的一个方法，
// 它用于在一个临时的可变的上下文中对数据进行修改，然后返回一个新的不可变数据。
// 在Immutable.js中，所有的数据都是不可变的，这意味着一旦创建，就不能被修改。
// 但是在某些情况下，我们可能需要对数据进行一系列的修改操作，
// 如果每次修改都返回一个新的数据，那么会产生大量的临时不可变数据，这会消耗大量的内存和CPU资源。
// 为了解决这个问题，Immutable.js提供了`withMutations`方法。
// 这个方法接受一个函数作为参数，这个函数会接收到一个可变的数据作为参数。
// 我们可以在这个函数中对数据进行修改，所有的修改都会直接反映在这个可变的数据上，而不会创建新的数据。
// 当函数执行完毕后，`withMutations`方法会返回一个新的不可变数据，这个数据会包含所有的修改。
// ```javascript
// let data = Immutable.Map({ a: 1, b: 2, c: 3 });
// data = data.withMutations(map => {
//   map.set('a', 2);
//   map.set('b', 1);
// });
// console.log(data.toJS()); // 输出：{ a: 2, b: 1, c: 3 }
// ```
// 在上面的例子中，我们使用`withMutations`方法对`data`进行了修改，修改后的数据被保存在一个新的不可变数据中。

export function withMutations(fn) {
  const mutable = this.asMutable();
  fn(mutable);
  //   withMutations方法首先调用 asMutable方法获取了需要执行操作的 Map。
  // 如果该 Map 对象并未定义asMutable方法会调用 Map 类中定义的__ensureOwner方法，传入新定义的__ownerID，
  // 最终仍然会放回 Map 对象本身。
  // 表面上看起来，withMutations白白绕了一圈，最终仍旧返回 Map 本身，似乎没有什么意义。
  // 但是这一过程中的保证了仅能够通过唯一的__ownerID取得对象的修改权，
  // 阻止了用户通过其他不安全的操作对该对象进行误修改，从而破坏了不可变数据的特性。
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}
