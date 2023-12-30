// 将 methods 对象中的所有方法（包括 Symbol 类型的属性对应的方法）混入到 ctor 的原型中，
// 这样通过 ctor 创建的所有实例都可以访问到这些方法。


/**
 * Contributes additional methods to a constructor
 */
export default function mixin(ctor, methods) {
  const keyCopier = key => {
    ctor.prototype[key] = methods[key];
  };
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols &&
    Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}
