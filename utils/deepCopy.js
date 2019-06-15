
//判断是不是数组
var a = [];

function isArray(val) {

    // 方法一： console.log([] instanceof Array)  //返回true
    // 方法2二： console.log([].constructor == Array);  //true
    // instanceof constructor
    // 示例坑    
    // https://www.cnblogs.com/laiqun/p/5645801.html
    // https://www.cnblogs.com/lingdu87/p/9152806.html
    // 注意：
    // 使用instaceof和construcor,被判断的array必须是在当前页面声明的！比如，一个页面（父页面）有一个框架，框架中引用了一个页面（子页面），
    // 在子页面中声明了一个array，并将其赋值给父页面的一个变量，这时判断该变量，Array ==object.constructor;会返回false；
    // 原因：
    // 1、array属于引用型数据，在传递过程中，仅仅是引用地址的传递。
    // 2、每个页面的Array原生对象所引用的地址是不一样的，在子页面声明的array，所对应的构造函数，是子页面的Array对象；父页面来进行判断，使用的Array并不等于子页面的Array。
    // 方法三：
    // es6中可以使用
    // Array.isArray

    // 安全的方法：
    return Object.prototype.toString.call(val) === '[object Array]';
}
//判断是不是对象
function isObject(val) {
    return typeof val === 'object' && val !== null;
}

//深拷贝
function deepCopy(obj2) {
    /**
     * 把一个对象递归拷贝给另外一个对象
     * 源对象与拷贝后的对象没有引用关系
     */
    var obj = isArray(obj2) ? [] : {};
    // 如果没有判断是数组的话 
    // 传入数组 [a,b] 会转换成 {0:a,1:b}
    for (var property in obj2) {
        // 如果当前拷贝的数据还是一个对象的话，那么继续调用
        // deepCopy 进行二次拷贝
        // 递归
        if (isObject(obj2[property])) {
            obj[property] = deepCopy(obj2[property]);
        } else {
            obj[property] = obj2[property];
        }
    }
    return obj;
}

//深度合并
function deepMerge(obj1, obj2) {
    var obj = deepCopy(obj1);
    for (var property in obj2) {
        var val = obj[property];
        var val2 = obj2[property];
        if (isObject(val) && isObject(val2)) {
            obj[property] = deepMerge(val, val2);
        } else if (isObject(val2)) {
            obj[property] = deepCopy(val2);
        } else {
            obj[property] = val2;
        }
    }

    return obj;
}



export default {
    isArray,
    isObject,
    deepCopy,
    deepMerge
};
