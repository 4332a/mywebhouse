Page({
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '设置'
    })
    this.setData({
    	workTime: wx.getStorageSync('workTime'),
    	restTime: wx.getStorageSync('restTime')
    })
  },
  changeWorkTime: function(e) {
  	wx.setStorage({
  		key: 'workTime',
  		data: e.detail.value
  	})
  },
  changeRestTime: function(e) {
  	wx.setStorage({
  		key: 'restTime',
  		data: e.detail.value
  	})
  },
  onShareAppMessage: function () {
    console.log("onShareAppMessage is called");
    return {
      "title": "测试页面分享",
      "path": "/pages/setting/setting"
    }
  },
  onTap:function(){
    wx.navigateTo({
      url: '/pages/bej/bej.wxml',
    })
  }
})
