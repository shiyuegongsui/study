
// export导出
// 导出 export的内容 需要 用大括号包裹着 按需引入
// 可以用 as 设置别名
import { a as newA, newB, add } from "./export.js";
console.log(newA);
console.log(newB);
console.log(add);
//也可以导出整个module    export default 不会导出
import * as obj from "./export.js";
console.log(obj);

// export default 导出

// export default导出的变量名可以与import不用，只要符合命名规范即可
import b from "./export.js";
console.log(b);


// export 和 export default 都导出 以下两种方式

// import c, { a as newA, newB, add } from "./export.js";
import c, * as obj2 from "./export.js";
console.log(c);
console.log(obj2);


