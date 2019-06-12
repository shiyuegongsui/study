
//判断是不是数组
function isArray(val) {
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
