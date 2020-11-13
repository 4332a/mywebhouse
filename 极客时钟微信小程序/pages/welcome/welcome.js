Page({
    data: {
        backgroundStyle: "background: #3197ed;height: 100%;",
    },
    onLoad(option){
        // let style = decodeURIComponent(option.style) == "undefined" ? "background: #3197ed;height: 100%;" : decodeURIComponent(option.style);
        this.setData({
            backgroundStyle: option.style
        })
    },
    onTapJump: function (event) {
        wx.switchTab({
            url: "../index/index",
            success: function () {
                console.log("jump success")
            },
            fail: function () {
                console.log("jump failed")
            },
            complete: function () {
                console.log("jump complete")
            }
        });
    },
    onUnload: function (event) {
        console.log("page is unload")
    },
    onHide: function (event) {
        console.log("page is hide")
    },
    onShareAppMessage: function () {
      console.log("onShareAppMessage is called");
      return {
        "title": "测试页面分享",
        "path": "/pages/welcome/welcome"
      }
    }
})