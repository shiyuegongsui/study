<template>
<div></div>
</template>

<script>
export default {
    data() {
        return {
            res: {
                ImgList: []
            }
        }
    },
    methods: {

        //base64转成二进制流
        base64ToBlob(dataurl) {
            let arr = dataurl.split(',');
            let mime = arr[0].match(/:(.*?);/)[1];
            let bstr = atob(arr[1]);
            let n = bstr.length;
            let u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {
                type: mime
            });
        },
        //base64转成文件流
        base64ToFile() {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {
                type: mime
            });
        },
        //选择图片
        chooseImage() {

            // 1、通过wx.chooseImage选择图片
            // 2、通过wx.getLocalImgData转换成base64（安卓不带data:image/jpg;base64,需要兼容，这样子导致无法正确获取图片的格式）
            // 3、通过base64转化成文件流使用formData发送ajax上传到服务器 需要注意配置请求头（'Content-Type': 'multipart/form-data'）

            let that = this;
            wx.chooseImage({
                count: 9,
                sizeType: ['compressed'],
                sourceType: ['album'],
                success(res) {
                    let pArr = [];
                    let index = 0;
                    let localIds = res.localIds;
                    localIds.forEach((e) => {
                        wx.getLocalImgData({
                            localId: e,
                            success: function (res) {
                                index++;
                                var localData = res.localData;
                                if (localData.indexOf('base64,') == -1) {
                                    localData = 'data:image/jpg;base64,' + localData;
                                }
                                let baseDetailImg = localData.split(";base64,");
                                let formData = new FormData();
                                formData.append('fileBase', that.base64ToBlob(localData));
                                formData.append('ossDir', `qingdian/shops/${localStorage.getItem('shopId')}/offers/`);
                                pArr.push(
                                    that.$ajax.post(that.$ApiCommon + "/oss/api/oss/uploadfile", formData, {
                                        headers: {
                                            'Content-Type': 'multipart/form-data'
                                        }
                                    })
                                )
                                if (index == localIds.length) {
                                    Promise.all(pArr).then(arr => {
                                        arr.forEach((e) => {
                                            that.res.ImgList = that.res.ImgList.concat('https://oss.fjdaze.com/' + e.Data);
                                        })
                                    })
                                }
                            },
                        })
                    });

                }
            })
        },
    }
};
</script>

<style lang="scss"></style>
