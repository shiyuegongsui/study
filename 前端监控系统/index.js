(function () {

    // 声明公共的方法
    var $ = {
        //发送请求
        ajax: function () {
            var options = {
                si: 1, //项目ID 根据URL 自动生成
                // ua: navigator.userAgent, //浏览器信息
                // href: location.href,
                uid: 'userId', //用户ID
                uname: 'userName', //用户名称
            }
            var params = '';
            for (var item in options) {
                params += `&${item}=${encodeURIComponent(options[item])}`
            }
            var image = new Image();
            image.src = 'https://hm.fjdaze.com/1.gif?' + params.substring(1);
        },
    }
    $.ajax();
    //监听所有的点击事件
    document.addEventListener('click', function (e) {
        console.log(e);

        $.ajax();
    }, true);



})();