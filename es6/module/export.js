var a = 100;
var b = 200;
var c = 300;
function add() {
    return a + b
}

//export default的使用 加上default相当是一个默认的入口。

export {
    a,
    b as newB, //修改暴露的名字
    add
}

export default c;