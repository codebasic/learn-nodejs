// 생성자 상속
function inherit(constructor, parent){
  constructor.prototype = Object.create(parent.prototype, {
    constructor: {
      configurable: true,
      enumerable: true,
      value: constructor,
      writable: true
    }
  });
}

exports.inherit = inherit;
